package service

import (
	"bytes"
	"context"
	"fmt"
	"gin-vue-devops/global"
	"gin-vue-devops/model"
	"gin-vue-devops/model/request"
	"gin-vue-devops/model/response"
	"gin-vue-devops/utils"
	"github.com/gin-gonic/gin"
	"go.uber.org/zap"
	"io"
	v1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

//@function: CreateK8sPods
//@description: 创建K8sPods记录
//@param: k8sPods model.K8sPods
//@return: err error

func CreateK8sPods(k8sPods model.K8sPods) (err error) {
	err = global.GVA_DB.Create(&k8sPods).Error
	return err
}

//@function: DeleteK8sPods
//@description: 删除K8sPods记录
//@param: k8sPods model.K8sPods
//@return: err error

func DeleteK8sPods(k8sPods model.K8sPods) (err error) {
	err = global.GVA_DB.Delete(k8sPods).Error
	return err
}

//@function: DeleteK8sPodsByIds
//@description: 批量删除K8sPods记录
//@param: ids request.IdsReq
//@return: err error

func DeleteK8sPodsByIds(ids request.IdsReq) (err error) {
	err = global.GVA_DB.Delete(&[]model.K8sPods{}, "id in ?", ids.Ids).Error
	return err
}

//@function: UpdateK8sPods
//@description: 更新K8sPods记录
//@param: k8sPods *model.K8sPods
//@return: err error

func UpdateK8sPods(k8sPods model.K8sPods) (err error) {
	err = global.GVA_DB.Save(&k8sPods).Error
	return err
}

//@function: GetK8sPods
//@description: 获取Pod日志
//@param: id uint
//@return: err error, k8sPods model.K8sPods
func GetPodLog(k8sConfig string, k8sPods model.K8sPods) (log string, err error) {
	// 初始化k8s客户端
	clientSet, _ := utils.GetK8sClient(k8sConfig)
	podLogOpts := v1.PodLogOptions{
		//Follow: true, // 类似kubectl logs -f命令
		TailLines: &k8sPods.Line,
	}
	req := clientSet.CoreV1().Pods(k8sPods.NameSpace).GetLogs(k8sPods.PodName, &podLogOpts)
	podLogs, err := req.Stream(context.TODO())
	if err != nil {
		fmt.Println(err.Error())
	}
	defer podLogs.Close()

	buf := new(bytes.Buffer)
	_, err = io.Copy(buf, podLogs)
	if err != nil {
		fmt.Println("err: ", err.Error())
	}
	log = buf.String()
	return log,nil
}

//@function: GetK8sPodsInfoList
//@description: 分页获取K8sPod列表
//@param: info request.K8sPodsSearch
//@return: err error, list []*model.K8sPods, total int64
func GetK8sPodsInfoList(k8sConfig, namespace string) (err error, list []*model.K8sPods, total int64) {
	// 初始化k8s客户端
	clientSet, _ := utils.GetK8sClient(k8sConfig)
	podList, err := clientSet.CoreV1().Pods(namespace).List(context.TODO(), metav1.ListOptions{})
	var c *gin.Context
	if err != nil {
		global.GVA_LOG.Error("获取pod失败", zap.Any("err", err))
		response.FailWithMessage("获取pod失败", c)
	}

	for key, pod := range podList.Items {
		var startTime string
		var restartCount int32
		// 必须判断值是否为nil,否则会导致panic(client-go库bug),当Pod没有该字段值(如Pending状态)返回默认零值
		if pod.Status.StartTime != nil {
			startTime = pod.Status.StartTime.Format("2006-01-02 15:04:05")
		} else {
			startTime = ""
		}
		if pod.Status.ContainerStatuses != nil {
			restartCount = pod.Status.ContainerStatuses[0].RestartCount
		}
		res := &model.K8sPods{
			ID:           key,
			PodName:      pod.Name,
			PodIP:        pod.Status.PodIP,
			HostIP:       pod.Status.HostIP,
			Status:       string(pod.Status.Phase),
			StartTime:    startTime,
			RestartCount: restartCount,
		}
		list = append(list, res)
	}
	total = int64(len(list))
	return nil, list, total
}

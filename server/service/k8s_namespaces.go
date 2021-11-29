package service

import (
	"context"
	"fmt"
	"gin-vue-devops/global"
	"gin-vue-devops/model"
	"gin-vue-devops/model/request"
	"gin-vue-devops/utils"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

//@function: CreateK8sNamespaces
//@description: 创建K8sNamespaces记录
//@param: k8sNamespaces model.K8sNamespaces
//@return: err error

func CreateK8sNamespaces(k8sNamespaces model.K8sNamespaces) (err error) {
	err = global.GVA_DB.Create(&k8sNamespaces).Error
	return err
}

//@function: DeleteK8sNamespaces
//@description: 删除K8sNamespaces记录
//@param: k8sNamespaces model.K8sNamespaces
//@return: err error

func DeleteK8sNamespaces(k8sNamespaces model.K8sNamespaces) (err error) {
	err = global.GVA_DB.Delete(k8sNamespaces).Error
	return err
}

//@function: DeleteK8sNamespacesByIds
//@description: 批量删除K8sNamespaces记录
//@param: ids request.IdsReq
//@return: err error

func DeleteK8sNamespacesByIds(ids request.IdsReq) (err error) {
	err = global.GVA_DB.Delete(&[]model.K8sNamespaces{},"id in ?",ids.Ids).Error
	return err
}

//@function: UpdateK8sNamespaces
//@description: 更新K8sNamespaces记录
//@param: k8sNamespaces *model.K8sNamespaces
//@return: err error

func UpdateK8sNamespaces(k8sNamespaces model.K8sNamespaces) (err error) {
	err = global.GVA_DB.Save(&k8sNamespaces).Error
	return err
}

//@function: GetK8sNamespaces
//@description: 根据id获取K8sNamespaces记录
//@param: id uint
//@return: err error, k8sNamespaces model.K8sNamespaces

func GetK8sNamespaces(id uint) (err error, k8sNamespaces model.K8sNamespaces) {
	err = global.GVA_DB.Where("id = ?", id).First(&k8sNamespaces).Error
	return
}

//@function: GetK8sNamespacesInfoList
//@description: 分页获取K8sNamespaces
//@param: info request.K8sNamespacesSearch
//@return: err error, list []*model.K8sNamespaces, total int64

func GetK8sNamespacesInfoList(k8sConf string) (err error, list []*model.K8sNamespaces, total int64) {
	// 初始化k8s客户端
	clientset, err := utils.GetK8sClient(k8sConf)
	if err != nil {
		fmt.Println("初始化k8s客户端失败: ", err.Error())
	}

	// 获取所有Namespaces
	namespaces, err := clientset.CoreV1().Namespaces().List(context.TODO(), metav1.ListOptions{})
	if err != nil {
		fmt.Println("获取namespace失败: ", err.Error())
	}
	for key, ns := range namespaces.Items {
		creatTime := ns.CreationTimestamp.Time
		// 将time.Time类型转成指定时间格式
		formatTime := creatTime.Format("2006-01-02 15:04:05")
		res := &model.K8sNamespaces{
			ID:         key,
			Namespace:  ns.Name,
			Status:     string(ns.Status.Phase),
			CreateTime: formatTime,
		}
		list = append(list, res)
	}
	total = int64(len(list))
	return nil, list, total
}
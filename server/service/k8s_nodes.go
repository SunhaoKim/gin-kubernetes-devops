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

//@function: CreateK8sNodes
//@description: 创建K8sNodes记录
//@param: k8sNodes model.K8sNodes
//@return: err error
func CreateK8sNodes(k8sNodes model.K8sNodes) (err error) {
	err = global.GVA_DB.Create(&k8sNodes).Error
	return err
}

//@function: DeleteK8sNodes
//@description: 删除K8sNodes记录
//@param: k8sNodes model.K8sNodes
//@return: err error
func DeleteK8sNodes(k8sNodes model.K8sNodes) (err error) {
	err = global.GVA_DB.Delete(k8sNodes).Error
	return err
}

//@function: DeleteK8sNodesByIds
//@description: 批量删除K8sNodes记录
//@param: ids request.IdsReq
//@return: err error
func DeleteK8sNodesByIds(ids request.IdsReq) (err error) {
	err = global.GVA_DB.Delete(&[]model.K8sNodes{}, "id in ?", ids.Ids).Error
	return err
}

//@function: UpdateK8sNodes
//@description: 更新K8sNodes记录
//@param: k8sNodes *model.K8sNodes
//@return: err error
func UpdateK8sNodes(k8sNodes model.K8sNodes) (err error) {
	err = global.GVA_DB.Save(&k8sNodes).Error
	return err
}

//@function: GetK8sNodes
//@description: 根据id获取K8sNodes记录
//@param: id uint
//@return: err error, k8sNodes model.K8sNodes
func GetK8sNodes(id uint) (err error, k8sNodes model.K8sNodes) {
	err = global.GVA_DB.Where("id = ?", id).First(&k8sNodes).Error
	return
}

//@function: GetK8sNodesInfoList
//@description: 分页获取K8sNodes列表
//@param: info request.K8sNodesSearch
//@return: list []*model.K8sNodes, total int64, err error
func GetK8sNodesInfoList(k8sConf string) (list []*model.K8sNodes, total int64, err error) {
	// 初始化k8s客户端
	clientset, err := utils.GetK8sClient(k8sConf)
	if err != nil {
		fmt.Println("初始化k8s客户端失败: ", err)
	}
	// 获取所有节点
	nodes, err := clientset.CoreV1().Nodes().List(context.TODO(), metav1.ListOptions{})
	if err != nil {
		fmt.Println("获取节点失败: ", err)
	}
	for key, node := range nodes.Items {
		creatTime := node.CreationTimestamp.Time
		// 将time.Time类型转成指定时间格式
		formatTime := creatTime.Format("2006-01-02 15:04:05")
		// 判断节点是否存在该key,存在则为master,反之为node
		var role string
		if _, ok := node.Labels["node-role.kubernetes.io/master"]; ok {
			role = "master"
		} else {
			role = "node"
		}
		// 获取节点内存和cpu资源
		nodeMemory := node.Status.Capacity.Memory().Value()/1024/1024/1024 + 1
		resource := fmt.Sprintf("%sCore %dGB", node.Status.Capacity.Cpu().String(), nodeMemory)
		res := &model.K8sNodes{
			ID:         uint(key),
			NodeName:   node.Name,
			Version:    node.Status.NodeInfo.KubeletVersion,
			Status:     string(node.Status.Conditions[len(node.Status.Conditions)-1].Type),
			IP:         node.Status.Addresses[0].Address,
			Resource:   resource,
			Roles:      role,
			CreateTime: formatTime,
		}
		/*		for key, value := range node.Labels {
				fmt.Println("Key:",key, "Value:",value)
			}*/
		list = append(list, res)
	}
	total = int64(len(list))
	return list, total, nil
}

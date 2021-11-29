package v1

import (
	"fmt"
	"gin-vue-devops/global"
	"gin-vue-devops/model"
	"gin-vue-devops/model/request"
	"gin-vue-devops/model/response"
	"gin-vue-devops/service"
	"github.com/gin-gonic/gin"
	"go.uber.org/zap"
	_ "k8s.io/api/core/v1"
)

// @Tags K8sPods
// @Summary 创建K8sPods
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.K8sPods true "创建K8sPods"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"获取成功"}"
// @Router /k8sPods/createK8sPods [post]
func CreateK8sPods(c *gin.Context) {
	var k8sPods model.K8sPods
	_ = c.ShouldBindJSON(&k8sPods)
	if err := service.CreateK8sPods(k8sPods); err != nil {
		global.GVA_LOG.Error("创建失败!", zap.Any("err", err))
		response.FailWithMessage("创建失败", c)
	} else {
		response.OkWithMessage("创建成功", c)
	}
}

// @Tags K8sPods
// @Summary 删除K8sPods
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.K8sPods true "删除K8sPods"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"删除成功"}"
// @Router /k8sPods/deleteK8sPods [delete]
func DeleteK8sPods(c *gin.Context) {
	var k8sPods model.K8sPods
	_ = c.ShouldBindJSON(&k8sPods)
	if err := service.DeleteK8sPods(k8sPods); err != nil {
		global.GVA_LOG.Error("删除失败!", zap.Any("err", err))
		response.FailWithMessage("删除失败", c)
	} else {
		response.OkWithMessage("删除成功", c)
	}
}

// @Tags K8sPods
// @Summary 批量删除K8sPods
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body request.IdsReq true "批量删除K8sPods"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"批量删除成功"}"
// @Router /k8sPods/deleteK8sPodsByIds [delete]
func DeleteK8sPodsByIds(c *gin.Context) {
	var IDS request.IdsReq
	_ = c.ShouldBindJSON(&IDS)
	if err := service.DeleteK8sPodsByIds(IDS); err != nil {
		global.GVA_LOG.Error("批量删除失败!", zap.Any("err", err))
		response.FailWithMessage("批量删除失败", c)
	} else {
		response.OkWithMessage("批量删除成功", c)
	}
}

// @Tags K8sPods
// @Summary 更新K8sPods
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.K8sPods true "更新K8sPods"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"更新成功"}"
// @Router /k8sPods/updateK8sPods [put]
func UpdateK8sPods(c *gin.Context) {
	var k8sPods model.K8sPods
	_ = c.ShouldBindJSON(&k8sPods)
	if err := service.UpdateK8sPods(k8sPods); err != nil {
		global.GVA_LOG.Error("更新失败!", zap.Any("err", err))
		response.FailWithMessage("更新失败", c)
	} else {
		response.OkWithMessage("更新成功", c)
	}
}

// @Tags K8sPods
// @Summary 获取pod日志
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param namespace query string true "命名空间" default(default)
// @Param podName query string true "容器名称"
// @Param line query uint true "日志行数"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"获取pod日志成功"}"
// @Router /k8sPods/getPodLog [get]
func GetPodLog(c *gin.Context) {
	// 获取指定ClusterID的kubeconfig
	kubeConfig, _ := ClusterID(c)
	var k8sPods model.K8sPods
	err := c.ShouldBindQuery(&k8sPods)
	if err != nil {
		fmt.Println("绑定查询参数失败: ", err.Error())
	}
	if rek8sPods, err := service.GetPodLog(kubeConfig, k8sPods); err != nil {
		global.GVA_LOG.Error("获取pod日志失败", zap.Any("err", err))
		response.FailWithMessage("获取pod日志失败", c)
	} else {
		response.OkWithData(gin.H{"rek8sPods": rek8sPods}, c)
	}
}

// @Tags K8sPods
// @Summary 分页获取K8sPods列表
// @Description 默认获取集群ID为1的所有namespace的容器,获取指定集群的namespace的容器接口:/k8sPods/getK8sPodsList?clusterID={int}&namespace={string}
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param clusterID query uint true "集群ID" default(1)
// @Param namespace query string true "命名空间"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"获取成功"}"
// @Router /k8sPods/getK8sPodsList [get]
func GetK8sPodsList(c *gin.Context) {
	// 指定Cluster
	kubeConfig, _ := ClusterID(c)
	var pageInfo request.K8sPodsSearch
	if err := c.ShouldBindQuery(&pageInfo); err != nil {
		fmt.Println("绑定查询失败: ", err.Error())
	}
	namespace := c.Query("namespace")
	if err, list, total := service.GetK8sPodsInfoList(kubeConfig, namespace); err != nil {
		global.GVA_LOG.Error("获取pod失败", zap.Any("err", err))
		response.FailWithMessage("获取pod失败", c)
	} else {
		response.OkWithDetailed(response.PageResult{
			List:     list,
			Total:    total,
			Page:     pageInfo.Page,
			PageSize: pageInfo.PageSize,
		}, "获取pod成功", c)
	}
}

// @Tags K8sPods
// @Summary 进入容器终端
// @Description 调用后端接口http://127.0.0.1:8888/container/execContainer;打开前端web/src/view/kubernetes/container/terminal.html文件
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param namespace query string true "命名空间"
// @Param podName query string true "Pod名称"
// @Param containerName query string true "容器名称"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"进入容器终端"}"
// @Router /k8sPods/execPod [get]
func ExecContainer(c *gin.Context) {
	// 指定Cluster的kubeconfig
    kubeConfig, _ := ClusterID(c)
	if err := service.ExecContainer(kubeConfig); err != nil {
		global.GVA_LOG.Error("进入容器终端失败", zap.Any("err:", err))
		response.FailWithMessage("进入容器终端失败", c)
	} else {
		response.OkWithMessage("进入容器终端成功", c)
	}
}

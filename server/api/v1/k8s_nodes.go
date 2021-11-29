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
)

// @Tags K8sNodes
// @Summary 创建K8sNodes
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.K8sNodes true "创建K8sNodes"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"获取成功"}"
// @Router /k8sNodes/createK8sNodes [post]
func CreateK8sNodes(c *gin.Context) {
	var k8sNodes model.K8sNodes
	_ = c.ShouldBindJSON(&k8sNodes)
	if err := service.CreateK8sNodes(k8sNodes); err != nil {
        global.GVA_LOG.Error("创建失败!", zap.Any("err", err))
		response.FailWithMessage("创建失败", c)
	} else {
		response.OkWithMessage("创建成功", c)
	}
}

// @Tags K8sNodes
// @Summary 删除K8sNodes
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.K8sNodes true "删除K8sNodes"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"删除成功"}"
// @Router /k8sNodes/deleteK8sNodes [delete]
func DeleteK8sNodes(c *gin.Context) {
	var k8sNodes model.K8sNodes
	_ = c.ShouldBindJSON(&k8sNodes)
	if err := service.DeleteK8sNodes(k8sNodes); err != nil {
        global.GVA_LOG.Error("删除失败!", zap.Any("err", err))
		response.FailWithMessage("删除失败", c)
	} else {
		response.OkWithMessage("删除成功", c)
	}
}

// @Tags K8sNodes
// @Summary 批量删除K8sNodes
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body request.IdsReq true "批量删除K8sNodes"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"批量删除成功"}"
// @Router /k8sNodes/deleteK8sNodesByIds [delete]
func DeleteK8sNodesByIds(c *gin.Context) {
	var IDS request.IdsReq
    _ = c.ShouldBindJSON(&IDS)
	if err := service.DeleteK8sNodesByIds(IDS); err != nil {
        global.GVA_LOG.Error("批量删除失败!", zap.Any("err", err))
		response.FailWithMessage("批量删除失败", c)
	} else {
		response.OkWithMessage("批量删除成功", c)
	}
}

// @Tags K8sNodes
// @Summary 更新K8sNodes
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.K8sNodes true "更新K8sNodes"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"更新成功"}"
// @Router /k8sNodes/updateK8sNodes [put]
func UpdateK8sNodes(c *gin.Context) {
	var k8sNodes model.K8sNodes
	_ = c.ShouldBindJSON(&k8sNodes)
	if err := service.UpdateK8sNodes(k8sNodes); err != nil {
        global.GVA_LOG.Error("更新失败!", zap.Any("err", err))
		response.FailWithMessage("更新失败", c)
	} else {
		response.OkWithMessage("更新成功", c)
	}
}

// @Tags K8sNodes
// @Summary 用id查询K8sNodes
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.K8sNodes true "用id查询K8sNodes"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"查询成功"}"
// @Router /k8sNodes/findK8sNodes [get]
func FindK8sNodes(c *gin.Context) {
	var k8sNodes model.K8sNodes
	_ = c.ShouldBindQuery(&k8sNodes)
	if err, rek8sNodes := service.GetK8sNodes(k8sNodes.ID); err != nil {
        global.GVA_LOG.Error("查询失败!", zap.Any("err", err))
		response.FailWithMessage("查询失败", c)
	} else {
		response.OkWithData(gin.H{"rek8sNodes": rek8sNodes}, c)
	}
}

// @Tags K8sNodes
// @Summary 分页获取K8sNodes列表
// @Description 默认获取集群ID为1的节点，获取指定集群的节点接口：/k8sNodes/getK8sNodesList?clusterID={int}
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param clusterID query uint true "集群ID" default(1)
// @Success 200 {string} string "{"success":true,"data":{},"msg":"获取成功"}"
// @Router /k8sNodes/getK8sNodesList [get]
func GetK8sNodesList(c *gin.Context) {
	kubeConfig, err := ClusterID(c)
	if err != nil{
		fmt.Println("获取kubeConfig失败: ", err.Error())
	}
	var pageInfo request.K8sNodesSearch
	if err := c.ShouldBindQuery(&pageInfo); err != nil {
		fmt.Println("绑定查询失败: ", err.Error())
	}
	if list, total, err := service.GetK8sNodesInfoList(kubeConfig); err != nil {
	    global.GVA_LOG.Error("获取节点失败", zap.Any("获取节点失败", err))
        response.FailWithMessage("获取节点失败", c)
    } else {
        response.OkWithDetailed(response.PageResult{
            List:     list,
            Total:    total,
            Page:     pageInfo.Page,
            PageSize: pageInfo.PageSize,
        }, "获取节点成功", c)
    }
}

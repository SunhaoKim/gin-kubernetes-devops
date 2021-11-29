package router

import (
	"gin-vue-devops/api/v1"
	"gin-vue-devops/middleware"
	"github.com/gin-gonic/gin"
)

func InitK8sNodesRouter(Router *gin.RouterGroup) {
	K8sNodesRouter := Router.Group("k8sNodes").Use(middleware.JWTAuth()).Use(middleware.CasbinHandler())
	{
		K8sNodesRouter.POST("createK8sNodes", v1.CreateK8sNodes)   // 新建K8sNodes
		K8sNodesRouter.DELETE("deleteK8sNodes", v1.DeleteK8sNodes) // 删除K8sNodes
		K8sNodesRouter.DELETE("deleteK8sNodesByIds", v1.DeleteK8sNodesByIds) // 批量删除K8sNodes
		K8sNodesRouter.PUT("updateK8sNodes", v1.UpdateK8sNodes)    // 更新K8sNodes
		K8sNodesRouter.GET("findK8sNodes", v1.FindK8sNodes)        // 根据ID获取K8sNodes
		K8sNodesRouter.GET("getK8sNodesList", v1.GetK8sNodesList)  // 获取K8sNodes列表
	}
}

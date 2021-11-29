package router

import (
	v1 "gin-vue-devops/api/v1"
	"gin-vue-devops/middleware"
	"github.com/gin-gonic/gin"
)

func InitK8sPodsRouter(Router *gin.RouterGroup) {
	K8sPodsRouter := Router.Group("k8sPods").Use(middleware.JWTAuth()).Use(middleware.CasbinHandler())
	{
		K8sPodsRouter.POST("createK8sPods", v1.CreateK8sPods)             // 新建K8sPods
		K8sPodsRouter.DELETE("deleteK8sPods", v1.DeleteK8sPods)           // 删除K8sPods
		K8sPodsRouter.DELETE("deleteK8sPodsByIds", v1.DeleteK8sPodsByIds) // 批量删除K8sPods
		K8sPodsRouter.PUT("updateK8sPods", v1.UpdateK8sPods)              // 更新K8sPods
		K8sPodsRouter.GET("getPodLog", v1.GetPodLog)                      // 获取Pod日志
		K8sPodsRouter.GET("getK8sPodsList", v1.GetK8sPodsList)           // 获取K8sPods列表
	}
}

func InitK8sContainer(Router *gin.RouterGroup) {
	containerRouter := Router.Group("container")
	{
		containerRouter.GET("execContainer", v1.ExecContainer)      // 进入container终端
	}
}

package v1

import (
	"gin-vue-devops/global"
	"gin-vue-devops/model/response"
	"gin-vue-devops/service"
	"github.com/gin-gonic/gin"
	"go.uber.org/zap"
	"strconv"
)

// 公共方法, 获取指定k8s集群的kubeconfig
func ClusterID(c *gin.Context) (string, error) {
	clusterID := c.DefaultQuery("clusterID", "1")
	clusterIDuint, err := strconv.ParseUint(clusterID, 10, 32)
	cluster,err := service.GetK8sCluster(uint(clusterIDuint))
	if err != nil {
		global.GVA_LOG.Error("获取集群失败", zap.Any("err", err))
		response.FailWithMessage("获取集群失败", c)
	}
	return cluster.KubeConfig, nil
}

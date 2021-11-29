package utils

import (
	"fmt"
	"gin-vue-devops/global"
	"gin-vue-devops/model/response"
	"github.com/gin-gonic/gin"
	"go.uber.org/zap"
	_ "k8s.io/apimachinery/pkg/apis/meta/v1"
	"k8s.io/client-go/kubernetes"
	"k8s.io/client-go/rest"
	"k8s.io/client-go/tools/clientcmd"
)

// 获取k8s Clientset
func GetK8sClient(k8sConf string) (*kubernetes.Clientset, error) {
	var c *gin.Context
	config, err := clientcmd.RESTConfigFromKubeConfig([]byte(k8sConf))
	if err != nil {
		global.GVA_LOG.Error("KubeConfig内容错误", zap.Any("err", err))
		response.FailWithMessage("KubeConfig内容错误", c)
	}

	clientSet, err := kubernetes.NewForConfig(config)
	if err != nil {
		global.GVA_LOG.Error("创建Clientset失败", zap.Any("err", err))
		response.FailWithMessage("创建Clientset失败", c)
	}
	return clientSet, nil
}

// 获取k8s RESTConfig
func GetRestConf(k8sConf string) (restConf *rest.Config, err error) {
	if restConf, err = clientcmd.RESTConfigFromKubeConfig([]byte(k8sConf)); err != nil {
		fmt.Println("err: ", err)
	}
	return
}
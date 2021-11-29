package request

import "gin-vue-devops/model"

type K8sNodesSearch struct{
    model.K8sNodes
    PageInfo
}
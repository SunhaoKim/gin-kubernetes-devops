import service from '@/utils/request'

// @Tags K8sPods
// @Summary 创建K8sPods
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.K8sPods true "创建K8sPods"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"获取成功"}"
// @Router /k8sPods/createK8sPods [post]
export const createK8sPods = (data) => {
     return service({
         url: "/k8sPods/createK8sPods",
         method: 'post',
         data
     })
 }


// @Tags K8sPods
// @Summary 删除K8sPods
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.K8sPods true "删除K8sPods"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"删除成功"}"
// @Router /k8sPods/deleteK8sPods [delete]
 export const deleteK8sPods = (data) => {
     return service({
         url: "/k8sPods/deleteK8sPods",
         method: 'delete',
         data
     })
 }

// @Tags K8sPods
// @Summary 删除K8sPods
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body request.IdsReq true "批量删除K8sPods"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"删除成功"}"
// @Router /k8sPods/deleteK8sPods [delete]
 export const deleteK8sPodsByIds = (data) => {
     return service({
         url: "/k8sPods/deleteK8sPodsByIds",
         method: 'delete',
         data
     })
 }

// @Tags K8sPods
// @Summary 更新K8sPods
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.K8sPods true "更新K8sPods"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"更新成功"}"
// @Router /k8sPods/updateK8sPods [put]
 export const updateK8sPods = (data) => {
     return service({
         url: "/k8sPods/updateK8sPods",
         method: 'put',
         data
     })
 }


// @Tags K8sPods
// @Summary 获取pod日志
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.K8sPods true "获取pod日志"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"获取pod日志成功"}"
// @Router /k8sPods/getPodLog [get]
 export const findK8sPods = (params) => {
     return service({
         url: "/k8sPods/getPodLog",
         method: 'get',
         params
     })
 }


// @Tags K8sPods
// @Summary 分页获取K8sPods列表
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body request.PageInfo true "分页获取K8sPods列表"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"获取成功"}"
// @Router /k8sPods/getK8sPodsList [get]
 export const getK8sPodsList = (params) => {
     return service({
         url: "/k8sPods/getK8sPodsList",
         method: 'get',
         params
     })
 }

 // @Tags Container
// @Summary 进入容器终端
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body request.PageInfo true "进入容器终端"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"进入容器终端成功"}"
// @Router /container/execContainer [get]
export const execContainer = (params) => {
    return service({
        url: "/container/execContainer",
        method: 'get',
        params
    })
}
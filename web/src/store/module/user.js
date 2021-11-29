import { login } from '@/api/user'
import { jsonInBlacklist } from '@/api/jwt'
import router from '@/router/index'
export const user = {
    namespaced: true,
    state: {
        userInfo: {
            uuid: "",
            nickName: "",
            headerImg: "",
            authority: "",
        },
        token: "",
        namespace: "",
        clusterID: "",
        isCollapse: false, // 存储页展示 header 状态
    },
    mutations: {
        setUserInfo(state, userInfo) {
            // 这里的 `state` 对象是模块的局部状态
            state.userInfo = userInfo
        },
        setToken(state, token) {
            // 这里的 `state` 对象是模块的局部状态
            state.token = token
        },
        LoginOut(state) {
            state.userInfo = {}
            state.token = ""
            router.push({ name: 'login', replace: true })
            sessionStorage.clear()
            window.location.reload()
        },
        ResetUserInfo(state, userInfo = {}) {
            state.userInfo = {...state.userInfo,
                ...userInfo
            }
        },
        SAVE_SELECT_OBJ_ITEM:  (state, _obj) => {
            if (_obj.namespace) {
                state.namespace  = _obj.namespace;
            } else {
                state.clusterID = _obj.clusterID;
            }
        },
        RESET_IS_COLLAPSE: (state, _obj) => {
            state.isCollapse = _obj;
        }
    },
    actions: {
        async LoginIn({ commit }, loginInfo) {
            const res = await login(loginInfo)
            if (res.code == 0) {
                commit('setUserInfo', res.data.user)
                commit('setToken', res.data.token)
                const redirect = router.history.current.query.redirect
                if (redirect) {
                    router.push({ path: redirect })
                } else {
                    router.push({ path: '/layout/dashboard' })
                }
            }
        },
        async LoginOut({ commit }) {
            const res = await jsonInBlacklist()
            if (res.code == 0) {
                commit("LoginOut")
            }
        },
        SAVE_SELECT_OBJ_ITEM: ({commit}, _obj) => {
            commit('SAVE_SELECT_OBJ_ITEM', _obj)
        },
        RESET_IS_COLLAPSE: ({ commit }, _obj) => {
            commit("RESET_IS_COLLAPSE", _obj)
        }
    },
    getters: {
        userInfo(state) {
            return state.userInfo
        },
        token(state) {
            return state.token
        },
        selectItem(state) {
            return { 
                namespace: state.namespace, 
                clusterID: state.clusterID 
            }
        },
        getStyleHeader(state) {
            return state.isCollapse
        }
    }
}
<template>
    <el-container class="layout-cont">
        <el-container
            :class="[
                isSider ? 'openside' : 'hideside',
                isMobile ? 'mobile' : '',
            ]"
        >
            <el-row
                :class="[isShadowBg ? 'shadowBg' : '']"
                @click.native="changeShadow()"
            ></el-row>
            <el-aside class="main-cont main-left">
                <div class="tilte">
                    <img alt class="logoimg" src="~@/assets/nav_logo.png" />
                    <h2 class="tit-text" v-if="isSider">KubeSpace平台</h2>
                </div>
                <Aside class="aside" />
            </el-aside>
            <!-- 分块滑动功能 -->
            <el-main class="main-cont main-right">
                <transition
                    :duration="{ enter: 800, leave: 100 }"
                    mode="out-in"
                    name="el-fade-in-linear"
                >
                    <div
                        :style="{
                            width: `calc(100% - ${
                                isMobile ? '0px' : isCollapse ? '54px' : '220px'
                            })`,
                        }"
                        class="topfix"
                    >
                        <el-row>
                            <!-- :xs="8" :sm="6" :md="4" :lg="3" :xl="1" -->
                            <el-header class="header-cont">
                                <el-col :xs="2" :lg="1" :md="1" :sm="1" :xl="1">
                                    <div
                                        @click="totalCollapse"
                                        class="menu-total"
                                    >
                                        <i
                                            class="el-icon-s-unfold"
                                            v-if="isCollapse"
                                        ></i>
                                        <i class="el-icon-s-fold" v-else></i>
                                    </div>
                                </el-col>
                                <el-col :xs="6" :lg="6" :md="6" :sm="6" :xl="6">
                                    <el-breadcrumb
                                        class="breadcrumb"
                                        separator-class="el-icon-arrow-right"
                                    >
                                        <el-breadcrumb-item
                                            :key="item.path"
                                            v-for="item in matched.slice(
                                                1,
                                                matched.length
                                            )"
                                            >{{
                                                item.meta.title
                                            }}</el-breadcrumb-item
                                        >
                                    </el-breadcrumb>
                                </el-col>
                                <el-col
                                    :xs="16"
                                    :lg="17"
                                    :md="17"
                                    :sm="17"
                                    :xl="17"
                                >
                                    <div class="search-class">
                                        <span>集群环境：</span>
                                        <el-select
                                            style="margin-right: 10px"
                                            v-model="enviRonmentValue"
                                            @change="enviRonmentValueChange"
                                        >
                                            <el-option
                                                v-for="(
                                                    item, index
                                                ) in enviRonment"
                                                :key="index"
                                                :label="item.label"
                                                :value="item.value"
                                            ></el-option>
                                        </el-select>
                                        <span>NameSpace：</span>
                                        <el-select
                                            v-model="enviSpaceValue"
                                            @change="changeSumit"
                                        >
                                            <el-option
                                                v-for="(
                                                    item, index
                                                ) in enviNameSpace"
                                                :key="index"
                                                :label="item.label"
                                                :value="item.value"
                                            ></el-option>
                                        </el-select>
                                    </div>
                                    <div class="fl-right right-box">
                                        <!-- <Search /> -->
                                        <el-dropdown>
                                            <span class="header-avatar">
                                                <CustomPic />
                                                <span
                                                    style="margin-left: 5px"
                                                    >{{
                                                        userInfo.nickName
                                                    }}</span
                                                >
                                                <i
                                                    class="el-icon-arrow-down"
                                                ></i>
                                            </span>
                                            <el-dropdown-menu
                                                class="dropdown-group"
                                                slot="dropdown"
                                            >
                                                <el-dropdown-item
                                                    @click.native="toPerson"
                                                    icon="el-icon-s-custom"
                                                    >个人信息</el-dropdown-item
                                                >
                                                <el-dropdown-item
                                                    @click.native="LoginOut"
                                                    icon="el-icon-table-lamp"
                                                    >退出</el-dropdown-item
                                                >
                                            </el-dropdown-menu>
                                        </el-dropdown>
                                    </div>
                                </el-col>
                            </el-header>
                        </el-row>
                        <!-- 当前面包屑用路由自动生成可根据需求修改 -->
                        <!--
            :to="{ path: item.path }" 暂时注释不用-->
                        <HistoryComponent />
                    </div>
                </transition>
                <transition mode="out-in" name="el-fade-in-linear">
                    <keep-alive>
                        <router-view
                            v-loading="loadingFlag"
                            element-loading-text="正在加载中"
                            class="admin-box"
                            v-if="$route.meta.keepAlive"
                        ></router-view>
                    </keep-alive>
                </transition>
                <transition mode="out-in" name="el-fade-in-linear">
                    <router-view
                        v-loading="loadingFlag"
                        element-loading-text="正在加载中"
                        class="admin-box"
                        v-if="!$route.meta.keepAlive"
                    ></router-view>
                </transition>
                <BottomInfo />
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
import Aside from "@/view/layout/aside";
import HistoryComponent from "@/view/layout/aside/historyComponent/history";
import { getK8sClusterList } from "@/api/k8sCluster";
import { getK8sNamespacesList } from "@/api/k8sNamespaces";
import BottomInfo from "@/view/layout/bottomInfo/bottomInfo";
import { mapGetters, mapActions } from "vuex";
import CustomPic from "@/components/customPic";
export default {
    name: "Layout",
    data() {
        return {
            show: false,
            isCollapse: false,
            isSider: true,
            isMobile: false,
            isShadowBg: false,
            loadingFlag: false,
            value: "",
            // allList: [],
            enviNameSpace: [],
            enviRonment: [],
            enviRonmentValue: "",
            enviSpaceValue: "",
        };
    },
    components: {
        Aside,
        HistoryComponent,
        BottomInfo,
        CustomPic,
    },
    methods: {
        ...mapActions("user", ["LoginOut"]),
        enviRonmentValueChange(res) {
            console.log(res);
            getK8sNamespacesList({
                clusterID: res,
            }).then((res) => {
                // if(res.code===0) {
                //    this.allList = res.data.list.map(item => {
                //      return {
                //        label: item.namespace || '',
                //        value: item.id
                //      }
                //    })
                // }
                if (res.code === 0) {
                    this.enviNameSpace = res.data.list.map((item) => {
                        return {
                            label: item.namespace || "",
                            value: item.id,
                        };
                    });
                }
            });
        },
        totalCollapse() {
            this.isCollapse = !this.isCollapse;
            this.isSider = !this.isCollapse;
            this.isShadowBg = !this.isCollapse;
            this.$bus.emit("collapse", this.isCollapse);
        },
        toPerson() {
            this.$router.push({ name: "person" });
        },
        changeShadow() {
            this.isShadowBg = !this.isShadowBg;
            this.isSider = !!this.isCollapse;
            this.totalCollapse();
        },
        getinfo() {
            getK8sClusterList().then((res) => {
                if (res.code === 0) {
                    this.enviRonment = res.data.list.map((item) => {
                        return {
                            label: item.clusterName || "",
                            value: item.id,
                        };
                    });
                }
            });
            // getK8sNamespacesList().then((res) => {
            //     // if(res.code===0) {
            //     //    this.allList = res.data.list.map(item => {
            //     //      return {
            //     //        label: item.namespace || '',
            //     //        value: item.id
            //     //      }
            //     //    })
            //     // }
            //     if (res.code === 0) {
            //         this.enviNameSpace = res.data.list.map((item) => {
            //             return {
            //                 label: item.namespace || "",
            //                 value: item.id,
            //             };
            //         });
            //     }
            // });
        },
        changeSumit(val) {
            console.log(val, "val");
            //  getK8sDeploymentList().then(res => {
            //    if(res.code===0) {

            //    }
            //  })
        },
        // changeHandle(val){
        //     getK8sNamespacesList().then(res => {
        //     if(res.code===0) {
        //        this.nameSpace = res.data.list.map(item => {
        //          return {
        //            label: item.namespace || '',
        //            value: item.id
        //          }
        //        }).filter(item => {
        //          return val === 1 ? item.value < 8 : item.value >= 8;
        //        })
        //     }
        //   })
        // }
    },
    computed: {
        ...mapGetters("user", ["userInfo"]),
        title() {
            return this.$route.meta.title || "当前页面";
        },
        matched() {
            return this.$route.matched;
        },
        nameSpace() {
            // console.log(this.allList, 9999999);
            if (!this.enviRonmentValue) {
                return [];
            }
            return this.allList.filter((item) => {
                return this.enviRonmentValue === 1
                    ? item.value < 8
                    : item.value >= 8;
            });
        },
    },
    mounted() {
        let screenWidth = document.body.clientWidth;
        if (screenWidth < 1000) {
            this.isMobile = true;
            this.isSider = false;
            this.isCollapse = true;
        } else if (screenWidth >= 1000 && screenWidth < 1200) {
            this.isMobile = false;
            this.isSider = false;
            this.isCollapse = true;
        } else {
            this.isMobile = false;
            this.isSider = true;
            this.isCollapse = false;
        }
        this.$bus.emit("collapse", this.isCollapse);
        this.$bus.emit("mobile", this.isMobile);
        this.$bus.on("showLoading", () => {
            this.loadingFlag = true;
        });
        this.$bus.on("closeLoading", () => {
            this.loadingFlag = false;
        });
        window.onresize = () => {
            return (() => {
                let screenWidth = document.body.clientWidth;
                if (screenWidth < 1000) {
                    this.isMobile = true;
                    this.isSider = false;
                    this.isCollapse = true;
                } else if (screenWidth >= 1000 && screenWidth < 1200) {
                    this.isMobile = false;
                    this.isSider = false;
                    this.isCollapse = true;
                } else {
                    this.isMobile = false;
                    this.isSider = true;
                    this.isCollapse = false;
                }
                this.$bus.emit("collapse", this.isCollapse);
                this.$bus.emit("mobile", this.isMobile);
            })();
        };
        this.getinfo();
    },
};
</script>
<style lang="scss">
@import "@/style/mobile.scss";
.search-class {
    display: inline-flex;
    width: calc(100% - 200px);
    align-items: center;
    line-height: 60px;
    justify-content: flex-end;
}
</style>

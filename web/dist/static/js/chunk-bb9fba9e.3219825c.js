(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bb9fba9e"],{"44d2":function(t,e,s){var i=s("b622"),n=s("7c73"),r=s("9bf2"),o=i("unscopables"),a=Array.prototype;void 0==a[o]&&r.f(a,o,{configurable:!0,value:n(null)}),t.exports=function(t){a[o][t]=!0}},"4bde":function(t,e,s){"use strict";var i=s("88f2"),n=s.n(i);n.a},"586c":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"router-history"},[s("el-tabs",{attrs:{closable:!(1==t.historys.length&&"dashboard"==this.$route.name),type:"card"},on:{"tab-click":t.changeTab,"tab-remove":t.removeTab},nativeOn:{contextmenu:function(e){return e.preventDefault(),t.openContextMenu(e)}},model:{value:t.activeValue,callback:function(e){t.activeValue=e},expression:"activeValue"}},t._l(t.historys,(function(t){return s("el-tab-pane",{key:t.name,attrs:{label:t.meta.title,name:t.name,tab:t}})})),1),s("ul",{directives:[{name:"show",rawName:"v-show",value:t.contextMenuVisible,expression:"contextMenuVisible"}],staticClass:"contextmenu",style:{left:t.left+"px",top:t.top+"px"}},[s("li",{on:{click:t.closeAll}},[t._v("关闭所有")]),s("li",{on:{click:t.closeLeft}},[t._v("关闭左侧")]),s("li",{on:{click:t.closeRight}},[t._v("关闭右侧")]),s("li",{on:{click:t.closeOther}},[t._v("关闭其他")])])],1)},n=[],r=(s("4de4"),s("c740"),s("45fc"),s("a434"),s("b0c0"),s("ac1f"),s("1276"),s("2f62"),{name:"HistoryComponent",data:function(){return{historys:[],activeValue:"dashboard",contextMenuVisible:!1,left:0,top:0,isCollapse:!1,isMobile:!1,rightActive:""}},created:function(){var t=this;this.$bus.on("mobile",(function(e){t.isMobile=e})),this.$bus.on("collapse",(function(e){t.isCollapse=e}));var e=[{name:"dashboard",meta:{title:"首页"}}];this.historys=JSON.parse(sessionStorage.getItem("historys"))||e,this.setTab(this.$route)},beforeDestroy:function(){this.$bus.off("collapse"),this.$bus.off("mobile")},methods:{openContextMenu:function(t){if(1==this.historys.length&&"dashboard"==this.$route.name)return!1;var e;t.srcElement.id&&(this.contextMenuVisible=!0,e=this.isCollapse?54:220,this.isMobile&&(e=0),this.left=t.clientX-e,this.top=t.clientY+10,this.rightActive=t.srcElement.id.split("-")[1])},closeAll:function(){this.historys=[{name:"dashboard",meta:{title:"首页"}}],this.$router.push({name:"dashboard"}),this.contextMenuVisible=!1,sessionStorage.setItem("historys",JSON.stringify(this.historys))},closeLeft:function(){var t,e=this,s=this.historys.findIndex((function(s){return s.name==e.rightActive&&(t=s),s.name==e.rightActive})),i=this.historys.findIndex((function(t){return t.name==e.activeValue}));this.historys.splice(0,s),s>i&&this.$router.push(t),sessionStorage.setItem("historys",JSON.stringify(this.historys))},closeRight:function(){var t,e=this,s=this.historys.findIndex((function(s){return s.name==e.rightActive&&(t=s),s.name==e.rightActive})),i=this.historys.findIndex((function(t){return t.name==e.activeValue}));this.historys.splice(s+1,this.historys.length),s<i&&this.$router.push(t),sessionStorage.setItem("historys",JSON.stringify(this.historys))},closeOther:function(){var t,e=this;this.historys=this.historys.filter((function(s){return s.name==e.rightActive&&(t=s),s.name==e.rightActive})),this.$router.push(t),sessionStorage.setItem("historys",JSON.stringify(this.historys))},setTab:function(t){if(!this.historys.some((function(e){return e.name==t.name}))){var e={};e.name=t.name,e.meta=t.meta,e.query=t.query,e.params=t.params,this.historys.push(e)}this.activeValue=this.$route.name},changeTab:function(t){var e=t.$attrs.tab;this.$router.push({name:e.name,query:e.query,params:e.params})},removeTab:function(t){var e=this.historys.findIndex((function(e){return e.name==t}));this.$route.name==t&&(1==this.historys.length?this.$router.push({name:"dashboard"}):e<this.historys.length-1?this.$router.push({name:this.historys[e+1].name,query:this.historys[e+1].query,params:this.historys[e+1].params}):this.$router.push({name:this.historys[e-1].name,query:this.historys[e-1].query,params:this.historys[e-1].params})),this.historys.splice(e,1)}},watch:{contextMenuVisible:function(){var t=this;this.contextMenuVisible?document.body.addEventListener("click",(function(){t.contextMenuVisible=!1})):document.body.removeEventListener("click",(function(){t.contextMenuVisible=!1}))},$route:function(t){this.historys=this.historys.filter((function(t){return!t.meta.hidden})),this.setTab(t),sessionStorage.setItem("historys",JSON.stringify(this.historys))}},computed:{},mouted:function(){}}),o=r,a=(s("4bde"),s("2877")),h=Object(a["a"])(o,i,n,!1,null,null,null);e["default"]=h.exports},"88f2":function(t,e,s){},a434:function(t,e,s){"use strict";var i=s("23e7"),n=s("23cb"),r=s("a691"),o=s("50c4"),a=s("7b0b"),h=s("65f0"),c=s("8418"),u=s("1dde"),l=s("ae40"),f=u("splice"),m=l("splice",{ACCESSORS:!0,0:0,1:2}),d=Math.max,y=Math.min,b=9007199254740991,p="Maximum allowed length exceeded";i({target:"Array",proto:!0,forced:!f||!m},{splice:function(t,e){var s,i,u,l,f,m,v=a(this),g=o(v.length),x=n(t,g),$=arguments.length;if(0===$?s=i=0:1===$?(s=0,i=g-x):(s=$-2,i=y(d(r(e),0),g-x)),g+s-i>b)throw TypeError(p);for(u=h(v,i),l=0;l<i;l++)f=x+l,f in v&&c(u,l,v[f]);if(u.length=i,s<i){for(l=x;l<g-i;l++)f=l+i,m=l+s,f in v?v[m]=v[f]:delete v[m];for(l=g;l>g-i+s;l--)delete v[l-1]}else if(s>i)for(l=g-i;l>x;l--)f=l+i-1,m=l+s-1,f in v?v[m]=v[f]:delete v[m];for(l=0;l<s;l++)v[l+x]=arguments[l+2];return v.length=g-i+s,u}})},c740:function(t,e,s){"use strict";var i=s("23e7"),n=s("b727").findIndex,r=s("44d2"),o=s("ae40"),a="findIndex",h=!0,c=o(a);a in[]&&Array(1)[a]((function(){h=!1})),i({target:"Array",proto:!0,forced:h||!c},{findIndex:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),r(a)}}]);
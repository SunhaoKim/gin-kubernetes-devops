(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-26a27cfd","chunk-2d0be08a","chunk-2d0de3cd"],{1628:function(e,n,l){},"2f11":function(e,n,l){"use strict";l.r(n),l.d(n,"emailTest",(function(){return o}));var t=l("b775"),o=function(e){return Object(t["default"])({url:"/email/emailTest",method:"post",data:e})}},"3d9a":function(e,n,l){"use strict";var t=l("1628"),o=l.n(t);o.a},"7af7":function(e,n,l){"use strict";l.r(n);var t=function(){var e=this,n=e.$createElement,l=e._self._c||n;return l("div",{staticClass:"system"},[l("el-form",{ref:"form",staticClass:"system",attrs:{model:e.config,"label-width":"100px"}},[l("h2",[e._v("系统配置")]),l("el-form-item",{attrs:{label:"环境值"}},[l("el-input",{model:{value:e.config.system.env,callback:function(n){e.$set(e.config.system,"env",n)},expression:"config.system.env"}})],1),l("el-form-item",{attrs:{label:"端口值"}},[l("el-input",{model:{value:e.config.system.addr,callback:function(n){e.$set(e.config.system,"addr",e._n(n))},expression:"config.system.addr"}})],1),l("el-form-item",{attrs:{label:"数据库类型"}},[l("el-select",{model:{value:e.config.system.dbType,callback:function(n){e.$set(e.config.system,"dbType",n)},expression:"config.system.dbType"}},[l("el-option",{attrs:{value:"mysql"}}),l("el-option",{attrs:{value:"sqlite"}}),l("el-option",{attrs:{value:"sqlserver"}}),l("el-option",{attrs:{value:"postgresql"}})],1)],1),l("el-form-item",{attrs:{label:"Oss类型"}},[l("el-select",{model:{value:e.config.system.ossType,callback:function(n){e.$set(e.config.system,"ossType",n)},expression:"config.system.ossType"}},[l("el-option",{attrs:{value:"local"}}),l("el-option",{attrs:{value:"qiniu"}})],1)],1),l("el-form-item",{attrs:{label:"配置文件环境变量名"}},[l("el-input",{model:{value:e.config.system.configEnv,callback:function(n){e.$set(e.config.system,"configEnv",e._n(n))},expression:"config.system.configEnv"}})],1),l("el-form-item",{attrs:{label:"数据初始化"}},[l("el-checkbox",{model:{value:e.config.system.needInitData,callback:function(n){e.$set(e.config.system,"needInitData",n)},expression:"config.system.needInitData"}},[e._v("开启")])],1),l("el-form-item",{attrs:{label:"多点登录拦截"}},[l("el-checkbox",{model:{value:e.config.system.useMultipoint,callback:function(n){e.$set(e.config.system,"useMultipoint",n)},expression:"config.system.useMultipoint"}},[e._v("开启")])],1),l("h2",[e._v("jwt签名")]),l("el-form-item",{attrs:{label:"jwt签名"}},[l("el-input",{model:{value:e.config.jwt.signingKey,callback:function(n){e.$set(e.config.jwt,"signingKey",n)},expression:"config.jwt.signingKey"}})],1),l("h2",[e._v("Zap日志配置")]),l("el-form-item",{attrs:{label:"级别"}},[l("el-input",{model:{value:e.config.zap.level,callback:function(n){e.$set(e.config.zap,"level",e._n(n))},expression:"config.zap.level"}})],1),l("el-form-item",{attrs:{label:"输出"}},[l("el-input",{model:{value:e.config.zap.format,callback:function(n){e.$set(e.config.zap,"format",n)},expression:"config.zap.format"}})],1),l("el-form-item",{attrs:{label:"日志前缀"}},[l("el-input",{model:{value:e.config.zap.prefix,callback:function(n){e.$set(e.config.zap,"prefix",n)},expression:"config.zap.prefix"}})],1),l("el-form-item",{attrs:{label:"日志文件夹"}},[l("el-input",{model:{value:e.config.zap.director,callback:function(n){e.$set(e.config.zap,"director",n)},expression:"config.zap.director"}})],1),l("el-form-item",{attrs:{label:"软链接名称"}},[l("el-input",{model:{value:e.config.zap.linkName,callback:function(n){e.$set(e.config.zap,"linkName",n)},expression:"config.zap.linkName"}})],1),l("el-form-item",{attrs:{label:"编码级"}},[l("el-input",{model:{value:e.config.zap.encodeLevel,callback:function(n){e.$set(e.config.zap,"encodeLevel",n)},expression:"config.zap.encodeLevel"}})],1),l("el-form-item",{attrs:{label:"栈名"}},[l("el-input",{model:{value:e.config.zap.stacktraceKey,callback:function(n){e.$set(e.config.zap,"stacktraceKey",n)},expression:"config.zap.stacktraceKey"}})],1),l("el-form-item",{attrs:{label:"显示行"}},[l("el-checkbox",{model:{value:e.config.zap.showLine,callback:function(n){e.$set(e.config.zap,"showLine",n)},expression:"config.zap.showLine"}})],1),l("el-form-item",{attrs:{label:"输出控制台"}},[l("el-checkbox",{model:{value:e.config.zap.logInConsole,callback:function(n){e.$set(e.config.zap,"logInConsole",n)},expression:"config.zap.logInConsole"}})],1),l("h2",[e._v("Redis admin数据库配置")]),l("el-form-item",{attrs:{label:"db"}},[l("el-input",{model:{value:e.config.redis.db,callback:function(n){e.$set(e.config.redis,"db",n)},expression:"config.redis.db"}})],1),l("el-form-item",{attrs:{label:"addr"}},[l("el-input",{model:{value:e.config.redis.addr,callback:function(n){e.$set(e.config.redis,"addr",n)},expression:"config.redis.addr"}})],1),l("el-form-item",{attrs:{label:"password"}},[l("el-input",{model:{value:e.config.redis.password,callback:function(n){e.$set(e.config.redis,"password",n)},expression:"config.redis.password"}})],1),l("h2",[e._v("邮箱配置")]),l("el-form-item",{attrs:{label:"接收者邮箱"}},[l("el-input",{attrs:{placeholder:"可多个，以逗号分隔"},model:{value:e.config.email.to,callback:function(n){e.$set(e.config.email,"to",n)},expression:"config.email.to"}})],1),l("el-form-item",{attrs:{label:"端口"}},[l("el-input",{model:{value:e.config.email.port,callback:function(n){e.$set(e.config.email,"port",e._n(n))},expression:"config.email.port"}})],1),l("el-form-item",{attrs:{label:"发送者邮箱"}},[l("el-input",{model:{value:e.config.email.from,callback:function(n){e.$set(e.config.email,"from",n)},expression:"config.email.from"}})],1),l("el-form-item",{attrs:{label:"host"}},[l("el-input",{model:{value:e.config.email.host,callback:function(n){e.$set(e.config.email,"host",n)},expression:"config.email.host"}})],1),l("el-form-item",{attrs:{label:"是否为ssl"}},[l("el-checkbox",{model:{value:e.config.email.isSSL,callback:function(n){e.$set(e.config.email,"isSSL",n)},expression:"config.email.isSSL"}})],1),l("el-form-item",{attrs:{label:"secret"}},[l("el-input",{model:{value:e.config.email.secret,callback:function(n){e.$set(e.config.email,"secret",n)},expression:"config.email.secret"}})],1),l("el-form-item",{attrs:{label:"测试邮件"}},[l("el-button",{on:{click:e.email}},[e._v("测试邮件")])],1),l("h2",[e._v("casbin配置")]),l("el-form-item",{attrs:{label:"模型地址"}},[l("el-input",{model:{value:e.config.casbin.modelPath,callback:function(n){e.$set(e.config.casbin,"modelPath",n)},expression:"config.casbin.modelPath"}})],1),l("h2",[e._v("验证码配置")]),l("el-form-item",{attrs:{label:"keyLong"}},[l("el-input",{model:{value:e.config.captcha.keyLong,callback:function(n){e.$set(e.config.captcha,"keyLong",e._n(n))},expression:"config.captcha.keyLong"}})],1),l("el-form-item",{attrs:{label:"imgWidth"}},[l("el-input",{model:{value:e.config.captcha.imgWidth,callback:function(n){e.$set(e.config.captcha,"imgWidth",e._n(n))},expression:"config.captcha.imgWidth"}})],1),l("el-form-item",{attrs:{label:"imgHeight"}},[l("el-input",{model:{value:e.config.captcha.imgHeight,callback:function(n){e.$set(e.config.captcha,"imgHeight",e._n(n))},expression:"config.captcha.imgHeight"}})],1),"mysql"==e.config.system.dbType?[l("h2",[e._v("mysql admin数据库配置")]),l("el-form-item",{attrs:{label:"username"}},[l("el-input",{model:{value:e.config.mysql.username,callback:function(n){e.$set(e.config.mysql,"username",n)},expression:"config.mysql.username"}})],1),l("el-form-item",{attrs:{label:"password"}},[l("el-input",{model:{value:e.config.mysql.password,callback:function(n){e.$set(e.config.mysql,"password",n)},expression:"config.mysql.password"}})],1),l("el-form-item",{attrs:{label:"path"}},[l("el-input",{model:{value:e.config.mysql.path,callback:function(n){e.$set(e.config.mysql,"path",n)},expression:"config.mysql.path"}})],1),l("el-form-item",{attrs:{label:"dbname"}},[l("el-input",{model:{value:e.config.mysql.dbname,callback:function(n){e.$set(e.config.mysql,"dbname",n)},expression:"config.mysql.dbname"}})],1),l("el-form-item",{attrs:{label:"maxIdleConns"}},[l("el-input",{model:{value:e.config.mysql.maxIdleConns,callback:function(n){e.$set(e.config.mysql,"maxIdleConns",e._n(n))},expression:"config.mysql.maxIdleConns"}})],1),l("el-form-item",{attrs:{label:"maxOpenConns"}},[l("el-input",{model:{value:e.config.mysql.maxOpenConns,callback:function(n){e.$set(e.config.mysql,"maxOpenConns",e._n(n))},expression:"config.mysql.maxOpenConns"}})],1),l("el-form-item",{attrs:{label:"logMode"}},[l("el-checkbox",{model:{value:e.config.mysql.logMode,callback:function(n){e.$set(e.config.mysql,"logMode",n)},expression:"config.mysql.logMode"}})],1)]:e._e(),"sqlite"==e.config.system.dbType?[l("h2",[e._v("sqlite admin数据库配置")]),l("el-form-item",{attrs:{label:"path"}},[l("el-input",{model:{value:e.config.mysql.path,callback:function(n){e.$set(e.config.mysql,"path",n)},expression:"config.mysql.path"}})],1),l("el-form-item",{attrs:{label:"maxIdleConns"}},[l("el-input",{model:{value:e.config.mysql.maxIdleConns,callback:function(n){e.$set(e.config.mysql,"maxIdleConns",e._n(n))},expression:"config.mysql.maxIdleConns"}})],1),l("el-form-item",{attrs:{label:"maxOpenConns"}},[l("el-input",{model:{value:e.config.mysql.maxOpenConns,callback:function(n){e.$set(e.config.mysql,"maxOpenConns",e._n(n))},expression:"config.mysql.maxOpenConns"}})],1),l("el-form-item",{attrs:{label:"logger"}},[l("el-checkbox",{model:{value:e.config.mysql.logger,callback:function(n){e.$set(e.config.mysql,"logger",n)},expression:"config.mysql.logger"}})],1)]:e._e(),"sqlserver"==e.config.system.dbType?[l("h2",[e._v("sqlserver admin数据库配置")]),l("el-form-item",{attrs:{label:"username"}},[l("el-input",{model:{value:e.config.sqlserver.username,callback:function(n){e.$set(e.config.sqlserver,"username",n)},expression:"config.sqlserver.username"}})],1),l("el-form-item",{attrs:{label:"password"}},[l("el-input",{model:{value:e.config.sqlserver.password,callback:function(n){e.$set(e.config.sqlserver,"password",n)},expression:"config.sqlserver.password"}})],1),l("el-form-item",{attrs:{label:"path"}},[l("el-input",{model:{value:e.config.sqlserver.path,callback:function(n){e.$set(e.config.sqlserver,"path",n)},expression:"config.sqlserver.path"}})],1),l("el-form-item",{attrs:{label:"dbname"}},[l("el-input",{model:{value:e.config.sqlserver.dbname,callback:function(n){e.$set(e.config.sqlserver,"dbname",n)},expression:"config.sqlserver.dbname"}})],1),l("el-form-item",{attrs:{label:"maxIdleConns"}},[l("el-input",{model:{value:e.config.sqlserver.maxIdleConns,callback:function(n){e.$set(e.config.sqlserver,"maxIdleConns",e._n(n))},expression:"config.sqlserver.maxIdleConns"}})],1),l("el-form-item",{attrs:{label:"maxOpenConns"}},[l("el-input",{model:{value:e.config.sqlserver.maxOpenConns,callback:function(n){e.$set(e.config.sqlserver,"maxOpenConns",e._n(n))},expression:"config.sqlserver.maxOpenConns"}})],1),l("el-form-item",{attrs:{label:"logger"}},[l("el-checkbox",{model:{value:e.config.sqlserver.logger,callback:function(n){e.$set(e.config.sqlserver,"logger",n)},expression:"config.sqlserver.logger"}})],1)]:e._e(),"postgresql"==e.config.system.dbType?[l("h2",[e._v("postgresql admin数据库配置")]),l("el-form-item",{attrs:{label:"username"}},[l("el-input",{model:{value:e.config.mysql.username,callback:function(n){e.$set(e.config.mysql,"username",n)},expression:"config.mysql.username"}})],1),l("el-form-item",{attrs:{label:"password"}},[l("el-input",{model:{value:e.config.mysql.password,callback:function(n){e.$set(e.config.mysql,"password",n)},expression:"config.mysql.password"}})],1),l("el-form-item",{attrs:{label:"dbName"}},[l("el-input",{model:{value:e.config.mysql.dbName,callback:function(n){e.$set(e.config.mysql,"dbName",n)},expression:"config.mysql.dbName"}})],1),l("el-form-item",{attrs:{label:"port"}},[l("el-input",{model:{value:e.config.mysql.port,callback:function(n){e.$set(e.config.mysql,"port",n)},expression:"config.mysql.port"}})],1),l("el-form-item",{attrs:{label:"config"}},[l("el-input",{model:{value:e.config.mysql.config,callback:function(n){e.$set(e.config.mysql,"config",n)},expression:"config.mysql.config"}})],1),l("el-form-item",{attrs:{label:"maxIdleConns"}},[l("el-input",{model:{value:e.config.mysql.maxIdleConns,callback:function(n){e.$set(e.config.mysql,"maxIdleConns",e._n(n))},expression:"config.mysql.maxIdleConns"}})],1),l("el-form-item",{attrs:{label:"maxOpenConns"}},[l("el-input",{model:{value:e.config.mysql.maxOpenConns,callback:function(n){e.$set(e.config.mysql,"maxOpenConns",e._n(n))},expression:"config.mysql.maxOpenConns"}})],1),l("el-form-item",{attrs:{label:"logger"}},[l("el-checkbox",{model:{value:e.config.mysql.logger,callback:function(n){e.$set(e.config.mysql,"logger",n)},expression:"config.mysql.logger"}})],1),l("el-form-item",{attrs:{label:"prefer-simple-protocol"}},[l("el-checkbox",{model:{value:e.config.mysql.preferSimpleProtocol,callback:function(n){e.$set(e.config.mysql,"preferSimpleProtocol",n)},expression:"config.mysql.preferSimpleProtocol"}})],1)]:e._e(),"local"==e.config.system.ossType?[l("h2",[e._v("本地上传配置")]),l("el-form-item",{attrs:{label:"本地文件路径"}},[l("el-input",{model:{value:e.config.local.path,callback:function(n){e.$set(e.config.local,"path",n)},expression:"config.local.path"}})],1)]:e._e(),"qiniu"==e.config.system.ossType?[l("h2",[e._v("qiniu上传配置")]),l("el-form-item",{attrs:{label:"存储区域"}},[l("el-input",{model:{value:e.config.qiniu.zone,callback:function(n){e.$set(e.config.qiniu,"zone",n)},expression:"config.qiniu.zone"}})],1),l("el-form-item",{attrs:{label:"空间名称"}},[l("el-input",{model:{value:e.config.qiniu.bucket,callback:function(n){e.$set(e.config.qiniu,"bucket",n)},expression:"config.qiniu.bucket"}})],1),l("el-form-item",{attrs:{label:"CDN加速域名"}},[l("el-input",{model:{value:e.config.qiniu.imgPath,callback:function(n){e.$set(e.config.qiniu,"imgPath",n)},expression:"config.qiniu.imgPath"}})],1),l("el-form-item",{attrs:{label:"是否使用https"}},[l("el-checkbox",{model:{value:e.config.qiniu.imgPath,callback:function(n){e.$set(e.config.qiniu,"imgPath",n)},expression:"config.qiniu.imgPath"}},[e._v("开启")])],1),l("el-form-item",{attrs:{label:"accessKey"}},[l("el-input",{model:{value:e.config.qiniu.accessKey,callback:function(n){e.$set(e.config.qiniu,"accessKey",n)},expression:"config.qiniu.accessKey"}})],1),l("el-form-item",{attrs:{label:"secretKey"}},[l("el-input",{model:{value:e.config.qiniu.secretKey,callback:function(n){e.$set(e.config.qiniu,"secretKey",n)},expression:"config.qiniu.secretKey"}})],1),l("el-form-item",{attrs:{label:"上传是否使用CDN上传加速"}},[l("el-checkbox",{model:{value:e.config.qiniu.useCdnDomains,callback:function(n){e.$set(e.config.qiniu,"useCdnDomains",n)},expression:"config.qiniu.useCdnDomains"}},[e._v("开启")])],1)]:e._e(),l("el-form-item",[l("el-button",{attrs:{type:"primary"},on:{click:e.update}},[e._v("立即更新")]),l("el-button",{attrs:{type:"primary"},on:{click:e.reload}},[e._v("重启服务（开发中）")])],1)],2)],1)},o=[],i=(l("96cf"),l("1da1")),s=l("8593"),a=l("2f11"),c={name:"Config",data:function(){return{config:{system:{},jwt:{},casbin:{},mysql:{},sqlite:{},redis:{},qiniu:{},captcha:{},zap:{},local:{},email:{}}}},created:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.initForm();case 2:case"end":return n.stop()}}),n)})))()},methods:{initForm:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function n(){var l;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,Object(s["getSystemConfig"])();case 2:l=n.sent,0==l.code&&(e.config=l.data.config);case 4:case"end":return n.stop()}}),n)})))()},reload:function(){},update:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function n(){var l;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,Object(s["setSystemConfig"])({config:e.config});case 2:if(l=n.sent,0!=l.code){n.next=7;break}return e.$message({type:"success",message:"配置文件设置成功"}),n.next=7,e.initForm();case 7:case"end":return n.stop()}}),n)})))()},email:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function n(){var l;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,Object(a["emailTest"])();case 2:if(l=n.sent,0!=l.code){n.next=9;break}return e.$message({type:"success",message:"邮件发送成功"}),n.next=7,e.initForm();case 7:n.next=10;break;case 9:e.$message({type:"error",message:"邮件发送失败"});case 10:case"end":return n.stop()}}),n)})))()}}},r=c,m=(l("3d9a"),l("2877")),f=Object(m["a"])(r,t,o,!1,null,null,null);n["default"]=f.exports},8593:function(e,n,l){"use strict";l.r(n),l.d(n,"getSystemConfig",(function(){return o})),l.d(n,"setSystemConfig",(function(){return i})),l.d(n,"getSystemState",(function(){return s}));var t=l("b775"),o=function(){return Object(t["default"])({url:"/system/getSystemConfig",method:"post"})},i=function(e){return Object(t["default"])({url:"/system/setSystemConfig",method:"post",data:e})},s=function(){return Object(t["default"])({url:"/system/getServerInfo",method:"post",donNotShowLoading:!0})}}}]);
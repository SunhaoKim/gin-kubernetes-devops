(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-06bd05f9","chunk-0351ffc4","chunk-74bc87d9","chunk-2d0c1f78"],{"19aa":function(e,t){e.exports=function(e,t,r){if(!(e instanceof t))throw TypeError("Incorrect "+(r?r+" ":"")+"invocation");return e}},"2a18":function(e,t,r){"use strict";r.r(t),r.d(t,"toUpperCase",(function(){return a})),r.d(t,"toLowerCase",(function(){return o})),r.d(t,"toSQLLine",(function(){return l})),r.d(t,"toHump",(function(){return i}));r("ac1f"),r("5319");var a=function(e){return e[0]?e.replace(e[0],e[0].toUpperCase()):""},o=function(e){return e[0]?e.replace(e[0],e[0].toLowerCase()):""},l=function(e){return"ID"==e?"ID":e.replace(/([A-Z])/g,"_$1").toLowerCase()},i=function(e){return e.replace(/\_(\w)/g,(function(e,t){return t.toUpperCase()}))}},"2d95":function(e,t,r){},"35a1":function(e,t,r){var a=r("f5df"),o=r("3f8c"),l=r("b622"),i=l("iterator");e.exports=function(e){if(void 0!=e)return e[i]||e["@@iterator"]||o[a(e)]}},"3bbe":function(e,t,r){var a=r("861d");e.exports=function(e){if(!a(e)&&null!==e)throw TypeError("Can't set "+String(e)+" as a prototype");return e}},"3ca3":function(e,t,r){"use strict";var a=r("6547").charAt,o=r("69f3"),l=r("7dd0"),i="String Iterator",n=o.set,d=o.getterFor(i);l(String,"String",(function(e){n(this,{type:i,string:String(e),index:0})}),(function(){var e,t=d(this),r=t.string,o=t.index;return o>=r.length?{value:void 0,done:!0}:(e=a(r,o),t.index+=e.length,{value:e,done:!1})}))},"3f8c":function(e,t){e.exports={}},"44d2":function(e,t,r){var a=r("b622"),o=r("7c73"),l=r("9bf2"),i=a("unscopables"),n=Array.prototype;void 0==n[i]&&l.f(n,i,{configurable:!0,value:o(null)}),e.exports=function(e){n[i][e]=!0}},"47fe":function(e,t,r){"use strict";r.r(t),r.d(t,"createTemp",(function(){return o})),r.d(t,"getDB",(function(){return l})),r.d(t,"getTable",(function(){return i})),r.d(t,"getColumn",(function(){return n}));var a=r("b775"),o=function(e){return Object(a["default"])({url:"/autoCode/createTemp",method:"post",data:e,responseType:"blob"})},l=function(){return Object(a["default"])({url:"/autoCode/getDB",method:"get"})},i=function(e){return Object(a["default"])({url:"/autoCode/getTables",method:"get",params:e})},n=function(e){return Object(a["default"])({url:"/autoCode/getColumn",method:"get",params:e})}},5319:function(e,t,r){"use strict";var a=r("d784"),o=r("825a"),l=r("7b0b"),i=r("50c4"),n=r("a691"),d=r("1d80"),s=r("8aa5"),c=r("14c3"),u=Math.max,f=Math.min,p=Math.floor,m=/\$([$&'`]|\d\d?|<[^>]*>)/g,b=/\$([$&'`]|\d\d?)/g,g=function(e){return void 0===e?e:String(e)};a("replace",2,(function(e,t,r,a){var v=a.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,h=a.REPLACE_KEEPS_$0,y=v?"$":"$0";return[function(r,a){var o=d(this),l=void 0==r?void 0:r[e];return void 0!==l?l.call(r,o,a):t.call(String(o),r,a)},function(e,a){if(!v&&h||"string"===typeof a&&-1===a.indexOf(y)){var l=r(t,e,this,a);if(l.done)return l.value}var d=o(e),p=String(this),m="function"===typeof a;m||(a=String(a));var b=d.global;if(b){var k=d.unicode;d.lastIndex=0}var N=[];while(1){var w=c(d,p);if(null===w)break;if(N.push(w),!b)break;var T=String(w[0]);""===T&&(d.lastIndex=s(p,i(d.lastIndex),k))}for(var O="",M=0,S=0;S<N.length;S++){w=N[S];for(var _=String(w[0]),F=u(f(n(w.index),p.length),0),$=[],C=1;C<w.length;C++)$.push(g(w[C]));var A=w.groups;if(m){var j=[_].concat($,F,p);void 0!==A&&j.push(A);var D=String(a.apply(void 0,j))}else D=x(_,p,F,$,A,a);F>=M&&(O+=p.slice(M,F)+D,M=F+_.length)}return O+p.slice(M)}];function x(e,r,a,o,i,n){var d=a+e.length,s=o.length,c=b;return void 0!==i&&(i=l(i),c=m),t.call(n,c,(function(t,l){var n;switch(l.charAt(0)){case"$":return"$";case"&":return e;case"`":return r.slice(0,a);case"'":return r.slice(d);case"<":n=i[l.slice(1,-1)];break;default:var c=+l;if(0===c)return t;if(c>s){var u=p(c/10);return 0===u?t:u<=s?void 0===o[u-1]?l.charAt(1):o[u-1]+l.charAt(1):t}n=o[c-1]}return void 0===n?"":n}))}}))},"7dd0":function(e,t,r){"use strict";var a=r("23e7"),o=r("9ed3"),l=r("e163"),i=r("d2bb"),n=r("d44e"),d=r("9112"),s=r("6eeb"),c=r("b622"),u=r("c430"),f=r("3f8c"),p=r("ae93"),m=p.IteratorPrototype,b=p.BUGGY_SAFARI_ITERATORS,g=c("iterator"),v="keys",h="values",y="entries",x=function(){return this};e.exports=function(e,t,r,c,p,k,N){o(r,t,c);var w,T,O,M=function(e){if(e===p&&C)return C;if(!b&&e in F)return F[e];switch(e){case v:return function(){return new r(this,e)};case h:return function(){return new r(this,e)};case y:return function(){return new r(this,e)}}return function(){return new r(this)}},S=t+" Iterator",_=!1,F=e.prototype,$=F[g]||F["@@iterator"]||p&&F[p],C=!b&&$||M(p),A="Array"==t&&F.entries||$;if(A&&(w=l(A.call(new e)),m!==Object.prototype&&w.next&&(u||l(w)===m||(i?i(w,m):"function"!=typeof w[g]&&d(w,g,x)),n(w,S,!0,!0),u&&(f[S]=x))),p==h&&$&&$.name!==h&&(_=!0,C=function(){return $.call(this)}),u&&!N||F[g]===C||d(F,g,C),f[t]=C,p)if(T={values:M(h),keys:k?C:M(v),entries:M(y)},N)for(O in T)(b||_||!(O in F))&&s(F,O,T[O]);else a({target:t,proto:!0,forced:b||_},T);return T}},"9ed3":function(e,t,r){"use strict";var a=r("ae93").IteratorPrototype,o=r("7c73"),l=r("5c6c"),i=r("d44e"),n=r("3f8c"),d=function(){return this};e.exports=function(e,t,r){var s=t+" Iterator";return e.prototype=o(a,{next:l(1,r)}),i(e,s,!1,!0),n[s]=d,e}},a434:function(e,t,r){"use strict";var a=r("23e7"),o=r("23cb"),l=r("a691"),i=r("50c4"),n=r("7b0b"),d=r("65f0"),s=r("8418"),c=r("1dde"),u=r("ae40"),f=c("splice"),p=u("splice",{ACCESSORS:!0,0:0,1:2}),m=Math.max,b=Math.min,g=9007199254740991,v="Maximum allowed length exceeded";a({target:"Array",proto:!0,forced:!f||!p},{splice:function(e,t){var r,a,c,u,f,p,h=n(this),y=i(h.length),x=o(e,y),k=arguments.length;if(0===k?r=a=0:1===k?(r=0,a=y-x):(r=k-2,a=b(m(l(t),0),y-x)),y+r-a>g)throw TypeError(v);for(c=d(h,a),u=0;u<a;u++)f=x+u,f in h&&s(c,u,h[f]);if(c.length=a,r<a){for(u=x;u<y-a;u++)f=u+a,p=u+r,f in h?h[p]=h[f]:delete h[p];for(u=y;u>y-a+r;u--)delete h[u-1]}else if(r>a)for(u=y-a;u>x;u--)f=u+a-1,p=u+r-1,f in h?h[p]=h[f]:delete h[p];for(u=0;u<r;u++)h[u+x]=arguments[u+2];return h.length=y-a+r,c}})},ae93:function(e,t,r){"use strict";var a,o,l,i=r("e163"),n=r("9112"),d=r("5135"),s=r("b622"),c=r("c430"),u=s("iterator"),f=!1,p=function(){return this};[].keys&&(l=[].keys(),"next"in l?(o=i(i(l)),o!==Object.prototype&&(a=o)):f=!0),void 0==a&&(a={}),c||d(a,u)||n(a,u,p),e.exports={IteratorPrototype:a,BUGGY_SAFARI_ITERATORS:f}},b81f:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("el-collapse",{model:{value:e.activeNames,callback:function(t){e.activeNames=t},expression:"activeNames"}},[r("el-collapse-item",{attrs:{name:"1"}},[r("template",{slot:"title"},[r("div",{style:{fontSize:"16px",paddingLeft:"20px"}},[e._v(" 点这里从现有数据库创建代码 "),r("i",{staticClass:"header-icon el-icon-thumb"})])]),r("el-form",{ref:"getTableForm",attrs:{inline:!0,model:e.dbform,"label-width":"120px"}},[r("el-form-item",{attrs:{label:"数据库名",prop:"structName"}},[r("el-select",{attrs:{filterable:"",placeholder:"请选择数据库"},on:{change:e.getTable},model:{value:e.dbform.dbName,callback:function(t){e.$set(e.dbform,"dbName",t)},expression:"dbform.dbName"}},e._l(e.dbOptions,(function(e){return r("el-option",{key:e.database,attrs:{label:e.database,value:e.database}})})),1)],1),r("el-form-item",{attrs:{label:"表名",prop:"structName"}},[r("el-select",{attrs:{disabled:!e.dbform.dbName,filterable:"",placeholder:"请选择表"},model:{value:e.dbform.tableName,callback:function(t){e.$set(e.dbform,"tableName",t)},expression:"dbform.tableName"}},e._l(e.tableOptions,(function(e){return r("el-option",{key:e.tableName,attrs:{label:e.tableName,value:e.tableName}})})),1)],1),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:e.getColumn}},[e._v("使用此表创建")])],1)],1)],2)],1),r("el-divider"),r("el-form",{ref:"autoCodeForm",attrs:{rules:e.rules,model:e.form,"label-width":"120px",inline:!0}},[r("el-form-item",{attrs:{label:"Struct名称",prop:"structName"}},[r("el-input",{attrs:{placeholder:"首字母自动转换大写"},model:{value:e.form.structName,callback:function(t){e.$set(e.form,"structName",t)},expression:"form.structName"}})],1),r("el-form-item",{attrs:{label:"tableName",prop:"tableName"}},[r("el-input",{attrs:{placeholder:"指定表名（非必填）"},model:{value:e.form.tableName,callback:function(t){e.$set(e.form,"tableName",t)},expression:"form.tableName"}})],1),r("el-form-item",{attrs:{label:"Struct简称",prop:"abbreviation"}},[r("el-input",{attrs:{placeholder:"简称会作为入参对象名和路由group"},model:{value:e.form.abbreviation,callback:function(t){e.$set(e.form,"abbreviation",t)},expression:"form.abbreviation"}})],1),r("el-form-item",{attrs:{label:"Struct中文名称",prop:"description"}},[r("el-input",{attrs:{placeholder:"中文描述作为自动api描述"},model:{value:e.form.description,callback:function(t){e.$set(e.form,"description",t)},expression:"form.description"}})],1),r("el-form-item",{attrs:{label:"文件名称",prop:"packageName"}},[r("el-input",{model:{value:e.form.packageName,callback:function(t){e.$set(e.form,"packageName",t)},expression:"form.packageName"}})],1),r("el-form-item",{attrs:{label:"自动创建api"}},[r("el-checkbox",{model:{value:e.form.autoCreateApiToSql,callback:function(t){e.$set(e.form,"autoCreateApiToSql",t)},expression:"form.autoCreateApiToSql"}})],1),r("el-form-item",{attrs:{label:"自动移动文件"}},[r("el-checkbox",{model:{value:e.form.autoMoveFile,callback:function(t){e.$set(e.form,"autoMoveFile",t)},expression:"form.autoMoveFile"}})],1)],1),r("div",{staticClass:"button-box clearflex"},[r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.editAndAddField()}}},[e._v("新增Field")])],1),r("el-table",{attrs:{data:e.form.fields,border:"",stripe:""}},[r("el-table-column",{attrs:{type:"index",label:"序列",width:"100"}}),r("el-table-column",{attrs:{prop:"fieldName",label:"Field名"}}),r("el-table-column",{attrs:{prop:"fieldDesc",label:"中文名"}}),r("el-table-column",{attrs:{prop:"fieldJson",label:"FieldJson"}}),r("el-table-column",{attrs:{prop:"fieldType",label:"Field数据类型",width:"130"}}),r("el-table-column",{attrs:{prop:"dataType",label:"数据库字段类型",width:"130"}}),r("el-table-column",{attrs:{prop:"dataTypeLong",label:"数据库字段长度",width:"130"}}),r("el-table-column",{attrs:{prop:"columnName",label:"数据库字段",width:"130"}}),r("el-table-column",{attrs:{prop:"comment",label:"数据库字段描述",width:"130"}}),r("el-table-column",{attrs:{prop:"fieldSearchType",label:"搜索条件",width:"130"}}),r("el-table-column",{attrs:{label:"操作",width:"300"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{size:"mini",type:"primary",icon:"el-icon-edit"},on:{click:function(r){return e.editAndAddField(t.row)}}},[e._v("编辑")]),r("el-button",{attrs:{size:"mini",type:"text",disabled:0==t.$index},on:{click:function(r){return e.moveUpField(t.$index)}}},[e._v("上移")]),r("el-button",{attrs:{size:"mini",type:"text",disabled:t.$index+1==e.form.fields.length},on:{click:function(r){return e.moveDownField(t.$index)}}},[e._v("下移")]),r("el-popover",{attrs:{placement:"top"},model:{value:t.row.visible,callback:function(r){e.$set(t.row,"visible",r)},expression:"scope.row.visible"}},[r("p",[e._v("确定删除吗？")]),r("div",{staticStyle:{"text-align":"right",margin:"0"}},[r("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(e){t.row.visible=!1}}},[e._v("取消")]),r("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(r){return e.deleteField(t.$index)}}},[e._v("确定")])],1),r("el-button",{attrs:{slot:"reference",size:"mini",type:"danger",icon:"el-icon-delete"},slot:"reference"},[e._v("删除")])],1)]}}])})],1),r("el-tag",{attrs:{type:"danger"}},[e._v("id , created_at , updated_at , deleted_at 会自动生成请勿重复创建")]),r("div",{staticClass:"button-box clearflex"},[r("el-button",{attrs:{type:"primary"},on:{click:e.enterForm}},[e._v("生成代码")])],1),r("el-dialog",{attrs:{title:"组件内容",visible:e.dialogFlag},on:{"update:visible":function(t){e.dialogFlag=t}}},[e.dialogFlag?r("FieldDialog",{ref:"fieldDialog",attrs:{dialogMiddle:e.dialogMiddle}}):e._e(),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:e.closeDialog}},[e._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:e.enterDialog}},[e._v("确 定")])],1)],1)],1)},o=[],l=(r("a4d3"),r("e01a"),r("d81d"),r("45fc"),r("a434"),r("d3b7"),r("3ca3"),r("ddb0"),r("2b3d"),r("96cf"),r("1da1")),i=r("c77a"),n=r("2a18"),d=r("47fe"),s={fieldName:"",fieldDesc:"",fieldType:"",dataType:"",fieldJson:"",columnName:"",dataTypeLong:"",comment:"",fieldSearchType:"",dictType:""},c={name:"autoCode",data:function(){return{activeNames:[""],dbform:{dbName:"",tableName:""},dbOptions:[],tableOptions:[],addFlag:"",fdMap:{},form:{structName:"",tableName:"",packageName:"",abbreviation:"",description:"",autoCreateApiToSql:!1,autoMoveFile:!1,fields:[]},rules:{structName:[{required:!0,message:"请输入结构体名称",trigger:"blur"}],abbreviation:[{required:!0,message:"请输入结构体简称",trigger:"blur"}],description:[{required:!0,message:"请输入结构体描述",trigger:"blur"}],packageName:[{required:!0,message:"文件名称：sys_xxxx_xxxx",trigger:"blur"}]},dialogMiddle:{},bk:{},dialogFlag:!1}},components:{FieldDialog:i["default"]},methods:{editAndAddField:function(e){this.dialogFlag=!0,e?(this.addFlag="edit",this.bk=JSON.parse(JSON.stringify(e)),this.dialogMiddle=e):(this.addFlag="add",this.dialogMiddle=JSON.parse(JSON.stringify(s)))},moveUpField:function(e){if(0!=e){var t=this.form.fields[e-1];this.form.fields.splice(e-1,1),this.form.fields.splice(e,0,t)}},moveDownField:function(e){var t=this.form.fields.length;if(e!=t-1){var r=this.form.fields[e+1];this.form.fields.splice(e+1,1),this.form.fields.splice(e,0,r)}},enterDialog:function(){var e=this;this.$refs.fieldDialog.$refs.fieldDialogFrom.validate((function(t){if(!t)return!1;e.dialogMiddle.fieldName=Object(n["toUpperCase"])(e.dialogMiddle.fieldName),"add"==e.addFlag&&e.form.fields.push(e.dialogMiddle),e.dialogFlag=!1}))},closeDialog:function(){"edit"==this.addFlag&&(this.dialogMiddle=this.bk),this.dialogFlag=!1},deleteField:function(e){this.form.fields.splice(e,1)},enterForm:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!(e.form.fields.length<=0)){t.next=3;break}return e.$message({type:"error",message:"请填写至少一个field"}),t.abrupt("return",!1);case 3:if(!e.form.fields.some((function(t){return t.fieldName==e.form.structName}))){t.next=6;break}return e.$message({type:"error",message:"存在与结构体同名的字段"}),t.abrupt("return",!1);case 6:e.$refs.autoCodeForm.validate(function(){var t=Object(l["a"])(regeneratorRuntime.mark((function t(r){var a,o,l,i,s,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!r){t.next=18;break}if(e.form.structName=Object(n["toUpperCase"])(e.form.structName),e.form.structName!=e.form.abbreviation){t.next=5;break}return e.$message({type:"error",message:"structName和struct简称不能相同"}),t.abrupt("return",!1);case 5:return t.next=7,Object(d["createTemp"])(e.form);case 7:if(o=t.sent,"false"!=(null===(a=o.headers)||void 0===a?void 0:a.success)){t.next=12;break}return t.abrupt("return");case 12:e.$message({type:"success",message:"自动化代码创建成功，正在下载"});case 13:l=new Blob([o]),i="ginvueadmin.zip","download"in document.createElement("a")?(s=window.URL.createObjectURL(l),c=document.createElement("a"),c.style.display="none",c.href=s,c.setAttribute("download",i),document.body.appendChild(c),c.click(),document.body.removeChild(c),window.URL.revokeObjectURL(s)):window.navigator.msSaveBlob(l,i),t.next=19;break;case 18:return t.abrupt("return",!1);case 19:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 7:case"end":return t.stop()}}),t)})))()},getDb:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(d["getDB"])();case 2:r=t.sent,0==r.code&&(e.dbOptions=r.data.dbs);case 4:case"end":return t.stop()}}),t)})))()},getTable:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(d["getTable"])({dbName:e.dbform.dbName});case 2:r=t.sent,0==r.code&&(e.tableOptions=r.data.tables),e.dbform.tableName="";case 5:case"end":return t.stop()}}),t)})))()},getColumn:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){var r,a,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=["id","created_at","updated_at","deleted_at"],t.next=3,Object(d["getColumn"])(e.dbform);case 3:a=t.sent,0==a.code&&(o=Object(n["toHump"])(e.dbform.tableName),e.form.structName=Object(n["toUpperCase"])(o),e.form.tableName=e.dbform.tableName,e.form.packageName=o,e.form.abbreviation=o,e.form.description=o+"表",e.form.autoCreateApiToSql=!0,e.form.fields=[],a.data.columns&&a.data.columns.map((function(t){if(!r.some((function(e){return e==t.columnName}))){var a=Object(n["toHump"])(t.columnName);e.form.fields.push({fieldName:Object(n["toUpperCase"])(a),fieldDesc:t.columnComment||a+"字段",fieldType:e.fdMap[t.dataType],dataType:t.dataType,fieldJson:a,dataTypeLong:t.dataTypeLong,columnName:t.columnName,comment:t.columnComment,fieldSearchType:"",dictType:""})}})));case 5:case"end":return t.stop()}}),t)})))()}},created:function(){this.getDb(),this.setFdMap()}},u=c,f=(r("ec78"),r("2877")),p=Object(f["a"])(u,a,o,!1,null,null,null);t["default"]=p.exports},c77a:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("span",{staticStyle:{color:"red"}},[e._v("搜索时如果条件为LIKE只支持字符串")]),r("el-form",{ref:"fieldDialogFrom",attrs:{model:e.dialogMiddle,"label-width":"120px","label-position":"left",rules:e.rules}},[r("el-form-item",{attrs:{label:"Field名称",prop:"fieldName"}},[r("el-col",{attrs:{span:6}},[r("el-input",{attrs:{autocomplete:"off"},model:{value:e.dialogMiddle.fieldName,callback:function(t){e.$set(e.dialogMiddle,"fieldName",t)},expression:"dialogMiddle.fieldName"}})],1),r("el-col",{attrs:{offset:1,span:2}},[r("el-button",{on:{click:e.autoFill}},[e._v("自动填充")])],1)],1),r("el-form-item",{attrs:{label:"Field中文名",prop:"fieldDesc"}},[r("el-col",{attrs:{span:6}},[r("el-input",{attrs:{autocomplete:"off"},model:{value:e.dialogMiddle.fieldDesc,callback:function(t){e.$set(e.dialogMiddle,"fieldDesc",t)},expression:"dialogMiddle.fieldDesc"}})],1)],1),r("el-form-item",{attrs:{label:"FieldJSON",prop:"fieldJson"}},[r("el-col",{attrs:{span:6}},[r("el-input",{attrs:{autocomplete:"off"},model:{value:e.dialogMiddle.fieldJson,callback:function(t){e.$set(e.dialogMiddle,"fieldJson",t)},expression:"dialogMiddle.fieldJson"}})],1)],1),r("el-form-item",{attrs:{label:"数据库字段名",prop:"columnName"}},[r("el-col",{attrs:{span:6}},[r("el-input",{attrs:{autocomplete:"off"},model:{value:e.dialogMiddle.columnName,callback:function(t){e.$set(e.dialogMiddle,"columnName",t)},expression:"dialogMiddle.columnName"}})],1)],1),r("el-form-item",{attrs:{label:"数据库字段描述",prop:"comment"}},[r("el-col",{attrs:{span:6}},[r("el-input",{attrs:{autocomplete:"off"},model:{value:e.dialogMiddle.comment,callback:function(t){e.$set(e.dialogMiddle,"comment",t)},expression:"dialogMiddle.comment"}})],1)],1),r("el-form-item",{attrs:{label:"Field数据类型",prop:"fieldType"}},[r("el-col",{attrs:{span:8}},[r("el-select",{attrs:{placeholder:"请选择field数据类型",clearable:""},on:{change:e.getDbfdOptions},model:{value:e.dialogMiddle.fieldType,callback:function(t){e.$set(e.dialogMiddle,"fieldType",t)},expression:"dialogMiddle.fieldType"}},e._l(e.typeOptions,(function(e){return r("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)],1),r("el-form-item",{attrs:{label:"数据库字段类型",prop:"dataType"}},[r("el-col",{attrs:{span:8}},[r("el-select",{attrs:{disabled:!e.dialogMiddle.fieldType,placeholder:"请选择数据库字段类型",clearable:""},model:{value:e.dialogMiddle.dataType,callback:function(t){e.$set(e.dialogMiddle,"dataType",t)},expression:"dialogMiddle.dataType"}},e._l(e.dbfdOptions,(function(e){return r("el-option",{key:e.label,attrs:{label:e.label,value:e.label}})})),1)],1)],1),r("el-form-item",{attrs:{label:"数据库字段长度",prop:"dataTypeLong"}},[r("el-col",{attrs:{span:8}},[r("el-input",{attrs:{placeholder:"自定义类型必须指定长度",disabled:!e.dialogMiddle.dataType},model:{value:e.dialogMiddle.dataTypeLong,callback:function(t){e.$set(e.dialogMiddle,"dataTypeLong",t)},expression:"dialogMiddle.dataTypeLong"}})],1)],1),r("el-form-item",{attrs:{label:"Field查询条件",prop:"fieldSearchType"}},[r("el-col",{attrs:{span:8}},[r("el-select",{attrs:{placeholder:"请选择Field查询条件",clearable:""},model:{value:e.dialogMiddle.fieldSearchType,callback:function(t){e.$set(e.dialogMiddle,"fieldSearchType",t)},expression:"dialogMiddle.fieldSearchType"}},e._l(e.typeSearchOptions,(function(e){return r("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)],1)],1)],1)},o=[],l=(r("96cf"),r("1da1")),i=r("2a18"),n={name:"FieldDialog",props:{dialogMiddle:{type:Object,default:function(){return{}}}},data:function(){return{dbfdOptions:[],visible:!1,dictOptions:[],typeSearchOptions:[{label:"=",value:"="},{label:"<>",value:"<>"},{label:">",value:">"},{label:"<",value:"<"},{label:"LIKE",value:"LIKE"}],typeOptions:[{label:"字符串",value:"string"},{label:"整型",value:"int"},{label:"布尔值",value:"bool"},{label:"浮点型",value:"float64"},{label:"时间",value:"time.Time"}],rules:{fieldName:[{required:!0,message:"请输入field英文名",trigger:"blur"}],fieldDesc:[{required:!0,message:"请输入field中文名",trigger:"blur"}],fieldJson:[{required:!0,message:"请输入field格式化json",trigger:"blur"}],columnName:[{required:!0,message:"请输入数据库字段",trigger:"blur"}],fieldType:[{required:!0,message:"请选择field数据类型",trigger:"blur"}]}}},methods:{autoFill:function(){this.dialogMiddle.fieldJson=Object(i["toLowerCase"])(this.dialogMiddle.fieldName),this.dialogMiddle.columnName=Object(i["toSQLLine"])(this.dialogMiddle.fieldJson)},getDbfdOptions:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.dialogMiddle.dataType="",e.dialogMiddle.dataTypeLong="",e.dialogMiddle.fieldSearchType="",e.dialogMiddle.dictType="";case 4:case"end":return t.stop()}}),t)})))()}}},d=n,s=r("2877"),c=Object(s["a"])(d,a,o,!1,null,null,null);t["default"]=c.exports},d2bb:function(e,t,r){var a=r("825a"),o=r("3bbe");e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,r={};try{e=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set,e.call(r,[]),t=r instanceof Array}catch(l){}return function(r,l){return a(r),o(l),t?e.call(r,l):r.__proto__=l,r}}():void 0)},ddb0:function(e,t,r){var a=r("da84"),o=r("fdbc"),l=r("e260"),i=r("9112"),n=r("b622"),d=n("iterator"),s=n("toStringTag"),c=l.values;for(var u in o){var f=a[u],p=f&&f.prototype;if(p){if(p[d]!==c)try{i(p,d,c)}catch(b){p[d]=c}if(p[s]||i(p,s,u),o[u])for(var m in l)if(p[m]!==l[m])try{i(p,m,l[m])}catch(b){p[m]=l[m]}}}},e01a:function(e,t,r){"use strict";var a=r("23e7"),o=r("83ab"),l=r("da84"),i=r("5135"),n=r("861d"),d=r("9bf2").f,s=r("e893"),c=l.Symbol;if(o&&"function"==typeof c&&(!("description"in c.prototype)||void 0!==c().description)){var u={},f=function(){var e=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),t=this instanceof f?new c(e):void 0===e?c():c(e);return""===e&&(u[t]=!0),t};s(f,c);var p=f.prototype=c.prototype;p.constructor=f;var m=p.toString,b="Symbol(test)"==String(c("test")),g=/^Symbol\((.*)\)[^)]+$/;d(p,"description",{configurable:!0,get:function(){var e=n(this)?this.valueOf():this,t=m.call(e);if(i(u,e))return"";var r=b?t.slice(7,-1):t.replace(g,"$1");return""===r?void 0:r}}),a({global:!0,forced:!0},{Symbol:f})}},e163:function(e,t,r){var a=r("5135"),o=r("7b0b"),l=r("f772"),i=r("e177"),n=l("IE_PROTO"),d=Object.prototype;e.exports=i?Object.getPrototypeOf:function(e){return e=o(e),a(e,n)?e[n]:"function"==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?d:null}},e177:function(e,t,r){var a=r("d039");e.exports=!a((function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype}))},e260:function(e,t,r){"use strict";var a=r("fc6a"),o=r("44d2"),l=r("3f8c"),i=r("69f3"),n=r("7dd0"),d="Array Iterator",s=i.set,c=i.getterFor(d);e.exports=n(Array,"Array",(function(e,t){s(this,{type:d,target:a(e),index:0,kind:t})}),(function(){var e=c(this),t=e.target,r=e.kind,a=e.index++;return!t||a>=t.length?(e.target=void 0,{value:void 0,done:!0}):"keys"==r?{value:a,done:!1}:"values"==r?{value:t[a],done:!1}:{value:[a,t[a]],done:!1}}),"values"),l.Arguments=l.Array,o("keys"),o("values"),o("entries")},e2cc:function(e,t,r){var a=r("6eeb");e.exports=function(e,t,r){for(var o in t)a(e,o,t[o],r);return e}},e95a:function(e,t,r){var a=r("b622"),o=r("3f8c"),l=a("iterator"),i=Array.prototype;e.exports=function(e){return void 0!==e&&(o.Array===e||i[l]===e)}},ec78:function(e,t,r){"use strict";var a=r("2d95"),o=r.n(a);o.a}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2380d2"],{fe74:function(e,n,t){"use strict";t.r(n);var a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{"data-clazz":e.model.clazz}},[t("div",{staticClass:"panelTitle"},[e._v(e._s(e.i18n["signalEvent"]))]),t("div",{staticClass:"panelBody"},[t("DefaultDetail",{attrs:{model:e.model,onChange:e.onChange,readOnly:e.readOnly}}),t("div",{staticClass:"panelRow"},[t("div",[e._v(e._s(e.i18n["signalEvent.signal"])+"：")]),t("el-select",{staticStyle:{width:"90%","font-size":"12px"},attrs:{placeholder:e.i18n["signalEvent.signal"],value:e.model.signal,disabled:e.readOnly},on:{change:function(n){e.onChange("signal",n)}}},e._l(e.signalDefs,(function(e){return t("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1),t("div",{staticClass:"panelRow"},[t("div",[e._v("步骤：")]),t("el-input",{staticStyle:{width:"90%","font-size":"12px"},attrs:{disabled:e.readOnly,value:e.model.step,placeholder:"请输入步骤"},on:{input:function(n){e.onChange("step",n)}}})],1)],1)])},l=[],i=t("2589"),s={inject:["i18n"],components:{DefaultDetail:i["default"]},props:{model:{type:Object,default:function(){return{}}},onChange:{type:Function,default:function(){}},readOnly:{type:Boolean,default:!1},signalDefs:{type:Array,default:function(){return[]}}}},o=s,d=t("2877"),u=Object(d["a"])(o,a,l,!1,null,null,null);n["default"]=u.exports}}]);
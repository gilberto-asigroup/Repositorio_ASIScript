/**
 * Copyright (c) 2014, 2018, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore","jquery","ojs/ojcomponentcore","ojs/ojdvt-base","ojs/internal-deps/dvt/DvtTimeAxis","ojs/ojvalidation-datetime"],function(a,g,c,b,d){a.ib("oj.ojTimeAxis",g.oj.dvtBaseComponent,{widgetEventPrefix:"oj",ji:function(a,b,c){return d.TimeAxis.newInstance(a,b,c)},ih:function(){var a=this._super();a.push("oj-timeaxis");return a},Ql:function(){var a=this._super();a["oj-timeaxis-label"]={path:"labelStyle",property:"CSS_TEXT_PROPERTIES"};return a},bn:function(){return["optionChange"]},Tk:function(){var a=
this.options.translations,b=this._super();b["DvtUtilBundle.TIMEAXIS"]=a.componentName;return b},At:function(){return[]},kr:function(){function a(c){var d=typeof b.options[c];"number"!==d&&"string"!==d&&(b.options[c]=null)}this._super();var b=this;a("start");a("end")},wp:function(){null==this.options._resources&&(this.options._resources={});var b=this.options._resources,c=a.Oa.kl(a.ci.CONVERTER_TYPE_DATETIME),d=c.createConverter({hour:"numeric",minute:"2-digit",second:"2-digit"}),g=c.createConverter({hour:"numeric",
minute:"2-digit"}),l=c.createConverter({hour:"numeric"}),m=c.createConverter({month:"numeric",day:"2-digit"}),n=c.createConverter({month:"long"}),t=c.createConverter({year:"numeric"}),s=c.createConverter({month:"short"}),p=c.createConverter({year:"2-digit"}),n={seconds:d,minutes:g,hours:l,days:m,weeks:m,months:n,quarters:n,years:t},d={seconds:d,minutes:g,hours:l,days:m,weeks:m,months:s,quarters:s,years:p};b.converterFactory=c;b.converter=n;b.converterVert=d;b.axisClass="oj-timeaxis-container";b.axisLabelClass=
"oj-timeaxis-label";b.axisSeparatorClass="oj-timeaxis-separator";b.borderTopVisible=!1;b.borderRightVisible=!1;b.borderBottomVisible=!1;b.borderLeftVisible=!1;b.firstDayOfWeek=a.ub.rW()}});a.J.Ua("oj-time-axis","dvtBaseComponent",{properties:{converter:{type:"object",properties:{days:{},"default":{},hours:{},minutes:{},months:{},quarters:{},seconds:{},weeks:{},years:{}}},end:{type:"string"},scale:{type:"string",enumValues:"seconds minutes hours days weeks months quarters years".split(" ")},start:{type:"string"},
translations:{properties:{componentName:{type:"string"}}}},methods:{},extension:{Ya:"ojTimeAxis"}});a.J.register("oj-time-axis",{metadata:a.J.getMetadata("oj-time-axis")})});
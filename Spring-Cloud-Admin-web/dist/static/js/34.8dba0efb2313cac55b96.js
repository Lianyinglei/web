webpackJsonp([34],{IZQS:function(e,t,a){"use strict";function l(e,t){return a.i(n.a)({url:"/api/tenant/testitem/list",method:"post",data:t,params:e})}t.a=l;var n=a("Vo7i")},JKPY:function(e,t,a){function l(e){a("iLqZ")}var n=a("VU/8")(a("c+vW"),a("Z5r0"),l,null,null);e.exports=n.exports},Z5r0:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container calendar-list-container"},[a("el-row",[a("el-col",[a("div",{staticClass:"checkBox"},[a("el-form",{ref:"form",attrs:{model:e.searchForm}},[a("el-row",{staticClass:"row-bg",attrs:{type:"flex",justify:"space-around"}},[a("el-col",[a("el-form-item",{staticStyle:{"margin-bottom":"10px"}},[a("label",{staticClass:"search_label"},[e._v("客户名称")]),e._v(" "),a("el-input",{staticStyle:{width:"150px"},attrs:{placeholder:"请输入客户名称"},model:{value:e.searchForm.customerName,callback:function(t){e.$set(e.searchForm,"customerName",t)},expression:"searchForm.customerName"}})],1)],1),e._v(" "),a("el-col",[a("el-form-item",{staticStyle:{"margin-bottom":"10px"}},[a("label",{staticClass:"search_label"},[e._v("仪器序列号")]),e._v(" "),a("el-input",{staticStyle:{width:"150px"},attrs:{placeholder:"请输入仪器序列号"},model:{value:e.searchForm.serialNo,callback:function(t){e.$set(e.searchForm,"serialNo",t)},expression:"searchForm.serialNo"}})],1)],1),e._v(" "),a("el-col",[a("el-form-item",{staticStyle:{"margin-bottom":"10px"}},[a("label",{staticClass:"search_label"},[e._v("样本编号")]),e._v(" "),a("el-input",{staticStyle:{width:"150px"},attrs:{placeholder:"请输入开始样本编号"},model:{value:e.searchForm.startLiquid,callback:function(t){e.$set(e.searchForm,"startLiquid",t)},expression:"searchForm.startLiquid"}})],1)],1),e._v(" "),a("el-col",[a("el-form-item",{staticStyle:{"margin-bottom":"10px"}},[a("label",{staticClass:"search_label"},[e._v("至")]),e._v(" "),a("el-input",{staticStyle:{width:"150px"},attrs:{placeholder:"请输入结束样本编号"},model:{value:e.searchForm.finishLiquid,callback:function(t){e.$set(e.searchForm,"finishLiquid",t)},expression:"searchForm.finishLiquid"}})],1)],1),e._v(" "),a("el-col",[a("el-form-item",{staticStyle:{"margin-bottom":"10px"}},[a("label",{staticClass:"search_label"},[e._v("项目名称")]),e._v(" "),a("el-input",{staticStyle:{width:"150px"},attrs:{placeholder:"请输入项目名称"},model:{value:e.searchForm.project,callback:function(t){e.$set(e.searchForm,"project",t)},expression:"searchForm.project"}})],1)],1)],1),e._v(" "),a("el-row",{staticClass:"row-bg",attrs:{type:"flex",justify:"space-around"}},[a("el-col",[a("el-form-item",{staticStyle:{"margin-bottom":"10px"}},[a("label",{staticClass:"search_label"},[e._v("提交时间:")]),e._v(" "),[a("el-date-picker",{staticStyle:{width:"150px"},attrs:{type:"date",placeholder:"提交开始时间","picker-options":e.pickerBeginDateBefore,format:"yyyy-MM-dd"},model:{value:e.searchForm.startReadyTime,callback:function(t){e.$set(e.searchForm,"startReadyTime",t)},expression:"searchForm.startReadyTime"}})]],2)],1),e._v(" "),a("el-col",[a("el-form-item",{staticStyle:{"margin-bottom":"10px"}},[a("label",{staticClass:"search_label",staticStyle:{"text-align":"center"}},[e._v("至")]),e._v(" "),[a("el-date-picker",{staticStyle:{width:"150px"},attrs:{type:"date",placeholder:"提交结束时间","picker-options":e.pickerBeginDateAfter,format:"yyyy-MM-dd"},model:{value:e.searchForm.finishReadyTime,callback:function(t){e.$set(e.searchForm,"finishReadyTime",t)},expression:"searchForm.finishReadyTime"}})]],2)],1),e._v(" "),a("el-col",[a("el-form-item",{staticStyle:{"margin-bottom":"10px"}},[a("label",{staticClass:"search_label"},[e._v("试剂条码")]),e._v(" "),a("el-input",{staticStyle:{width:"150px"},attrs:{placeholder:"请输入试剂条码"},model:{value:e.searchForm.reagentBarcode,callback:function(t){e.$set(e.searchForm,"reagentBarcode",t)},expression:"searchForm.reagentBarcode"}})],1)],1),e._v(" "),a("el-col",[a("el-form-item",{staticStyle:{"margin-bottom":"10px"}},[a("label",{staticClass:"search_label"},[e._v("试剂批号")]),e._v(" "),a("el-input",{staticStyle:{width:"150px"},attrs:{placeholder:"请输入试剂批号"},model:{value:e.searchForm.reagentBatch,callback:function(t){e.$set(e.searchForm,"reagentBatch",t)},expression:"searchForm.reagentBatch"}})],1)],1),e._v(" "),a("el-col",[a("el-form-item",{staticStyle:{"margin-bottom":"10px"}},[a("label",{staticClass:"search_label"},[e._v("通用液条码")]),e._v(" "),a("el-input",{staticStyle:{width:"150px"},attrs:{placeholder:"请输入通用液条码"},model:{value:e.searchForm.commonReagentBarcode,callback:function(t){e.$set(e.searchForm,"commonReagentBarcode",t)},expression:"searchForm.commonReagentBarcode"}})],1)],1)],1),e._v(" "),a("el-row",{staticClass:"row-bg",attrs:{type:"flex",justify:"space-around"}},[a("el-col",[a("el-form-item",{staticStyle:{"margin-bottom":"10px"}},[a("label",{staticClass:"search_label"},[e._v("通用液批号")]),e._v(" "),a("el-input",{staticStyle:{width:"150px"},attrs:{placeholder:"请输入通用液批号"},model:{value:e.searchForm.commonReagentBatch,callback:function(t){e.$set(e.searchForm,"commonReagentBatch",t)},expression:"searchForm.commonReagentBatch"}})],1)],1),e._v(" "),a("el-col"),e._v(" "),a("el-col"),e._v(" "),a("el-col"),e._v(" "),a("el-col",[a("el-form-item",{staticStyle:{"padding-left":"30px"}},[a("el-button",{attrs:{type:"primary"},on:{click:e.searchClick}},[e._v("查询")]),e._v(" "),a("el-button",{attrs:{type:"danger"},on:{click:e.clearClick}},[e._v("清除")])],1)],1)],1)],1)],1),e._v(" "),a("el-tabs",{staticStyle:{"margin-top":"10px"},attrs:{type:"border-card"}},[a("el-tab-pane",{attrs:{label:"数据结果"}},[[a("el-table",{directives:[{name:"loading",rawName:"v-loading.body",value:e.loading,expression:"loading",modifiers:{body:!0}}],staticStyle:{width:"100%"},attrs:{data:e.tableData,border:""}},[a("el-table-column",{attrs:{label:"Id",width:"100",align:"center",type:"index"}}),e._v(" "),a("el-table-column",{attrs:{label:"状态",width:"100",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.customerName))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"类型",width:"100",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.serialNo))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"样本编号",width:"140",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.liquidName))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"原信号值",width:"100",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.originalSignal))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"项目名称",width:"100",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.project))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"修改后信号值",width:"100",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.signal))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"结果",width:"100",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.batch))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"单位",width:"100",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.unit))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"结果标识",width:"100",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.flag))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"导出LIS",width:"100",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.sendToLis))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"提交时间",width:"150",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.readyTime))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"报告时间",width:"150",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.readyTime))])]}}])}),e._v(" "),a("el-table-column",{attrs:{fixed:"right",label:"操作",width:"100",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:e.viewDetails}},[e._v("查看")])]}}])})],1)],e._v(" "),a("div",{staticClass:"pagination-container"},[a("el-pagination",{attrs:{"current-page":e.listQuery.page,"page-sizes":[10,20,30,40],"page-size":e.listQuery.limit,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],2),e._v(" "),a("el-tab-pane",{attrs:{label:"结果分析"}},[[a("el-tabs",{on:{"tab-click":e.handleClick},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:"乙肝五项",name:"first"}},[a("el-table",{directives:[{name:"loading",rawName:"v-loading.body",value:e.loading,expression:"loading",modifiers:{body:!0}}],staticStyle:{width:"100%"},attrs:{data:e.tableData,border:""}},[a("el-table-column",{attrs:{label:"Id",width:"200",align:"center",type:"index"}}),e._v(" "),a("el-table-column",{attrs:{label:"样本编号",width:"250",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v("HBsAg 1706 Cal1")]),e._v(" "),a("span",[e._v("HBsAg 1706 Cal2")]),e._v(" "),a("span",[e._v("HBsAg 1706 Cal3")]),e._v(" "),a("span",[e._v("HBsAg 1706 Cal4")]),e._v(" "),a("span",[e._v("HBsAg 1706 Cal5")]),e._v(" "),a("span",[e._v("HBsAg 1706 Cal6")]),e._v(" "),a("span",[e._v("1")])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"Anti-HBc",width:"250",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span"),e._v(" "),a("span"),e._v(" "),a("span"),e._v(" "),a("span"),e._v(" "),a("span"),e._v(" "),a("span"),e._v(" "),a("span",[e._v(">60")])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"Anti-HBe",width:"250",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span"),e._v(" "),a("span"),e._v(" "),a("span"),e._v(" "),a("span"),e._v(" "),a("span"),e._v(" "),a("span"),e._v(" "),a("span",[e._v("5.12")])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"Anti-HBs",width:"250",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span"),e._v(" "),a("span"),e._v(" "),a("span"),e._v(" "),a("span"),e._v(" "),a("span"),e._v(" "),a("span"),e._v(" "),a("span"),e._v(" "),a("span",[e._v("135.27")])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"HBeAg",width:"250",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span"),e._v(" "),a("span"),e._v(" "),a("span"),e._v(" "),a("span"),e._v(" "),a("span"),e._v(" "),a("span"),e._v(" "),a("span",[e._v("0.1")])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"HBsAg",width:"250",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v("0")]),e._v(" "),a("span",[e._v("0.27")]),e._v(" "),a("span",[e._v("3.95")]),e._v(" "),a("span",[e._v("32.31")]),e._v(" "),a("span",[e._v("155.05")]),e._v(" "),a("span",[e._v("527.19")]),e._v(" "),a("span",[e._v("0.05")])]}}])})],1)],1),e._v(" "),a("el-tab-pane",{attrs:{label:"传染病八项",name:"second"}},[a("el-table",{directives:[{name:"loading",rawName:"v-loading.body",value:e.loading,expression:"loading",modifiers:{body:!0}}],staticStyle:{width:"100%"},attrs:{data:e.tableData,border:""}},[a("el-table-column",{attrs:{label:"Id",width:"200",align:"center",type:"index"}}),e._v(" "),a("el-table-column",{attrs:{label:"样本编号",width:"250",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v("HBsAg 1706 Cal1")])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"Anti-HBc",width:"250",align:"center"},scopedSlots:e._u([{key:"default",fn:function(e){return[a("span")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"Anti-HBe",width:"250",align:"center"},scopedSlots:e._u([{key:"default",fn:function(e){return[a("span")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"Anti-HBs",width:"250",align:"center"},scopedSlots:e._u([{key:"default",fn:function(e){return[a("span")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"Anti-TP",width:"250",align:"center"},scopedSlots:e._u([{key:"default",fn:function(e){return[a("span")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"HBeAg",width:"250",align:"center"},scopedSlots:e._u([{key:"default",fn:function(e){return[a("span")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"HBsAg",width:"250",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v("0.27")])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"HCV",width:"250",align:"center"},scopedSlots:e._u([{key:"default",fn:function(e){return[a("span")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"HIV",width:"250",align:"center"},scopedSlots:e._u([{key:"default",fn:function(e){return[a("span")]}}])})],1)],1)],1)]],2),e._v(" "),a("el-tab-pane",{attrs:{label:"关联耗材"}},[[a("el-table",{directives:[{name:"loading",rawName:"v-loading.body",value:e.loading,expression:"loading",modifiers:{body:!0}}],staticStyle:{width:"100%"},attrs:{data:e.tableData,border:""}},[a("el-table-column",{attrs:{label:"Id",width:"200",align:"center",type:"index"}}),e._v(" "),a("el-table-column",{attrs:{label:"样本编号",width:"200",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.liquidName))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"项目名称",width:"200",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.project))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"试剂条码",width:"200",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.reagentBarcode))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"通用液条码",width:"200",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.commonReagentBarcode))])]}}])})],1)],e._v(" "),a("div",{staticClass:"pagination-container"},[a("el-pagination",{attrs:{"current-page":e.listQuery.page,"page-sizes":[10,20,30,40],"page-size":e.listQuery.limit,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],2),e._v(" "),a("el-tab-pane",{attrs:{label:"项目信息"}},[[a("el-table",{directives:[{name:"loading",rawName:"v-loading.body",value:e.loading,expression:"loading",modifiers:{body:!0}}],staticStyle:{width:"100%"},attrs:{data:e.tableData,border:""}},[a("el-table-column",{attrs:{label:"Id",width:"200",align:"center",type:"index"}}),e._v(" "),a("el-table-column",{attrs:{label:"项目名称",width:"250",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.project))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"测试方法",width:"250",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.testMethod))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"结果判定标准",width:"250",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.judgeStandard))])]}}])})],1)],e._v(" "),a("div",{staticClass:"pagination-container"},[a("el-pagination",{attrs:{"current-page":e.listQuery.page,"page-sizes":[10,20,30,40],"page-size":e.listQuery.limit,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],2),e._v(" "),a("el-tab-pane",{attrs:{label:"样本信息"}},[[a("el-table",{directives:[{name:"loading",rawName:"v-loading.body",value:e.loading,expression:"loading",modifiers:{body:!0}}],staticStyle:{width:"100%"},attrs:{data:e.tableData,border:""}},[a("el-table-column",{attrs:{label:"Id",width:"100",align:"center",type:"index"}}),e._v(" "),a("el-table-column",{attrs:{label:"样本编号",width:"150",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.liquidName))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"载架号",width:"150",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.rackNo))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"位置号",width:"150",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.positionNo))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"是否为急诊",width:"150",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.emergency))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"添加时间",width:"150",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.addTime))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"提交时间",width:"150",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.readyTime))])]}}])})],1)],e._v(" "),a("div",{staticClass:"pagination-container"},[a("el-pagination",{attrs:{"current-page":e.listQuery.page,"page-sizes":[10,20,30,40],"page-size":e.listQuery.limit,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],2)],1)],1)],1)],1)},staticRenderFns:[]}},"c+vW":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a("Dd8w"),n=a.n(l),s=a("IZQS"),r=a("NYxO");t.default={name:"calibration",data:function(){var e=this;return{tableData:[],areaData:[],area:"",stateOptions:[{value:"选项1",label:"液体类型"},{value:"选项2",label:"样本"},{value:"选项3",label:"校准品"},{value:"选项4",label:"质控品"}],loading:!1,searchForm:{customerName:"",serialNo:"",startLiquid:"",finishLiquid:"",project:"",finishReadyTime:"",startReadyTime:"",commonReagentBatch:"",commonReagentBarcode:"",reagentBatch:"",reagentBarcode:""},listQuery:{limit:10,page:1},total:null,activeName:"second",pickerBeginDateBefore:{disabledDate:function(t){var a=e.searchForm.finishReadyTime;if(a)return t.getTime()>a}},pickerBeginDateAfter:{disabledDate:function(t){var a=e.searchForm.startReadyTime;if(a)return t.getTime()<a}}}},created:function(){this.getDataList(),this.getCityData()},computed:n()({},a.i(r.b)(["elements"])),methods:{getDataList:function(){var e=this;a.i(s.a)(this.listQuery,this.searchForm).then(function(t){e.tableData=t.data.list,e.total=t.data.total})},getCityData:function(){},handleSizeChange:function(e){this.listQuery.limit=e,this.getDataList()},handleCurrentChange:function(e){this.listQuery.page=e,this.getDataList()},chooseArea:function(){this.searchForm.areaId=this.area},loadingData:function(){var e=this;e.loading=!0,setTimeout(function(){console.info("加载数据成功"),e.loading=!1},300)},searchClick:function(){var e=this;a.i(s.a)(this.listQuery,this.searchForm).then(function(t){e.loadingData(),e.tableData=t.data.list,e.total=t.data.total})},clearClick:function(){this.resetTemp()},handleClick:function(){},viewDetails:function(){},resetTemp:function(){this.searchForm={customerName:"",serialNo:"",liquidType:"",project:"",batch:"",address:"",areaId:""}}}}},iLqZ:function(e,t,a){var l=a("w/x6");"string"==typeof l&&(l=[[e.i,l,""]]),l.locals&&(e.exports=l.locals);a("rjj0")("3960f345",l,!0)},"w/x6":function(e,t,a){t=e.exports=a("FZ+f")(!1),t.push([e.i,".search_label{width:70px;display:inline-block;font-size:14px;font-weight:400;color:#333;text-align:right}.checkBox{border:1px solid #c2ccd8;padding:10px 10px 0}",""])}});
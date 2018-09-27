webpackJsonp([33],{"Fz/y":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a("Dd8w"),s=a.n(l),i=a("GLYR"),r=a("NYxO");t.default={name:"maintain",data:function(){var e=this;return{tableData:[],areaData:[],stateOptions:[{value:"选项1",label:"设备运行"},{value:"选项2",label:"日志"},{value:"选项3",label:"故障"}],area:"",loading:!1,searchForm:{customerName:"",serialNo:"",title:"",engineerName:"",type:"",address:"",areaId:"",startTime:"",finishTime:""},listQuery:{limit:10,page:1},total:null,pickerBeginDateBefore:{disabledDate:function(t){var a=e.searchForm.finishTime;if(a)return t.getTime()>a}},pickerBeginDateAfter:{disabledDate:function(t){var a=e.searchForm.startTime;if(a)return t.getTime()<a}}}},created:function(){this.getDataList(),this.getCityData()},computed:s()({},a.i(r.b)(["elements"])),methods:{getDataList:function(){var e=this;a.i(i.a)(this.listQuery,this.searchForm).then(function(t){e.tableData=t.data.list,e.total=t.data.total})},getCityData:function(){},handleSizeChange:function(e){this.listQuery.limit=e,this.getDataList()},handleCurrentChange:function(e){this.listQuery.page=e,this.getDataList()},chooseArea:function(){this.searchForm.areaId=this.area},loadingData:function(){var e=this;e.loading=!0,setTimeout(function(){console.info("加载数据成功"),e.loading=!1},300)},searchClick:function(){var e=this;a.i(i.a)(this.listQuery,this.searchForm).then(function(t){""==t.data?e.$message({message:"没有详情数据",type:"warning"}):(e.loadingData(),e.tableData=t.data.list,e.total=t.data.total)}).catch(function(){e.$message({message:"参数错误",type:"warning"})})},clearClick:function(){this.resetTemp()},viewDetails:function(){},resetTemp:function(){this.searchForm={customerName:"",serialNo:"",title:"",engineerName:"",type:"",address:"",areaId:"",logTime:""}}}}},GLYR:function(e,t,a){"use strict";function l(e,t){return a.i(s.a)({url:"/api/tenant/log/list",method:"post",data:t,params:e})}t.a=l;var s=a("Vo7i")},QVeX:function(e,t,a){function l(e){a("lEay")}var s=a("VU/8")(a("Fz/y"),a("z3jI"),l,null,null);e.exports=s.exports},Vmpf:function(e,t,a){t=e.exports=a("FZ+f")(!1),t.push([e.i,".search_label{width:70px;display:inline-block;font-size:14px;font-weight:400;color:#333;text-align:right}.el-card__header{padding:8px 20px!important;-webkit-box-sizing:border-box}.checkBox{padding:10px}.checkBox,.table_list{border:1px solid #c2ccd8}.table_list{margin-top:10px;padding:0 10px 10px}.header_style{height:50px;line-height:50px}",""])},lEay:function(e,t,a){var l=a("Vmpf");"string"==typeof l&&(l=[[e.i,l,""]]),l.locals&&(e.exports=l.locals);a("rjj0")("bd6af712",l,!0)},z3jI:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container calendar-list-container"},[a("el-row",[a("el-col",[a("div",{staticClass:"checkBox"},[a("el-form",{ref:"form",attrs:{model:e.searchForm}},[a("el-row",{staticClass:"row-bg",attrs:{type:"flex",justify:"space-around"}},[a("el-col",[a("el-form-item",{staticStyle:{"margin-bottom":"10px"}},[a("label",{staticClass:"search_label"},[e._v("发生时间")]),e._v(" "),[a("el-date-picker",{staticStyle:{width:"150px"},attrs:{type:"date",placeholder:"开始日期","picker-options":e.pickerBeginDateBefore,format:"yyyy-MM-dd"},model:{value:e.searchForm.startTime,callback:function(t){e.$set(e.searchForm,"startTime",t)},expression:"searchForm.startTime"}})]],2)],1),e._v(" "),a("el-col",[a("el-form-item",{staticStyle:{"margin-bottom":"10px"}},[a("label",{staticClass:"search_label",staticStyle:{"text-align":"center"}},[e._v("至")]),e._v(" "),[a("el-date-picker",{staticStyle:{width:"150px"},attrs:{type:"date",placeholder:"开始日期","picker-options":e.pickerBeginDateAfter,format:"yyyy-MM-dd"},model:{value:e.searchForm.finishTime,callback:function(t){e.$set(e.searchForm,"finishTime",t)},expression:"searchForm.finishTime"}})]],2)],1),e._v(" "),a("el-col",[a("el-form-item",{staticStyle:{"margin-bottom":"10px"}},[a("div",{staticClass:"select_area"},[a("label",{staticClass:"search_label"},[e._v("地区")]),e._v(" "),a("el-select",{staticStyle:{width:"150px"},attrs:{placeholder:"区域"},on:{change:e.chooseArea},model:{value:e.area,callback:function(t){e.area=t},expression:"area"}},e._l(e.areaData,function(e){return a("el-option",{key:e.id,attrs:{label:e.label,value:e.id}})}))],1)])],1),e._v(" "),a("el-col",[a("el-form-item",{staticStyle:{"margin-bottom":"10px"}},[a("label",{staticClass:"search_label"},[e._v("省份")]),e._v(" "),a("el-input",{staticStyle:{width:"150px"},attrs:{placeholder:"请输入省份名称"},model:{value:e.searchForm.address,callback:function(t){e.$set(e.searchForm,"address",t)},expression:"searchForm.address"}})],1)],1),e._v(" "),a("el-col",[a("el-form-item",[a("label",{staticClass:"search_label"},[e._v("客户名称")]),e._v(" "),a("el-input",{staticStyle:{width:"150px"},attrs:{placeholder:"请输入客户名称"},model:{value:e.searchForm.customerName,callback:function(t){e.$set(e.searchForm,"customerName",t)},expression:"searchForm.customerName"}})],1)],1)],1),e._v(" "),a("el-row",{staticClass:"row-bg",attrs:{type:"flex",justify:"space-around"}},[a("el-col",[a("el-form-item",{staticStyle:{"margin-bottom":"10px"}},[a("label",{staticClass:"search_label"},[e._v("工程师")]),e._v(" "),a("el-input",{staticStyle:{width:"150px"},attrs:{placeholder:"请输入工程师名称"},model:{value:e.searchForm.engineerName,callback:function(t){e.$set(e.searchForm,"engineerName",t)},expression:"searchForm.engineerName"}})],1)],1),e._v(" "),a("el-col",[a("el-form-item",{staticStyle:{"margin-bottom":"10px"}},[a("label",{staticClass:"search_label"},[e._v("仪器序列号")]),e._v(" "),a("el-input",{staticStyle:{width:"150px"},attrs:{placeholder:"请输入仪器序列号"},model:{value:e.searchForm.serialNo,callback:function(t){e.$set(e.searchForm,"serialNo",t)},expression:"searchForm.serialNo"}})],1)],1),e._v(" "),a("el-col",[a("el-form-item",{staticStyle:{"margin-bottom":"10px"}},[[a("label",{staticClass:"search_label"},[e._v("日志类型")]),e._v(" "),a("el-select",{staticStyle:{width:"150px"},attrs:{placeholder:"请选择"},model:{value:e.searchForm.type,callback:function(t){e.$set(e.searchForm,"type",t)},expression:"searchForm.type"}},e._l(e.stateOptions,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))]],2)],1),e._v(" "),a("el-col",[a("el-form-item",{staticStyle:{"margin-bottom":"10px"}},[a("label",{staticClass:"search_label"},[e._v("日志简要")]),e._v(" "),a("el-input",{staticStyle:{width:"150px"},attrs:{placeholder:"请输入日志简要信息"},model:{value:e.searchForm.title,callback:function(t){e.$set(e.searchForm,"title",t)},expression:"searchForm.title"}})],1)],1),e._v(" "),a("el-col",[a("el-form-item",{staticStyle:{"padding-left":"30px"}},[a("el-button",{attrs:{type:"primary"},on:{click:e.searchClick}},[e._v("查询")]),e._v(" "),a("el-button",{attrs:{type:"danger"},on:{click:e.clearClick}},[e._v("清除")])],1)],1)],1)],1)],1),e._v(" "),a("div",{staticClass:"table_list"},[a("div",{staticClass:"header_style"},[a("span",[e._v("工程师信息")]),e._v(" "),a("el-button",{staticStyle:{float:"right","margin-top":"8px"},attrs:{type:"success"}},[e._v("导出")])],1),e._v(" "),[a("el-table",{directives:[{name:"loading",rawName:"v-loading.body",value:e.loading,expression:"loading",modifiers:{body:!0}}],staticStyle:{width:"100%"},attrs:{data:e.tableData,border:""}},[a("el-table-column",{attrs:{label:"Id",width:"100",align:"center",type:"index"}}),e._v(" "),a("el-table-column",{attrs:{label:"客户名称",width:"150",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.customerName))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"仪器序列号",width:"140",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.serialNo))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"工程师",width:"140",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.engineerName))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"日志类型",width:"140",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.type))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"简要信息",width:"150",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.title))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"发生时间",width:"150",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.logTime))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"操作用户",width:"100",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.user))])]}}])}),e._v(" "),a("el-table-column",{attrs:{fixed:"right",label:"操作",width:"160",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){e.viewDetails(t.row)}}},[e._v("查看")]),e._v(" "),a("el-button",{attrs:{type:"text",size:"small"}},[e._v("仪器信息")]),e._v(" "),a("el-button",{attrs:{type:"text",size:"small"}},[e._v("客户信息")]),e._v(" "),a("el-button",{attrs:{type:"text",size:"small"}},[e._v("实验结果")])]}}])})],1)],e._v(" "),a("div",{staticClass:"pagination-container"},[a("el-pagination",{attrs:{"current-page":e.listQuery.page,"page-sizes":[10,20,30,40],"page-size":e.listQuery.limit,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],2)])],1)],1)},staticRenderFns:[]}}});
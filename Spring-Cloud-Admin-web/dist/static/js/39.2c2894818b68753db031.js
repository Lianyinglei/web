webpackJsonp([39],{Ijb6:function(e,t,a){var n=a("wjAL");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a("rjj0")("29add00f",n,!0)},SHJL:function(e,t,a){function n(e){a("Ijb6")}var r=a("VU/8")(a("qc59"),a("bfIj"),n,null,null);e.exports=r.exports},bfIj:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container calendar-list-container"},[a("div",{staticClass:"filter-container"},[a("el-button-group",[e.menuManager_btn_add?a("el-button",{attrs:{type:"primary",icon:"plus"},on:{click:e.handlerAdd}},[e._v("添加")]):e._e(),e._v(" "),e.menuManager_btn_edit?a("el-button",{attrs:{type:"primary",icon:"edit"},on:{click:e.handlerEdit}},[e._v("编辑")]):e._e(),e._v(" "),e.menuManager_btn_del?a("el-button",{attrs:{type:"primary",icon:"delete"},on:{click:e.handleDelete}},[e._v("删除")]):e._e()],1)],1),e._v(" "),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:8}},[a("el-card",{staticClass:"box-card"},[a("div",[a("div",{staticStyle:{"margin-bottom":"10px"}},[a("el-input",{attrs:{placeholder:"输入关键字进行过滤"},model:{value:e.filterText,callback:function(t){e.filterText=t},expression:"filterText"}})],1),e._v(" "),a("el-tree",{ref:"departTreer",staticClass:"filter-tree",attrs:{data:e.documentTree,props:e.defaultProps,"node-key":"id","highlight-current":"","default-expand-all":"","filter-node-method":e.filterNode},on:{"node-click":e.getNodeData}})],1)])],1),e._v(" "),a("el-col",{attrs:{span:16}},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[e._v("拥有用户")])]),e._v(" "),a("div",[a("div",{staticStyle:{"margin-bottom":"10px"}},[a("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"标签或code"},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.userHandleFilter(t)}},model:{value:e.userQuery.search,callback:function(t){e.$set(e.userQuery,"search",t)},expression:"userQuery.search"}}),e._v(" "),a("el-button",{staticStyle:{margin:"10px 0"},attrs:{type:"primary",icon:"search"},on:{click:e.userHandleFilter}},[e._v("搜索")])],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading.body",value:e.listLoading,expression:"listLoading",modifiers:{body:!0}}],staticStyle:{width:"100%"},attrs:{data:e.userData,border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{label:"id",width:"140",align:"center",type:"index"}}),e._v(" "),a("el-table-column",{attrs:{label:"姓名",width:"140",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.name))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"账户",width:"140",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.username))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"性别",width:"140",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.sex))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"修改时间",width:"140",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.updTime))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"修改人",width:"140",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.updUser))])]}}])})],1),e._v(" "),a("div",{staticClass:"block",staticStyle:{"margin-top":"10px"}},[a("el-pagination",{attrs:{"current-page":e.userQuery.currentPage,"page-sizes":[10,20,30,40],"page-size":e.userQuery.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.userQuery.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1)])],1)],1),e._v(" "),a("el-dialog",{attrs:{title:e.textMap[e.dialogStatus],visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[a("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"编码",prop:"code"}},[a("el-input",{attrs:{placeholder:"请输入编码"},model:{value:e.form.code,callback:function(t){e.$set(e.form,"code",t)},expression:"form.code"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"职位",prop:"name"}},[a("el-input",{attrs:{placeholder:"请输入职位"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.cancel("form")}}},[e._v("取 消")]),e._v(" "),"create"==e.dialogStatus?a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.create("form")}}},[e._v("确 定")]):a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.update("form")}}},[e._v("确 定")])],1)],1)],1)},staticRenderFns:[]}},mTp8:function(e,t,a){"use strict";function n(e){return a.i(d.a)({url:"/api/admin/depart/tree",method:"get",params:e})}function r(e){return a.i(d.a)({url:"/api/admin/user/departId/users",method:"post",params:e})}function i(e){return a.i(d.a)({url:"/api/admin/depart/search",method:"post",params:e})}function s(e,t){return a.i(d.a)({url:"/api/admin/depart/relation/user?userId="+e+"&departmentId="+t,method:"post"})}function o(e){return a.i(d.a)({url:"/api/admin/depart/update?isPost=2",method:"post",data:e})}function l(e){return a.i(d.a)({url:"/api/admin/depart/get/"+e,method:"get"})}function u(e){return a.i(d.a)({url:"/api/admin/depart/remove/"+e,method:"delete"})}t.a=n,t.b=r,t.c=i,t.d=s,t.e=o,t.f=l,t.g=u;var d=a("Vo7i")},qc59:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("Dd8w"),r=a.n(n),i=a("mTp8"),s=a("NYxO");t.default={name:"depart",data:function(){return{filterText:"",documentTree:[],defaultProps:{children:"children",label:"name"},listQuery:{name:void 0},userQuery:{currentPage:1,pageSize:20,search:void 0,departmentId:null,total:null},addQuery:{currentPage:1,pageSize:20,search:void 0,departmentId:null,total:null},search:"",userData:[],listLoading:!1,currendId:null,gridData:[],dialogFormVisible:!1,menuManager_btn_add:!1,menuManager_btn_edit:!1,menuManager_btn_del:!1,dialogStatus:"",textMap:{update:"编辑",create:"创建"},form:{code:"",name:"",parentId:0},formEdit:!0,rules:{code:[{required:!0,message:"请输入编码",trigger:"blur"},{min:1,max:20,message:"长度在1到20个字符",trigger:"blur"}],name:[{required:!0,message:"请输入职位",trigger:"blur"},{min:1,max:20,message:"长度在1到20个字符",trigger:"blur"}]}}},watch:{filterText:function(e){this.$refs.departTreer.filter(e)}},created:function(){this.getList(),this.menuManager_btn_add=this.elements["menuManager:btn_add"],this.menuManager_btn_del=this.elements["menuManager:btn_del"],this.menuManager_btn_edit=this.elements["menuManager:btn_edit"]},computed:r()({},a.i(s.b)(["elements"])),methods:{getList:function(){var e=this;a.i(i.a)(this.listQuery).then(function(t){e.documentTree=t.data,console.log(e.documentTree)})},filterNode:function(e,t){return!e||-1!==t.name.indexOf(e)},getNodeData:function(e){var t=this;this.formEdit||(this.formStatus="update"),this.currendId=e.id,this.userQuery.departmentId=e.id,a.i(i.b)(this.userQuery).then(function(e){t.userData=e.data.list,t.userQuery.total=e.data.total}),a.i(i.f)(e.id).then(function(e){t.form=e.data})},userHandleFilter:function(){var e=this;a.i(i.b)(this.userQuery).then(function(t){e.userData=t.data.list})},handleSizeChange:function(e){this.userQuery.pageSize=e,this.posQuery.pageSize=e},handleCurrentChange:function(e){this.userQuery.currentPage=e,this.posQuery.currentPage=e},handlerAdd:function(){if(null==this.currendId)return this.$notify({title:"提示",message:"请先选择部门节点",type:"warning"}),!1;this.dialogStatus="create",this.dialogFormVisible=!0,this.resetForm(),this.formEdit=!1,this.formStatus="create"},create:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return!1;a.i(i.e)(t.form).then(function(){t.dialogFormVisible=!1,t.getList(),t.$notify({title:"成功",message:"创建成功",type:"success",duration:2e3})})})},cancel:function(e){this.dialogFormVisible=!1,this.$refs[e].resetFields()},handlerEdit:function(){this.form.id?(this.formEdit=!1,this.dialogStatus="update",this.dialogFormVisible=!0,this.formStatus="update"):this.$notify({title:"提示",message:"请先选择节点",type:"warning",duration:2e3})},update:function(){var e=this;a.i(i.e)(this.form).then(function(){e.$notify({title:"成功",message:"更新成功",type:"success",duration:2e3}),e.dialogFormVisible=!1,e.getList()}).catch(function(){e.$notify({title:"提示",message:"未更新成功",type:"warn",duration:2e3}),e.dialogFormVisible=!1})},handleDelete:function(){var e=this;this.form.id?this.$confirm("此操作将永久删除，是否继续？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",center:!0}).then(function(){a.i(i.g)(e.currendId).then(function(){e.getList(),e.resetForm(),e.$notify({title:"成功",message:"删除成功",type:"success",duration:2e3})}).catch(function(){e.$notify({title:"提示",message:"未删除成功",type:"warn",duration:2e3})})}).catch(function(){e.$notify.info({message:"取消删除",duration:2e3})}):this.$notify({title:"提示",message:"请先选择节点",type:"warning",duration:2e3})},resetForm:function(){this.form={code:void 0,name:void 0,parentId:0}}}}},wjAL:function(e,t,a){t=e.exports=a("FZ+f")(!1),t.push([e.i,".el-tree-node__content{-ms-flex-align:center;height:26px;cursor:pointer}.custom-tree-node,.el-tree-node__content{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;align-items:center}.custom-tree-node{-webkit-box-flex:1;-ms-flex:1 1 0%;flex:1 1 0%;-ms-flex-align:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;font-size:14px;padding-right:8px}",""])}});
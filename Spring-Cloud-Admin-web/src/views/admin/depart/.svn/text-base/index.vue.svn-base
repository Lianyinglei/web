<template>
	<div class="app-container calendar-list-container">
		<div class="filter-container">
		  	<el-button-group>
			  <!-- 
				  <el-button type="primary" v-if="menuManager_btn_add" icon="plus" @click="handlerAdd">添加</el-button>
				  <el-button type="primary" v-if="menuManager_btn_edit" icon="edit" @click="handlerEdit">编辑</el-button>
				  <el-button type="primary" v-if="menuManager_btn_del" icon="delete" @click="handleDelete">删除</el-button> 
			  -->
			  <el-button type="primary" v-if="userDepartment_btn_insert" icon="plus" @click="handlerAdd">添加</el-button>
			  <el-button type="primary" v-if="userDepartment_btn_update" icon="edit" @click="handlerEdit">编辑</el-button>
			  <el-button type="primary" v-if="userDepartment_btn_remove" icon="delete" @click="handleDelete">删除</el-button>
			</el-button-group>
		</div>
		<el-row :gutter="20">
			<el-col :span="8">
			  	<el-card class="box-card">
			  	  <div>
			  	  	   <div style="margin-bottom:10px;">
				  	   <el-input
				  	     placeholder="输入关键字进行过滤"
				  	     v-model="filterText">
				  	   </el-input>
				  	   </div>
				  	   <el-tree
				  	     class="filter-tree"
				  	     :data="documentTree"
				  	     :props="defaultProps"
				  	     node-key="id"
      					 highlight-current
				  	     default-expand-all
				  	     :filter-node-method="filterNode"
				  	     ref="departTreer"
				  	     @node-click="getNodeData">
				  	   </el-tree>
			  	  </div>
			  	</el-card>
			</el-col>
			<el-col :span="16">
				<el-card class="box-card">
			  	  <div slot="header" class="clearfix">
			  	    <span>拥有用户</span>
			  	  </div>
			  	  <div>  
  	  	      		<div style="margin-bottom: 10px;">
  	  	      			<el-input @keyup.enter.native="userHandleFilter" v-model="userQuery.search" placeholder="标签或code" style="width: 200px;"></el-input>
  	  	      			<el-button type="primary" style="margin: 10px 0;" @click="userHandleFilter" icon="search">搜索</el-button>
  	  	      		</div>
  	  	      		<el-table
  	  	      		    :data="userData" v-loading.body="listLoading"
  	  	      		    border fit highlight-current-row
  	  	      		    style="width: 100%;">
  	  	      		    <el-table-column
  	  	      		      label="id"
  	  	      		      width="140"
  	  	      		      align="center" type="index">
  	  	      		    </el-table-column>
  	  	      		    <el-table-column
  	  	      		      label="姓名"
  	  	      		      width="140"
  	  	      		      align="center">
  	  	      		      <template scope="scope">
  	  	      		          <span>{{scope.row.name}}</span>
  	  	      		      </template>
  	  	      		    </el-table-column>
  	  	      		    <el-table-column
  	  	      		      label="账户"
  	  	      		      width="140"
  	  	      		      align="center">
  	  	      		      <template scope="scope">
  	  	      		          <span>{{scope.row.username}}</span>
  	  	      		      </template>
  	  	      		    </el-table-column>
  	  	      		    <el-table-column
  	  	      		      label="性别"
  	  	      		      width="140"
  	  	      		      align="center">
  	  	      		      <template scope="scope">
  	  	      		          <span>{{scope.row.sex}}</span>
  	  	      		      </template>
  	  	      		    </el-table-column>
  	  	      		    <el-table-column
  	  	      		      label="修改时间"
  	  	      		      width="140"
  	  	      		      align="center">
  	  	      		      <template scope="scope">
  	  	      		          <span>{{scope.row.updTime}}</span>
  	  	      		      </template>
  	  	      		    </el-table-column>
  	  	      		    <el-table-column
  	  	      		      label="修改人"
  	  	      		      width="140"
  	  	      		      align="center">
  	  	      		      <template scope="scope">
  	  	      		          <span>{{scope.row.updUser}}</span>
  	  	      		      </template>
  	  	      		    </el-table-column>
  	  	      		  </el-table>
  	  	      		  <div class="block" style="margin-top:10px;">
  	  	      		      <el-pagination
  	  	      		        @size-change="handleSizeChange"
  	  	      		        @current-change="handleCurrentChange"
  	  	      		        :current-page="userQuery.currentPage"
  	  	      		        :page-sizes="[10, 20, 30, 40]"
  	  	      		        :page-size="userQuery.pageSize"
  	  	      		        layout="total, sizes, prev, pager, next, jumper"
  	  	      		        :total="userQuery.total">
  	  	      		      </el-pagination>
  	  	      		    </div>
			  	  	   </el-tabs>
			  	  </div>
			  	</el-card>
			</el-col>
		</el-row>
		<el-dialog :title="textMap[dialogStatus]" :visible.sync="dialogFormVisible" >
		  <el-form :model="form" :rules="rules" ref="form" label-width="100px" > 
		  	<el-form-item label="编码" prop="code">
		      <el-input v-model="form.code"  placeholder="请输入编码" ></el-input>
		    </el-form-item>
		    <el-form-item label="职位" prop="name">
		      <el-input v-model="form.name" placeholder="请输入职位"></el-input>
		    </el-form-item>
		  </el-form>
		  <div slot="footer" class="dialog-footer">
		    <el-button @click="cancel('form')">取 消</el-button>
		   <el-button v-if="dialogStatus=='create'" type="primary" @click="create('form')">确 定</el-button>
           <el-button v-else type="primary" @click="update('form')">确 定</el-button>
		  </div>
		</el-dialog>

	</div>
</template>
<script type="text/javascript">
	let id = 1000;
	import {
		fetchTree,
		getUserData,
		getOne,
		addPos,
		removeDepart,
		checkCode
	} from 'api/auth/depart/index';
	import { mapGetters } from 'vuex';
	export default {
		name:"depart",
		data(){
			return {
				filterText:"",
				documentTree:[],
				defaultProps:{
					children:'children',
					label:'name'
				},
				listQuery:{
					name:undefined
				},
				userQuery:{
					currentPage:1,
					pageSize:20,
					search:undefined,
					departmentId:null,
					total:null,
				},
				addQuery:{
					currentPage:1,
					pageSize:20,
					search:undefined,
					departmentId:null,
					total:null,
				},
				search:"",
				userData:[],
				listLoading:false,
				currendId:null,
				gridData:[],
		        dialogFormVisible: false,
		        //menuManager_btn_add: false,
      			//menuManager_btn_edit: false,
      			//menuManager_btn_del: false,
      			userDepartment_btn_insert: false,
      			userDepartment_btn_update: false,
      			userDepartment_btn_remove: false,
      			dialogStatus: '',
      			textMap:{
      				update:"编辑",
      				create:"创建"
      			},
		        form: {
		          code: '',
		          name:'',
		          parentId:0,
		        },
		        formEdit:true,
		        rules:{
		        	code:[
		        		{required:true,message:"请输入编码",trigger:"blur"},
		        		{min:1,max:20,message:"长度在1到20个字符",trigger:"blur"}
		        	],
		        	name:[
		        		{required:true,message:"请输入职位",trigger:"blur"},
		        		{min:1,max:20,message:'长度在1到20个字符',trigger:"blur"}
		        	]
		        }
			}
		},
		watch:{
			filterText(val) {
		        this.$refs.departTreer.filter(val);
		    }
		},
		created(){
			this.getList();
			//this.menuManager_btn_add = this.elements['menuManager:btn_add'];
		    //this.menuManager_btn_del = this.elements['menuManager:btn_del'];
		    //this.menuManager_btn_edit = this.elements['menuManager:btn_edit'];
		    this.userDepartment_btn_insert = this.elements['userDepartment:btn_insert'];
		    this.userDepartment_btn_update = this.elements['userDepartment:btn_remove'];
		    this.userDepartment_btn_remove = this.elements['userDepartment:btn_update'];
		},
		computed:{
			...mapGetters([
					'elements'
				])
		},
		methods:{
			getList(){
				fetchTree(this.listQuery).then(response =>{
					this.documentTree = response.data;
					console.log(this.documentTree);
				})
			},
			filterNode(value, data) {
		        if (!value) return true;
		        return data.name.indexOf(value) !== -1;
		    },
		    getNodeData(data){
		    	if(!this.formEdit){
		    		this.formStatus = 'update';
		    	}
		    	this.currendId = data.id;
		    	this.userQuery.departmentId = data.id;
		    	getUserData(this.userQuery).then(response =>{
		    		this.userData = response.data.list;
		    		this.userQuery.total = response.data.total;
		    	});
		    	getOne(data.id).then(response =>{
		    		this.form = response.data;
		    	})
		    },
		    userHandleFilter(){
		    	getUserData(this.userQuery).then(response =>{
		    		this.userData = response.data.list;
		    	});

		    },
		    handleSizeChange(val) {
            	this.userQuery.pageSize = val;
            	this.posQuery.pageSize = val;
          	},
          	handleCurrentChange(val) {
          		this.userQuery.currentPage = val;
            	this.posQuery.currentPage = val;
          	},
		    // handleAdd(){
		    // 	var userId = '';
		    // 	//console.log(this.multipleSelection);
		    // 	for(var i = 0;i<this.multipleSelection.length;i++){
		    // 		if(i == this.multipleSelection.length - 1){
		    // 			userId += this.multipleSelection[i].id;
		    // 		}else{
		    // 			userId += this.multipleSelection[i].id + ",";
		    			
		    // 		 }
		    // 	}
		    // 	addUser(userId,this.currendId).then(() =>{
		    // 		this.dialogTableVisible = false;
		    // 		getUserData(this.userQuery).then(response =>{
			   //  		this.userData = response.data.list;
			   //  	});
			   //  	this.$notify({
	    	//           title: '成功',
	    	//           message: '添加成功',
	    	//           type: 'success',
	    	//           duration: 2000
	    	//         });
		    // 	})
		    // },
		    handlerAdd(){
		    	if(this.currendId == null){
		    		this.$notify({
  			          title: '提示',
  			          message: '请先选择部门节点',
  			          type: 'warning'
  			        });
          			return false;
		    	}else{ 
		    		this.dialogStatus = 'create';
		    		this.dialogFormVisible = true;
	      			this.resetForm();
	      			this.formEdit = false;
	      			this.formStatus = 'create';
		    	}
		    },
		    create(formName){
		    	const set = this.$refs;
		    	set[formName].validate(valid => {
		    	  if (valid) {
		    	    addPos(this.form)
		    	      .then(() => {
		    	        this.dialogFormVisible = false;
		    	       	this.getList();
		    	        this.$notify({
		    	          title: '成功',
		    	          message: '创建成功',
		    	          type: 'success',
		    	          duration: 2000
		    	        });
		    	      })
		    	  } else {
		    	    return false;
		    	  }
		    	});
		    },

		    cancel(formName){
		    	this.dialogFormVisible = false;
      			this.$refs[formName].resetFields();
		    },
		    handlerEdit(){
		    	if(this.form.id){
		    		this.formEdit = false;
        			this.dialogStatus = 'update';
        			this.dialogFormVisible = true;
        			this.formStatus = 'update';
		    	}else{
		    		this.$notify({
		    		  title: '提示',
		    		  message: '请先选择节点',
		    		  type: 'warning',
		    		  duration: 2000
		    		});
		    	}
		    },
		    update(){
		    	addPos(this.form).then(()=>{
		    		
		    		this.$notify({
		    		  title: '成功',
		    		  message: '更新成功',
		    		  type: 'success',
		    		  duration: 2000
		    		});
		    		this.dialogFormVisible = false;
		    		this.getList();
		    	}).catch(()=>{
		    		this.$notify({
		    		  title: '提示',
		    		  message: '未更新成功',
		    		  type: 'warn',
		    		  duration: 2000
		    		});
		    		this.dialogFormVisible = false;
		    	})
		    },
		    handleDelete(){
		    	if(this.form.id){
			    	this.$confirm("此操作将永久删除，是否继续？",'提示',{
			    		confirmButtonText:"确定",
			    		cancelButtonText:"取消",
			    		type:"warning",
			    		center:true
			    	}).then(() =>{
			    		removeDepart(this.currendId).then(() =>{
			    			this.getList();
			    			this.resetForm();
			    			this.$notify({
			    			  title: '成功',
			    			  message: '删除成功',
			    			  type: 'success',
			    			  duration: 2000
			    			});
			    		}).catch(()=>{
			    			this.$notify({
			    			  title: '提示',
			    			  message: '未删除成功',
			    			  type: 'warn',
			    			  duration: 2000
			    			});
			    		})
			    	}).catch(()=>{
			    		this.$notify.info({
			    		  message: '取消删除',
			    		  duration: 2000
			    		});
			    	})
		    	}else{
		    		this.$notify({
		    		  title: '提示',
		    		  message: '请先选择节点',
		    		  type: 'warning',
		    		  duration: 2000
		    		});
		    	}
		    },
		    resetForm() {
		      this.form = {
		        code: undefined,
		        name:undefined,
		        parentId:0
		      };
		    }
		}
	}
</script>

<style type="text/css">
	.el-tree-node__content{
		display: -webkit-box;
	    display: -ms-flexbox;
	    display: flex;
	    -webkit-box-align: center;
	    -ms-flex-align: center;
	    align-items: center;
	    height: 26px;
	    cursor: pointer;
	}
	.custom-tree-node {
	    flex: 1 1 0%;
	    display: flex;
	    align-items: center;
	    justify-content: space-between; 
	    font-size: 14px; 
	    padding-right: 8px;
	}
</style>
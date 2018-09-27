<template>
	<div class="app-container calendar-list-container">
		<div class="filter-container">
		  <el-button-group>
			  <!--<el-button type="primary" v-if="menuManager_btn_add" icon="plus" @click="handlerAdd">添加</el-button>--><!--userDictionary:btn_insert-->
			  <!--<el-button type="primary" v-if="menuManager_btn_edit" icon="edit" @click="handlerEdit">编辑</el-button>--><!--userDictionary:btn_update-->
			  <!--<el-button type="primary" v-if="menuManager_btn_del" icon="delete" @click="handleDelete">删除</el-button>--><!--userDictionary:btn_remove-->
			  <el-button type="primary" v-if="userDictionary_btn_insert" icon="plus" @click="handlerAdd">添加</el-button>
			  <el-button type="primary" v-if="userDictionary_btn_update" icon="edit" @click="handlerEdit">编辑</el-button>
			  <el-button type="primary" v-if="userDictionary_btn_remove" icon="delete" @click="handleDelete">删除</el-button>
		</el-button-group>
		</div>
		<el-row :gutter="20">
		  <el-col :span="8">
		  	<div>
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
				  	     :data="dataTree"
				  	     :props="defaultProps"
				  	     node-key="id"
      					 highlight-current
				  	     default-expand-all
				  	     :filter-node-method="filterNode"
				  	     ref="dictTreer"
				  	     @node-click="getNodeData">
				  	   </el-tree>
			  	  </div>
			  	</el-card>
		  	</div>
		  </el-col>
		  <el-col :span="16">
		  	<el-card class="box-card">
		  	  <div slot="header" class="clearfix">
		  	    <span>字典值</span>
		  	  </div>
		  	  <div>
		  	  	<menu-element :menuId='currentId' ref="menuElement"></menu-element>
		  	  </div>
		  	</el-card>
		  </el-col>
		</el-row>
		<el-dialog :title="textMap[dialogStatus]" :visible.sync="dialogFormVisible" >
		    <el-form :label-position="labelPosition" label-width="100px" :model="form" ref="form" :rules="rules" >
		      <el-form-item label="字典编码"   prop="dicCode">
		          <el-input v-model="form.dicCode" :disabled="formEditCode" placeholder="请输入字典编码" @blur="checkUser(form.dicCode)"></el-input>
		      </el-form-item>
		      <el-form-item label="字典项名称"   prop="itemName">
		          <el-input v-model="form.itemName" :disabled="formEdit" placeholder="请输入字典项名称"></el-input>
		      </el-form-item>
		      <el-form-item label="字典英文名称"   prop="itemEnglish">
		          <el-input v-model="form.itemEnglish" :disabled="formEdit" placeholder="请输入字典英文名称"></el-input>
		      </el-form-item>
		       <el-form-item v-if="formStatus == 'update'">
		        <el-button type="primary" @click="update">更新</el-button>
		        <el-button @click="onCancel">取消</el-button>
		      </el-form-item>
		      <el-form-item v-if="formStatus == 'create'">
		        <el-button type="primary" @click="create">保存</el-button>
		        <el-button @click="onCancel">取消</el-button>
		      </el-form-item>
		    </el-form>
		</el-dialog>
	</div>
</template>
<script>
	import {
		fetchTree,
		getObj,
		delObj,
		addObj,
		putObj,
		checkData
	} from 'api/admin/dictory/index';
	import { mapGetters } from 'vuex';
	export default {
		name:"dictory",
		components:{
			'menu-element':()=>import("./components/element")
		},
		data(){
			return {
				filterText:"",
				dataTree:[],
				defaultProps: {
		          children: 'children',
		          label: 'label'
		        },
		        listQuery:{
		        	name:undefined
		        },
		        showElement: false,
				formEdit: true,
      			formAdd: true,
      			formStatus: '',
      			currentId:0,
      			labelPosition: 'right',
      			form:{
      				dicCode:"",
      				itemName:"",
      				itemEnglish:""
      			},
      			rules:{
      			  dicCode:[{
      			    required:true,
      			    message:'请输入字典编码',
      			    trigger:"blur"
      			  },{
      			    min:1,
      			    max:2,
      			    message:'长度在1到2个字符',
      			    trigger:'blur'
      			  }],
      			  itemName:[{
      			    required:true,
      			    message:'请输入字典项名称',
      			    trigger:"blur"
      			  },{
      			    min:1,
      			    max:20,
      			    message:'长度在1到20个字符',
      			    trigger:'blur'
      			  }]
      			},
				//menuManager_btn_add: false,
      			//menuManager_btn_edit: false,
      			//menuManager_btn_del: false,
      			userDictionary_btn_insert: false,
      			userDictionary_btn_update: false,
      			userDictionary_btn_remove: false,
      			dialogFormVisible:false,
      			dialogStatus: '',
      			textMap:{
      				update:"编辑",
      				create:"创建"
      			}
			}
		},
		watch:{
			filterText(val) {
		        this.$refs.dictTreer.filter(val);
		    }
		},
		created(){
			this.getList();
			//this.menuManager_btn_add = this.elements['menuManager:btn_add'];
    		//this.menuManager_btn_del = this.elements['menuManager:btn_del'];
    		//this.menuManager_btn_edit = this.elements['menuManager:btn_edit'];
    		this.userDictionary_btn_insert = this.elements['userDictionary:btn_insert'];
    		this.userDictionary_btn_update = this.elements['userDictionary:btn_update'];
    		this.userDictionary_btn_remove = this.elements['userDictionary:btn_remove'];
		},
		computed:{
			...mapGetters([
					'elements'
				])
		},
		methods:{
			getList(){
				fetchTree(this.listQuery).then(data =>{
					this.dataTree = data.data;
					//console.log(this.dataTree);
				})
			},
			filterNode(value, data) {
		        if (!value) return true;
		        return data.label.indexOf(value) !== -1;
		    },
		    getNodeData(data){
		    	
		    	if(!this.formEdit){
		    		this.formStatus = 'update';
		    	}
		    	getObj(data.id).then(response=>{
		    		//this.form = response.data;  // 手动拼接封装的值
		    		this.form.parentId = response.data.parentId;
		    		this.form.dicCode = response.data.dicCode;
		    		this.form.itemName = response.data.itemName;
		    		this.form.itemEnglish = response.data.itemEnglish;
		    		this.form.id = response.data.id;
		    	});
		    	this.currentId = data.id;
		    	//this.form.id = data.id;
		    	this.showElement = true;
		    	this.$refs.menuElement.menuId = data.id;
		    	this.$refs.menuElement.getList();
		    },
		    handlerAdd(){
		    	this.dialogStatus = 'create';
      			this.dialogFormVisible = true;
      			this.resetForm();
      			this.formEdit = false;
      			this.formEditCode = false;
      			this.formStatus = 'create';
		    },
		    handlerEdit(){
		    	if(this.form.id){
		    		this.formEdit = false;
		    		this.formEditCode = true;
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
		    handleDelete(){
		    	if(this.form.id){
			    	this.$confirm("此操作将永久删除，是否继续？",'提示',{
			    		confirmButtonText:"确定",
			    		cancelButtonText:"取消",
			    		type:"warning",
			    		center:true
			    	}).then(() =>{
			    		delObj(this.currentId).then(() =>{
			    			this.getList();
			    			this.resetForm();
			    			this.onCancel();
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
		    update(){
		    	putObj(this.form).then(()=>{
		    		this.getList();
		    		this.$notify({
		    		  title: '成功',
		    		  message: '更新成功',
		    		  type: 'success',
		    		  duration: 2000
		    		});
		    		this.dialogFormVisible = false;
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
		    create(){
		    	addObj(this.form).then(()=>{
		    		this.getList();
		    		this.$notify({
		    		  title: '成功',
		    		  message: '创建成功',
		    		  type: 'success',
		    		  duration: 2000
		    		});
		    		this.dialogFormVisible = false;
		    	})
		    },
		    onCancel(){
		    	this.formEdit = true;
		    	this.formStatus = "";
		    	this.dialogFormVisible = false;
		    },
		    resetForm(){
		    	this.form = {
		    		dicCode:"",
      				itemName:"",
      				itemEnglish:"",
      				parentId:this.currentId
		    	}
		    },
		    checkUser(value){
		       if(value != null && value != '') {
		       	// this.$message({
		        //     message: '编码不能为空',
		        //     type: 'warning'
		        //  });
			       checkData(value, this.form.parentId).then(response=>{
			        if(response.data > 0){
			           this.flag = false;
			           this.$message({
			             message: '该编码已存在',
			             type: 'warning'
			           });
			           return false;
			         }else{
			           this.flag = true;
			         }
			       })
		       }
		    }
		}
	}
</script>
<style type="text/css">

</style>

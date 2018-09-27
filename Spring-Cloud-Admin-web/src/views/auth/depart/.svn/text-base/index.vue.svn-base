<template>
	<div class="app-container calendar-list-container">
		<el-row :gutter="20">
			<el-col :span="8">
				<div style="margin-bottom:10px;">
					<el-button type="primary">初始化</el-button>
				</div>
			  	<el-card class="box-card">
			  	  <div slot="header" class="clearfix">
			  	    <span>组织架构</span>
			  	  </div>
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
				  	     @node-click="getNodeData"
				  	     
      					 :render-content="renderContent">
				  	   </el-tree>
			  	  </div>
			  	</el-card>
			</el-col>
			<el-col :span="16">
				<el-card class="box-card">
			  	  <div slot="header" class="clearfix">
			  	    <span>组织相关</span>
			  	  </div>
			  	  <div>
			  	  	  <el-tabs v-model="activeName" @tab-click="handleClick">
			  	  	      <el-tab-pane label="用户管理" name="first">
			  	  	      		<div style="margin-bottom: 10px;">
			  	  	      			<el-input @keyup.enter.native="userHandleFilter" v-model="userQuery.search" placeholder="标签或code" style="width: 200px;"></el-input>
			  	  	      			<el-button type="primary" style="margin: 10px 0;" @click="userHandleFilter">搜索</el-button>
			  	  	      			<el-button type="primary" style="margin: 10px 0;" @click="userHandleAdd">添加用户</el-button>
			  	  	      		</div>
			  	  	      		<el-table
			  	  	      		    :data="userData" v-loading.body="listLoading"
			  	  	      		    border fit highlight-current-row
			  	  	      		    style="width: 100%;">
			  	  	      		    <el-table-column
			  	  	      		      prop="name"
			  	  	      		      label="姓名"
			  	  	      		      width="180"
			  	  	      		      align="center">
			  	  	      		    </el-table-column>
			  	  	      		    <el-table-column
			  	  	      		      prop="username"
			  	  	      		      label="账户"
			  	  	      		      width="180"
			  	  	      		      align="center">
			  	  	      		    </el-table-column>
			  	  	      		    <el-table-column
			  	  	      		      prop="sex"
			  	  	      		      label="性别"
			  	  	      		      width="100"
			  	  	      		      align="center">
			  	  	      		    </el-table-column>
			  	  	      		    <el-table-column
			  	  	      		      prop="description"
			  	  	      		      label="备注"
			  	  	      		      width="180"
			  	  	      		      align="center">
			  	  	      		    </el-table-column>
			  	  	      		    <el-table-column
			  	  	      		      prop=""
			  	  	      		      label="操作"
			  	  	      		      width="100"
			  	  	      		      fixed="right"
			  	  	      		      align="center">
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
			  	  	      </el-tab-pane>
			  	  	      <el-tab-pane label="岗位管理" name="second">
				  	  	      	<div style="margin-bottom: 10px;">
				  	  	      		<el-input @keyup.enter.native="posHandleFilter" v-model="posQuery.search" placeholder="标签或code" style="width: 200px;"></el-input>
				  	  	      		<el-button type="primary" @click="posHandleFilter" style="margin: 10px 0;">搜索</el-button>
				  	  	      		<el-button type="primary" style="margin: 10px 0;" @click="posHandleAdd">添加</el-button>
				  	  	      		<!-- <el-button type="success" style="margin: 10px 0;" @click="relatedUser">关联用户</el-button>
				  	  	      		<el-button type="success" style="margin: 10px 0;">关联角色</el-button> -->
				  	  	      		<!-- <el-button type="success" style="margin: 10px 0;">数据授权</el-button> -->
				  	  	      	</div>
				  	  	      	<el-table
				  	  	      	    :data="positionData" v-loading.body="listLoading"
				  	  	      	    border fit highlight-current-row
				  	  	      	    style="width: 100%;" @row-click="openDetails">
				  	  	      	    <el-table-column
				  	  	      	      prop="name"
				  	  	      	      label="职位"
				  	  	      	      width="180"
				  	  	      	      align="center">
				  	  	      	    </el-table-column>
				  	  	      	    <el-table-column
				  	  	      	      prop="num"
				  	  	      	      label="编码"
				  	  	      	      width="180"
				  	  	      	      align="center">
				  	  	      	    </el-table-column>
				  	  	      	    <el-table-column
				  	  	      	      prop="updName"
				  	  	      	      label="最后更新人"
				  	  	      	      width="180"
				  	  	      	      align="center">
				  	  	      	    </el-table-column>
				  	  	      	    <el-table-column
				  	  	      	      prop="updUser"
				  	  	      	      label="最后更新人ID"
				  	  	      	      width="100"
				  	  	      	      align="center">
				  	  	      	    </el-table-column>
				  	  	      	    <el-table-column
				  	  	      	      prop="updTime"
				  	  	      	      label="最后更新时间"
				  	  	      	      width="180"
				  	  	      	      align="center">
				  	  	      	    </el-table-column>
				  	  	      	    <el-table-column
				  	  	      	      prop=""
				  	  	      	      label="操作"
				  	  	      	       width="100"
				  	  	      	       fixed="right"
				  	  	      	       align="center">
				  	  	      	    </el-table-column>
				  	  	      	  </el-table>
				  	  	      	  <div class="block" style="margin-top:10px;">
				  	  	      	      <el-pagination
				  	  	      	        @size-change="handleSizeChange"
				  	  	      	        @current-change="handleCurrentChange"
				  	  	      	        :current-page="posQuery.currentPage"
				  	  	      	        :page-sizes="[10, 20, 30, 40]"
				  	  	      	        :page-size="posQuery.pageSize"
				  	  	      	        layout="total, sizes, prev, pager, next, jumper"
				  	  	      	        :total="posQuery.total">
				  	  	      	      </el-pagination>
				  	  	      	    </div>
			  	  	      </el-tab-pane>
			  	  	   </el-tabs>
			  	  </div>
			  	</el-card>
			</el-col>
		</el-row>
		<el-dialog title="添加用户" :visible.sync="dialogTableVisible">
			<div style="margin-bottom: 10px;">
				<el-input @keyup.enter.native="handleFilter" v-model="userQuery.search" placeholder="标签或code" style="width: 200px;"></el-input>
				<el-button type="primary" style="margin: 10px 0;" @click="handleFilter">搜索</el-button>
				<el-button type="primary" style="margin: 10px 0;" @click="handleAdd">添加</el-button>
			</div>
		  <el-table :data="gridData" ref="multipleTable"tooltip-effect="dark" border fit highlight-current-row @selection-change="handleSelectionChange">
		  	<el-table-column type="selection" width="55" align="center"></el-table-column>
		    <el-table-column prop="name" label="姓名"  width="180"  align="center"></el-table-column>
			<el-table-column prop="username"  label="账户"  width="180"  align="center"></el-table-column>
			<el-table-column prop="sex" label="性别" width="100"  align="center"></el-table-column>
			<el-table-column prop="description" label="备注" width="180"  align="center"></el-table-column>
		  </el-table>
		</el-dialog>
		<el-dialog title="创建岗位" :visible.sync="dialogFormVisible" >
		  <el-form :model="form" :rules="rules" ref="form" label-width="100px" > 
		    <el-form-item label="职位" prop="name">
		      <el-input v-model="form.name" placeholder="请输入职位"></el-input>
		    </el-form-item>
		    <el-form-item label="编码" prop="num">
		      <el-input v-model="form.num"  placeholder="请输入编码"></el-input>
		    </el-form-item>
		  </el-form>
		  <div slot="footer" class="dialog-footer">
		    <el-button @click="cancel('form')">取 消</el-button>
		    <el-button type="primary" @click="create('form')">确 定</el-button>
		  </div>
		</el-dialog>

	</div>
</template>
<script type="text/javascript">
	let id = 1000;
	import {
		fetchTree,
		getUserData,
		getPositionData,
		addPos,
		addUser
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
					mark:1
				},
				posQuery:{
					currentPage:1,
					pageSize:20,
					search:undefined,
					parentId:null,
					total:null
				},
				addQuery:{
					currentPage:1,
					pageSize:20,
					search:undefined,
					departmentId:null,
					total:null,
					mark:0
				},
				activeName: 'first',
				search:"",
				userData:[],
				positionData:[],
				listLoading:false,
				currendId:null,
				gridData:[],
				dialogTableVisible: false,
		        dialogFormVisible: false,
		        form: {
		          name: '',
		          num:'',
		          parentId:null,
		        },
		        rules:{
		        	name:[
		        		{required:true,message:"请输入编码",trigger:"blur"},
		        		{min:3,max:20,message:"长度在3到20个字符",trigger:"blur"}
		        	],
		        	num:[
		        		{required:true,message:"请输入职位",trigger:"blur"},
		        		{min:3,max:20,message:'长度在3到20个字符',trigger:"blur"}
		        	]
		        },
		        multipleSelection: [],
		        currentRow:null
			}
		},
		watch:{
			filterText(val) {
		        this.$refs.departTreer.filter(val);
		    }
		},
		created(){
			this.getList();
		},
		computed:{
			...mapGetters([
					'elements'
				])
		},
		methods:{
			getList(){
				fetchTree(this.listQuery).then(data =>{
					this.documentTree = data;
					console.log(this.documentTree);
				})
			},
			filterNode(value, data) {
		        if (!value) return true;
		        return data.name.indexOf(value) !== -1;
		    },
		    getNodeData(data){
		    	this.currendId = data.id;
		    	this.userQuery.departmentId = data.id;
		    	getUserData(this.userQuery).then(response =>{
		    		this.userData = response.data.rows;
		    		this.userQuery.total = response.data.total;
		    	});
		    	this.posQuery.parentId = data.id;
		    	getPositionData(this.posQuery).then(response =>{
		    		this.positionData = response.data.rows;
		    		this.posQuery.total = response.data.total;
		    	})
		    },
		    handleClick(tab, event) {
		        
		    },
		    userHandleFilter(){
		    	getUserData(this.userQuery).then(response =>{
		    		this.userData = response.data.rows;
		    	});

		    },
		    posHandleFilter(){
		    	getPositionData(this.posQuery).then(response =>{
		    		this.positionData = response.data.rows;
		    	})

		    },
		    handleSizeChange(val) {
            	this.userQuery.pageSize = val;
            	this.posQuery.pageSize = val;
          	},
          	handleCurrentChange(val) {
          		this.userQuery.currentPage = val;
            	this.posQuery.currentPage = val;
          	},
          	userHandleAdd(){
          		if(this.currendId == null){
          			this.$notify({
  			          title: '提示',
  			          message: '请先选择部门节点',
  			          type: 'warning'
  			        });
          			return false;
          		}else {
          			this.dialogTableVisible = true;
          			this.addQuery.departmentId = this.currendId;
          			getUserData(this.addQuery).then(response =>{
			    		this.gridData = response.data.rows;
			    	});
          		}
          	},
          	handleSelectionChange(val) {
		        this.multipleSelection = val;
		        
		    },
		    handleFilter(){
		    	getUserData(this.userQuery).then(response =>{
		    		this.gridData = response.data.rows;
		    	});

		    },//弹层里的添加用户
		    handleAdd(){
		    	var userId = '';
		    	//console.log(this.multipleSelection);
		    	for(var i = 0;i<this.multipleSelection.length;i++){
		    		if(i == this.multipleSelection.length - 1){
		    			userId += this.multipleSelection[i].id;
		    		}else{
		    			userId += this.multipleSelection[i].id + ",";
		    			
		    		 }
		    	}
		    	addUser(userId,this.currendId).then(() =>{
		    		this.dialogTableVisible = false;
		    		getUserData(this.userQuery).then(response =>{
			    		this.userData = response.data.rows;
			    	});
			    	this.$notify({
	    	          title: '成功',
	    	          message: '添加成功',
	    	          type: 'success',
	    	          duration: 2000
	    	        });
		    	})
		    },
		    posHandleAdd(){
		    	if(this.currendId == null){
		    		this.$notify({
  			          title: '提示',
  			          message: '请先选择部门节点',
  			          type: 'warning'
  			        });
          			return false;
		    	}else{ 
		    		this.resetTemp();
		    		this.dialogFormVisible = true;

		    	}

		    },
		    create(formName){
		    	const set = this.$refs;
		    	set[formName].validate(valid => {
		    		this.form.parentId = this.currendId;
		    	  if (valid) {
		    	    addPos(this.form)
		    	      .then(() => {
		    	        this.dialogFormVisible = false;
		    	        getPositionData(this.posQuery).then(response =>{
				    		this.positionData = response.data.rows;
				    	});
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
		    resetTemp() {
		      this.form = {
		        name: undefined,
		        num:undefined
		      };
		    },
		    append(data) {
	            const newChild = { id: id++, name: 'testtest', children: [] };
	            if (!data.children) {
	              this.$set(data, 'children', []);
	            }
	            data.children.push(newChild);
	        },

	        remove(node, data) {
	            const parent = node.parent;
	            const children = parent.data.children || parent.data;
	            const index = children.findIndex(d => d.id === data.id);
	            children.splice(index, 1);
	        },
	        openDetails(row){
	        	this.currentRow = row.id;
	        },
	        relatedUser(){
	        	if(this.currentRow == null){
	        		this.$notify({
  			          title: '提示',
  			          message: '请先选择岗位',
  			          type: 'warning'
  			        });
  			        return false;
	        	}else{
	        		this.dialogTableVisible = true;
          			this.addQuery.departmentId = this.currendId;
          			getUserData(this.addQuery).then(response =>{
			    		this.gridData = response.data.rows;
			    	});
	        	}
	        },
	        renderContent(h, { node, data, store }) {
	            return (
	              <span class="custom-tree-node">
	                <span>{node.label}</span>
	                <span>
	                  <el-button size="mini" type="text" on-click={ () => this.append(data) }>添加</el-button>
	                  <el-button size="mini" type="text" on-click={ () => this.remove(node, data) }>删除</el-button>
	                </span>
	              </span>);
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
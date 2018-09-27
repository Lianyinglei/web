<template>
<div class="app-container calendar-list-container">
  <el-row>
        <el-col :gutter="24">
            <div class="filter-container" style="padding-bottom: 0">
              <el-input @keyup.enter.native="handleFilter" style="width: 200px;" class="filter-item" placeholder="姓名或账户" v-model="listQuery.name"> </el-input>
              <el-button class="filter-item" type="primary" v-waves icon="search" @click="handleFilter">搜索</el-button>
              <el-button class="filter-item"  v-if="userManager_btn_add"  style="margin-left: 10px;" @click="handleCreate" type="primary" icon="edit">添加</el-button>
            </div>
            <el-card class="box-card">      
              <el-table :key='tableKey' :data="list" v-loading.body="listLoading" border fit highlight-current-row style="width: 100%">
                <el-table-column align="center" label="序号" width="80" type="index"> <!-- <template scope="scope">
                      <span>{{scope.row.id}}</span>
                    </template> --> </el-table-column>
                <el-table-column width="110" align="center" label="姓名"> <template scope="scope">
                    <span>{{scope.row.name}}</span>
                  </template> </el-table-column>
                <el-table-column width="200" align="center" label="账户"> <template scope="scope">
                        <span>{{scope.row.username}}</span>
                      </template> </el-table-column>
                <el-table-column width="80" align="center" label="性别"> <template scope="scope">
                        <span>{{scope.row.sex}}</span>
                      </template> </el-table-column>
				<el-table-column width="150" align="center" label="手机号码"> <template scope="scope">
					    <span>{{scope.row.mobilePhone}}</span>
					  </template> </el-table-column>               
                <el-table-column width="180" align="center" label="创建人"> <template scope="scope">
                        <span>{{scope.row.crtUser}}</span>
                      </template> </el-table-column>
				<el-table-column width="180" align="center" label="创建时间"> <template scope="scope">
                      <span>{{scope.row.crtTime}}</span>
                    </template> </el-table-column>				
                <el-table-column width="180" align="center" label="最后更新人"> <template scope="scope">
                        <span>{{scope.row.updUser}}</span>
                      </template> </el-table-column>
				<el-table-column width="180" align="center" label="最后时间"> <template scope="scope">
                      <span>{{scope.row.updTime}}</span>
                    </template> </el-table-column>
                <el-table-column align="center" label="操作" width="150" fixed="right"> <template scope="scope">
                    <el-button v-if="userManager_btn_edit" size="small" type="success" @click="handleUpdate(scope.row)">编辑
                    </el-button>
                    <el-button v-if="userManager_btn_del" size="small" type="danger" @click="handleDelete(scope.row)">删除
                    </el-button>
                  </template> </el-table-column>
              </el-table>
              <div v-show="!listLoading" class="pagination-container">
                <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="listQuery.page" :page-sizes="[10,20,30, 50]" :page-size="listQuery.limit" layout="total, sizes, prev, pager, next, jumper" :total="total"> </el-pagination>
              </div>
            </el-card>
        </el-col>
  </el-row>
  <el-dialog :title="textMap[dialogStatus]" :visible.sync="dialogFormVisible" width="80%">
    <el-form :model="form" :rules="rules" ref="form" label-width="100px">
      <el-row type="flex" class="row-bg" justify="space-around">
        <el-col>
          <el-form-item label="姓名" prop="name">
            <el-input v-model="form.name" placeholder="请输入姓名" style="width:215px;"></el-input>
          </el-form-item>
          <el-form-item label="账户" prop="username">
            <el-input v-if="dialogStatus == 'create'" v-model="form.username" suffix-icon="/assets/icon/aaa.png" style="width:215px;" placeholder="请输入账户" @blur="checkUser(form.username)" > 
				<template slot="append">@chemclin.com</template>
			</el-input>
            <el-input v-else v-model="form.username" placeholder="请输入账户" style="width:215px;" readonly></el-input>
          </el-form-item>
		  <el-form-item label="性别">
            <el-select class="filter-item" v-model="form.sex" placeholder="请选择">
              <el-option v-for="item in  sexOptions" :key="item" :label="item" :value="item"> </el-option>
            </el-select>
          </el-form-item>
		  <el-form-item label="手机号码" prop="mobilePhone">
            <el-input v-model="form.mobilePhone" placeholder="请输入手机号" style="width:215px;" ></el-input>
          </el-form-item>
		  <el-form-item label="固定电话" prop="telPhone">
            <el-input v-model="form.telPhone" placeholder="请输入电话号码" style="width:215px;" ></el-input>
          </el-form-item>
       
		  <el-form-item label="APP登录" >
             <el-select v-model="form.allowApp" placeholder="请选择" @change = "chooseRole">
               <el-option
                 v-for="item in allowAppOptions"
                 :key="item.value"
                 :label="item.label"
                 :value="item.value">
               </el-option>
             </el-select>
          </el-form-item>
          <el-form-item label="角色权限" prop="groupId">
             <el-select v-model="form.groupId" placeholder="请选择" >
               <el-option
                 v-for="item in roleOptions"
                 :key="item.id"
                 :label="item.name"
                 :value="item.id">
               </el-option>
             </el-select>
           </el-form-item>
           <el-form-item label="部门选择" prop="departmentId">
              <el-select v-model="form.departmentId" placeholder="请选择" >
                <el-option
                  v-for="item in depOptions"
                  :key="item.id"
                  :label="item.name"
                  :value="item.id">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="任职状态" prop="status">
              <el-select v-model="form.status" placeholder="请选择" >
                <el-option
                  v-for="item in statusOptions"
                  :key="item.id"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
        </el-col>
        <el-col>
          <el-form-item label="地址" >
            <el-tree class="filter-tree" check-strictly :data="treeData" show-checkbox node-key="id" highlight-current :props="defaultProps" ref="areaTree" default-expand-all>
            </el-tree>
          </el-form-item>
        </el-col>
        </el-row>
      <!-- <el-form-item label="地区" >
          <el-checkbox-group v-model="checkedAreas" @change="handleCheckedCitiesChange">
              <el-checkbox v-for="area in areaOptions" :label="area.itemName" :key="area.itemName" >{{area.itemName}}</el-checkbox>
          </el-checkbox-group>
      </el-form-item> -->
      
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="cancel('form')">取 消</el-button>
      <el-button v-if="dialogStatus=='create'" type="primary" @click="create('form')">确 定</el-button>
      <el-button v-else type="primary" @click="update('form')">确 定</el-button>
    </div>
  </el-dialog>
</div>
</template>

<script>
import {
  page,
  addObj,
  getObj,
  delObj,
  putObj,
  getDictory,
  getDepartment,
  checkData,
  checkEmail,
  getArea
} from 'api/admin/user/index';
import { mapGetters } from 'vuex';
export default {
  name: 'user',
  data() {
	var checkPhone = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('手机号不能为空'));
        } else {
          const reg = /^1[3|4|5|7|8][0-9]\d{8}$/
          console.log(reg.test(value));
          if (reg.test(value)) {
            callback();
          } else {
            return callback(new Error('请输入正确的手机号'));
          }
        }
    };
    return {
      form: {
        username: undefined,
        name: undefined,
        email:'',
        sex: '男',
		    allowApp:"1",
        password: undefined,
        description: undefined,
        //checkedArea:[],
        groupId:'',
        addressTree:1,
		    mobilePhone:'',
		    telPhone:'',
        departmentId:''
      },
      rules: {
        name: [
          {
            required: true,
            message: '请输入用户',
            trigger: 'blur'
          },
          {
            min: 2,
            max: 20,
            message: '长度在 3 到 100 个字符',
            trigger: 'blur'
          }
        ],
        username: [
          {
            required: true,
            message: '请输入账户',
            trigger: 'blur'
          },
          {
            min: 3,
            max: 100,
            message: '长度在 3 到 100 个字符',
            trigger: 'blur'
          }
        ],
    		groupId: [
    			 { required: true, message: '请选择角色', trigger: 'change' }         
            ],
    		departmentId: [
    			 { required: true, message: '请选择部门', trigger: 'change' }          
            ],
    		mobilePhone: [
    			 {
    				required: true,
    				message: '请输入手机号',
    				trigger: 'blur'
    			},
            {validator: checkPhone, trigger: 'blur'}
        ]

      },
      list: null,
      total: null,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 20,
        name: undefined
      },
      sexOptions: ['男', '女'],
	    allowAppOptions:[{
                    value:"1",
                    label:"支持"
                },{
                    value:"2",
                    label:"不支持"
                }],
      roleOptions:[],
      depOptions:[],
      statusOptions:[
                      {
                        value:"1",
                        label:"在职"
                      },
                      {
                        value:"2",
                        label:"离职"
                      }
                    ],
      //checkedAreas:[],
      //areaOptions: [],
      dialogFormVisible: false,
      dialogStatus: '',
      userManager_btn_edit: false,
      userManager_btn_del: false,
      userManager_btn_add: false,
      textMap: {
        update: '编辑',
        create: '创建'
      },
      tableKey: 0,
      treeData: [],
      defaultProps: {
        children: 'children',
        label: 'name'
      },
      flag:true,
      lat:true
    }
  },
  created() {
    this.getList();
    this.getInfom();
    this.userManager_btn_edit = this.elements['userManager:btn_edit'];
    this.userManager_btn_del = this.elements['userManager:btn_del'];
    this.userManager_btn_add = this.elements['userManager:btn_add'];
  },
  computed: {
    ...mapGetters([
      'elements'
    ])
  },
  methods: {
    getList() {
      this.listLoading = true;
      page(this.listQuery)
        .then(response => {
          this.list = response.data.data.rows;
          this.total = response.data.data.total;
          this.listLoading = false;
        })
    },
    getInfom(){
      getArea().then(response =>{
        this.treeData = response.data.areaTree;
      });
      getDictory().then(response=>{
        this.roleOptions = response.data;
      });
      getDepartment().then(response=>{
        this.depOptions = response.data;
      })
    },
    handleFilter() {
      this.getList();
    },
    handleSizeChange(val) {
      this.listQuery.limit = val;
      this.getList();
    },
    handleCurrentChange(val) {
      this.listQuery.page = val;
      this.getList();
    },
    handleCreate() {
      this.resetTemp();
      this.dialogStatus = 'create';
      this.dialogFormVisible = true;
      
    },
    checkUser(value){
        checkData(value).then(response=>{
          if(response.data > 0){
            this.flag = false;
            this.$message({
              message: '该用户名已存在',
              type: 'warning'
            });
            return false;
          }else{
            this.flag = true;
          }
        })
    },
    checkObj(value){
      console.log(value);
      checkEmail(value).then(response=>{
        if(response.data == 1){
          this.lat = false;
          this.$message({
            message: '该邮箱已存在',
            type: 'warning'
          });
          return false;
        }else{
          this.lat = true;
        }
      })
    },
    chooseRole(){
      //this.form.groupId = this.role;
    },
    chooseDep(){
      //this.form.departmentId = this.dep;
      //console.log(this.dep);
    },
    handleUpdate(row) {
      this.dialogFormVisible = true;
      this.dialogStatus = 'update';	  
      getObj(row.id)
        .then(response => {
          //this.form = response.data;
          this.form.id = response.data.userInfo.id;
          this.form.name = response.data.userInfo.name;
          this.form.username = response.data.userInfo.username;
          //this.form.email = response.data.userInfo.email;
          this.form.sex = response.data.userInfo.sex;
          //this.form.description = response.data.userInfo.description;
          //this.form.password = response.data.userInfo.password;
          this.form.groupId = response.data.groupId;
          this.form.departmentId =response.data.departmentList[0].id;
		      this.form.mobilePhone = response.data.userInfo.mobilePhone;
		      this.form.telPhone = response.data.userInfo.telPhone;
		      this.form.allowApp = response.data.userInfo.allowApp;
		  
          //const result = [];
          //var areaData = response.data.authAddressList;
          // for (let i = 0; i < response.data.authAddressList.length; i++) {
          //   result.push(response.data.authAddressList[i]);
          // }
          //console.log(result);
          //this.$refs.areaTree.setCheckedKeys(areaData);
          
        });
		console.log(this.form.mobilePhone);
    },
    handleDelete(row) {
      this.$confirm('此操作将永久删除, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          delObj(row.id)
            .then(() => {
              this.$notify({
                title: '成功',
                message: '删除成功',
                type: 'success',
                duration: 2000
              });
              const index = this.list.indexOf(row);
              this.list.splice(index, 1);
            });
        });
    },
    create(formName) {
      const set = this.$refs;
      //const nodes  = this.$refs.areaTree.getCheckedNodes();
      //const ids = [];
      // for(let i=0;i<nodes.length;i++){
      //   ids.push(nodes[i].id);
      // };
      //this.form.addressTree = ids.join();
      //this.form.addressTree = 1;
      //this.form.groupId = this.role;
      //this.form.departmentId = this.dep;
	  this.form.username = this.form.username +"@chemclin.com";
      set[formName].validate(valid => {
        if (valid) {
          if(this.flag == false){
              this.$message({
                message: '该用户名已存在',
                type: 'warning'
              });
              return false;
          }else if(this.role == ""){
              this.$message({
                message: '请选择角色',
                type: 'warning'
              });
              return false;
          }else if(this.dep == ""){
              this.$message({
                message: '请选择部门',
                type: 'warning'
              });
              return false;
          }else{
            addObj(this.form)
            .then(() => {
              this.dialogFormVisible = false;
              this.getList();
              this.$notify({
                title: '成功',
                message: '创建成功',
                type: 'success',
                duration: 2000
              });
            }).catch(()=>{
              return false;
            })
          }
        } else {
          return false;
        }
      });
    },
    cancel(formName) {
      this.dialogFormVisible = false;
      this.$refs[formName].resetFields();
    },
    update(formName) {
      const set = this.$refs;
      set[formName].validate(valid => {
        if (valid) {
          //this.form.password = undefined;
          putObj(this.form).then(() => {
            this.getList();
            this.$notify({
              title: '成功',
              message: '修改成功',
              type: 'success',
              duration: 2000
            });
            this.dialogFormVisible = false;
          });
        } else {
          return false;
        }
      });
    },
    resetTemp() {
      this.form = {
        username: undefined,
        name: undefined,
        //email:undefined,
        sex: '男',
		    allowApp:"1",
        //password: undefined,
        //description: undefined,
        groupId:'',
        addressTree:1,
		    mobilePhone:'',
		    telPhone:'',
        departmentId:''
      };
    }
  }
}
</script>
<style type="text/css">
  .el-dialog{
    width:80%;
  }
</style>

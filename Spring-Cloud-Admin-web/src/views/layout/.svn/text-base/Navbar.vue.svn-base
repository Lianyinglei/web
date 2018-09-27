<template>

<el-menu class="navbar" mode="horizontal" :style="{backgroundImage:'url('+img+')'}">
  
  <hamburger class="hamburger-container" :toggleClick="toggleSideBar" :isActive="sidebar.opened"></hamburger>
  <!-- <levelbar></levelbar> -->
  <!-- <tabs-view></tabs-view> -->
  <div class="title_manager">科美诊断智能云+平台</div>
  <error-log v-if="log.length>0" class="errLog-container" :logsList="log"></error-log>
  <!-- <screenfull class='screenfull'></screenfull> -->
  <el-dropdown class="avatar-container" trigger="click">
    <div class="avatar-wrapper"> <img class="user-avatar" :src="avatar"><b style="display:inline-block;">超级管理员</b><i class="el-icon-caret-bottom"></i> </div>
    <el-dropdown-menu class="user-dropdown" slot="dropdown">
      <router-link class='inlineBlock' to="/">
        <el-dropdown-item> 首页 </el-dropdown-item>
      </router-link>
      <!-- <router-link class='inlineBlock' to="/personFormation/index">
      <el-dropdown-item divided><span style="display:block;">个人信息</span></el-dropdown-item>
       </router-link> -->
      <el-dropdown-item divided><span style="display:block;" @click="modPassward">修改密码</span></el-dropdown-item>
      <el-dropdown-item divided><span @click="logout" style="display:block;">退出登录</span></el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
  <el-dialog title="修改密码" :visible.sync="dialogFormVisible" width="30%" >
    <el-form :model="form" :label-position="labelPosition" label-width="80px" :rules="rules2" ref="form">
      <el-form-item label="原始密码" prop="pass" >
        <el-input type="password" v-model="form.pass" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="新密码" prop="newpass">
        <el-input  type="password" v-model="form.newpass" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="surepass">
        <el-input type="password" v-model="form.surepass" auto-complete="off"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="cancel('form')">取 消</el-button>
      <el-button type="primary" @click="create('form')">确 定</el-button>
    </div>
  </el-dialog>
</el-menu>

</template>

<script>
import {
  mapGetters
} from 'vuex';
import Levelbar from './Levelbar';
import TabsView from './TabsView';
import Hamburger from 'components/Hamburger';
import Screenfull from 'components/Screenfull';
import ErrorLog from 'components/ErrLog';
import errLogStore from 'store/errLog';
import backgroundPic from "assets/dashboard/top_bg.png" ;
import {putPassWord,getCurrentUserInfo} from 'api/admin/user/index';
import Avtor from 'assets/dashboard/avtor.png';
export default {
  components: {
    Levelbar,
    TabsView,
    Hamburger,
    ErrorLog,
    Screenfull
  },
  data() {
    var validatePass = (rule,value,callback) =>{
      if(value === ""){
        callback(new Error("请输入原始密码"));
      }else{
        if(this.form.newpass !== ""){
          this.$refs.form.validateField("newpass");
        }
        callback();
      }
    };
    var validatePass2 = (rule,value,callback) =>{
      if(value === ""){
        callback(new Error("请输入新密码"));
      }else if(value === this.form.pass){
        callback(new Error('新密码不能与原始密码相同'));
      }else {
        callback();
      }
    };
    var validatePass3 = (rule,value,callback) =>{
      if(value === ""){
        callback(new Error("请再次输入密码"));
      }else if(value !== this.form.newpass){
        callback(new Error('两次输入密码不一致'));
      }else {
        callback();
      }
    }
    return {
      avatar:Avtor,
      log: errLogStore.state.errLog,
      img:backgroundPic,
      dialogFormVisible: false,
      labelPosition:'right',
      form: {
        pass:"",
        newpass:"",
        surepass:""
      },
      formObj:{
        oldPwd:"",
        newPwd:""
      },
      rules2:{
        pass:[
          { 
            required: true,
            message: '请输入原始密码', 
            trigger: 'blur' 
          },
          {
            min:6,
            max:50,
            message:'长度在 3 到 100 个字符',
            trigger:'blur'
          },
          {validator:validatePass,trigger:"blur"}
        ],
        newpass:[
          { 
            required: true,
            message: '请输入新密码', 
            trigger: 'blur' 
          },
          {
            min:6,
            max:50,
            message:'长度在 3 到 100 个字符',
            trigger:'blur'
          },
          {validator:validatePass2,trigger:'blur'}
        ],
        surepass:[
          { 
            required: true,
            message: '请输入确认密码', 
            trigger: 'blur' 
          },
          {
            min:6,
            max:50,
            message:'长度在 3 到 100 个字符',
            trigger:'blur'
          },
          {validator:validatePass3,trigger:"blur"}
        ]
      }
    }
  },
  computed: { ...mapGetters([
      'sidebar',
      'name'
    ])
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('ToggleSideBar')
    },
    logout() {
      this.$store.dispatch('FedLogOut')
        .then(() => {
          location.reload(); // 为了重新实例化vue-router对象 避免bug
        });
    },
    modPassward(){
      this.resetTemp();
      this.dialogFormVisible = true;
    },
    cancel(formName){
        this.dialogFormVisible = false;
        this.$refs[formName].resetFields();
    },
    create(formName){
      const set = this.$refs;
      set[formName].validate(valid => {
        if (valid) {
          this.formObj.oldPwd = this.form.pass;
          this.formObj.newPwd = this.form.newpass;
          putPassWord(this.formObj).then(response=>{
            if(response.rel == false){
              this.$message.error(response.data);
              return false
            }else{
              this.$notify({
                title: '成功',
                message: '创建成功',
                type: 'success',
                duration: 2000
              });
              this.dialogFormVisible = false;
            }
          });
        } else {
          return false;
        }
        //获取当前用户信息
        getCurrentUserInfo().then(response=>{
          alert(response.data.userInfo.name);
        });
      }); 
    },
    resetTemp() {
      this.form = {
          pass:"",
          newpass:"",
          surepass:""
      };
      
    },
    getCurrentUserInfo(){
      getCurrentUserInfo().then(response=>{
        alert(response.data.userInfo.name);
      });
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.navbar {
    height: 60px;
    line-height: 60px;
    border-bottom:0;
    border-radius: 0 !important;
    .hamburger-container {
        line-height: 60px;
        height: 60px;
        float: left;
        padding: 0 10px;
        outline:none;
    }
    .title_manager{
      float: left;
      outline:none;
      height:60px;
      line-height:60px;
      color:#fff;
      font-size:20px;
      font-weight:bold;
    }
    .errLog-container {
        display: inline-block;
        position: absolute;
        right: 150px;
    }
    .screenfull {
        position: absolute;
        right: 90px;
        top: 16px;
        color: red;
    }
    .avatar-container {
        height: 50px;
        display: inline-block;
        position: absolute;
        right: 35px;
        .avatar-wrapper {
            cursor: pointer;
            margin-top: 5px;
            position: relative;
            .user-avatar {
                width: 40px;
                height: 40px;
                border-radius: 10px;
            }
            .el-icon-caret-bottom {
                position: absolute;
                right: -20px;
                top: 25px;
                font-size: 12px;
            }
        }
    }
}
</style>

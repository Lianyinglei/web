<template>

    <el-menu mode="vertical" unique-opened  :default-active="$route.path" :collapse="isCollapse"  background-color="#98b3ff" text-color="#fff" active-text-color="#ffd04b" class="el-menu-vertical-demo"> 
      <logo :isCollapse="isCollapse"></logo>
      <div>
      <sidebar-item :routes='permissionMenus'></sidebar-item>
      </div>
    </el-menu>
</template>


<script>
  import { mapGetters } from 'vuex';
  import SidebarItem from './SidebarItem';
  import logo from './logo';
  export default {
    components: { SidebarItem ,logo},
    computed: {
      ...mapGetters([
        'sidebar',
        'permissionMenus'
      ]),
      isCollapse() {
        return !this.sidebar.opened
      }
    },
    
    methods:{
      // handleOpen(key,keyPath){
      //   console.log(key,keyPath);
      // }
    }
  }
</script>
<style type="text/css">
  .el-menu{
    border-radius: 0;
    border-right:0;
  }
  .sidebar-container{
    background: #98b3ff !important;
  }
  .el-submenu{
    background: #98b3ff;
  }
  .el-submenu__title span{
    color: #fff;
  }
  .el-menu-item span{
    color: #fff;
  }
  
</style>

import Vue from 'vue';
import Router from 'vue-router';
const _import = require('./_import_' + process.env.NODE_ENV);
// in development env not use Lazy Loading,because Lazy Loading large page will cause webpack hot update too slow.so only in production use Lazy Loading

Vue.use(Router);

/* layout */
import Layout from '../views/layout/Layout';

/**
 * icon : the icon show in the sidebar
 * hidden : if `hidden:true` will not show in the sidebar
 * redirect : if `redirect:noredirect` will no redirct in the levelbar
 * noDropdown : if `noDropdown:true` will has no submenu
 * meta : { role: ['admin'] }  will control the page role
 **/
export const constantRouterMap = [
  {
    path: '',
    component: Layout,
    redirect: '/dashboard'
  },{
  path: '/login',
  component: _import('login/index'),
  hidden: true
},
{
  path: '/authredirect',
  component: _import('login/authredirect'),
  hidden: true
},
{
  path: '/404',
  component: _import('error/404'),
  hidden: true
},
{
  path: '/401',
  component: _import('error/401'),
  hidden: true
},
{
  path: '/',
  component: Layout,
  redirect: '/dashboard/index',
  name: '首页',
  hidden: true,
  children: [{
    path: 'dashboard',
    component: _import('dashboard/index')
  }]
},
{
  path: '/introduction',
  component: Layout,
  redirect: '/introduction/index',
  icon: 'form',
  noDropdown: true,
  children: [{
    path: 'index',
    component: _import('introduction/index'),
    name: '简述'
  }]
},
{
  path: '/personFormation',
  component: Layout,
  redirect: '/personFormation/index',
  noDropdown: true,
  children: [{
    path: 'index',
    component: _import('personFormation/index'),
    name: '个人信息'
  }]
}
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({
    y: 0
  }),
  routes: constantRouterMap
});

export const asyncRouterMap = [{
  path: '/',
  icon: 'setting',
  // redirect: '/dashboard/index',
  name: '首页',
  authority: 'dashboard',
  path: '/dashboard',
  component: _import('dashboard/index')
  // children: [{
  //   path: 'dashboard',
  //   component: _import('dashboard/index')
  // }]
},{
  path: '/baseManager',
  component: Layout,
  name: '基础配置管理',
  icon: 'setting',
  authority: 'baseManager',
  children: [{
    path: 'userManager',
    icon: 'fa-user',
    component: _import('admin/user/index'),
    name: '用户管理',
    authority: 'userManager'
  }, {
    path: 'menuManager',
    icon: 'category',
    component: _import('admin/menu/index'),
    name: '菜单管理',
    authority: 'menuManager'
  }, {
    path: 'groupManager',
    icon: 'group_fill',
    component: _import('admin/group/index'),
    name: '角色权限管理',
    authority: 'groupManager'
  },{
    path: 'dictManager',
    icon: 'group_fill',
    component: _import('admin/dictory/index'),
    name: '数据字典',
    authority: 'dictManager'
  }, {
    path: 'groupTypeManager',
    icon: 'fa-users',
    component: _import('admin/groupType/index'),
    name: '角色类型管理',
    authority: 'groupTypeManager'
  }, {
    path: 'gateLogManager',
    icon: 'viewlist',
    component: _import('admin/gateLog/index'),
    name: '操作日志管理',
    authority: 'gateLogManager'
  },{
    path: 'departmentManager',
    icon: 'group_fill',
    component: _import('admin/depart/index'),
    name: ' 部门管理',
    authority: 'departmentManager'
  }]
},
{
  path: '/authManager',
  component: Layout,
  name: '服务权限管理',
  icon: 'setting',
  authority: 'authManager',
  children: [{
    path: 'serviceManager',
    component: _import('auth/service/index'),
    name: '服务管理',
    authority: 'serviceManager'
  }]
},
{
  path: '/centerManager',
  component: Layout,
  name: '数据中心',
  icon: 'setting',
  authority: 'centerManager',
  children: [{
    path: 'suppliesInform',
    component: _import('center/supplies/index'),
    name: '耗材信息',
    authority: 'suppliesInform'
  },{
    path: 'maintainRecord',
    component: _import('center/maintain/index'),
    name: '维修记录',
    authority: 'maintainRecord'
  },{
    path: 'logInform',
    component: _import('center/log/index'),
    name: '日志信息',
    authority: 'logInform'
  },{
    path: 'calibrationInform',
    component: _import('center/calibration/index'),
    name: '校准信息',
    authority: 'calibrationInform'
  },{
    path: 'qualityInform',
    component: _import('center/quality/index'),
    name: '质控信息',
    authority: 'qualityInform'
  },{
    path: 'experimentResult',
    component: _import('center/experiment/index'),
    name: '实验结果',
    authority: 'experimentResult'
  }]
},
{
  path: '/statisticAnalysis',
  component: Layout,
  name: '统计分析',
  icon: 'fa-user',
  authority: 'statisticAnalysis',
  children: [{
    path: 'customStatis',
    component: _import('analysis/customStatis/index'),
    name: '耗材统计',
    authority: 'customStatis'
  },{
    path: 'instrumentalAnaly',
    component: _import('analysis/instrumentalAnaly/index'),
    name: '仪器统计',
    authority: 'instrumentalAnaly'
  },{
    path: 'customAnaly',
    component: _import('analysis/customAnaly/index'),
    name: '客户统计',
    authority: 'customAnaly'
  },{
    path: 'checkData',
    component: _import('analysis/checkData/index'),
    name: '数据查询',
    authority: 'checkData'
  }]
},
{
  path: '/monitorManager',
  component: Layout,
  name: '监控设备中心',
  icon: 'setting',
  authority: 'monitorManager',
  children: [{
    path: 'serviceEurekaManager',
    component: _import('monitor/eureka/index'),
    name: '设备基础信息',
    authority: 'serviceEurekaManager'
  }, {
    path: 'serviceMonitorManager',
    component: _import('monitor/service/index'),
    name: '装机地图',
    authority: 'serviceMonitorManager'
  }, {
    path: 'serviceZipkinManager',
    component: _import('monitor/zipkin/index'),
    name: '客户信息',
    authority: 'serviceZipkinManager'
  },{
    path: 'engineerInfomation',
    icon: 'group_fill',
    component: _import('monitor/engineer/index'),
    name: ' 工程师信息',
    authority: 'engineerInfomation'
  }]
}];

<template>
	<div class='menu-wrapper'>
	
	<template v-for="item in routes" v-if="item.children">
		<!-- <el-menu class="el-menu-vertical-demo" :collapse="isCollapse"> -->
		<router-link v-if="item.children.length<=0" :to="'/'+item.code">
			<el-menu-item :index="item.code+'/'+item.code" class='submenu-title-noDropdown'>
				<icon-svg v-if='item.icon' :icon-class="item.icon"></icon-svg>
				<span slot="title">{{item.title}}</span>
			</el-menu-item>
		</router-link>
		<el-submenu v-else :index="item.title">
			<template slot="title" class="menu_title">
				<icon-svg v-if='item.icon' :icon-class="item.icon" style="color:#fff"></icon-svg>
				<span>{{item.title}}</span>
			</template>
			<template v-for="child in item.children">
				<sidebar-item class='nest-menu' v-if='child.children&&child.children.length>0' :routes='[child]'> </sidebar-item>
				<router-link v-else :to="'/'+item.code+'/'+child.code">
					<el-menu-item :index="item.code+'/'+child.code" >
						<icon-svg v-if='child.icon' :icon-class="child.icon" style="color:#fff"></icon-svg>
						<span>{{child.title}}</span>
					</el-menu-item>
				</router-link>
				
			</template>
		</el-submenu>
	<!-- </el-menu> -->
	</template>
	
	</div>
</template>

<script>
  export default {
    name: 'SidebarItem',
    props: {
      routes: {
        type: Array
      }
    },
    data(){
    	return {
    		isCollapse:false
    	}
    }
  }
</script>

<style rel="stylesheet/css" >
	.el-submenu__title i{
		color:#fff;
	}
</style>


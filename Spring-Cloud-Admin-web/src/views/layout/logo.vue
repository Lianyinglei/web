<template>
	<div class="logo" :style="{backgroundImage:'url('+img+')'}">
		<transition name="fade">
			<span v-if="isCollapse">
				<template>
					<img :src="kePic" style="width:30px;height:30px;top: -10px;position: relative;">
				</template>
			</span>
		</transition>
		<transition name="fade">
			<span>
				<template v-if="!isCollapse">
					<img :src="logo">
				</template>
			</span>
		</transition>
	</div>
</template>
<script type="text/javascript">
import { mapGetters } from 'vuex';
import Logo from 'assets/dashboard/logo.png';
import Sider from 'assets/dashboard/sider.png';
import ke from 'assets/dashboard/ke.png';
export default {
	name:"logo",
	data(){
      return {
        img:  Sider,
        logo: Logo,
        kePic:ke
      }
    },
    props:['isCollapse']
}
	
</script>
<style type="text/css">
	.logo{
	  height:60px;font-size: 0;text-align: center;
	}
	.logo span{
	  -webkit-box-sizing:border-box;
	  display: inline-block;
	  height:50px;
	  width:inherit;
	  margin-top: 5px;
	}
	.logo span img{
	  height:100%; 
	  width:100%;
	}
</style>
<template>
	<el-row>
    	<el-col :span="24">
    		<el-card class="box-card">

    		</el-card>
    		<el-card class="box-card" style="margin-top:20px;">
    			<div style="height:450px;border:#ccc solid 1px;" id="dituContent"></div>
    			<!-- <div class="amap-page-container" >
			      <el-amap vid="amapDome"  class="amap-demo" :zoom="zoom" :center="center">
			        <el-amap-marker 
			        	v-for="marker in markers"
			        	:position="marker.position" 
			        	:events = "marker.events"  
			        	:visible="marker.visible"
			        	>	
			        </el-amap-marker>
			      </el-amap>
			      <el-amap-info-window 
			      v-if="window" 
			      :position="window.position" 
			      :visible="window.visible" 
			      :content="window.content"
			      :events = "window.events">
			      </el-amap-info-window>
			    </div> -->
    		</el-card>
    	</el-col>
    </el-row>
</template>
<script type="text/javascript">
	//import BMap from 'BMap';
	import {getCustomer} from 'api/monitor/sevice/index';
    import { mapGetters } from 'vuex';
	export default{
		name:"sevice",
		data(){
			return {
				// zoom:15,//地图缩放级别
				// center:[118.394108, 31.36602],//用户当前位置经纬度
				// resizeEnable: true,
				 coverDatas:[],//遮盖物集合
				// markers:[],
				// windows:[],//提示消息集合
				// window:''
			}
		},
		// created(){//首次加载，将经纬度传递给地图组件
  //           this.getDataList();
  //           //this.initMap();
  //       },
        mounted(){
        	this.getDataList();
        	
        },
        computed:{
            ...mapGetters([
                    'elements'
                ])
        },
		methods:{
			getDataList(){
				getCustomer().then(response =>{
					this.coverDatas=response.data;
					//console.log(this.coverDatas);
					this.initMap();
				})
			},
			initMap(){
				this.createMap();
				this.addMarker();
				this.setMapEvent();
			},
			createMap(){
				var map = new BMap.Map("dituContent",{enableMapClick:true});//在百度地图容器中创建一个地图
				var point = new BMap.Point(118.384108, 31.36602);//	定义一个中心点坐标
				map.centerAndZoom(point,18)//设定地图的中心点和坐标并将地图显示在地图容器中
				map.setCurrentCity("杭州");
				window.map = map;//将map变量储存在全局
			},
			setMapEvent(){
		        map.enableDragging();//启用地图拖拽事件，默认启用(可不写)
		        map.enableScrollWheelZoom(true);//启用地图滚轮放大缩小
		        map.enableDoubleClickZoom();//启用鼠标双击放大，默认启用(可不写)
		        map.enableKeyboard();//启用键盘上下左右键移动地图
		    },
			addMarker(){
				var myIcon = new BMap.Icon("http://api.map.baidu.com/img/markers.png", new BMap.Size(23, 25), {  
                        offset: new BMap.Size(10, 25), // 指定定位位置  
                        imageOffset: new BMap.Size(0, 0 - 10 * 25) // 设置图片偏移  
                });
				var markerArr = this.coverDatas;
				for(var i=0;i<markerArr.length;i++){
					var json = markerArr[i];
					var p0 = json.location[0];
					var p1 = json.location[1];
					var point = new BMap.Point(p0,p1);
					//var marker = new BMap.Marker(point,{"icon":myIcon});
					//文字提示
					var label = new BMap.Label(json.name,{ offset: new BMap.Size(20, 0)});
					
					//文字添加样式
					label.setStyle({
						borderColor:'#808080',
						color:'#333',
						cursor:'pointer'
					});
					var info = "<b class='title' title='"+json.name+"'>"+json.name+"</b><div class='content'>"+json.address+"</div>";
					var marker = this.creatMarker(p0,p1,info);
					map.addOverlay(marker);
					marker.setLabel(label);
				}
			},
			creatMarker(lng,lat,info_html){
				var _marker = new BMap.Marker(new BMap.Point(lng,lat));
				_marker.addEventListener("click",function(e){
					this.openInfoWindow(new BMap.InfoWindow(info_html));
				});
				_marker.addEventListener("mouseover",function(e){
					this.setTitle("位于"+lng +","+lat);
				});
				return _marker;
			}

		}
	}
	

</script>
<style type="text/css">
	/*.amap-page-container{
		height:500px;
	}
	.prompt {
      background: white;
      width: 100px;
      height: 30px;
      text-align: center;
      z-index: 9999;
    }*/
    .BMap_cpyCtrl {
        display: none;
    }
    
    .anchorBL {
        display: none;
    }
</style>

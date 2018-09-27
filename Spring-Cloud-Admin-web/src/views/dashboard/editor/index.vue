<template>
	<div class="dashboard-editor-container">
		
		<!-- <el-row class="btn-group">
			<el-col :span="4" class='text-center'>
				<router-link class="pan-btn blue-btn" to="/components/index">Components</router-link>
			</el-col>
			<el-col :span="4" class='text-center'>
				<router-link class="pan-btn light-blue-btn" to="/charts/index">Charts</router-link>
			</el-col>
			<el-col :span="4" class='text-center'>
				<router-link class="pan-btn pink-btn" to="/excel/download">Excel</router-link>
			</el-col>
			<el-col :span="4" class='text-center'>
				<router-link class="pan-btn green-btn" to="/example/table/table">Table</router-link>
			</el-col>
			<el-col :span="4" class='text-center'>
				<router-link class="pan-btn tiffany-btn" to="/example/form/edit">Form</router-link>
			</el-col>
			<el-col :span="4" class='text-center'>
				<router-link class="pan-btn yellow-btn" to="/theme/index">Theme</router-link>
			</el-col>
		</el-row> -->
		<el-row type="flex" class="row-bg text-color" justify="space-around">
			  <el-col style="width:230px;">
			    <div shadow="always" class="border_style">
			      <div class="icon_img" style="background:#6ccbc8">仪器总数量</div>
			      <div class="count_style">
			      	<count-to :start-val="0" :end-val="102400" :duration="2600" />
			      </div>
			      <div class="text_style"></div>
			    </div>
			  </el-col>
			  <el-col style="width:230px;" class="border_style">
			    <div shadow="always">
			      <div class="icon_img" style="background: #ff6d60">启用仪器数量</div>
			      <div class="count_style">
			      <count-to :start-val="0" :end-val="4323295" :duration="2600" />
			  	  </div>
			      <div class="text_style"></div>
			    </div>
			  </el-col>
			  <el-col style="width:230px;">
			    <div shadow="always" class="border_style">
			      <div class="icon_img" style="background: #f8d447">当周活跃仪器数量</div>
			      <div class="count_style">
			      	<count-to :start-val="0" :end-val="43295" :duration="2600" />
			      </div>
			      <div class="text_style"></div>
			    </div>
			  </el-col>
			  <el-col style="width:230px;">
			    <div shadow="always" class="border_style">
			      <div class="icon_img" style="background: #88a2e7">未活跃仪器数量</div>
			      <div class="count_style">
			      <count-to :start-val="0" :end-val="1323295" :duration="2600" />
			  	  </div>
			      <div class="text_style"></div>
			    </div>
			  </el-col>
			  <el-col style="width:230px;">
			    <div shadow="always" class="border_style">
			      <div class="icon_img" style="background: #56c9f1">客户数量</div>
			      <div class="count_style">
			      	<count-to :start-val="0" :end-val="433295" :duration="2600" />
			      </div>
			      <div class="text_style"></div>
			    </div>
			  </el-col>
		</el-row>

		<el-card class="box-card" style="margin-top:20px;border:1px solid #d1dbe5">
			<div slot="header" class="clearfix">
			    <span>装机地图</span>
			</div>
			<div class="text item">
				<div style="padding-top: 10px;">
					<el-form ref="form" :model="searchForm" >
						<el-row type="flex" class="row-bg" justify="space-around">
							<el-col>
								<el-form-item>
									<label class="search_label">客户名称</label>
									<el-input v-model="searchForm.name" placeholder="请输入客户名称" style="width:150px;"></el-input>
								</el-form-item>
							</el-col>
							<el-col>
								<el-form-item>
									<label class="search_label">仪器序列号</label>
									<el-input v-model="searchForm.serialNo" placeholder="请输入仪器序列号" style="width:150px;"></el-input>
								</el-form-item>
							</el-col>
							<el-col>
								<el-form-item>
									<label class="search_label">仪器型号</label>
									<el-input v-model="searchForm.type" placeholder="请输入仪器型号" style="width:150px;"></el-input>
								</el-form-item>
							</el-col>
							<!-- <el-col>
								<el-form-item>
									<label class="search_label">区域</label>
									<el-select v-model="area" placeholder="区域" @change="chooseArea" style="width:150px;">
		                              <el-option
		                                v-for="item in areaData"
		                                :key="item.id"
		                                :label="item.label"
		                                :value="item.id">
		                              </el-option>
		                          	</el-select>
								</el-form-item>
							</el-col>
							<el-col>
								<el-form-item>
									<label class="search_label">地址</label>
									<el-input v-model="searchForm.address" placeholder="请输入地址" style="width:150px;"></el-input>
								</el-form-item>
							</el-col> -->
						</el-row>
						<div style="overflow: hidden;">
						<el-form-item style="float: right;padding-right: 30px;">
						      <el-button type="primary" @click = "searchClick" >查询</el-button>
						      <el-button type="danger" @click = "clearClick">清除</el-button>
						</el-form-item>
						</div>
					</el-form>
				</div>
				<div style="height:450px;border:#ccc solid 1px;" id="dituContent"></div>
			</div>
    	</el-card>
    	<el-row :gutter="20" style="margin-top:20px;">
    		<el-col :span="12">
		    	<el-card class="box-card" style="border:1px solid #d1dbe5">
		    		<div slot="header" class="clearfix">
					    <span>仪器状态分布</span>
					    <el-button style="float: right;" type="success">导出</el-button>
					</div>
					<div>
						<template>
						  <el-table
						    :data="instData" v-loading.body="loading"
						    border
						    style="width: 100%">
						    <el-table-column label="序号"  width="190" align='center'>
						    	<template slot-scope="scope">
						    	    <span>{{scope.row.id}}</span>
						    	</template>
						    </el-table-column>
						    <el-table-column label="仪器状态"  width="190" align='center'>
						    	<template slot-scope="scope">
						    	    <span>{{scope.row.type}}</span>
						    	</template>
						    </el-table-column>
						    <el-table-column  label="数量"  width="190" align='center'>
						    	<template slot-scope="scope">
						    	    <span>{{scope.row.instCount}}</span>
						    	</template>
						    </el-table-column>
						  </el-table>
						</template>
					</div>
		    	</el-card>
		    </el-col>
		    <el-col :span="12">
		    	<el-card class="box-card" style="border:1px solid #d1dbe5">
		    		<div slot="header" class="clearfix">
					    <span>客户分布</span>
					    <el-button style="float: right;" type="success">导出</el-button>
					</div>
					<div>
						<template>
						  <el-table
						    :data="customData" v-loading.body="loading"
						    border
						    style="width: 100%">
						    <el-table-column label="序号"  width="190" align='center'>
						    	<template slot-scope="scope">
						    	    <span>{{scope.row.id}}</span>
						    	</template>
						    </el-table-column>
						    <el-table-column label="客户名称"  width="190" align='center'>
						    	<template slot-scope="scope">
						    	    <span>{{scope.row.detAddress}}</span>
						    	</template>
						    </el-table-column>
						    <el-table-column  label="仪器数量"  width="190" align='center'>
						    	<template slot-scope="scope">
						    	    <span>{{scope.row.instCount}}</span>
						    	</template>
						    </el-table-column>
						  </el-table>
						</template>
					</div>
		    	</el-card>
		    </el-col>
    	</el-row>	
		<!-- <el-row>
			<el-col :span="6">
				<el-card class="box-card" >
					<div slot="header" class="box-card-header">
						<pan-thumb class="panThumb" :image="avatar"> 你的权限:
							<span class="pan-info-roles" :key='item' v-for="item in roles">{{item}}</span>
						</pan-thumb>
					</div>
					<span class="display_name">{{name}}</span>
					<div class="info-item">
						<countTo class="info-item-num" :startVal='0' :endVal='statisticsData.article_count' :duration='3400'></countTo>
						<span class="info-item-text">文章</span>
						<icon-svg icon-class="a" class="dashboard-editor-icon"></icon-svg>
					</div>
					<div class="info-item">
						<countTo class="info-item-num" :startVal='0' :endVal='statisticsData.pageviews_count' :duration='3600'></countTo>
						<span class="info-item-text">浏览量</span>
						<icon-svg icon-class="b" class="dashboard-editor-icon"></icon-svg>
					</div>
				</el-card>
			</el-col>

			<el-col :span="8">
				<pie-chart></pie-chart>
			</el-col>

			<el-col :span="10">
				<bar-chart></bar-chart>
			</el-col>
		</el-row> -->

		<!-- <el-row :gutter="20">
			<el-col :span="15">
				<line-chart></line-chart>
			</el-col>
			<el-col :span="9">
				<todo-list></todo-list>
			</el-col>
		</el-row>
 -->
	</div>
</template>

<script>
	//import BMap from 'BMap';
	import { mapGetters } from 'vuex';
	import panThumb from 'components/PanThumb';
	import pieChart from './pieChart';
	import barChart from './barChart';
	import lineChart from './lineChart';
	import countTo from 'vue-count-to';
	import todoList from 'components/TodoList';
	import {getLocation,putSearch,getInstData,getCustData} from 'api/monitor/sevice/index';
	export default {
	  name: 'dashboard-editor',
	  components: { panThumb, countTo, pieChart, lineChart, barChart, todoList },
	  data() {
	    return {
		 statisticsData: {
	        article_count: 1024,
	        comment_count: 102400,
	        latest_article: [],
	        month_article_count: 28,
	        pageviews_count: 1024
	      },
	      searchForm:{
	      	name:"",
	      	serialNo:"",
	      	type:"",
	      	areaId:"",
	      	address:""
	      },
	      area:'',
	      instData:[],
	      customData:[],
	      areaData:[],
	      loading:false,
	      //coverDatas:[]
	    }
	  },
	  mounted(){
	  	this.getDataList();
	  	this.getCityData();
	  	//this.initMap();
	  	
	  },
	  computed: {
	    ...mapGetters([
	      'name',
	      'avatar',
	      'roles'
    	])
  	  },
  	  methods:{
  	  	getDataList(){
  	  		putSearch(this.searchForm).then(response =>{
  	  			this.coverDatas=response.data;
  	  			//console.log(this.coverDatas);
  	  			this.initMap();
  	  		})
  	  		getInstData(this.searchForm).then(response=>{
  	  			this.instData = response;
  	  		})
  	  		getCustData(this.searchForm).then(response=>{
  	  			this.customData = response;
  	  		})
  	  	},
  	  	getCityData(){
  	  		// getLocation().then(response =>{
  	  		//   this.areaData = response;
  	  		// })
  	  	},
  	  	initMap(){
  	  		this.createMap();
  	  		this.addMarker();
			this.setMapEvent();
  	  	},
  	  	createMap(){
  	  		var map = new BMap.Map("dituContent",{enableMapClick:true});//在百度地图容器中创建一个地图
  	  		var point = new BMap.Point(116.236376, 40.078824);//	定义一个中心点坐标
  	  		map.centerAndZoom(point,28)//设定地图的中心点和坐标并将地图显示在地图容器中
  	  		map.setCurrentCity("北京");
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
				var p0 = json.lng;
				var p1 = json.lat;
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
		},
		chooseArea(){
			this.searchForm.areaId = this.area;
		},
		searchClick(){
			// putSearch(this.searchForm).then(response=>{
			//    this.coverDatas=response.data;
			//    this.initMap();
			//    //console.log(this.coverDatas);
			// });
			this.getDataList();
		},
		clearClick(){
            this.resetTemp();
        },
        resetTemp(){
          this.searchForm = {
            name:"",
	      	serialNo:"",
	      	type:"",
	      	areaId:"",
	      	address:""
          }
        }
  	  }
	}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.dashboard-editor-container {
    margin: 30px;
    .btn-group {
        margin-bottom: 60px;
    }
    .box-card-header {
        position: relative;
        height: 160px;
    }
    .panThumb {
        z-index: 100;
        height: 150px;
        width: 150px;
        position: absolute;
        left: 0px;
        right: 0px;
        margin: auto;
    }
    .display_name{
        font-size: 30px;
        display: block;
    }
    .info-item{
        display: inline-block;
        margin-top: 10px;
        font-size: 14px;
        &:last-of-type{
            margin-left: 15px;
        }
    }
}
</style>
<style type="text/css">
	.text-color{
		color:#666666;
		text-align:center;
	}
	.icon_img{
		height:50px;
		line-height: 50px;text-align: center;color: #fff;font-weight: bold;
		font-size: 20px;
	}
	/*.el-card__body {
		padding: 0 !important;
	}
	.el-card{
		border:0;
	}*/
	.border_style{
		border:1px solid #e5e5e5;border-radius:5px;overflow: hidden;
	}
	.count_style{
		padding: 20px 0;

		font-size: 24px;
	}
	/*.text_style{
		font-size: 12px;
		padding-bottom:20px;
	}*/
	.search_label{
		width:70px;
		display: inline-block;
		font-size: 14px;
		font-weight: normal;
		color:#333;
		text-align: right;
	}
</style>

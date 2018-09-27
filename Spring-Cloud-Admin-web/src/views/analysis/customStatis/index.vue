<template>
	<div class="app-container calendar-list-container">
		<!-- <el-tabs v-model="activeName2" type="card"> -->
		    <!-- <el-tab-pane label="耗材总量统计" name="first"> -->
		    	<div style="border-bottom: 1px solid #ccc;height:30px;line-height: 30px;">耗材总量统计</div>
		    	<div style="padding-top: 10px;">
		    		<el-form ref="form" :model="pieForm" >
		    			<el-row type="flex" class="row-bg" justify="space-around">
		    				<el-col>
		    					<el-form-item>
		    						<label class="search_label">客户名称</label>
		    						<el-input v-model="pieForm.customerName" placeholder="请输入客户名称" style="width:150px;"></el-input>
		    					</el-form-item>
		    				</el-col>
		    				<el-col>
		    					<el-form-item>
		    						<label class="search_label">仪器序列号</label>
		    						<el-input v-model="pieForm.serialNo" placeholder="请输入仪器序列号" style="width:150px;"></el-input>
		    					</el-form-item>
		    				</el-col>
		    				<el-col>
		    					<el-form-item>
		    						<label class="search_label">仪器型号</label>
		    						<el-input v-model="pieForm.type" placeholder="请输入保养仪器型号" style="width:150px;"></el-input>
		    					</el-form-item>
		    				</el-col>
		    				<!-- <el-col>
		    					<el-form-item>
		    						<label class="search_label">区域</label>
		    						<el-input v-model="searchForm.alertNum" placeholder="请输入区域" style="width:150px;"></el-input>
		    					</el-form-item>
		    				</el-col> -->
		    				<!-- <el-col>
		    					<el-form-item>
		    						<label class="search_label">地址</label>
		    						<el-input v-model="searchForm.alertNum" placeholder="请输入地址" style="width:150px;"></el-input>
		    					</el-form-item>
		    				</el-col> -->
		    			</el-row>
		    			<div style="overflow: hidden;">
		    				<!-- <el-form-item style="display:inline-block;">
                            <label class="search_label">使用时间</label>
                            <template>
                              <el-date-picker
                                  v-model="pieForm.userTime"
                                  value-format="yyyy-MM-dd" 
                                  type="daterange"
                                  range-separator="至"
                                  start-placeholder="开始日期"
                                  end-placeholder="结束日期" style="width:150px;">
                              </el-date-picker>
                            </template>
                          </el-form-item> -->
			    			<el-form-item style="float: right;padding-right: 30px;">
			    			      <el-button type="primary" @click = "searchClick" >查询</el-button>
			    			      <el-button type="danger" @click = "clearClick">清除</el-button>
			    			</el-form-item>
		    			</div>
		    		</el-form>
		    	</div>
		    	<div class="echart_content" style="border-top:1px solid #ccc;">
		    		<el-row type="flex" class="row-bg" justify="space-around">
		    			<el-col>
		    				<!-- <pie-chart></pie-chart> -->
		    				<ve-pie :data="pieChartData"></ve-pie>
		    			</el-col>
		    			<el-col>
		    				<template>
		    				  <el-table
		    				    :data="tableData"
		    				    border
		    				    style="width:450px;margin-top:20px;"
		    				    v-loading.body="loading">
		    				    <el-table-column
		    				      label="序号"
		    				      width="150" align='center'>
		    				      <template slot-scope="scope">
		    				          <span>{{scope.row.id}}</span>
		    				      </template>
		    				    </el-table-column>
		    				    <el-table-column
		    				      label="耗材类型"
		    				      width="150" align='center'>
		    				      <template slot-scope="scope">
		    				          <span>{{scope.row.type}}</span>
		    				      </template>
		    				    </el-table-column>
		    				    <el-table-column
		    				      label="数量"
		    				      width="150" align='center'>
		    				      <template slot-scope="scope">
		    				          <span>{{scope.row.totalCount}}</span>
		    				      </template>
		    				    </el-table-column>
		    				  </el-table>
		    				</template>
		    			</el-col>
		    		</el-row>
		    		
		    	</div>
		    <!-- </el-tab-pane> -->
		    <!-- </el-tabs> -->
		    <!-- <el-tab-pane label="耗材使用量趋势统计" name="second"> -->
		    	<div style="border-bottom: 1px solid #ccc;height:50px;line-height: 50px;">耗材使用量趋势统计</div>
		    	<div style="padding-top: 10px;">
		    		<el-form ref="form" :model="searchForm">
		    			<el-row type="flex" class="row-bg" justify="space-around">
		    				<el-col>
		    					<el-form-item>
		    						<label class="search_label">客户名称</label>
		    						<el-input v-model="searchForm.customerName" placeholder="请输入客户名称" style="width:150px;"></el-input>
		    					</el-form-item>
		    				</el-col>
		    				<el-col>
		    					<el-form-item>
		    						<label class="search_label">仪器型号</label>
		    						<el-input v-model="searchForm.instType" placeholder="请输入仪器型号" style="width:150px;"></el-input>
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
		    						<label class="search_label">耗材类型</label>
		    						<el-select v-model="searchForm.type" placeholder="请选择" style="width:150px;">
		                              <el-option
		                                v-for="item in styleOptions"
		                                :key="item.value"
		                                :label="item.label"
		                                :value="item.value">
		                              </el-option>
		                            </el-select>
		    					</el-form-item>
		    				</el-col>
		    				<el-col>
		    					<el-form-item>
		    						<label class="search_label">批号</label>
		    						<el-input v-model="searchForm.barcode" placeholder="请输入批号" style="width:150px;"></el-input>
		    					</el-form-item>
		    				</el-col>
		    			</el-row>
		    			<div style="overflow: hidden;">
		    				<el-form-item style="display:inline-block;">
		    					<label class="search_label">项目名称</label>
		    					<el-input v-model="searchForm.project" placeholder="请输入项目名称" style="width:150px;"></el-input>
		    				</el-form-item>
		    				<!-- <el-form-item style="display:inline-block;">
                            <label class="search_label">使用时间</label>
                            <template>
                              <el-date-picker
                                  v-model="searchForm.userTime"
                                  value-format="yyyy-MM-dd" 
                                  type="daterange"
                                  range-separator="至"
                                  start-placeholder="开始日期"
                                  end-placeholder="结束日期" style="width:150px;">
                              </el-date-picker>
                            </template>
                          </el-form-item> -->
		    				<!-- <el-form-item style="display:inline-block;">
		    					<label class="search_label">区域</label>
		    					<el-input v-model="searchForm.alertNum" placeholder="请选择区域" style="width:150px;"></el-input>
		    				</el-form-item> -->
		    				<!-- <el-form-item style="display:inline-block;">
		    					<label class="search_label">地址</label>
		    					<el-input v-model="searchForm.alertNum" placeholder="请输入地址" style="width:150px;"></el-input>
		    				</el-form-item> -->
			    			<el-form-item style="float: right;padding-right: 30px;">
			    			      <el-button type="primary" @click = "lineSearchClick" >查询</el-button>
			    			      <el-button type="danger" @click = "lineClearClick">清除</el-button>
			    			</el-form-item>
		    			</div>
		    		</el-form>
		    	</div>
		    	<el-row style="background:#fff;padding:16px 16px 0;margin-bottom:32px;border-top:1px solid #ccc;">
		    	    <!-- <line-chart :chart-data="lineChartData"/> -->
		    	    <ve-line :data="lineChartData"></ve-line>
		    	</el-row>
		    <!-- </el-tab-pane> -->
		  
	</div>
</template>
<script type="text/javascript">
	import { mapGetters } from 'vuex';
	import pieChart from './charts/pieChart';
	import lineChart from './charts/lineChart';
	import {anylicData,lineData,pieData} from 'api/chart/index';
	// const lineChartData = {
	// 	newVisitis:{
	// 		expectedData:[],
	// 		actualData:[]
	// 	}
	// };
	export default {
		components:{pieChart,lineChart},
		data(){
			return{
				pieForm:{
			      	customerName:"",
			      	serialNo:"",
			      	type:""
			    },
			    searchForm:{
			    	customerName:'',
			    	instType:"",
			    	serialNo:"",
			    	type:"",
			    	barcode:"",
			    	project:"",
			    	userTime:''
			    },
			    styleOptions:[
			    {
                    value:"主试剂",
                    label:"主试剂"
                },{
                     value:"通用液",
                    label:"通用液"
                },{
                     value:"tip头",
                    label:"tip头"
                },{
                     value:"板条",
                    label:"板条"
                },{
                    value:"稀释板",
                    label:"稀释板"
                }
			    ],
			    //activeName2: 'first',
			    tableData:[],
			    //pieChartData:[],
			    pieChartData: {
			      columns: ['项目', '数量'],
			      rows: []
			    },
			    loading:false,
		        //lineChartData:lineChartData.newVisitis
		        lineChartData: {
		          columns: [],
		          rows: []
		        }
			}
		},	
		created(){
			this.getDataList();
			this.getLineList();
			this.searchForm.type = this.styleOptions[1].value;
		},
		computed:{
            ...mapGetters([
                    'elements'
                ])
        },
        methods:{
        	getDataList(){
        		anylicData(this.pieForm).then(response=>{
        			this.tableData = response.data;
        		})
        		pieData(this.pieForm).then(response=>{
        			if(response.data == ""){
        				this.pieChartData = [];
        			}else{

	        			var pieReponse = response.data;
	        			//console.log(pieReponse);
	        			//this.pieChartData = response.data;
	        			var pieRow = [{项目:'Ahi-HBe',数量:400}];
	        			for(var i = 0; i < pieReponse.length; i++){
	        				var pieObj = "";
	        				pieObj={
	        					"项目":pieReponse[i].project,
	        					"数量":pieReponse[i].totalCount
	        				};
	        				pieRow.push(pieObj);
	        			}
	        			 //console.log(pieRow);
	        			// this.pieChartData.columns = pieResult;
	        			 this.pieChartData.rows = pieRow;
	        			console.log(this.pieChartData.rows);
        			}
        		})
        	},
        	getLineList(){
        		lineData(this.searchForm).then(response=>{
        			//console.log(response.data);
        			if(response.data == ""){
        				this.lineChartData.columns =[];
        				this.lineChartData.rows = [];
        			}else{
        				var lineResult = response.data;
	        			var lineNum = [];
	        			var lineClum = lineResult[0].type;
	        			if(lineClum == "主试剂"){
	        				this.lineChartData.columns =["week","AntiHBc","HBeAg"];
	        				this.lineChartData.rows=[
	        					{week:"周日", AntiHBc:444, HBeAg:999},
	        					{week:"周一", AntiHBc:390, HBeAg:505},
	        					{week:"周二", AntiHBc:590, HBeAg:600},
	        					{week:"周三", AntiHBc:340, HBeAg:400},
	        					{week:"周四", AntiHBc:560, HBeAg:500},
	        					{week:"周五", AntiHBc:450, HBeAg:202},
	        					{week:"周六", AntiHBc:350, HBeAg:403}
	        				]
	        			}else{
	        				
	        				//console.log(lineResult);
	        				this.lineChartData.columns =["week","耗材项目"];
	        				for(var i = 0; i<lineResult.length;i++){
	        					var lineObj ='';
	        					lineObj={
	        						"week":lineResult[i].week,
	        						"耗材项目":lineResult[i].expendCount
	        					};
	        					lineNum.push(lineObj);
	        				}

	        				this.lineChartData.rows=lineNum;
	        				//console.log(this.lineChartData);
	        			}
        			}
        			//this.lineChartData.columns.push(lineClum);
        			//lineChartData.newVisitis.expectedData = lineNum;
        			
        			//console.log(lineChartData.newVisitis.expectedData);
        		})
        	},
        	//表格重新加载数据
            loadingData() {
                var _self = this;
                _self.loading = true;
                setTimeout(function(){
                    //console.info("加载数据成功");
                    _self.loading = false;
                },300);
            },
        	searchClick(){
        		this.loadingData();
        		this.getDataList();
        		//this.tableData = response.data;
        	},
        	clearClick(){
        		this.pieResetTemp();
        	},
        	lineSearchClick(){
        		this.getLineList();
        	},
        	lineClearClick(){
        		this.resetTemp()
        	},
        	pieResetTemp(){
        		this.pieForm = {
        			customerName:"",
			      	serialNo:"",
			      	type:""
        		}
        	},
        	resetTemp(){
              this.searchForm = {
                customerName:'',
			    instType:"",
			    serialNo:"",
			    type:"",
			    barcode:"",
			    project:"",
			    userTime:''
              }
            }
        	
        }
	}
</script>

<style type="text/css">
	.search_label{
		width:70px;
		display: inline-block;
		font-size: 14px;
		font-weight: normal;
		color:#333;
		text-align: right;
	}
</style>
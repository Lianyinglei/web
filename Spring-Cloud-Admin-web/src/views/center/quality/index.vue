<template>
	<div class="app-container calendar-list-container">
		<el-row>
			<el-col >
				<el-card class="box-card">
					<div>
						<el-form ref="form" :model="searchForm" >
							<el-row type="flex" class="row-bg" justify="space-around">
								<el-col>
									<el-form-item>
										<label class="search_label">客户名称</label>
										<el-input v-model="searchForm.customerName" placeholder="请输入客户名称" style="width:150px;"></el-input>
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
										<label class="search_label">项目名称</label>
										<el-input v-model="searchForm.project" placeholder="请输入项目名称" style="width:150px;"></el-input>
									</el-form-item>
								</el-col>
								<el-col>
									<el-form-item>
										<label class="search_label">批号</label>
										<el-input v-model="searchForm.batch" placeholder="请输入批号" style="width:150px;"></el-input>
									</el-form-item>
								</el-col>
								<el-col >
		                         <el-form-item style="display:inline-block;">
		                          <div class="select_area">
		                          <label class="search_label">地区</label>
		                          <el-select v-model="area" placeholder="区域" @change="chooseArea" style="width:150px;">
		                              <el-option
		                                v-for="item in areaData"
		                                :key="item.id"
		                                :label="item.label"
		                                :value="item.id">
		                              </el-option>
		                          </el-select>
		                          </div>
		                         </el-form-item>
		                     	</el-col>
							</el-row>
							<el-row type="flex" class="row-bg" justify="space-around">
								<el-col >
		                      	<!-- </el-col> -->
		                      	<!-- <el-col> -->
		                      	  <el-form-item style="display:inline-block;">
		                      	    <label class="search_label">省份</label>
		                      	    <el-input v-model="searchForm.address" placeholder="请输入省份名称" style="width:150px;"></el-input>
		                      	  </el-form-item>
		                      	<!-- </el-col> -->
		                      	<!-- <el-col > -->
			                      	<el-form-item style="display:inline-block;float: right;">
								      <el-button type="primary" @click = "searchClick" >查询</el-button>
								      <el-button type="danger" @click = "clearClick">清除</el-button>
									</el-form-item>	
								</el-col>
							</el-row>
						</el-form>
					</div>
				</el-card>
				<el-card class="box-card" style="margin-top: 20px;">
					<div slot="header" class="clearfix">
					  <span>工程师信息</span>
					  <el-button style="float: right;" type="success">导出</el-button>
					</div>
					<template>
					  <el-table
					    :data="tableData" v-loading.body="loading"
					    border
					    style="width: 100%">
					    <el-table-column label="Id"  width="100" align='center'>
					    	<template slot-scope="scope">
					    	    <span>{{scope.row.id}}</span>
					    	</template>
					    </el-table-column>
					    <el-table-column  label="客户名称"  width="150" align='center'>
					    	<template slot-scope="scope">
					    	    <span>{{scope.row.customerName}}</span>
					    	</template>
					    </el-table-column>
					    <el-table-column  label="仪器序列号"  width="140" align='center'>
					    	<template slot-scope="scope">
					    	    <span>{{scope.row.serialNo}}</span>
					    	</template>
					    </el-table-column>
					    <el-table-column   label="质控结果"  width="140" align='center'>
					    	<template slot-scope="scope">
					    	    <span>{{scope.row.result}}</span>
					    	</template>
					    </el-table-column>
					    <el-table-column  label="条码"  width="140" align='center'>
					    	<template slot-scope="scope">
					    	    <span>{{scope.row.barcode}}</span>
					    	</template>
					    </el-table-column>
					    <el-table-column  label="项目名称"  width="100" align='center'>
					    	<template slot-scope="scope">
					    	    <span>{{scope.row.project}}</span>
					    	</template>
					    </el-table-column>
					    <el-table-column  label="批号"  width="100" align='center'>
					    	<template slot-scope="scope">
					    	    <span>{{scope.row.batch}}</span>
					    	</template>
					    </el-table-column>
					    <el-table-column  label="靶值信息"  width="100" align='center'>
					    	<template slot-scope="scope">
					    	    <span>{{scope.row.concentrationInfo}}</span>
					    	</template>
					    </el-table-column>
					    <el-table-column   label="测试时间"  width="100" align='center'>
					    	<template slot-scope="scope">
					    	    <span>{{scope.row.qualityTime}}</span>
					    	</template>
					    </el-table-column>
					    <el-table-column  fixed="right"  label="操作"  width="200" align='center'>
					        <template slot-scope="scope">
					            <el-button type="text" size="small" @click="viewDetails(scope.row)">查看</el-button>
					            <el-button type="text" size="small">维修保养</el-button>
					            <el-button type="text" size="small">耗材情况</el-button>
					        </template>
					    </el-table-column>
					  </el-table>
					</template>
					<div class="pagination-container">
					    <el-pagination
					          @size-change="handleSizeChange"
					          @current-change="handleCurrentChange"
					          :current-page="listQuery.page"
					          :page-sizes="[10, 20, 30, 40]"
					          :page-size="listQuery.limit"
					          layout="total, sizes, prev, pager, next, jumper"
					          :total="total">
					    </el-pagination>
					</div>
				</el-card>
			</el-col>
		</el-row>
		<el-dialog
		    title="详情信息"
		    :visible.sync="dialogVisible"
		    >
	      <el-card class="box-card">
	        <div slot="header" class="clearfix">
	          <span>质控详情信息</span>
	        </div>
	        <div class="text item">
	            <el-row type="flex" class="row-bg" justify="space-around">
		            <el-col :span="6"><label>客户名称:</label><span>{{qualityData.customerName}}</span></el-col>
		            <el-col :span="6"><label>仪器序列号:</label><span>{{qualityData.serialNo}}</span></el-col>
		            <el-col :span="6"><label>质控结果:</label><span>{{qualityData.result}}</span></el-col>
	          	</el-row>
	          	<el-row type="flex" class="row-bg" justify="space-around">
		            <el-col :span="6"><label>项目名称:</label><span>{{qualityData.project}}</span></el-col>
		            <el-col :span="6"><label>批号:</label><span>{{qualityData.batch}}</span></el-col>
		            <el-col :span="6"><label>靶值信息:</label><span>{{qualityData.concentrationInfo}}</span></el-col>
		            
	          	</el-row>
  	            <el-row type="flex" class="row-bg" justify="space-around">
  		            <el-col :span="6"><label>测试时间:</label><span>{{qualityData.qualityTime}}</span></el-col>
  		            <el-col :span="6"></el-col>
  		            <el-col :span="6"></el-col>
  	          	</el-row>
	        </div>
	      </el-card>
	      <span slot="footer" class="dialog-footer">
	        <el-button @click="dialogVisible = false">取 消</el-button>
	        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
	      </span>
	    </el-dialog>
	</div>
</template>
<script type="text/javascript">
	import {getLocation,putSearchData,checkDetails} from 'api/center/quality/index';
	import { mapGetters } from 'vuex';
	export default{
		name:"quality",
		data(){
			return{
				tableData:[],
				areaData:[],
				stateOptions:[{
					value:"选项1",
					label:"设备运行"
				},{
					value:"选项2",
					label:"日志"
				},{
					value:"选项3",
					label:"故障"
				}],
				area:"",
				loading:false,
				searchForm:{
					customerName:"",
					serialNo:"",
					batch:'',
					project:"",
					address:"",
					areaId:""
				},
				listQuery:{
					limit:20,
					page:1
				},
				total:"",
				qualityData:[],
				dialogVisible:false
			}
		},
		created(){
            this.getDataList();
            this.getCityData();
        },
        computed:{
            ...mapGetters([
                    'elements'
                ])
        },
        methods:{
        	getDataList(){
        		putSearchData(this.listQuery,this.searchForm).then(response =>{
        			this.tableData = response.data.list;
        			this.total= response.data.total;
        		})
        	},
        	getCityData(){
        		getLocation().then(response =>{
					this.areaData = response;
				})
        	},
        	handleSizeChange(val){
			    this.listQuery.limit = val;
			    this.getDataList();
			},
			handleCurrentChange(val){
			  this.listQuery.page = val;
			  this.getDataList();
			},
			chooseArea(){
				this.searchForm.areaId = this.area;
			},
			//表格重新加载数据
            loadingData() {
                var _self = this;
                _self.loading = true;
                setTimeout(function(){
                    console.info("加载数据成功");
                    _self.loading = false;
                },300);
            },
			searchClick(){
				putSearchData(this.listQuery,this.searchForm).then(response=>{
					this.loadingData();
					this.tableData = response.data.list;
        			this.total= response.data.total;
				})
			},
			clearClick(){
				this.resetTemp();
			},
			viewDetails(row){
				this.dialogVisible = true;
				checkDetails(row.id).then(response=>{
					this.qualityData = response.data;
				})
			},
			resetTemp(){
				this.searchForm={
					customerName:"",
					serialNo:"",
					batch:'',
					project:"",
					address:"",
					areaId:""
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
	.el-card__header{
        padding: 8px 20px !important;-webkit-box-sizing:border-box;
    }
    .el-dialog{
    	width:80%;
    }
    .item span{
	    padding-left: 10px;
	}
</style>
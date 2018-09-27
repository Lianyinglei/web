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
										<el-input v-model="searchForm.name" placeholder="请输入项目名称" style="width:150px;"></el-input>
									</el-form-item>
								</el-col>
								<el-col>
									<el-form-item>
										<label class="search_label">工程师</label>
										<el-input v-model="searchForm.engineerName" placeholder="请输入工程师名称" style="width:150px;"></el-input>
									</el-form-item>
								</el-col>
								<el-col >
			                         <el-form-item>
			                          <template >
			                            <label class="search_label">维修状态</label>
			                            <el-select v-model="searchForm.maintenceState" placeholder="请选择" style="width:150px;">
			                              <el-option
			                                v-for="item in stateOptions"
			                                :key="item.value"
			                                :label="item.label"
			                                :value="item.value">
			                              </el-option>
			                            </el-select>
			                          </template>
			                        </el-form-item>
			                    </el-col>
							</el-row>
							<el-row type="flex" class="row-bg" justify="space-around">
								<el-form-item >
		                           <label class="search_label" style="width:100px;">计划开始时间</label>
		                           <template>
		                                <el-date-picker
		                                  v-model="searchForm.startPlanTime"
		                                  type="date"
		                                  placeholder="开始日期" style="width:150px;"
		                                  :picker-options="pickerBeginDateBefore" format="yyyy-MM-dd">
		                                </el-date-picker>
		                           </template>
		                         </el-form-item>
		                         <el-form-item >
		                           <label class="search_label" style="width:100px;">计划结束时间</label>
		                           <template>
		                                <el-date-picker
		                                  v-model="searchForm.endPlanTime"
		                                  type="date"
		                                  placeholder="结束日期" style="width:150px;"
		                                  :picker-options="pickerBeginDateAfter" format="yyyy-MM-dd">
		                                </el-date-picker>
		                           </template>
		                         </el-form-item>
		                         <el-form-item >
		                           <label class="search_label" style="width:100px;">实际开始时间</label>
		                           <template>
		                                <el-date-picker
		                                  v-model="searchForm.startFinishTime"
		                                  type="date"
		                                  placeholder="开始日期" style="width:150px;"
		                                  :picker-options="pickerOptions0" format="yyyy-MM-dd">
		                                </el-date-picker>
		                           </template>
		                         </el-form-item>
		                         <el-form-item >
		                           <label class="search_label" style="width:100px;">实际结束时间</label>
		                           <template>
		                                <el-date-picker
		                                  v-model="searchForm.endFinishTime"
		                                  type="date"
		                                  placeholder="结束日期" style="width:150px;"
		                                  :picker-options="pickerOptions1" format="yyyy-MM-dd">
		                                </el-date-picker>
		                           </template>
		                         </el-form-item>
							</el-row>
							<el-row type="flex" class="row-bg" justify="space-around">
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
					  <span>维护保养信息</span>
					  <el-button style="float: right;" type="success">导出</el-button>
					</div>
					<template>
					  <el-table
					    :data="tableData" v-loading.body="loading"
					    border
					    style="width: 100%">
					    <el-table-column  label="Id"  width="100" align='center'>
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
					    <el-table-column   label="工程师"  width="140" align='center'>
					    	<template slot-scope="scope">
					    	    <span>{{scope.row.engineerName}}</span>
					    	</template>
					    </el-table-column>
					    <el-table-column   label="维护保养项目"  width="140" align='center'>
					    	<template slot-scope="scope">
					    	    <span>{{scope.row.name}}</span>
					    	</template>
					    </el-table-column>
					    <el-table-column  label="操作用户"  width="100" align='center'>
					    	<template slot-scope="scope">
					    	    <span>{{scope.row.user}}</span>
					    	</template>
					    </el-table-column>
					    <el-table-column   label="计划执行时间"  width="100" align='center'>
					    	<template slot-scope="scope">
					    	    <span>{{scope.row.planTime}}</span>
					    	</template>
					    </el-table-column>
					    <el-table-column   label="实际执行时间"  width="100" align='center'>
					    	<template slot-scope="scope">
					    	    <span>{{scope.row.finishTime}}</span>
					    	</template>
					    </el-table-column>
					    <el-table-column  fixed="right"  label="操作"  width="200" align='center'>
					        <template slot-scope="scope">
					            <el-button type="text" size="small" @click="viewDetails(scope.row)">查看</el-button>
					            <el-button type="text" size="small">工程师信息</el-button>
					            <el-button type="text" size="small">仪器信息</el-button>
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
	          <span>维修保养信息</span>
	        </div>
	        <div class="text item">
	            <el-row type="flex" class="row-bg" justify="space-around">
		            <el-col :span="6"><label>客户名称:</label><span>{{maintainData.customerName}}</span></el-col>
		            <el-col :span="6"><label>仪器序列号:</label><span>{{maintainData.serialNo}}</span></el-col>
		            <el-col :span="6"><label>项目名称:</label><span>{{maintainData.name}}</span></el-col>
	          	</el-row>
	          	<el-row type="flex" class="row-bg" justify="space-around">
		            <el-col :span="6"><label>工程师:</label><span>{{maintainData.engineerName}}</span></el-col>
		            <el-col :span="6"><label>操作用户:</label><span>{{maintainData.user}}</span></el-col>
		            <el-col :span="6"><label>计划执行时间:</label><span>{{maintainData.planTime}}</span></el-col>
		            
	          	</el-row>
  	            <el-row type="flex" class="row-bg" justify="space-around">
  		            <el-col :span="6"><label>实际执行时间:</label><span>{{maintainData.finishTime}}</span></el-col>
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
	import {getLocation,putSearchData,checkDetails} from 'api/center/maintain/index';
	import { mapGetters } from 'vuex';
	export default{
		name:"maintain",
		data(){
			return{
				tableData:[],
				areaData:[],
				stateOptions:[],
				area:"",
				loading:false,
				searchForm:{
					customerName:"",
					serialNo:"",
					name:'',
					engineerName:"",
					maintenceState:"",
					address:"",
					startPlanTime:"",
					endPlanTime:"",
					startFinishTime:"",
					endFinishTime:"",
					areaId:""
				},
				listQuery:{
					limit:20,
					page:1
				},
				total:null,
				maintainData:[],
				dialogVisible:false,
				pickerBeginDateBefore:{
				  disabledDate:(time)=>{
				    let beginDateVal = this.searchForm.endPlanTime;
				    if(beginDateVal){
				      return time.getTime()>beginDateVal;
				    }
				  }
				},
				pickerBeginDateAfter:{
				  disabledDate:(time)=>{
				    let beginDateVal = this.searchForm.startPlanTime;
				    if(beginDateVal){
				      return time.getTime()<beginDateVal;
				    }
				  }
				},
				pickerOptions0:{
				  disabledDate:(time)=>{
				    let beginDateVal = this.searchForm.endFinishTime;
				    if(beginDateVal){
				      return time.getTime()>beginDateVal;
				    }
				  }
				},
				pickerOptions1:{
				  disabledDate:(time)=>{
				    let beginDateVal = this.searchForm.startFinishTime;
				    if(beginDateVal){
				      return time.getTime()<beginDateVal;
				    }
				  }
				}
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
        			this.total = response.data.total;
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
        			this.total = response.data.total;
				})
			},
			clearClick(){
				this.resetTemp();
			},
			viewDetails(row){
				this.dialogVisible = true;
				checkDetails(row.id).then(response=>{
					this.maintainData = response.data;
				})
			},
			resetTemp(){
				this.searchForm={
					customerName:"",
					serialNo:"",
					name:'',
					engineerName:"",
					maintenceState:"",
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
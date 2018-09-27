<template>
	<div class="app-container calendar-list-container">
		<el-row>
			<el-col >
				<el-card class="box-card">
					<div>
						<el-form ref="form" :model="searchForm" >
							<el-row type="flex" class="row-bg" justify="start">
								<!--使用时间 开始-->
								<el-col >
		                      	   <el-form-item style="display:inline-block;">
		                      	      <!-- <label class="search_label">完成时间</label> -->
		                      	      <template>
		                      	       <el-date-picker
		                      	           is-range
		                      	           v-model="searchForm.startTime"
		                      	           placeholder="开始使用时间" style="width:150px;">
		                      	         </el-date-picker>
		                      	      </template>
		                      	    </el-form-item>
		                      	</el-col>
		                      	<!--使用时间 结束-->
								<el-col >
		                      	   <el-form-item style="display:inline-block;">
		                      	      <!-- <label class="search_label">完成时间</label> -->
		                      	      <template>
		                      	       <el-date-picker
		                      	           is-range
		                      	           v-model="searchForm.endTime"
		                      	           placeholder="结束使用时间" style="width:150px;">
		                      	         </el-date-picker>
		                      	      </template>
		                      	    </el-form-item>
		                      	</el-col>
		                      	<!--区域-->
		                      	<el-col >
			                        <el-form-item style="display:inline-block;">
			                          <div class="select_area">
			                          <!-- <label class="search_label">地区</label> -->
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
		                      	<!--省份-->
		                      	<el-col>
		                      	  <el-form-item style="display:inline-block;">
		                      	    <!-- <label class="search_label">省份</label> -->
		                      	    <el-input v-model="searchForm.address" placeholder="请输入省份名称" style="width:150px;"></el-input>
		                      	  </el-form-item>
		                      	</el-col>
		                      	<!--客户名称-->
		                      	<el-col>
									<el-form-item>
										<!-- <label class="search_label">客户名称</label> -->
										<el-input v-model="searchForm.customerName" placeholder="请输入客户名称" style="width:150px;"></el-input>
									</el-form-item>
								</el-col>
								<!--仪器序列号-->
								<el-col>
									<el-form-item>
										<!-- <label class="search_label">仪器序列号</label> -->
										<el-input v-model="searchForm.serialNo" placeholder="请输入仪器序列号" style="width:150px;"></el-input>
									</el-form-item>
								</el-col>
							</el-row>
							<el-row type="flex" class="row-bg" justify="space-around">
								<!--仪器型号-->
								<el-col>
									<el-form-item>
										<!-- <label class="search_label">仪器型号</label> -->
										<el-input v-model="searchForm.type" placeholder="请输入仪器型号" style="width:150px;"></el-input>
									</el-form-item>
								</el-col>
								<!--耗材类型-->
								<el-col>
									<el-form-item>
										<!-- <label class="search_label">耗材类型</label> -->
										<el-input v-model="searchForm.type" placeholder="请输入耗材类型" style="width:150px;"></el-input>
									</el-form-item>
								</el-col>
								<!--项目名称-->
								<el-col>
									<el-form-item>
										<!-- <label class="search_label">项目名称</label> -->
										<el-input v-model="searchForm.project" placeholder="请输入项目名称" style="width:150px;"></el-input>
									</el-form-item>
								</el-col>
								<!--批号-->
								<el-col>
									<el-form-item>
										<!-- <label class="search_label">批号</label> -->
										<el-input v-model="searchForm.batch" placeholder="请输入批号" style="width:150px;"></el-input>
									</el-form-item>
								</el-col>
								<!--占用空间使用-->
								<el-col>
								</el-col>
								<!--操作-->
								<el-col>
			                      	<el-form-item style="display:inline-block;">
								      <el-button type="primary" @click = "searchClick" >查询</el-button>
								      <el-button type="danger" @click = "clearClick">清除</el-button>
									</el-form-item>	
								</el-col>

		                      	<!-- <el-col > -->
				                    <!-- <el-row type="flex" class="row-bg" justify="space-around"> -->
				                      

									<!-- </el-row> -->
								<!-- </el-col> -->
							</el-row>
						</el-form>
					</div>
				</el-card>
				<el-card class="box-card" style="margin-top: 20px;">
					<div slot="header" class="clearfix">
					  <span>耗材信息</span>
					  <el-button style="float: right;" type="success">导出</el-button>
					</div>
					<template>
					  <el-table
					    :data="tableData" v-loading.body="loading"
					    border
					    style="width: 100%">
					    <el-table-column align="center" label="序号" min-width="11%" type="index"></el-table-column>
					   <!-- <el-table-column  label="Id"  width="100" align='center'>
					    	<template slot-scope="scope">
					    	    <span>{{scope.row.id}}</span>
					    	</template>
					    </el-table-column> -->
					    <el-table-column  label="客户名称"  min-width="10%" align='center' show-overflow-tooltip>
					    	<template slot-scope="scope">
					    	    <!-- <span>{{scope.row.customerName}}</span> -->
					    	    <!--假数据-->
					    	    <span>306医院</span>
					    	</template>
					    </el-table-column>
					    <el-table-column  label="仪器序列号"  min-width="10%" align='center' show-overflow-tooltip>
					    	<template slot-scope="scope">
					    	    <span>{{scope.row.serialNo}}</span>
					    	</template>
					    </el-table-column>
					    <el-table-column  label="耗材类型"  min-width="10%" align='center' show-overflow-tooltip>
					    	<template slot-scope="scope">
					    	    <span>{{scope.row.type}}</span>
					    	</template>
					    </el-table-column>
					    <el-table-column  label="条码"  min-width="10%" align='center' show-overflow-tooltip>
					    	<template slot-scope="scope">
					    	    <span>{{scope.row.barcode}}</span>
					    	</template>
					    </el-table-column>
					    <el-table-column  label="批号"  min-width="10%" align='center' show-overflow-tooltip>
					    	<template slot-scope="scope">
					    	    <span>{{scope.row.batch}}</span>
					    	</template>
					    </el-table-column>
					    <el-table-column   label="项目名称"  min-width="10%" align='center' show-overflow-tooltip>
					    	<template slot-scope="scope">
					    	    <span>{{scope.row.project}}</span>
					    	</template>
					    </el-table-column>
					    <el-table-column   label="开始使用时间"  min-width="10%" align='center' show-overflow-tooltip>
					    	<template slot-scope="scope">
					    	    <span>{{scope.row.startTime}}</span>
					    	</template>
					    </el-table-column>
					    <el-table-column   label="使用完成时间"  min-width="10%" align='center' show-overflow-tooltip>
					    	<template slot-scope="scope">
					    	    <span>{{scope.row.endTime}}</span>
					    	</template>
					    </el-table-column>
					    <el-table-column  label="消耗总数量"  min-width="10%" align='center' show-overflow-tooltip>
					    	<template slot-scope="scope">
					    	    <span>{{scope.row.totalCount}}</span>
					    	</template>
					    </el-table-column>
					    <el-table-column fixed="right" label="操作"  min-width="10%" align='center'>
					        <template slot-scope="scope">
					            <el-button type="text" size="small" @click="viewDetails(scope.row)">查看</el-button>
					            <!-- 
					            	<el-button type="text" size="small">仪器信息</el-button>
					            	<el-button type="text" size="small">客户信息</el-button> 
					            -->
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
	          <span>耗材基本信息</span>
	        </div>
	        <div class="text item">
	            <el-row type="flex" class="row-bg" justify="space-around">
		            <el-col :span="6"><label>客户名称:</label><span>{{suppliesData.customerName}}</span></el-col>
		            <el-col :span="6"><label>仪器序列号:</label><span>{{suppliesData.serialNo}}</span></el-col>
		            <el-col :span="6"><label>项目名称:</label><span>{{suppliesData.project}}</span></el-col>
	          	</el-row>
	          	<el-row type="flex" class="row-bg" justify="space-around">
		            <el-col :span="6"><label>耗材类型:</label><span>{{suppliesData.type}}</span></el-col>
		            <el-col :span="6"><label>耗材总数量:</label><span>{{suppliesData.totalCount}}</span></el-col>
		            <el-col :span="6"><label>条码:</label><span>{{suppliesData.barcode}}</span></el-col>
	          	</el-row>
  	            <el-row type="flex" class="row-bg" justify="space-around">
  		            <el-col :span="6"><label>批号:</label><span>{{suppliesData.batch}}</span></el-col>
  		            <el-col :span="6"><label>开始时间:</label><span>{{suppliesData.startTime}}</span></el-col>
  		            <el-col :span="6"><label>结束时间:</label><span>{{suppliesData.endTime}}</span></el-col>
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
	import {getConsumable,putSeachData,checkDetails} from 'api/center/supplies/index';
	import { mapGetters } from 'vuex';
	export default {
		name:"supplies",
		data(){
			return {
				tableData:[],
				areaData:[],
				area:"",
				searchForm:{
					customerName:"",
					serialNo:"",
					project:"",
					type:"",
					batch:"",
					address:"",
					endTime:"",
					areaId:""
				},
				listQuery:{
					page:1,
					limit:20
				},
				loading:false,
				total:null,
				dialogVisible:false,
				suppliesData:[]
			}
		},
		created(){
            this.getDataList();
        },
        computed:{
            ...mapGetters([
                    'elements'
                ])
        },
		methods:{
			getDataList(){
				putSeachData(this.listQuery,this.searchForm).then(response=>{
					this.tableData = response.data.list;
					this.total = response.data.total;
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
				putSeachData(this.searchForm).then(response=>{
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
					this.suppliesData = response.data;
				});
			},
			resetTemp(){
              this.searchForm = {
               	customerName:"",
				serialNo:"",
				project:"",
				type:"",
				batch:"",
				address:"",
				endTime:"",
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
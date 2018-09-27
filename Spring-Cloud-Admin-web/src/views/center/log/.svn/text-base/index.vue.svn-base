<template>
	<div class="app-container calendar-list-container">
		<el-row>
			<el-col >
				<!-- <el-card class="box-card"> -->
					<div class="checkBox">
						<el-form ref="form" :model="searchForm" >
							<el-row type="flex" class="row-bg" justify="space-around" >
								<!-- <el-col>
		                      	  <el-form-item style="margin-bottom: 10px;">
	          	                      <label class="search_label">发生时间</label>
	          	                      <template>
	          	                           <el-date-picker
	          	                            v-model="searchForm.startTime"
	          	                            type="date"
	          	                            placeholder="开始日期" style="width:150px;"
	          	                            :picker-options="pickerBeginDateBefore" format="yyyy-MM-dd">
	          	                          </el-date-picker>
	          	                        </template>
	          	                    </el-form-item>
	          	                </el-col>
	          	                <el-col>
	          	                    <el-form-item style="margin-bottom: 10px;">
	          	                      <label class="search_label" style="text-align: center;">至</label>
	          	                      <template>
	          	                           <el-date-picker
	          	                            v-model="searchForm.finishTime"
	          	                            type="date"
	          	                            placeholder="结束日期" style="width:150px;"
	          	                            :picker-options="pickerBeginDateAfter" format="yyyy-MM-dd">
	          	                          </el-date-picker>
	          	                        </template>
	          	                    </el-form-item>
		                      	</el-col> -->
		                      	<!--开始发生时间-->
								<el-col >
		                      	   <el-form-item style="display:inline-block;">
		                      	      <!-- <label class="search_label">完成时间</label> -->
		                      	      <template>
		                      	       <el-date-picker
		                      	           is-range
		                      	           v-model="searchForm.startTime"
		                      	           placeholder="开始发生时间" style="width:150px;">
		                      	         </el-date-picker>
		                      	      </template>
		                      	    </el-form-item>
		                      	</el-col>
		                      	<!--结束发生时间-->
		                      	<el-col >
		                      	   <el-form-item style="display:inline-block;">
		                      	      <!-- <label class="search_label">完成时间</label> -->
		                      	      <template>
		                      	       <el-date-picker
		                      	           is-range
		                      	           v-model="searchForm.endTime"
		                      	           placeholder="结束发生时间" style="width:150px;">
		                      	         </el-date-picker>
		                      	      </template>
		                      	    </el-form-item>
		                      	</el-col>
								<el-col >
		                         <el-form-item style="margin-bottom: 10px;">
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
		                      	<el-col>
		                      	  <el-form-item style="margin-bottom: 10px;">
		                      	    <!-- <label class="search_label">省份</label> -->
		                      	    <el-input v-model="searchForm.address" placeholder="请输入省份名称" style="width:150px;"></el-input>
		                      	  </el-form-item>
		                      	</el-col>
		                      	<el-col>
									<el-form-item>
										<!-- <label class="search_label">客户名称</label> -->
										<el-input v-model="searchForm.customerName" placeholder="请输入客户名称" style="width:150px;"></el-input>
									</el-form-item>
								</el-col>
								<el-col>
									<el-form-item style="margin-bottom: 10px;">
										<!-- <label class="search_label">仪器序列号</label> -->
										<el-input v-model="searchForm.serialNo" placeholder="请输入仪器序列号" style="width:150px;"></el-input>
									</el-form-item>
								</el-col>
							</el-row>
							<el-row type="flex" class="row-bg" justify="space-around">
								<el-col>
									<el-form-item style="margin-bottom: 10px;">
										<!-- <label class="search_label">工程师</label> -->
										<el-input v-model="searchForm.engineerName" placeholder="请输入工程师名称" style="width:150px;"></el-input>
									</el-form-item>
								</el-col>
								<el-col >
			                         <el-form-item style="margin-bottom: 10px;">
			                          <template >
			                            <!-- <label class="search_label">日志类型</label> -->
			                            <el-select v-model="searchForm.type" placeholder="请选择" style="width:150px;">
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
			                    <el-col>
									<el-form-item style="margin-bottom: 10px;">
										<!-- <label class="search_label">日志简要</label> -->
										<el-input v-model="searchForm.title" placeholder="请输入日志简要信息" style="width:150px;"></el-input>
									</el-form-item>
								</el-col>
								<!--占用空间使用-->
								<el-col>
								</el-col>
								<el-col>
								</el-col>
								<!--操作-->
			                    <el-col>
			                      	<el-form-item>
								      <el-button type="primary" @click = "searchClick">查询</el-button>
								      <el-button type="danger" @click = "clearClick">清除</el-button>
									</el-form-item>	
								</el-col>
							</el-row>
							
							<el-row>
								
							</el-row>
 
						</el-form>
					</div>
				</el-card>
				<!-- <el-card class="box-card" style="margin-top: 20px;"> -->
					<div class="table_list">
					<div class="header_style">
					  <span>工程师信息</span>
					  <el-button style="float: right;margin-top: 8px;" type="success">导出</el-button>
					</div>
					<template>
					  <el-table
					    :data="tableData" v-loading.body="loading"
					    border
					    style="width: 100%">
					    <el-table-column   label="序号"  min-width="11%" align='center'type="index">
					    	<!-- <template slot-scope="scope">
					    	    <span>{{scope.row.id}}</span>
					    	</template> -->
					    </el-table-column>
					    <el-table-column label="客户名称"  min-width="11%" align='center' show-overflow-tooltip>
					    	<template slot-scope="scope">
					    	    <span>{{scope.row.customerName}}</span>
					    	</template>
					    </el-table-column>
					    <el-table-column   label="仪器序列号" min-width="11%" align='center' show-overflow-tooltip>
					    	<template slot-scope="scope">
					    	    <span>{{scope.row.serialNo}}</span>
					    	</template>
					    </el-table-column>
					    <el-table-column   label="工程师"  min-width="11%" align='center' show-overflow-tooltip>
					    	<template slot-scope="scope">
					    	    <span>{{scope.row.engineerName}}</span>
					    	</template>
					    </el-table-column>
					    <el-table-column   label="日志类型" min-width="11%" align='center' show-overflow-tooltip>
					    	<template slot-scope="scope">
					    	    <span>{{scope.row.type}}</span>
					    	</template>
					    </el-table-column>
					    <el-table-column   label="简要信息"  min-width="11%" align='center' show-overflow-tooltip>
					    	<template slot-scope="scope">
					    	    <span>{{scope.row.title}}</span>
					    	</template>
					    </el-table-column>
					    <el-table-column   label="发生时间"  min-width="11%" align='center' show-overflow-tooltip>
					    	<template slot-scope="scope">
					    	    <span>{{scope.row.logTime}}</span>
					    	</template>
					    </el-table-column>
					    <el-table-column  label="操作用户"  min-width="11%" align='center' show-overflow-tooltip>
					    	<template slot-scope="scope">
					    	    <span>{{scope.row.user}}</span>
					    	</template>
					    </el-table-column>
					    <el-table-column  fixed="right"  label="操作"  min-width="11%" align='center'>
					        <template slot-scope="scope">
					            <!-- 
						            <el-button type="text" size="small" @click="viewDetails(scope.row)">查看</el-button>
						            <el-button type="text" size="small">仪器信息</el-button>
						            <el-button type="text" size="small">客户信息</el-button>
						            <el-button type="text" size="small">实验结果</el-button>
					             -->
					            <el-button type="text" size="small" @click="viewDetails(scope.row)">下载</el-button>
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
				<!-- </el-card> -->
				</div>
			</el-col>
		</el-row>
	</div>
</template>
<script type="text/javascript">
	import {getLogData,getLocation,putSearchData} from 'api/center/log/index';
	import { mapGetters } from 'vuex';
	export default{
		name:"maintain",
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
					title:'',
					engineerName:"",
					type:"",
					address:"",
					areaId:"",
					startTime:"",
					finishTime:""
				},
				listQuery:{
					limit:10,
					page:1
				},
				total:null,
				pickerBeginDateBefore:{
				  disabledDate:(time)=>{
				    let beginDateVal = this.searchForm.finishTime;
				    if(beginDateVal){
				      return time.getTime()>beginDateVal;
				    }
				  }
				},
				pickerBeginDateAfter:{
				  disabledDate:(time)=>{
				    let beginDateVal = this.searchForm.startTime;
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
        		putSearchData(this.listQuery,this.searchForm).then(response=>{
                    //console.log(response);
                    this.tableData = response.data.list;
                    this.total = response.data.total;
                })
        	},
        	getCityData(){
    //     		getLocation().then(response =>{
				// 	this.areaData = response;
				// })
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
					if(response.data == ""){
	                    this.$message({
	                      message: '没有详情数据',
	                      type: 'warning'
	                    });
	                }else{
	                    this.loadingData();
	                    this.tableData = response.data.list;
	                    this.total = response.data.total;
	                }
	            }).catch(()=>{
	                  this.$message({
	                      message: '参数错误',
	                      type: 'warning'
	                  });
	            });
			},
			clearClick(){
				this.resetTemp();
			},
			viewDetails(){

			},
			resetTemp(){
				this.searchForm={
					customerName:"",
					serialNo:"",
					title:'',
					engineerName:"",
					type:"",
					address:"",
					areaId:"",
					logTime:""
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
    .checkBox{
      border:1px solid #c2ccd8;padding: 10px;
    }
    .table_list{
      border:1px solid #c2ccd8;margin-top:10px;padding: 0 10px 10px 10px;
    }
    .header_style{
      height:50px;line-height: 50px;
    }
</style>
<template>
	<div class="app-container calendar-list-container">
		<el-row>
			<el-col >
				<!-- <el-card class="box-card"> -->
					<div class="checkBox">
						<el-form ref="form" :model="searchForm" >
							<el-row type="flex" class="row-bg" justify="space-around">
								<el-col>
									<el-form-item style="margin-bottom: 10px;">
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
								<el-col>
									<el-form-item style="margin-bottom: 10px;">
										<!-- <label class="search_label">样本编号</label> -->
										<el-input v-model="searchForm.startLiquid" placeholder="请输入开始样本编号" style="width:150px;"></el-input>
									</el-form-item>
								</el-col>
								<el-col>
									<el-form-item style="margin-bottom: 10px;">
										<!-- <label class="search_label">项目名称</label> -->
										<el-input v-model="searchForm.project" placeholder="请输入项目名称" style="width:150px;"></el-input>
									</el-form-item>
								</el-col>
								<el-col>
									<el-form-item style="margin-bottom: 10px;">
										<!-- <label class="search_label">试剂条码</label> -->
										<el-input v-model="searchForm.barcode" placeholder="请输入项目名称" style="width:150px;"></el-input>
									</el-form-item>
								</el-col>
								<el-col>
									<el-form-item style="margin-bottom: 10px;">
										<!-- <label class="search_label">试剂批号</label> -->
										<el-input v-model="searchForm.reagentBatch" placeholder="请输入试剂批号" style="width:150px;"></el-input>
									</el-form-item>
								</el-col>
								<!-- <el-col>
									<el-form-item style="margin-bottom: 10px;">
										<label class="search_label">至</label>
										<el-input v-model="searchForm.finishLiquid" placeholder="请输入结束样本编号" style="width:150px;"></el-input>
									</el-form-item>
								</el-col> -->
							</el-row>
							<el-row type="flex" class="row-bg" justify="space-around">
			                  <!--开始提交时间-->
								<el-col >
		                      	   <el-form-item style="display:inline-block;">
		                      	      <!-- <label class="search_label">提交时间</label> -->
		                      	      <template>
		                      	       <el-date-picker
		                      	           is-range
		                      	           v-model="searchForm.startTime"
		                      	           placeholder="开始提交时间" style="width:150px;">
		                      	         </el-date-picker>
		                      	      </template>
		                      	    </el-form-item>
		                      	</el-col>
		                      	<!--结束提交时间-->
		                      	<el-col >
		                      	   <el-form-item style="display:inline-block;">
		                      	      <!-- <label class="search_label">提交时间</label> -->
		                      	      <template>
		                      	       <el-date-picker
		                      	           is-range
		                      	           v-model="searchForm.endTime"
		                      	           placeholder="结束提交时间" style="width:150px;">
		                      	         </el-date-picker>
		                      	      </template>
		                      	    </el-form-item>
		                      	</el-col>
			                    
								<el-col>
									<el-form-item style="margin-bottom: 10px;">
										<!-- <label class="search_label">通用液条码</label> -->
										<el-input v-model="searchForm.commonReagentBarcode" placeholder="请输入通用液条码" style="width:150px;"></el-input>
									</el-form-item>
								</el-col>
								<el-col>
									<el-form-item style="margin-bottom: 10px;">
										<!-- <label class="search_label">通用液批号</label> -->
										<el-input v-model="searchForm.commonReagentBatch" placeholder="请输入通用液批号" style="width:150px;"></el-input>
									</el-form-item>
								</el-col>
		                      	<!--占用空间使用-->
		                      	<el-col>
		                      	</el-col>
								<el-col>
			                      	<el-form-item>
								      <el-button type="primary" @click = "searchClick">查询</el-button>
								      <el-button type="danger" @click = "clearClick">清除</el-button>
									</el-form-item>	
								</el-col>
							</el-row>
						</el-form>
					</div>
				<!-- </el-card> -->
				<el-tabs type="border-card" style="margin-top: 10px;">
					<el-tab-pane label="数据结果">
					<template>
					  <el-table
					    :data="tableData" v-loading.body="loading"
					    border
					    style="width: 100%">
					    <el-table-column label="Id"  min-width="8%" align='center' type="index">
					    	<!-- <template slot-scope="scope">
					    	    <span>{{scope.row.id}}</span>
					    	</template> -->
					    </el-table-column>
					    <el-table-column label="状态"  min-width="8%" al数据结果ign='center' show-overflow-tooltip>
					    	<template slot-scope="scope">
					    	    <span>{{scope.row.customerName}}</span>
					    	</template>
					    </el-table-column>
					    <el-table-column  label="类型"  min-width="8%" align='center' show-overflow-tooltip>
					    	<template slot-scope="scope">
					    	    <span>{{scope.row.serialNo}}</span>
					    	</template>
					    </el-table-column>
					    <el-table-column  label="样本编号"  min-width="8%" align='center' show-overflow-tooltip>
					    	<template slot-scope="scope">
					    	    <span>{{scope.row.liquidName}}</span>
					    	</template>
					    </el-table-column>
					    <el-table-column  label="原信号值"  min-width="8%" align='center' show-overflow-tooltip>
					    	<template slot-scope="scope">
					    	    <span>{{scope.row.originalSignal}}</span>
					    	</template>
					    </el-table-column>
					    <el-table-column  label="项目名称"  min-width="8%" align='center' show-overflow-tooltip>
					    	<template slot-scope="scope">
					    	    <span>{{scope.row.project}}</span>
					    	</template>
					    </el-table-column>
					    <el-table-column  label="修改后信号值"  min-width="8%" align='center' show-overflow-tooltip>
					    	<template slot-scope="scope">
					    	    <span>{{scope.row.signal}}</span>
					    	</template>
					    </el-table-column>
					    <el-table-column   label="结果"  min-width="8%" align='center' show-overflow-tooltip>
					    	<template slot-scope="scope">
					    	    <span>{{scope.row.batch}}</span>
					    	</template>
					    </el-table-column>
					    <el-table-column   label="单位" min-width="8%" align='center' show-overflow-tooltip>
					    	<template slot-scope="scope">
					    	    <span>{{scope.row.unit}}</span>
					    	</template>
					    </el-table-column>
					    <el-table-column    label="结果标识" min-width="8%" align='center' show-overflow-tooltip>
					    	<template slot-scope="scope">
					    	    <span>{{scope.row.flag}}</span>
					    	</template>
					    </el-table-column>
					    <el-table-column   label="导出LIS"  min-width="8%" align='center' show-overflow-tooltip>
					    	<template slot-scope="scope">
					    	    <span>{{scope.row.sendToLis}}</span>
					    	</template>
					    </el-table-column>
					    <el-table-column  label="提交时间"  min-width="8%" align='center' show-overflow-tooltip>
					    	<template slot-scope="scope">
					    	    <span>{{scope.row.readyTime}}</span>
					    	</template>
					    </el-table-column>
					    <el-table-column  label="报告时间"  min-width="8%" align='center' show-overflow-tooltip>
					    	<template slot-scope="scope">
					    	    <span>{{scope.row.readyTime}}</span>
					    	</template>
					    </el-table-column>
					    <el-table-column  fixed="right"  label="操作"  min-width="8%" align='center'>
					        <template slot-scope="scope">
					            <el-button type="text" size="small" @click="viewDetails">查看</el-button>
					            <!-- <el-button type="text" size="small">维修保养</el-button>
					            <el-button type="text" size="small">耗材情况</el-button> -->
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
					</el-tab-pane>
					<el-tab-pane label="结果分析">
						<template>
						  <el-tabs v-model="activeName" @tab-click="handleClick">
						    <el-tab-pane label="乙肝五项" name="first">
						    	<el-table
						    	  :data="tableData" v-loading.body="loading"
						    	  border
						    	  style="width: 100%">
						    	  <el-table-column  label="Id"  min-width="14%" align='center' show-overflow-tooltip type="index">
						    	  	<!-- <template slot-scope="scope">
						    	  	    <span>{{scope.row.id}}</span>
						    	  	</template> -->
						    	  </el-table-column>
						    	  <el-table-column   label="样本编号"  min-width="14%" align='center' show-overflow-tooltip>
						    	  	<template slot-scope="scope">
						    	  		<span>HBsAg 1706 Cal1</span>
						    	  		<span>HBsAg 1706 Cal2</span>
						    	  		<span>HBsAg 1706 Cal3</span>
						    	  		<span>HBsAg 1706 Cal4</span>
						    	  		<span>HBsAg 1706 Cal5</span>
						    	  		<span>HBsAg 1706 Cal6</span>
						    	  		<span>1</span>
						    	  	    <!-- <span>{{scope.row.bianhao}}</span> -->
						    	  	</template>
						    	  </el-table-column>
						    	  <el-table-column   label="Anti-HBc" min-width="14%" align='center' show-overflow-tooltip>
						    	  	<template slot-scope="scope">
						    	  		<span></span>
						    	  		<span></span>
						    	  		<span></span>
						    	  		<span></span>
						    	  		<span></span>
						    	  		<span></span>
						    	  		<span>>60</span>
						    	  	    <!-- <span>{{scope.row.HBc}}</span> -->
						    	  	</template>
						    	  </el-table-column>
						    	  <el-table-column  label="Anti-HBe"  min-width="14%" align='center' show-overflow-tooltip>
						    	  	<template slot-scope="scope">
						    	  		<span></span>
						    	  		<span></span>
						    	  		<span></span>
						    	  		<span></span>
						    	  		<span></span>
						    	  		<span></span>
						    	  		<span>5.12</span>
						    	  	    <!-- <span>{{scope.row.HBe}}</span> -->
						    	  	</template>
						    	  </el-table-column>
						    	  <el-table-column   label="Anti-HBs"  min-width="14%" align='center' show-overflow-tooltip>
						    	  	<template slot-scope="scope">
						    	  		<span></span>
						    	  		<span></span>
						    	  		<span></span>
						    	  		<span></span>
						    	  		<span></span>
						    	  		<span></span>
						    	  		<span></span>
						    	  		<span>135.27</span>
						    	  	    <!-- <span>{{scope.row.HBs}}</span> -->
						    	  	</template>
						    	  </el-table-column>
						    	  <el-table-column   label="HBeAg"  min-width="14%" align='center' show-overflow-tooltip>
						    	  	<template slot-scope="scope">
						    	  		<span></span>
						    	  		<span></span>
						    	  		<span></span>
						    	  		<span></span>
						    	  		<span></span>
						    	  		<span></span>
						    	  		<span>0.1</span>
						    	  	    <!-- <span>{{scope.row.HBeAg}}</span> -->
						    	  	</template>
						    	  </el-table-column>
						    	  <el-table-column   label="HBsAg"  min-width="14%" align='center' show-overflow-tooltip>
						    	  	<template slot-scope="scope">
						    	  		<span>0</span>
						    	  		<span>0.27</span>
						    	  		<span>3.95</span>
						    	  		<span>32.31</span>
						    	  		<span>155.05</span>
						    	  		<span>527.19</span>
						    	  		<span>0.05</span>
						    	  	    <!-- <span>{{scope.row.HBsAg}}</span> -->
						    	  	</template>
						    	  </el-table-column>
						    	</el-table>
						    </el-tab-pane>
						    <el-tab-pane label="传染病八项" name="second">
						    	<el-table
						    	  :data="tableData" v-loading.body="loading"
						    	  border
						    	  style="width: 100%">
						    	  <el-table-column  label="Id"  min-width="10%" align='center' show-overflow-tooltip type="index">
						    	  	<!-- <template slot-scope="scope">
						    	  	    <span>{{scope.row.id}}</span>
						    	  	</template> -->
						    	  </el-table-column>
						    	  <el-table-column   label="样本编号"  min-width="10%" align='center' show-overflow-tooltip>
						    	  	<template slot-scope="scope">
						    	  		<span>HBsAg 1706 Cal1</span>
						    	  	    <!-- <span>{{scope.row.project}}</span> -->
						    	  	</template>
						    	  </el-table-column>
						    	  <el-table-column  label="Anti-HBc"  min-width="10%" align='center' show-overflow-tooltip>
						    	  	<template slot-scope="scope">
						    	  		<span></span>
						    	  	    <!-- <span>{{scope.row.testMethod}}</span> -->
						    	  	</template>
						    	  </el-table-column>
						    	  <el-table-column   label="Anti-HBe"  min-width="10%" align='center' show-overflow-tooltip>
						    	  	<template slot-scope="scope">
						    	  		<span></span>
						    	  	    <!-- <span>{{scope.row.judgeStandard}}</span> -->
						    	  	</template>
						    	  </el-table-column>
						    	  <el-table-column   label="Anti-HBs" min-width="10%" align='center' show-overflow-tooltip>
						    	  	<template slot-scope="scope">
						    	  		<span></span>
						    	  	    <!-- <span>{{scope.row.judgeStandard}}</span> -->
						    	  	</template>
						    	  </el-table-column>
						    	  <el-table-column   label="Anti-TP"  min-width="10%" align='center' show-overflow-tooltip>
						    	  	<template slot-scope="scope">
						    	  		<span></span>
						    	  	    <!-- <span>{{scope.row.judgeStandard}}</span> -->
						    	  	</template>
						    	  </el-table-column>
						    	  <el-table-column   label="HBeAg"  min-width="10%" align='center' show-overflow-tooltip>
						    	  	<template slot-scope="scope">
						    	  		<span></span>
						    	  	    <!-- <span>{{scope.row.judgeStandard}}</span> -->
						    	  	</template>
						    	  </el-table-column>
						    	  <el-table-column   label="HBsAg"  min-width="10%" align='center' show-overflow-tooltip>
						    	  	<template slot-scope="scope">
						    	  		<span>0.27</span>
						    	  	    <!-- <span>{{scope.row.judgeStandard}}</span> -->
						    	  	</template>
						    	  </el-table-column>
						    	  <el-table-column   label="HCV"  min-width="10%" align='center' show-overflow-tooltip>
						    	  	<template slot-scope="scope">
						    	  		<span></span>
						    	  	    <!-- <span>{{scope.row.judgeStandard}}</span> -->
						    	  	</template>
						    	  </el-table-column>
						    	  	<template slot-scope="scope">
						    	  		<span></span>
						    	  	    <!-- <span>{{scope.row.judgeStandard}}</span> -->
						    	  	</template>
						    	  </el-table-column>
						    	</el-table>
						    </el-tab-pane>
						  </el-tabs>  
						</template>
					</el-tab-pane>
					<el-tab-pane label="关联耗材">
						<template>
						  <el-table
						    :data="tableData" v-loading.body="loading"
						    border
						    style="width: 100%">
						    <el-table-column   label="Id" min-width="20%" align='center' show-overflow-tooltip type="index">
						    	<!-- <template slot-scope="scope">
						    	    <span>{{scope.row.id}}</span>
						    	</template> -->
						    </el-table-column>
						    <el-table-column   label="样本编号"  min-width="20%" align='center' show-overflow-tooltip>
						    	<template slot-scope="scope">
						    	    <span>{{scope.row.liquidName}}</span>
						    	</template>
						    </el-table-column>
						    <el-table-column   label="项目名称"  min-width="20%" align='center' show-overflow-tooltip>
						    	<template slot-scope="scope">
						    	    <span>{{scope.row.project}}</span>
						    	</template>
						    </el-table-column>
						    <el-table-column   label="试剂条码"  min-width="20%" align='center' show-overflow-tooltip>
						    	<template slot-scope="scope">
						    	    <span>{{scope.row.reagentBarcode}}</span>
						    	</template>
						    </el-table-column>
						    <el-table-column  label="通用液条码"  min-width="20%" align='center' show-overflow-tooltip>
						    	<template slot-scope="scope">
						    	    <span>{{scope.row.commonReagentBarcode}}</span>
						    	</template>
						    </el-table-column>
						    <!-- <el-table-column  fixed="right"  label="操作"  width="200" align='center'>
						        <template slot-scope="scope">
						            <el-button type="text" size="small" @click="viewDetails(scope.row)">查看</el-button>
						            <el-button type="text" size="small">维修保养</el-button>
						            <el-button type="text" size="small">耗材情况</el-button>
						        </template>
						    </el-table-column> -->
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
					</el-tab-pane>
					<el-tab-pane label="项目信息">
						<template>
						  <el-table
						    :data="tableData" v-loading.body="loading"
						    border
						    style="width: 100%">
						    <el-table-column  label="Id"  min-width="25%" align='center' show-overflow-tooltip type="index">
						    	<!-- <template slot-scope="scope">
						    	    <span>{{scope.row.id}}</span>
						    	</template> -->
						    </el-table-column>
						    <el-table-column   label="项目名称" min-width="25%" align='center' show-overflow-tooltip>
						    	<template slot-scope="scope">
						    	    <span>{{scope.row.project}}</span>
						    	</template>
						    </el-table-column>
						    <el-table-column  label="测试方法"  min-width="25%" align='center' show-overflow-tooltip>
						    	<template slot-scope="scope">
						    	    <span>{{scope.row.testMethod}}</span>
						    	</template>
						    </el-table-column>
						    <el-table-column   label="结果判定标准" min-width="25%" align='center' show-overflow-tooltip>
						    	<template slot-scope="scope">
						    	    <span>{{scope.row.judgeStandard}}</span>
						    	</template>
						    </el-table-column>
						    <!-- <el-table-column  fixed="right"  label="操作"  width="250" align='center'>
						        <template slot-scope="scope">
						            <el-button type="text" size="small" @click="viewDetails(scope.row)">查看</el-button>
						            <el-button type="text" size="small">维修保养</el-button>
						            <el-button type="text" size="small">耗材情况</el-button>
						        </template>
						    </el-table-column> -->
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
					</el-tab-pane>
					<el-tab-pane label="样本信息">
						<template>
						  <el-table
						    :data="tableData" v-loading.body="loading"
						    border
						    style="width: 100%">
						    <el-table-column  label="Id" min-width="14%" align='center' show-overflow-tooltip type="index">
						    	<!-- <template slot-scope="scope">
						    	    <span>{{scope.row.id}}</span>
						    	</template> -->
						    </el-table-column>
						    <el-table-column  label="样本编号" min-width="14%" align='center' show-overflow-tooltip>
						    	<template slot-scope="scope">
						    	    <span>{{scope.row.liquidName}}</span>
						    	</template>
						    </el-table-column>
						    <el-table-column  label="载架号"  min-width="14%" align='center' show-overflow-tooltip>
						    	<template slot-scope="scope">
						    	    <span>{{scope.row.rackNo}}</span>
						    	</template>
						    </el-table-column>
						    <el-table-column  label="位置号"  min-width="14%" align='center' show-overflow-tooltip>
						    	<template slot-scope="scope">
						    	    <span>{{scope.row.positionNo}}</span>
						    	</template>
						    </el-table-column>
						    <el-table-column  label="是否为急诊"  min-width="14%" align='center' show-overflow-tooltip>
						    	<template slot-scope="scope">
						    	    <span>{{scope.row.emergency}}</span>
						    	</template>
						    </el-table-column>
						    <el-table-column  label="添加时间" min-width="14%" align='center' show-overflow-tooltip>
						    	<template slot-scope="scope">
						    	    <span>{{scope.row.addTime}}</span>
						    	</template>
						    </el-table-column>
						    <el-table-column  label="提交时间"  min-width="14%" align='center' show-overflow-tooltip>
						    	<template slot-scope="scope">
						    	    <span>{{scope.row.readyTime}}</span>
						    	</template>
						    </el-table-column>
						    <!-- <el-table-column  fixed="right"  label="操作"  width="200" align='center'>
						        <template slot-scope="scope">
						            <el-button type="text" size="small" @click="viewDetails(scope.row)">查看</el-button>
						            <el-button type="text" size="small">维修保养</el-button>
						            <el-button type="text" size="small">耗材情况</el-button>
						        </template>
						    </el-table-column> -->
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
					</el-tab-pane>
				</el-tabs>
			</el-col>
		</el-row>
	</div>
</template>
<script type="text/javascript">
	import {putSearchData} from 'api/center/experiment/index';
	import { mapGetters } from 'vuex';
	export default{
		name:"calibration",
		data(){
			return{
				tableData:[],
				areaData:[],
				area:"",
				stateOptions:[{
					value:"选项1",
					label:"液体类型"
				},{
					value:"选项2",
					label:"样本"
				},{
					value:"选项3",
					label:"校准品"
				},{
					value:"选项4",
					label:"质控品"
				}],
				loading:false,
				searchForm:{
					customerName:"",
					serialNo:"",
					startLiquid:"",
					finishLiquid:'',
					project:"",
					finishReadyTime:"",
					startReadyTime:"",
					commonReagentBatch:"",
					commonReagentBarcode:"",
					reagentBatch:"",
					reagentBarcode:"",
				},
				listQuery:{
					limit:10,
					page:1
				},
				total:null,
				activeName: 'second',
				pickerBeginDateBefore:{
                  disabledDate:(time)=>{
                    let beginDateVal = this.searchForm.finishReadyTime;
                    if(beginDateVal){
                      return time.getTime()>beginDateVal;
                    }
                  }
                },
                pickerBeginDateAfter:{
                  disabledDate:(time)=>{
                    let beginDateVal = this.searchForm.startReadyTime;
                    if(beginDateVal){
                      return time.getTime()<beginDateVal;
                    }
                  }
                },
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
        		putSearchData(this.listQuery,this.searchForm).then(response =>{
        			this.tableData = response.data.list;
        			this.total= response.data.total;
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
			handleClick(){

			},
			viewDetails(){

			},
			resetTemp(){
				this.searchForm={
					customerName:"",
					serialNo:"",
					liquidType:'',
					project:"",
					batch:"",
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
	/*.el-card__header{
        padding: 8px 20px !important;-webkit-box-sizing:border-box;
    }*/
    .checkBox{
      border:1px solid #c2ccd8;padding: 10px 10px 0 10px;
    }
</style>
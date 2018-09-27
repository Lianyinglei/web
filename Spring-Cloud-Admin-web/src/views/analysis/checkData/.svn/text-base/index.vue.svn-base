<template>
	<div class="app-container calendar-list-container">
		<el-row>
    	  <el-col >
	  		<div class="checkBox">
		        <el-form ref="form" :model="searchForm" >
		          <el-row type="flex" class="row-bg" justify="space-around" >
		              <el-col>
		                 <el-form-item style="margin-bottom: 10px;">
		                    <label class="search_label"">装机时间:</label>
		                    <template>
		                         <el-date-picker
		                           v-model="searchForm.startInstallTime"
		                           type="date"
		                           placeholder="装机开始日期" style="width:150px;"
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
		                           v-model="searchForm.endInstallTime"
		                           type="date"
		                           placeholder="装机结束日期" style="width:150px;"
		                           :picker-options="pickerBeginDateAfter" format="yyyy-MM-dd">
		                         </el-date-picker>
		                    </template>
		                  </el-form-item>
		                </el-col>
		                <el-col>
		                  <el-form-item style="margin-bottom: 10px;">
		                    <label class="search_label">正式启用:</label>
		                    <template>
		                         <el-date-picker
		                           v-model="searchForm.startUseTime"
		                           type="date"
		                           placeholder="正式启用" style="width:150px;"
		                           :picker-options="pickerOptions0" format="yyyy-MM-dd">
		                         </el-date-picker>
		                    </template>
		                  </el-form-item>
		                </el-col>
		                <el-col>
		                  <el-form-item style="margin-bottom: 10px;">
		                    <label class="search_label" style="text-align: center;">重新启用</label>
		                    <template>
		                         <el-date-picker
		                           v-model="searchForm.endUseTime"
		                           type="date"
		                           placeholder="重新启用" style="width:150px;"
		                           :picker-options="pickerOptions1" format="yyyy-MM-dd">
		                         </el-date-picker>
		                    </template>
		                  </el-form-item>
		                </el-col>
		                <el-col>
		                  <el-form-item style="margin-bottom: 10px;">
		                    <label class="search_label" style="text-align: center;">停用时间</label>
		                    <template>
		                         <el-date-picker
		                           v-model="searchForm.enUseTime"
		                           type="date"
		                           placeholder="停用时间" style="width:150px;"
		                           :picker-options="pickerOptions1" format="yyyy-MM-dd">
		                         </el-date-picker>
		                    </template>
		                  </el-form-item>
		                </el-col>
		                
		            </el-row>
		            <el-row type="flex" class="row-bg" justify="space-around" >
		            	 <el-col >
		            	   <el-form-item style="margin-bottom: 10px;">
		            	    <div class="select_area">
		            	    <label class="search_label">地区:</label>
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
		            	    <label class="search_label">地址:</label>
		            	    <el-input v-model="searchForm.address" placeholder="请输入x省x市x区" style="width:150px;"></el-input>
		            	  </el-form-item>
		            	</el-col>
		            	<el-col>
		            	  <el-form-item style="margin-bottom: 10px;">
		            	    <label class="search_label">客户名称:</label>
		            	    <el-input v-model="searchForm.customerName" placeholder="请输入客户名称" style="width:150px;"></el-input>
		            	  </el-form-item>
		            	</el-col>
		            	<el-col>
		                    <el-form-item style="margin-bottom: 10px;">
		                          <label class="search_label">医院科室</label>
		                          <el-input v-model="searchForm.department" placeholder="请输入科室名称" style="width:150px;"></el-input>
		                    </el-form-item>
		                </el-col>
		                <el-col >
		                  <el-form-item style="margin-bottom: 10px;">
		                    <label class="search_label">医院等级</label>
		                    <template>
		                      <el-select v-model="searchForm.level" placeholder="请选择" style="width:150px;">
		                        <el-option
		                          v-for="item in levelOptions"
		                          :key="item.id"
		                          :label="item.itemName"
		                          :value="item.dicCode">
		                        </el-option>
		                      </el-select>
		                    </template>
		                  </el-form-item>
		                </el-col>
		            </el-row>
		             <el-row type="flex" class="row-bg" justify="space-around" >
		             	  <el-col>	
			             	  <el-form-item style="margin-bottom: 10px;">
			             	      <label class="search_label">仪器型号:</label>
			             	      <el-input v-model="searchForm.type" placeholder="请输入仪器型号" style="width:150px;"></el-input>
			             	  </el-form-item>
		             		</el-col>
		             		<el-col >
			                 <el-form-item style="margin-bottom: 10px;">
			                     <label class="search_label">仪器序列号</label>
			                     <el-input v-model="searchForm.serialNo" placeholder="请输入序列号" style="width:150px;"></el-input>
			                 </el-form-item>
			             	</el-col>
		             		<el-col >
		             	    <el-form-item style="margin-bottom: 10px;">
		             	     <template >
		             	       <label class="search_label">仪器状态:</label>
		             	       <el-select v-model="searchForm.state" placeholder="请选择" style="width:150px;">
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
								<label class="search_label">耗材类型</label>
								<el-input v-model="searchForm.type" placeholder="请输入耗材类型" style="width:150px;"></el-input>
							</el-form-item>
						</el-col>
		             	 <el-col>
							<el-form-item style="margin-bottom: 10px;">
								<label class="search_label">项目名称</label>
								<el-input v-model="searchForm.project" placeholder="请输入项目名称" style="width:150px;"></el-input>
							</el-form-item>
						</el-col>

		             </el-row>
		             <el-row type="flex" class="row-bg" justify="space-around" >
			             <el-col>
							<el-form-item style="margin-bottom: 10px;">
								<label class="search_label">批号</label>
								<el-input v-model="searchForm.batch" placeholder="请输入批号" style="width:150px;"></el-input>
							</el-form-item>
						</el-col>
			             <el-col>
			             	  <el-form-item style="margin-bottom: 10px;">
			             	    <label class="search_label">工程师:</label>
			             	    <el-input v-model="searchForm.engineerName" placeholder="请输入工程师" style="width:150px;"></el-input>
			             	  </el-form-item>
			             </el-col> 
			             <el-col>
			               	<el-form-item style="margin-bottom: 10px;">
			               		<label class="search_label">位置变动:</label>
			               	    <el-select v-model="searchForm.region" placeholder="请选择" style="width:150px;">
			               	      <el-option label="是" value="shanghai"></el-option>
			               	      <el-option label="否" value="beijing"></el-option>
			               	    </el-select>
			               	  </el-form-item>
			            </el-col>
			            <el-col>
			            </el-col>
			            <el-col>
			               <el-form-item style="padding-left: 30px;">
			                  <el-button type="primary" @click = "searchClick" >查询</el-button>
			                  <el-button type="danger" @click = "clearClick">清除</el-button>
			              </el-form-item>
			            </el-col>
		            </el-row>
		        </el-form>
	  		</div>
	  		<div class="table_list">
	  		  <div class="header_style">
	  		    <span>仪器基本信息</span>
	  		    <!-- <el-button style="float: right;margin-left:10px;" type="primary">耗材情况</el-button>-->
	  		    <!-- <el-button style="margin-left: 10px;" type="primary" @click = "newAddPerson">新增用户</el-button>  -->
	  		    <el-button style="float: right; margin-top: 8px;" type="success" >导出</el-button>
	  		  </div>
	  		  <template>
	  		    <el-table
	  		      :key='tableKey'
	  		      :data="tableData" v-loading.body="loading"
	  		      border
	  		      style="width: 100%">
	  		      <el-table-column  label="Id"  width="100" type="index" align="center">
	  		        
	  		      </el-table-column>
	  		      <el-table-column label="装机医院省份"  width="150">
	  		        <template slot-scope="scope">
	  		            <span>{{scope.row.shengfen}}</span>
	  		        </template>
	  		      </el-table-column>
	  		      <el-table-column  label="装机医院市级"  width="150">
	  		        <template slot-scope="scope">
	  		            <span>{{scope.row.shiji}}</span>
	  		        </template>
	  		      </el-table-column>
	  		      <el-table-column  label="装机医院县级"  width="150">
	  		        <template slot-scope="scope">
	  		            <span>{{scope.row.xianji}}</span>
	  		        </template>
	  		      </el-table-column>
	  		      <el-table-column  label="装机医院区级"  width="120">
	  		        <template slot-scope="scope">
	  		            <span>{{scope.row.quji}}</span>
	  		        </template>
	  		      </el-table-column>
	  		      <el-table-column  label="装机医院名称"  width="120">
	  		        <template slot-scope="scope">
	  		            <span>{{scope.row.mingcheng}}</span>
	  		        </template>
	  		      </el-table-column>
	  		      <el-table-column label="装机医院科室"  width="120">
	  		        <template slot-scope="scope">
	  		            <span>{{scope.row.keshi}}</span>
	  		        </template>
	  		      </el-table-column>
	  		      <el-table-column label="仪器位置变动日期"  width="120">
	  		        <template slot-scope="scope">
	  		            <span>{{scope.row.biandong}}</span>
	  		        </template>
	  		      </el-table-column>
	  		      <el-table-column label="仪器变动后位置"  width="120">
	  		        <template slot-scope="scope">
	  		            <span>{{scope.row.weizhi}}</span>
	  		        </template>
	  		      </el-table-column>
	  		      <el-table-column  label="仪器型号"  width="120">
	  		        <template slot-scope="scope">
	  		            <span>{{scope.row.yiqitype}}</span>
	  		        </template>
	  		      </el-table-column>
	  		      <el-table-column label="仪器序列号"  width="120">
	  		        <template slot-scope="scope">
	  		            <span>{{scope.row.xuliehao}}</span>
	  		        </template>
	  		      </el-table-column>
	  		      <el-table-column label="装机日期"  width="120">
	  		        <template slot-scope="scope">
	  		            <span>{{scope.row.zhuangjiriqi}}</span>
	  		        </template>
	  		      </el-table-column>
	  		      <el-table-column label="首次启用日期"  width="120">
	  		        <template slot-scope="scope">
	  		            <span>{{scope.row.shouciqiyong}}</span>
	  		        </template>
	  		      </el-table-column>
	  		      <el-table-column label="停用日期"  width="120">
	  		        <template slot-scope="scope">
	  		            <span>{{scope.row.tingyong}}</span>
	  		        </template>
	  		      </el-table-column>
	  		      <el-table-column label="重新启用日期"  width="120">
	  		        <template slot-scope="scope">
	  		            <span>{{scope.row.chongxinqiyong}}</span>
	  		        </template>
	  		      </el-table-column>
	  		      <el-table-column label="数据采集时段"  width="120">
	  		        <template slot-scope="scope">
	  		            <span>{{scope.row.caijishiduan}}</span>
	  		        </template>
	  		      </el-table-column>
	  		      <el-table-column label="项目名称"  width="120">
	  		        <template slot-scope="scope">
	  		            <span>{{scope.row.project}}</span>
	  		        </template>
	  		      </el-table-column>
	  		      <el-table-column label="批号"  width="120">
	  		        <template slot-scope="scope">
	  		            <span>{{scope.row.batch}}</span>
	  		        </template>
	  		      </el-table-column>
	  		      <el-table-column label="使用最小单位"  width="120">
	  		        <template slot-scope="scope">
	  		            <span>{{scope.row.danwei}}</span>
	  		        </template>
	  		      </el-table-column>

	  		      <!-- <el-table-column  fixed="right"  label="操作"  width="100" align='center'>
	  		          <template slot-scope="scope">
	  		              <el-button type="text" size="small" @click="viewDetails(scope.row)">查看</el-button>
	  		              <el-button type="text" size="small" @click="maintainList(scope.row)">维修保养</el-button>
	  		              <el-button type="text" size="small" @click="consumList(scope.row)">耗材情况</el-button>
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
	  		</div>
	  	  </el-col>
	  	</el-row>
	</div>	
</template>
<script type="text/javascript">
	import { mapGetters } from 'vuex';
	export default{
		name:"checkData",
		data(){
			return{
				searchForm:{
				  serialNo:'',
				  customerName:"",
				  type:"",
				  softwareVersion:"",
				  frameVersion:"",
				  state:"",
				  startInstallTime:"",
				  endInstallTime:"",
				  startUseTime:"",
				  endUseTime:"",
				  useTime:"",
				  areaId:'',
				  customerAddress:''
				},
				tableData:[{
		          shengfen: '山西省',
		          shiji: '大同市',
		          xianji: '广灵县',
		          quji:"",
		          mingcheng:"306医院",
		          keshi:"骨科",
		          biandong:"2018-05-04",
		          weizhi:"航空医院",
		          yiqitype:"LiCA 500",
		          xuliehao:"1265869937",
		          zhuangjiriqi:"2018-08-30",
		          shouciqiyong:"2018-08-23",
		          tingyong:"2018-06-30",
		          chongxinqiyong:"2018-06-15",
		          project:"HBsAg",
		          caijishiduan:"2018-02-22至2018-06-30",
		          batch:"1117049107627",
		          danwei:"m"

		        }],
				listQuery:{
                  page: 1,
                  limit: 10
                },
                total:1
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
	.el-dialog{
	  width:80%;top:7% !important;
	}
	.item span{
	  padding-left: 10px;
	}
	.checkBox{
	  border:1px solid #c2ccd8;padding: 10px 10px 0 10px;
	}
	.table_list{
	  border:1px solid #c2ccd8;margin-top:10px;padding: 0 10px 10px 10px;
	}
	.header_style{
	  height:50px;line-height: 50px;
	}
</style>
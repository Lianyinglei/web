<template>
	<div class="app-container calendar-list-container">
		<el-row>
			<el-col >
				<!-- <el-card class="box-card"> -->
					<div class="checkBox">
						<el-form ref="form" :model="searchForm" >
							<el-row type="flex" class="row-bg" justify="space-around">
								<el-col>
									<el-form-item>
										<label class="search_label">工程师</label>
										<el-input v-model="searchForm.name" placeholder="请输入工程师" style="width:150px;"></el-input>
									</el-form-item>
								</el-col>
								<el-col>
									<el-form-item>
										<label class="search_label">手机号</label>
										<el-input v-model="searchForm.mobile" placeholder="请输入手机号" style="width:150px;"></el-input>
									</el-form-item>
								</el-col>
								<el-col>
									<el-form-item>
										<label class="search_label">邮箱</label>
										<el-input v-model="searchForm.email" placeholder="请输入邮箱" style="width:150px;"></el-input>
									</el-form-item>
								</el-col>
								<el-col></el-col>
								<el-col>
								<el-form-item style="float: right;">
								      <el-button type="primary" @click = "searchClick" >查询</el-button>
								      <el-button type="danger" @click = "clearClick">清除</el-button>
								</el-form-item>
							</el-col>
							</el-row>
							
						</el-form>
					</div>
				<!-- </el-card> -->
				<!-- <el-card class="box-card" style="margin-top: 20px;"> -->
					<div class="table_list">
					<div  class="header_style">
					  <span>工程师信息</span>
					  <el-button style="float: right;margin-top:8px; " type="success">导出</el-button>
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
					    <el-table-column  label="工程师"  width="150" align='center'>
					    	<template slot-scope="scope">
					    	    <span>{{scope.row.name}}</span>
					    	</template>
					    </el-table-column>
					    <el-table-column  label="电话"  width="140" align='center'>
					    	<template slot-scope="scope">
					    	    <span>{{scope.row.tel}}</span>
					    	</template>
					    </el-table-column>
					    <el-table-column  label="手机"  width="140" align='center'>
					    	<template slot-scope="scope">
					    	    <span>{{scope.row.mobile}}</span>
					    	</template>
					    </el-table-column>
					    <el-table-column  label="邮箱"  width="140" align='center'>
					    	<template slot-scope="scope">
					    	    <span>{{scope.row.email}}</span>
					    	</template>
					    </el-table-column>
					    <el-table-column  label="仪器数量"  width="100" align='center'>
					    	<template slot-scope="scope">
					    	    <span>{{scope.row.number}}</span>
					    	</template>
					    </el-table-column>
					    <el-table-column  label="保养数量"  width="100" align='center'>
					    	<template slot-scope="scope">
					    	    <span>{{scope.row.maintainNum}}</span>
					    	</template>
					    </el-table-column>
					    <el-table-column  label="故障数量"  width="100" align='center'>
					    	<template slot-scope="scope">
					    	    <span>{{scope.row.alertNum}}</span>
					    	</template>
					    </el-table-column>
					    <el-table-column  fixed="right"  label="操作"  width="220" align='center'>
					        <template slot-scope="scope">
					            <el-button type="text" size="small" >维修保养</el-button>
					            <el-button type="text" size="small">仪器信息</el-button>
					            <el-button type="text" size="small">客户信息</el-button>
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
	import {getEngineer,putSeachData} from 'api/monitor/engineer/index';
	import { mapGetters } from 'vuex';
	export default {
		name:"engineer",
		data(){
			return {
				tableData:[],
				searchForm:{
					name:"",
					mobile:"",
					email:""
				},
				listQuery:{
					page:1,
					limit:20
				},
				loading:false,
				total:null
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
				putSeachData(this.listQuery,this.searchForm).then(response=>{
					this.loadingData();
					this.tableData = response.data.list;
					this.total = response.data.total;
				})
			},
			clearClick(){
				this.resetTemp();
			},
			resetTemp(){
              this.searchForm = {
               	name:"",
				mobile:"",
				email:""
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
      border:1px solid #c2ccd8;padding: 10px 10px 0 10px;
    }
    .table_list{
      border:1px solid #c2ccd8;margin-top:10px;padding: 0 10px 10px 10px;
    }
    .header_style{
      height:50px;line-height: 50px;
    }
</style>
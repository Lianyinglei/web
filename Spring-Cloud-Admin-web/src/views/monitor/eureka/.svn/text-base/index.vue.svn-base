<template>
    <div class="app-container calendar-list-container">
    	<el-row>
    	  <el-col >
    	  		<!-- <el-card class="box-card"> -->
    	  		  <div class="checkBox">
                <el-form ref="form" :model="searchForm" >
                  <el-row type="flex" class="row-bg" justify="space-around" >
                      <el-col>
                         <el-form-item style="margin-bottom: 10px;">
                            <label class="search_label"">安装时间:</label>
                            <template>
                                 <el-date-picker
                                   v-model="searchForm.startInstallTime"
                                   type="date"
                                   placeholder="安装开始日期" style="width:150px;"
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
                                   placeholder="安装结束日期" style="width:150px;"
                                   :picker-options="pickerBeginDateAfter" format="yyyy-MM-dd">
                                 </el-date-picker>
                            </template>
                          </el-form-item>
                        </el-col>
                        <el-col>
                          <el-form-item style="margin-bottom: 10px;">
                            <label class="search_label">启用时间:</label>
                            <template>
                                 <el-date-picker
                                   v-model="searchForm.startUseTime"
                                   type="date"
                                   placeholder="启用开始日期" style="width:150px;"
                                   :picker-options="pickerOptions0" format="yyyy-MM-dd">
                                 </el-date-picker>
                            </template>
                          </el-form-item>
                        </el-col>
                        <el-col>
                          <el-form-item style="margin-bottom: 10px;">
                            <label class="search_label" style="text-align: center;">至</label>
                            <template>
                                 <el-date-picker
                                   v-model="searchForm.endUseTime"
                                   type="date"
                                   placeholder="启用结束日期" style="width:150px;"
                                   :picker-options="pickerOptions1" format="yyyy-MM-dd">
                                 </el-date-picker>
                            </template>
                          </el-form-item>
                        </el-col>
                        <el-col>
                        <el-form-item style="margin-bottom: 10px;">
                            <label class="search_label">仪器型号:</label>
                            <el-input v-model="searchForm.type" placeholder="请输入仪器型号" style="width:150px;"></el-input>
                        </el-form-item>
                      </el-col>
                    </el-row>
                    <el-row type="flex" class="row-bg" justify="space-around" >
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
                          <label class="search_label">工程师:</label>
                          <el-input v-model="searchForm.engineerName" placeholder="请输入工程师" style="width:150px;"></el-input>
                        </el-form-item>
                      </el-col>
                      
                    </el-row>
                     <el-row type="flex" class="row-bg" justify="space-around" >
                        <el-col >
                         <el-form-item style="margin-bottom: 10px;">
                             <label class="search_label">仪器序列号</label>
                             <el-input v-model="searchForm.serialNo" placeholder="请输入序列号" style="width:150px;"></el-input>
                         </el-form-item>
                       </el-col>
                       <el-col >
                         <el-form-item style="margin-bottom: 10px;">
                           <label class="search_label">软件版本:</label>
                           <el-input v-model="searchForm.softwareVersion" placeholder="请输入软件版本" style="width:150px;"></el-input>
                         </el-form-item>
                       </el-col>
                       <el-col>
                         <el-form-item style="margin-bottom: 10px;">
                           <label class="search_label">固件版本:</label>
                           <el-input v-model="searchForm.frameVersion" placeholder="请输入固件版本" style="width:150px;"></el-input>
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
    	  		<!-- </el-card> -->
                <!-- <el-card class="box-card" style="margin-top: 20px;"> -->
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
                        <el-table-column label="仪器序列号"  width="150">
                          <template slot-scope="scope">
                              <span>{{scope.row.serialNo}}</span>
                          </template>
                        </el-table-column>
                        <el-table-column  label="客户名称"  width="150">
                          <template slot-scope="scope">
                              <span>{{scope.row.customerName}}</span>
                          </template>
                        </el-table-column>
                        <!-- <el-table-column  label="客户地址"  width="150">
                          <template slot-scope="scope">
                              <span>{{scope.row.address}}</span>
                          </template>
                        </el-table-column> -->
                        <el-table-column  label="工程师名称"  width="150">
                          <template slot-scope="scope">
                              <span>{{scope.row.engineerName}}</span>
                          </template>
                        </el-table-column>
                        <el-table-column  label="仪器类型"  width="120">
                          <template slot-scope="scope">
                              <span>{{scope.row.type}}</span>
                          </template>
                        </el-table-column>
                        <el-table-column  label="安装时间"  width="120">
                          <template slot-scope="scope">
                              <span>{{scope.row.installTime}}</span>
                          </template>
                        </el-table-column>
                        <el-table-column label="启用时间"  width="120">
                          <template slot-scope="scope">
                              <span>{{scope.row.useTime}}</span>
                          </template>
                        </el-table-column>
                        <el-table-column label="仪器状态"  width="120">
                          <template slot-scope="scope">
                              <span>{{scope.row.state}}</span>
                          </template>
                        </el-table-column>
                        <el-table-column label="固件版本号"  width="120">
                          <template slot-scope="scope">
                              <span>{{scope.row.frameVersion}}</span>
                          </template>
                        </el-table-column>
                        <el-table-column  label="软件版本号"  width="120">
                          <template slot-scope="scope">
                              <span>{{scope.row.softwareVersion}}</span>
                          </template>
                        </el-table-column>
                        <el-table-column label="停用时间"  width="120">
                          <template slot-scope="scope">
                              <span>{{scope.row.updateTime}}</span>
                          </template>
                        </el-table-column>
                        <el-table-column label="重启时间"  width="120">
                          <template slot-scope="scope">
                              <span>{{scope.row.updateTime}}</span>
                          </template>
                        </el-table-column>
                        <el-table-column  fixed="right"  label="操作"  width="100" align='center'>
                            <template slot-scope="scope">
                                <el-button type="text" size="small" @click="viewDetails(scope.row)">查看</el-button>
                                <!-- <el-button type="text" size="small" @click="maintainList(scope.row)">维修保养</el-button>
                                <el-button type="text" size="small" @click="consumList(scope.row)">耗材情况</el-button> -->
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
                  </div>
                <!-- </el-card> -->
    	  </el-col>
    	</el-row>
      <el-dialog
        title="详情信息"
        :visible.sync="dialogVisible"
        >
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>仪器基本信息</span>
          </div>
          <div class="text item">
              <el-row type="flex" class="row-bg" justify="space-around">
                <el-col :span="6"><label>仪器序列号:</label><span>{{instrumentData.serialNo}}</span></el-col>
                <!-- <el-col :span="6"><label>客户名称:</label><span>{{instrumentData.customerName}}</span></el-col> -->
                <!-- <el-col :span="6"><label>工程师名称:</label><span>{{instrumentData.engineerName}}</span></el-col> -->
                <el-col :span="6"><label>仪器类型:</label><span>{{instrumentData.type}}</span></el-col>
                <el-col :span="6"><label>仪器状态:</label><span>{{instrumentData.state}}</span></el-col>
              </el-row>
              <!-- <el-row type="flex" class="row-bg" justify="space-around">
                <el-col :span="6"><label>客户地址:</label><span>{{instrumentData.address}}</span></el-col>
                
              </el-row> -->
              <el-row type="flex" class="row-bg" justify="space-around">
                <el-col :span="6"><label>固件号版本:</label><span>{{instrumentData.frameVersion}}</span></el-col>
                <el-col :span="6"><label>软件号版本:</label><span>{{instrumentData.softwareVersion}}</span></el-col>
                <el-col :span="6"><label>安装时间:</label><span>{{instrumentData.installTime}}</span></el-col>
              </el-row> 
              <el-row type="flex" class="row-bg" justify="space-around">
                <el-col :span="6"><label>使用时间:</label><span>{{instrumentData.useTime}}</span></el-col>
                <el-col :span="6"><label>更新时间:</label><span>{{instrumentData.upateTime}}</span></el-col>
                <el-col :span="6"><label></label><span></span></el-col>
              </el-row>
          </div>
        </el-card>
        <el-card class="box-card" style ="margin-top:20px;">
          <div slot="header" class="clearfix">
            <span>客户基本信息</span>
          </div>
          <div class="text item">
            <el-row type="flex" class="row-bg" justify="space-around">
                <el-col :span="6"><label>客户名称:</label><span>{{customerData.name}}</span></el-col>
                <el-col :span="6"><label>客户地址:</label><span>{{customerData.address}}</span></el-col>
                <el-col :span="6"><label>科室:</label><span>{{customerData.department}}</span></el-col>
            </el-row>
            <el-row type="flex" class="row-bg" justify="space-around">
                <el-col :span="6"><label>医院等级:</label><span>{{customerData.level}}</span></el-col>
                <el-col :span="6"><label>电话:</label><span>{{customerData.tel}}</span></el-col>
                <el-col :span="6"><label>邮箱:</label><span>{{customerData.email}}</span></el-col>
            </el-row>
            <el-row type="flex" class="row-bg" justify="space-around">
                <el-col :span="6"><label>联系人:</label><span>{{customerData.contacts}}</span></el-col>
                <!-- <el-col :span="6"><label>仪器数量:</label><span>{{customerData.instrumentCount}}</span></el-col> -->
                <el-col :span="6"><label>区县:</label><span>{{customerData.county}}</span></el-col>
                <el-col :span="6"><label></label><span></span></el-col>
            </el-row>
            <el-row type="flex" class="row-bg" justify="space-around">
                <el-col :span="6"><label>城市:</label><span>{{customerData.city}}</span></el-col>
                <el-col :span="6"><label>创建时间:</label><span>{{customerData.creatTime}}</span></el-col>
                <el-col :span="6"><label>更新时间:</label><span>{{customerData.updateTime}}</span></el-col>
            </el-row>
          </div>
        </el-card>
        <el-card class="box-card" style ="margin-top:20px;">
          <div slot="header" class="clearfix">
            <span>工程师基本信息</span>
          </div>
          <div class="text item">
              <el-row type="flex" class="row-bg" justify="space-around">
                <el-col :span="6"><label>工程师:</label><span>{{engineerData.name}}</span></el-col>
                <el-col :span="6"><label>电话:</label><span>{{engineerData.mobile}}</span></el-col>
                <el-col :span="6"><label>邮箱:</label><span>{{engineerData.email}}</span></el-col>
            </el-row>
            <el-row type="flex" class="row-bg" justify="space-around">
                <el-col :span="6"><label>地址:</label><span>{{engineerData.address}}</span></el-col>
               <!--  <el-col :span="6"><label>仪器数量:</label><span>{{engineerData.number}}</span></el-col>
                <el-col :span="6"><label>故障数量:</label><span>{{engineerData.alertNum}}</span></el-col> -->
                <el-col :span="6"><label>创建时间:</label><span>{{engineerData.creatTime}}</span></el-col>
                <el-col :span="6"><label>更新时间:</label><span>{{engineerData.updateTime}}</span></el-col>
            </el-row>
             <!-- <el-row type="flex" class="row-bg" justify="space-around">
                <el-col :span="6"><label>维护数量:</label><span>{{engineerData.maintainNum}}</span></el-col>
                
            </el-row> -->
          </div>
        </el-card>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
      </el-dialog>
      <!-- <el-dialog  title="添加用户"
        :visible.sync="dialogNewFormVisible">
          <el-form :model="newForm" :rules="rules" ref="form" label-width="100px">
            <el-row type="flex" class="row-bg" justify="space-around">
              <el-col>
                <el-form-item label="姓名" prop="name">
                  <el-input v-model="newForm.name" placeholder="请输入姓名" ></el-input>
                </el-form-item>
                <el-form-item label="账户" prop="username">
                  <el-input v-if="dialogStatus == 'create'" v-model="form.username" placeholder="请输入账户" @blur="checkUser(newForm.username)"></el-input>
                  <el-input v-else v-model="newForm.username" placeholder="请输入账户" readonly></el-input>
                </el-form-item>
                <el-form-item prop="email" label="邮箱">
                  <el-input v-if="dialogStatus == 'create'" v-model="newForm.email" placeholder="请输入邮箱" @blur = "checkObj(newForm.email)"></el-input>
                    <el-input v-else v-model="newForm.email"  placeholder="请输入邮箱"></el-input>
                  </el-form-item>
                <el-form-item  label="密码"  prop="password">

                  <el-input  v-if="dialogStatus == 'create'" type="password" v-model="newForm.password" placeholder="请输入密码"></el-input>
                  <el-input v-else type="password" v-model="newForm.password" placeholder="请输入密码" readonly></el-input>
                </el-form-item>
                <el-form-item label="性别">
                  <el-select class="filter-item" v-model="newForm.sex" placeholder="请选择">
                    <el-option v-for="item in  sexOptions" :key="item" :label="item" :value="item"> </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="描述">
                  <el-input type="textarea" :autosize="{ minRows: 3, maxRows: 5}" placeholder="请输入内容" v-model="newForm.description"> </el-input>
                </el-form-item>
                <el-form-item label="角色权限" >
                   <el-select v-model="role" placeholder="请选择" @change = "chooseRole">
                     <el-option
                       v-for="item in roleOptions"
                       :key="item.id"
                       :label="item.name"
                       :value="item.id">
                     </el-option>
                   </el-select>
                 </el-form-item>
                 <el-form-item label="部门选择" >
                    <el-select v-model="dep" placeholder="请选择" @change = "chooseDep">
                      <el-option
                        v-for="item in depOptions"
                        :key="item.id"
                        :label="item.name"
                        :value="item.id">
                      </el-option>
                    </el-select>
                  </el-form-item>
              </el-col>
            </el-row>
          </el-form>
      </el-dialog> -->
    </div>
</template>
<script type="text/javascript">
    import {getLocation,pushSearch,checkDetails} from 'api/monitor/eureka/index';
    import { mapGetters } from 'vuex';
    export default {
        name:"eureka",
        data(){
            return{
                tableData:[],
                proOptions:[],
                towOptions:[],
                stateOptions:[{
                    value:"1",
                    label:"已装机"
                },{
                     value:"2",
                    label:"试用"
                },{
                     value:"3",
                    label:"已停用"
                },{
                     value:"4",
                    label:"已注销"
                },{
                    value:"5",
                    label:"重新使用"
                },{
                    value:"6",
                    label:"正式启用"
                }],
                value:"",
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
                area:"",
                areaData:[],
                loading:false,
                listQuery:{
                  page: 1,
                  limit: 10
                },
                total:null,
                tableKey:0,
                dialogVisible:false,
                instrumentData:[],
                customerData:[],
                engineerData:[],
                dialogNewFormVisible:false,
                newForm:{

                },
                pickerBeginDateBefore:{
                  disabledDate:(time)=>{
                    let beginDateVal = this.searchForm.endInstallTime;
                    if(beginDateVal){
                      return time.getTime()>beginDateVal;
                    }
                  }
                },
                pickerBeginDateAfter:{
                  disabledDate:(time)=>{
                    let beginDateVal = this.searchForm.startInstallTime;
                    if(beginDateVal){
                      return time.getTime()<beginDateVal;
                    }
                  }
                },
                pickerOptions0:{
                  disabledDate:(time)=>{
                    let beginDateVal = this.searchForm.endUseTime;
                    if(beginDateVal){
                      return time.getTime()>beginDateVal;
                    }
                  }
                },
                pickerOptions1:{
                  disabledDate:(time)=>{
                    let beginDateVal = this.searchForm.startUseTime;
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
                pushSearch(this.listQuery,this.searchForm).then(response=>{
                    //console.log(response);
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
            getCityData(){
                // getLocation().then(response =>{
                //   this.areaData = response;
                // })
            },
            chooseArea(){
              this.searchForm.areaId = this.area;
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
            chooseTimeRange(t){
              console.log(t);
            },
            searchClick(){
              pushSearch(this.listQuery,this.searchForm).then(response=>{
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
              
              //console.log(this.searchForm);
            },
            clearClick(){
                this.resetTemp();
            },
            newAddPerson(){
              this.dialogNewFormVisible = true;
            },
            viewDetails(row){
              this.dialogVisible = true;
              //console.log(row.customerId);
                checkDetails(row.id).then(response=>{
                  if(response.data == ""){
                    this.$message({
                      message: '没有详情数据',
                      type: 'warning'
                    });
                  }else{
                    if(this.instrumentData == ""){
                      this.instrumentData="";
                    }else if(this.customerData ==""){
                        this.customerData ="";
                    }else if(this.engineerData==""){
                      this.engineerData = "";
                    }else{
                      this.instrumentData = response.data.instrument;
                      this.customerData = response.data.customer;
                      this.engineerData = response.data.engineer;
                    }
                  }
                    //console.log(this.instrumentData);
                }).catch(()=>{

                })
            },
            maintainList(row){

            },
            consumList(row){

            },
            resetTemp(){
              this.searchForm = {
                serialNo:'',
                customerName:"",
                type:"",
                softwareVersion:"",
                frameVersion:"",
                state:"",
                installTime:"",
                useTime:"",
                areaId:'',
                customerAddress:''
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
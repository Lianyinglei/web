<template>
   <div class="app-container calendar-list-container">
   	<el-row>
    	<el-col>
    	  	<!-- <el-card class="box-card"> -->
            <div class="checkBox">
            <el-form ref="form" :model="searchForm" >
    	  		  <el-row type="flex" class="row-bg" justify="space-around" >
                  <el-col >
                    <el-form-item style="margin-bottom: 10px;">
                      <div class="select_area" >
                        <label class="label_style">地区</label>
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
                  <el-col >
                    <el-form-item style="margin-bottom: 10px;">
                        <label class="label_style">地址</label>
                        <el-input v-model="searchForm.address" placeholder="请输入省份名称" style="width:150px;"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col >
                      <el-form-item style="margin-bottom: 10px;">
                          <label class="label_style">客户名称</label>
                          <el-input v-model="searchForm.name" placeholder="请输入客户名称" style="width:150px;"></el-input>
                      </el-form-item>
                    </el-col>
    	  		       <el-col>
                    <el-form-item style="margin-bottom: 10px;">
                          <label class="label_style">科室</label>
                          <el-input v-model="searchForm.department" placeholder="请输入科室名称" style="width:150px;"></el-input>
                    </el-form-item>
                    </el-col>
                    <el-col >
                      <el-form-item style="margin-bottom: 10px;">
                        <label class="label_style">医院等级</label>
                        <template>
                          <el-select v-model="searchForm.level" placeholder="请选择" style="width:150px;">
                            <el-option
                              v-for="item in levelOptions"
                              :key="item.id"
                              :label="item.itemName"
                              :value="item.id">
                            </el-option>
                          </el-select>
                        </template>
                      </el-form-item>
                    </el-col>
    	  		   </el-row>
               <el-row type="flex" class="row-bg" justify="space-around" >
               <el-col >
                  <el-form-item style="margin-bottom: 10px;">
                    <label class="label_style">创建时间</label>
                    <template>
                         <el-date-picker
                          v-model="searchForm.startCreateTime"
                          type="date"
                          placeholder="开始日期" style="width:150px;"
                          :picker-options="pickerBeginDateBefore" format="yyyy-MM-dd">
                        </el-date-picker>
                      </template>
                  </el-form-item>
                </el-col>
                <el-col >
                  <el-form-item style="margin-bottom: 10px;">
                    <label class="label_style" style="text-align: center;">至</label>
                    <template>
                         <el-date-picker
                          v-model="searchForm.endCreateTime"
                          type="date"
                          placeholder="开始日期" style="width:150px;"
                          :picker-options="pickerBeginDateAfter" format="yyyy-MM-dd">
                        </el-date-picker>
                      </template>
                  </el-form-item>
                </el-col>
                <el-col >
                </el-col>
                <el-col >
                </el-col>
                <el-col >
                 <el-form-item style="margin-bottom: 10px;padding-left: 30px;">
                  <!-- <el-button type="primary" @click="searchClick">查询</el-button> -->
                  <el-button v-if="customer_btn_list" type="primary" @click="searchClick">查询</el-button>
                  <el-button type="danger" style="margin-left:10px;" @click = "clearClick">清除</el-button>
                </el-form-item>
              </el-col>
              </el-row>
            </el-form>
    	  	<!-- </el-card> -->
          </div>
    	  	<!-- <el-card class="box-card" style="margin-top:20px;"> -->
            <div class="table_list">
                <div class="header_style">
                  <span>客户信息</span>
                   <!-- <el-button style="margin-left:10px;" type="primary" @click ="addNewCustomer" icon="edit">新增</el-button> -->
                   <el-button v-if="customer_btn_insert" style="margin-left:10px;" type="primary" @click ="addNewCustomer" icon="edit">新增</el-button>
                 <!-- <el-button style="float: right;" type="danger">维修保养</el-button> -->
                  <el-button style="float: right;margin-top: 8px;" type="success" @click="downLoad">导出</el-button>
                </div>
    	  		     <template>
                      <el-table
                        :data="tableData" v-loading.body="loading"
                        border
                        style="width: 100%">
                        <!-- <el-table-column  label="Id"  width="100" align="center">
                          <template slot-scope="scope">
                              <span>{{scope.row.id}}</span>
                          </template>
                        </el-table-column> -->
                        <el-table-column  label="Id"  width="100" type="index" align="center">
                          
                        </el-table-column>
						<el-table-column label="客户编号"  width="150" align="center">
                          <template slot-scope="scope">
                              <span>{{scope.row.code}}</span>
                          </template>
                        </el-table-column>
                        <el-table-column label="客户名称"  width="150" align="center">
                          <template slot-scope="scope">
                              <span>{{scope.row.name}}</span>
                          </template>
                        </el-table-column>
                        <el-table-column   label="客户地址"  width="260" align="center">
                          <template slot-scope="scope">
                              <span>{{scope.row.address}}</span>
                          </template>
                        </el-table-column>
                        <el-table-column  label="科室"  width="150" align="center">
                          <template slot-scope="scope">
                              <span>{{scope.row.department}}</span>
                          </template>
                        </el-table-column>
                        <el-table-column  label="医院等级"  width="100" align="center">
                          <template slot-scope="scope">
                              <span>{{scope.row.level}}</span>
                          </template>
                        </el-table-column>
                        <!-- <el-table-column  label="仪器数量"  width="120" align="center">
                          <template slot-scope="scope">
                              <span>{{scope.row.instrumentCount}}</span>
                          </template>
                        </el-table-column> -->
                        <el-table-column  label="联系人"  width="150" align="center">
                          <template slot-scope="scope">
                              <span>{{scope.row.contacts}}</span>
                          </template>
                        </el-table-column>
                        <el-table-column   label="创建时间"  width="150" align="center">
                          <template slot-scope="scope">
                              <span>{{scope.row.crtTime}}</span>
                          </template>
                        </el-table-column>
                        <el-table-column   label="更新时间"  width="150" align="center">
                          <template slot-scope="scope">
                              <span>{{scope.row.updTime}}</span>
                          </template>
                        </el-table-column>
                        <el-table-column  fixed="right"  label="操作"  width="100" align="center">
                            <template slot-scope="scope">
                                <!-- 
                                  <el-button type="text" size="small" @click = "viewDetails(scope.row)">查看</el-button>
                                  <el-button type="text" size="small" @click="editLists(scope.row)">编辑</el-button>
                                 -->
                                 <!-- <el-button type="text" v-if="customer_btn_select" size="small" @click = "viewDetails(scope.row)">查看</el-button> -->
                                 <el-button type="text" v-if="customer_btn_update" size="small" @click="editLists(scope.row)">编辑</el-button>
                                <!-- <el-button type="text" size="small">耗材情况</el-button> -->
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
    <el-dialog
        
        :visible.sync="dialogVisible"
        >
          <el-card class="box-card">
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
                    <el-col :span="6"><label>联系人:</label><span>{{customerData.contacts}}</span></el-col>
                    <el-col :span="6"><label>电话:</label><span>{{customerData.tel}}</span></el-col>
                    <el-col :span="6"><label>邮箱:</label><span>{{customerData.email}}</span></el-col>
                </el-row>
                <el-row type="flex" class="row-bg" justify="space-around">
                    <el-col :span="6"><label>医院等级:</label><span>{{customerData.level}}</span></el-col>
                    <el-col :span="6"><label>仪器数量:</label><span>{{customerData.instrumentCount}}</span></el-col>
                    <el-col :span="6"><label>创建时间:</label><span>{{customerData.crtTime}}</span></el-col>
                </el-row>
            </div>
          </el-card>
          <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
          </span>
    </el-dialog>
    <el-dialog :title="textMap[dialogStatus]" :visible.sync = "dialogNewFromVisible" id ="dialog">
      <el-form :model="newForm" :rules="rules" ref="newForm" label-width="100px">
        <el-row type="flex" class="row-bg" justify="space-around">
          <el-col>
            <el-form-item label="客户编号" prop="code">
              <el-input v-if="dialogStatus == 'create'" v-model="newForm.code" placeholder="请输入客户编号"></el-input>
              <el-input v-else v-model="newForm.code" placeholder="请输入客户编号" readonly></el-input>
            </el-form-item>
            <el-form-item label="客户名称" prop="name">
              <el-input v-model="newForm.name" placeholder="请输入客户名称"></el-input>
            </el-form-item>
            <el-form-item  label="医院科室" prop="department">
                <el-input v-model="newForm.department"  placeholder="请输入医院科室"></el-input>
              </el-form-item>
            <el-form-item  label="医院等级">
              <template>
                <el-select v-model="newForm.level" placeholder="请选择" style="width:150px;">
                  <el-option
                    v-for="item in levelOptions"
                    :key="item.id"
                    :label="item.itemName"
                    :value="item.id">
                  </el-option>
                </el-select>
              </template>
            </el-form-item>
            </el-col>
            <el-col>
            <el-form-item label="地址" prop ="address">
              <el-input  placeholder="请输入地址" v-model="newForm.address"> </el-input>
            </el-form-item>
            <el-form-item label="联系人" prop ="contacts">
              <el-input  placeholder="请输入联系人" v-model="newForm.contacts"> </el-input>
            </el-form-item>
            <el-form-item label="手机号" prop ="mobile">
              <el-input  placeholder="请输入手机号" v-model="newForm.mobile" number> </el-input>
            </el-form-item>
            <el-form-item label="固定电话" prop ="tel">
              <el-input  placeholder="请输入固定电话" v-model="newForm.tel" type="tel"> </el-input>
            </el-form-item>
            <el-form-item label="邮箱" prop ="email" >
              <el-input  placeholder="请输入邮箱" v-model="newForm.email" type="email"> </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row type="flex" class="row-bg" justify="space-around">
          <el-col>
            <el-form-item label="省份" prop="provinceCode">
              <el-select v-if="dialogStatus == 'create'" class="filter-item" v-model="newForm.provinceCode" placeholder="请选择省份"  @change="changeProvince">
                <el-option v-for="item in  provOptions" :key="item.id"
                   :label="item.province"
                   :value="item.provincecode">
                </el-option>
              </el-select>
              <el-select  v-else class="filter-item" v-model="newForm.provinceCode" placeholder="请选择省份"  @change="changeBProvince">
                <el-option v-for="item in  provOptions" :key="item.id"
                   :label="item.province"
                   :value="item.provincecode">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col>
            <el-form-item label="城市" prop ="cityCode">
              <el-select v-if="dialogStatus == 'create'" class="filter-item" v-model="newForm.cityCode" placeholder="请选择城市" @change="changeCity">
                <el-option v-for="item in  cityOptions" :key="item.id"
                   :label="item.city"
                   :value="item.id">
                </el-option>
              </el-select>
              <el-select v-else class="filter-item" v-model="newForm.cityCode" placeholder="请选择城市" @change="changeBCity">
                <el-option v-for="item in  cityOptions" :key="item.id"
                   :label="item.city"
                   :value="item.id">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col>
            <el-form-item label="区县" prop="countyCode">
              <el-select v-if="dialogStatus == 'create'" class="filter-item" v-model="newForm.countyCode" placeholder="请选择区县" @change="changeCounty">
                <el-option v-for="item in  countyOptions" :key="item.id"
                   :label="item.county"
                   :value="item.id"> </el-option>
              </el-select>
              <el-select v-else class="filter-item" v-model="newForm.countyCode" placeholder="请选择区县" @change="changeBCounty">
                <el-option v-for="item in  countyOptions" :key="item.id"
                   :label="item.county"
                   :value="item.id"> </el-option>
              </el-select>
            </el-form-item>
          </el-col>  
      </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="cancel('newForm')">取 消</el-button>
        <el-button v-if="dialogStatus=='create'" type="primary" @click="create('newForm')">确 定</el-button>
        <el-button v-else type="primary" @click="update('newForm')">确 定</el-button>
      </div>
    </el-dialog>
   </div>	
</template>
<script type="text/javascript">
	import {getCustomer,
    getLocation,
    putSearch,
    exportData,
    checkDetails,
    getProvinceData,
    getCityData,
    getCountyData,
    addNewForm,
  getDetailData,
getdicLevel} from 'api/monitor/zipkin/index';
    import { mapGetters } from 'vuex';
    export default {
    	name:'zipkin',
    	data(){
    		return{
    			tableData:[],
          levelOptions:[],
          areaData:[],
          //provinceData:[],
          area:"",
          //province:'',
          searchForm:{
            name:"",
            address:"",
            department:"",
            level:"",
            startCreateTime:"",
            endCreateTime:"",
            areaId:""
          },
          loading:false,
          listQuery:{
            page:1,
            limit:20
          },
          total:null,
          customerData:[],
          dialogVisible:false,
          dialogNewFromVisible:false,
          dialogStatus: '',
          textMap: {
            update: '编辑',
            create: '新增用户'
          },
          provOptions:[],
          cityOptions:[],
          countyOptions:[],
          newForm:{
            code:"",
            name:"",
            department:"",
            level:"",
            address:"",
            contacts:"",
            mobile:"",
            tel:"",
            email:"",
            provinceCode:"",
            provinceName:"",
            cityCode:"",
            cityName:"",
            countyCode:"",
            countyName:""
          },
          rules:{
            code: [
              {
                required: true,
                message: '请输入客户编号',
                trigger: 'blur'
              },
              {
                min: 3,
                max: 32,
                message: '长度在 3 到 32 个字符',
                trigger: 'blur'
              }
            ],
            name: [
              {
                required: true,
                message: '请输入客户名称',
                trigger: 'blur'
              },
              {
                min: 3,
                max: 64,
                message: '长度在 3 到 64 个字符',
                trigger: 'blur'
              }
            ],
            department: [
              {
                required: true,
                message: '请输入医院科室',
                trigger: 'blur'
              },
              {
                min: 3,
                max: 16,
                message: '长度在 3 到 16 个字符',
                trigger: 'blur'
              }
            ],
            address: [
              {
                min: 3,
                max: 256,
                message: '长度在 3 到 256 个字符',
                trigger: 'blur'
              }
            ],
            contacts: [
              {
                min: 3,
                max: 16,
                message: '长度在 3 到 16 个字符',
                trigger: 'blur'
              }
            ],
            mobile: [
              {
                min: 3,
                max: 16,
                message: '长度在 3 到 16 个字符',
                trigger: 'blur'
              }
            ],
            tel: [
              {
                min: 3,
                max: 16,
                message: '长度在 3 到 16 个字符',
                trigger: 'blur'
              }
            ],
            email:[
              {
                min:3,
                max:64,
                message:'长度在 3 到 64 个字符',
                trigger:'blur'
              },
              { 
                type: 'email', 
                message: '请输入正确的邮箱地址', 
                trigger: ['blur','change']
              }
            ],
            provinceCode:[
              { required: true, message: '请选择省份', trigger: 'change' }
            ],
            cityCode:[
              { required: true, message: '请选择城市', trigger: 'change' }
            ],
            countyCode:[
              { required: true, message: '请选择活动区县', trigger: 'change' }
            ],
          },
          customer_btn_insert: false,
          customer_btn_update: false,
          customer_btn_select: false,
          customer_btn_list: false,
          pickerBeginDateBefore:{
            disabledDate:(time)=>{
              let beginDateVal = this.searchForm.endCreateTime;
              if(beginDateVal){
                return time.getTime()>beginDateVal;
              }
            }
          },
          pickerBeginDateAfter:{
            disabledDate:(time)=>{
              let beginDateVal = this.searchForm.startCreateTime;
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

            this.customer_btn_insert = this.elements['customer:btn_insert'];
            this.customer_btn_update = this.elements['customer:btn_update'];
            this.customer_btn_select = this.elements['customer:btn_select'];
            this.customer_btn_list = this.elements['customer:btn_list'];
        },
        computed:{
            ...mapGetters([
                    'elements'
                ]),
            // provinceData:function(){
            //     for(var i=0;i<this.areaData.length;i++){
            //         if(this.areaData[i].label == this.A){
            //             return this.areaData[i].children;
            //         }
            //     }
            // }
        },
        methods:{
        	getDataList(){
        		putSearch(this.listQuery,this.searchForm).then(response =>{
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
              //     this.areaData = response;
              // });
              getdicLevel(10000).then(response=>{
                this.levelOptions = response.data.nodes;
              })
              
          },
          chooseArea(){
              this.searchForm.areaId = this.area;
              //this.province = this.provinceData[0].label;
          },
          //表格重新加载数据
          loadingData() {
            //alert('搜索');
              var _self = this;
              _self.loading = true;
              setTimeout(function(){
                  console.info("加载数据成功");
                  _self.loading = false;
              },300);
          },
          searchClick(){
            putSearch(this.listQuery,this.searchForm).then(response=>{
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
            //checkDetails(row.id).then(response=>{
            //    this.customerData = response.data;
           // })
          },
          addNewCustomer(){
            this.resetFormTemp();
            this.dialogStatus = 'create';
            this.dialogNewFromVisible = true;
            getProvinceData().then(response=>{
                this.provOptions = response.data.province;
            })
          },
          editLists(row){
            this.dialogStatus = 'update';
            this.dialogNewFromVisible = true;
            getDetailData(row.id).then(response=>{
                getProvinceData().then(response=>{
                    this.provOptions = response.data.province;
                })
               this.newForm =response.data;
               this.newForm.level = response.data.level.toString();
               this.newForm.provinceCode = response.data.provinceCode;   
               this.newForm.cityCode = response.data.cityCode;
               this.newForm.countyCode = response.data.countyCode;
            });
            
          },
          downLoad(){
            exportData(this.searchForm).then(response=>{
              console.log(searchForm);
            })
          },
          resetTemp(){
            this.searchForm = {
                name:"",
                address:"",
                department:"",
                level:"",
                createTime:"",
                areaId:""
            };
            this.area = "";
          },
          changeProvince(){
            getCityData(this.newForm.provinceCode).then(response=>{
                this.cityOptions = response.data.city;
            })
            this.newForm.cityCode ="";
            this.newForm.countyCode="";
          },
          changeBProvince(){
            getCityData(this.newForm.provinceCode).then(response=>{
                this.cityOptions = response.data.city;
            })
          },
          changeCity(){
            getCountyData(this.newForm.cityCode).then(response=>{
              this.countyOptions = response.data.county;
            })
            this.newForm.countyCode =""
          },
          changeBCity(){
            getCountyData(this.newForm.cityCode).then(response=>{
              this.countyOptions = response.data.county;
            })
          },
          changeCounty(){
          },
          changeBCounty(){

          },
          cancel(formName) {
            this.dialogNewFromVisible = false;
            this.$refs[formName].resetFields();
          },
          create(formName) {
            const set = this.$refs;
            set[formName].validate((valid) => {
              if (valid) {
                addNewForm(this.newForm).then(() => {
                  this.dialogNewFromVisible = false;
                  this.getDataList();
                  this.$notify({
                    title: '成功',
                    message: '创建成功',
                    type: 'success',
                    duration: 2000
                  });
                }).catch(()=>{

                });
              } else {
                return false;
              }
            });
          },
          update(formName) {
            const set = this.$refs;
            set[formName].validate(valid => {
              if (valid) {
                addNewForm(this.newForm).then(() => {
                  this.getDataList();
                  this.$notify({
                    title: '成功',
                    message: '修改成功',
                    type: 'success',
                    duration: 2000
                  });
                  this.dialogNewFromVisible = false;
                }).catch(()=>{

                });
              } else {
                return false;
              }
            });
          },
          resetFormTemp(){
            this.newForm={
              code:"",
              name:"",
              department:"",
              level:"",
              address:"",
              contacts:"",
              mobile:"",
              tel:"",
              email:"",
              provinceCode:"",
              provinceName:"",
              cityCode:"",
              cityName:"",
              countyCode:"",
              countyName:""
            }
            this.cityOptions="";
            this.countyOptions="";
          }

        }
    }
</script>
<style type="text/css">
  .label_style{
    width:70px;
    display: inline-block;
    font-size: 14px;
    font-weight: normal;
    color:#333;
    text-align: right;
  }
  /*.el-table__row .el-table_1_column_6 .cell{
    display: inline-block;
    width:20px;height:20px;background: #8ed66e;border-radius: 5px;color: #fff;
  }*/
  .el-card__header{
      padding: 8px 20px !important;-webkit-box-sizing:border-box;
  }
  .el-dialog{
    width:80%;
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
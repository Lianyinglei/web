<template>
	<div class="app-container calendar-list-container">
		<div class="filter-container">
  	  		<el-input @keyup.enter.native="handleFilter" class="filter-item" v-model="listQuery.search" placeholder="标签或code" style="width: 200px;"></el-input>
  	  		<el-button type="primary"class="filter-item" @click="handleFilter" icon="search">搜索</el-button>
  	  		<el-button class="filter-item" v-if="menuManager_btn_element_add" style="margin-left: 10px;" @click="handleCreate" type="primary" icon="edit">添加</el-button>
  	  	</div>
  	  	<el-table 
            :key='tableKey'
  	  	    :data="tableData" v-loading.body="listLoading"
  	  	    border fit highlight-current-row
  	  	    style="width: 100%;">
  	  	    <el-table-column
  	  	      label="编码"
  	  	      width="150"
  	  	      align="center">
                <template scope="scope">
                    <span>{{scope.row.dicCode}}</span>
                </template>
  	  	    </el-table-column>
            <el-table-column
              label="中文显示"
              width="150"
              align="center">
                <template scope="scope">
                    <span>{{scope.row.itemName}}</span>
                </template>
            </el-table-column>
            <el-table-column
              label="英文显示"
               width="220"
               align="center">
                <template scope="scope">
                    <span>{{scope.row.itemEnglish}}</span>
                </template>
            </el-table-column>
            <el-table-column
              label="排序"
              width="150"
              align="center">
                <template scope="scope">
                    <span>{{scope.row.sort}}</span>
                </template>
            </el-table-column>
            <el-table-column
              label="最后更新人ID"
              width="150"
              align="center">
                <template scope="scope">
                    <span>{{scope.row.updUser}}</span>
                </template>
            </el-table-column>
            <el-table-column
              label="最后更新时间"
              width="200"
              align="center">
                <template scope="scope">
                    <span>{{scope.row.updTime}}</span>
                </template>
            </el-table-column>
            <el-table-column
              label="操作"
              width="200"
              align="center" fixed="right">
                <template scope="scope">
                    <el-button v-if="menuManager_btn_element_edit" size="small" type="success" @click="handleUpdate(scope.row)">
                      编辑
                    </el-button>
                    <el-button v-if="menuManager_btn_element_del" size="small" type="danger" @click="handleDelete(scope.row)">删除
                    </el-button>
                </template>
            </el-table-column>

            <!--   <el-table-column align="center" label="id" width="100">
                <template scope="scope">
                    <span>{{scope.row.id}}</span>
                </template>
            </el-table-column> -->
            <!--   </el-table-column>
              <el-table-column
             label="最后更新人" 
              width="150"
              align="center">
                <template scope="scope">
                    <span>{{scope.row.updName}}</span>
                </template>
            </el-table-column> -->
  	  	    <!-- <el-table-column
  	  	      label="值"
  	  	      width="100"
  	  	      align="center">
                <template scope="scope">
                    <span>{{scope.row.itemValue}}</span>
                </template>
  	  	    </el-table-column>
  	  	    <el-table-column
  	  	      label="默认显示"
  	  	      width="100"
  	  	      align="center">
                <template scope="scope">
                    <span>{{scope.row.defaultName}}</span>
                </template>
  	  	    </el-table-column> -->
  	  	  </el-table>
          <div v-show="!listLoading" class="pagination-container">
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="listQuery.currentPage" :page-sizes="[10,20,30, 50]" :page-size="listQuery.pageSize" layout="total, sizes, prev, pager, next, jumper" :total="total"> </el-pagination>
          </div>
          <el-dialog :title="textMap[dialogStatus]" :visible.sync="dialogFormVisible" >
              <el-form label-width="100px" :model="form" ref="form" :rules="rules">
                <el-form-item label="字典编码"   prop="dicCode">
                    <el-input v-model="form.dicCode"  placeholder="请输入字典编码" @blur="checkUser(form.dicCode)"></el-input>
                </el-form-item>
                 <el-form-item label="字典项名称"   prop="itemName">
                    <el-input v-model="form.itemName"  placeholder="请输入字典项名称"></el-input>
                </el-form-item>
                <el-form-item label="字典英文名称"   prop="itemEnglish">
                    <el-input v-model="form.itemEnglish"  placeholder="请输入字典英文名称"></el-input>
                </el-form-item>
              </el-form>
              <div slot="footer" class="dialog-footer">
                <el-button @click="cancel('form')">取 消</el-button>
                <el-button v-if="dialogStatus=='create'" type="primary" @click="create('form')">确 定</el-button>
                <el-button v-else type="primary" @click="update('form')">确 定</el-button>
              </div>
          </el-dialog>
	</div>
</template>
<script type="text/javascript">
  import {getDictoryData,getObj,addObj,delObj,putObj,checkData} from 'api/admin/dicElement/index';
  import { mapGetters } from 'vuex';
  export default {
    name:'element',
    data(){
      return {
        form:{
          dicCode:'',
          itemName:"",
          parentId:""
        },
        rules:{
          dicCode:[{
            required:true,
            message:'请输入字典编码',
            trigger:"blur"
          },{
            min:1,
            max:2,
            message:'长度在1到2个字符',
            trigger:'blur'
          }],
          itemName:[{
            required:true,
            message:'请输入字典项名称',
            trigger:"blur"
          },{
            min:1,
            max:20,
            message:'长度在1到20个字符',
            trigger:'blur'
          }]
        },
        listQuery:{
          currentPage:1,
          pageSize:20,
          parentId:undefined,
          search:undefined
        },
        tableData:[],
        listLoading:false,
        total:null,
        menuId:0,
        menuManager_btn_element_add:false,
        menuManager_btn_element_edit:false,
        menuManager_btn_element_del:false,
        tableKey:0,
        dialogFormVisible: false,
        dialogStatus: '',
        textMap: {
          update: '编辑',
          create: '创建'
        },


      }
    },
    created(){
      this.getList();
      this.menuManager_btn_element_add = this.elements['menuManager:btn_element_add'];
      this.menuManager_btn_element_del = this.elements['menuManager:btn_element_del'];
      this.menuManager_btn_element_edit = this.elements['menuManager:btn_element_edit'];

    },
    computed: {
      ...mapGetters([
        'elements'
      ])
    },
    methods:{
      getList(){
        this.listLoading = true;
        this.listQuery.parentId = this.menuId;
        getDictoryData(this.listQuery).then(response =>{
          this.tableData = response.data.list;
          this.listLoading = false;
          this.total = response.data.total;
        })
      },
      handleFilter(){
        this.getList();
      },
      handleSizeChange(val) {
        this.listQuery.pageSize = val;
        this.getList();
      },
      handleCurrentChange(val) {
        this.listQuery.currentPage = val;
        this.getList();
      },
      handleCreate(){
        if(this.menuId == 0){
          this.$notify({
            title: '提示',
            message: '请先选择部门节点',
            type: 'warning'
          });
          return false;
        }else{
          this.resetTemp();
          this.dialogStatus = "create";
          this.dialogFormVisible = true;
        }
        
      },
      handleUpdate(row){
        getObj(row.id).then(response=>{
          this.form = response.data;
          this.dialogFormVisible = true;
          this.dialogStatus = 'update';
        })
      },
      handleDelete(row){
        this.$confirm('此操作将永久删除, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(()=>{
          // 想办法获取parentId
          delObj(row.id,parentId).then(()=>{
              this.$notify({
                title: '成功',
                message: '删除成功',
                type: 'success',
                duration: 2000
              });
              const index = this.tableData.indexOf(row);
              this.tableData.splice(index,1);
          })
        }).catch(()=>{
            this.$notify.info({
              message: '取消删除',
              duration: 2000
            });
        });
      },
      create(forName){
          const set = this.$refs;
          this.form.parentId = this.menuId;
          set[forName].validate(valid=>{
            if(valid){
              addObj(this.form).then(()=>{
                this.dialogFormVisible = false;
                this.getList();
                this.$notify({
                  title: '成功',
                  message: '创建成功',
                  type: 'success',
                  duration: 2000
                });
              }).catch(()=>{
                this.$notify({
                  title: '提示',
                  message: '未创建成功',
                  type: 'warn',
                  duration: 2000
                });
              })
            }else{
              return false;
            }
          })
      },
      update(forName){
        const set = this.$refs;
        this.form.parentId = this.menuId;
        set[forName].validate(valid=>{
          if(valid){
            putObj(this.form).then(()=>{
              this.dialogFormVisible = false;
              this.getList();
              this.$notify({
                title: '成功',
                message: '编辑成功',
                type: 'success',
                duration: 2000
              });
            }).catch(()=>{
              this.$notify({
                title: '提示',
                message: '未编辑成功',
                type: 'warn',
                duration: 2000
              });
            })
          }else{
            return false;
          }
        })
      },
      cancel(forName){
        this.dialogFormVisible = false;
        const set = this.$refs;
        set[forName].resetFields();
      },
      resetTemp(){
          this.form = {
            dicCode:'',
            itemName:"",
            parentId:""
          }
      },
      checkUser(value){
       if(value != null && value != '') {
        // this.$message({
        //    message: '编码不能为空',
        //    type: 'warning'
        //  });
         checkData(value, this.menuId).then(response=>{
          if(response.data > 0){
             this.flag = false;
             this.$message({
               message: '该编码已存在',
               type: 'warning'
             });
             return false;
           }else{
             this.flag = true;
           }
         })
        }
      }
    }
  }
</script>
<template>
<div class="app-container calendar-list-container">
  <div class="filter-container">
     <el-button-group>
    <el-button type="primary" v-if="menuManager_btn_add" icon="plus" @click="handlerAdd">添加</el-button>
    <el-button type="primary" v-if="menuManager_btn_edit" icon="edit" @click="handlerEdit">编辑</el-button>
    <el-button type="primary" v-if="menuManager_btn_del" icon="delete" @click="handleDelete">删除</el-button>
  </el-button-group>
  </div>

<el-row :gutter="20">
  <el-col :span="8" style='margin-top:15px;'>
    <el-card class="box-card">
    <el-input
      placeholder="输入关键字进行过滤"
      v-model="filterText">
    </el-input>
    <el-tree
      class="filter-tree"
      :data="treeData"
      node-key="id"
      highlight-current
      :props="defaultProps"
      :filter-node-method="filterNode"
      ref="menuTree"
      @node-click="getNodeData"
      default-expand-all
      >
    </el-tree>
    </el-card>
  </el-col>
  <el-col :span="16" style='margin-top:15px;'>
  
    <el-card class="box-card">
        <span>按钮或资源</span>
      <menu-element :menuId='currentId' ref="menuElement"></menu-element>
    </el-card>
  </el-col>
</el-row>
<el-dialog :title="textMap[dialogStatus]" :visible.sync="dialogFormVisible" >
    <el-form :label-position="labelPosition" label-width="80px" :model="form" ref="form"  :rules="rules">
      <el-form-item label="路径编码" prop="code">
          <el-input v-model="form.code" :disabled="formEdit" placeholder="请输入路径编码"></el-input>
      </el-form-item>
          <el-form-item label="标题" prop="title">
          <el-input v-model="form.title" :disabled="formEdit"  placeholder="请输入标题"></el-input>
      </el-form-item>
          <el-form-item label="父级节点" prop="parentId">
          <el-input v-model="form.parentId" :disabled="formEdit" placeholder="请输入父级节点" readonly></el-input>
      </el-form-item>
      <el-form-item label="图标" prop="icon">
          <el-input v-model="form.icon" :disabled="formEdit" placeholder="请输入图标"></el-input>
      </el-form-item>
          <el-form-item label="资源路径" prop="href">
          <el-input v-model="form.href" :disabled="formEdit" placeholder="请输入资源路径"></el-input>
      </el-form-item>
      <el-form-item label="类型" prop="type">
         <el-select class="filter-item" v-model="form.type"  :disabled="formEdit"  placeholder="请输入资源请求类型">
          <el-option v-for="item in  typeOptions" :key="item" :label="item" :value="item"> </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="排序" prop="orderNum">
          <el-input v-model="form.orderNum" :disabled="formEdit" placeholder="请输入排序"></el-input>
      </el-form-item>
      <el-form-item label="描述"   prop="description">
          <el-input v-model="form.description" :disabled="formEdit" placeholder="请输入描述"></el-input>
      </el-form-item>
       <el-form-item label="前端组件"   prop="attr1">
          <el-input v-model="form.attr1" :disabled="formEdit" placeholder="请输入描述"></el-input>
      </el-form-item>
       <el-form-item v-if="formStatus == 'update'">
        <el-button type="primary" @click="update">更新</el-button>
        <el-button @click="onCancel">取消</el-button>
      </el-form-item>
      <el-form-item v-if="formStatus == 'create'">
        <el-button type="primary" @click="create">保存</el-button>
        <el-button @click="onCancel">取消</el-button>
      </el-form-item>
    </el-form>
</el-dialog>
  </div>
</template>

<script>
import {
  fetchTree, getObj, addObj, delObj, putObj
} from 'api/admin/menu/index';
import { mapGetters } from 'vuex';
export default {
  name: 'menu',
  components: {
    'menu-element': () => import('./components/element')
  },
  data() {
    return {
      filterText: '',
      list: null,
      total: null,
      formEdit: true,
      formAdd: true,
      formStatus: '',
      showElement: false,
      typeOptions: ['menu', 'dirt'],
      listQuery: {
        name: undefined
      },
      treeData: [],
      defaultProps: {
        children: 'children',
        label: 'title'
      },
      labelPosition: 'right',
      form: {
        code: undefined,
        title: undefined,
        parentId: undefined,
        href: undefined,
        icon: undefined,
        orderNum: undefined,
        description: undefined,
        path: undefined,
        enabled: undefined,
        type: undefined,
        attr1: undefined
      },
      rules: {
        code: [{
          required: true,
          message: '请输入资源编码',
          trigger: 'blur'
        }
        ],
        type:[{
          required: true,
          message: '请选择',
          trigger: 'blur'
        }
        ],
        title: [{
          required: true,
          message: '请输入标题',
          trigger: 'blur'
        },
        {
          min: 2,
          max: 20,
          message: '长度在 2 到 20 个字符',
          trigger: 'blur'
        }
        ],
        href: [{
          required: true,
          message: '请输入资源路径',
          trigger: 'blur'
        },
        {
          min: 2,
          max: 50,
          message: '长度在 2 到 50 个字符',
          trigger: 'blur'
        }
        ],
        attr1: [{
          required: true,
          message: '请输入',
          trigger: 'blur'
        },
        {
          min: 3,
          max: 50,
          message: '长度在 3 到 50 个字符',
          trigger: 'blur'
        }
        ],
        description: [{
          required: true,
          message: '请输入',
          trigger: 'blur'
        },
        {
          min: 3,
          max: 20,
          message: '长度在 3 到 20 个字符',
          trigger: 'blur'
        }
        ]
      },
      dialogFormVisible:false,
      dialogStatus: '',
      currentId: 0,
      menuManager_btn_add: false,
      menuManager_btn_edit: false,
      menuManager_btn_del: false,
      textMap: {
        update: '编辑',
        create: '创建'
      }
    }
  },
  watch: {
    filterText(val) {
      this.$refs.menuTree.filter(val);
    }
  },
  created() {
    this.getList();
    this.menuManager_btn_add = this.elements['menuManager:btn_add'];
    this.menuManager_btn_del = this.elements['menuManager:btn_del'];
    this.menuManager_btn_edit = this.elements['menuManager:btn_edit'];
  },
  computed: {
    ...mapGetters([
      'elements'
    ])
  },
  methods: {
    getList() {
      fetchTree(this.listQuery).then(data => {
        this.treeData = data.data;
      });
    },
    filterNode(value, data) {
      if (!value) return true;
      return data.label.indexOf(value) !== -1;
    },
    getNodeData(data) {
      if (!this.formEdit) {
        this.formStatus = 'update';
      }
      getObj(data.id).then(response => {
        this.form = response.data;
      });
      this.currentId = data.id;
      this.showElement = true;
      this.$refs.menuElement.menuId = data.id;
      this.$refs.menuElement.getList();
    },
    handlerEdit() {
      if (this.form.id) {
        this.formEdit = false;
        this.dialogStatus = 'update';
        this.dialogFormVisible = true;
        this.formStatus = 'update';
      }else{
        this.$notify({
          title: '提示',
          message: '请先选择节点',
          type: 'warning',
          duration: 2000
        });
      }
    },
    handlerAdd() {
      this.dialogStatus = 'create';
      this.dialogFormVisible = true;
      this.resetForm();
      this.formEdit = false;
      this.formStatus = 'create';
    },
    handleDelete() {
      if (this.form.id) {
        this.$confirm('此操作将永久删除, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          delObj(this.currentId).then(() => {
            this.getList();
            this.resetForm();
            this.onCancel();
            this.$notify({
              title: '成功',
              message: '删除成功',
              type: 'success',
              duration: 2000
            });
          });
        }).catch(()=>{
          this.$notify.info({
            message: '取消删除',
            duration: 2000
          });
        });
      }else{
        this.$notify({
          title: '提示',
          message: '请先选择节点',
          type: 'warning',
          duration: 2000
        });
      }
    },
    update() {
      putObj(this.form).then(() => {
        this.getList();
        this.$notify({
          title: '成功',
          message: '更新成功',
          type: 'success',
          duration: 2000
        });
        this.dialogFormVisible = false;
      });
    },
    create() {
      addObj(this.form).then(() => {
        this.getList();
        this.$notify({
          title: '成功',
          message: '创建成功',
          type: 'success',
          duration: 2000
        });
        this.dialogFormVisible = false;
      });
    },
    onCancel() {
      this.formEdit = true;
      this.formStatus = '';
      this.dialogFormVisible = false;
    },
    resetForm() {
      this.form = {
        code: undefined,
        title: undefined,
        parentId: this.currentId,
        href: undefined,
        icon: undefined,
        orderNum: undefined,
        description: undefined,
        path: undefined,
        enabled: undefined,
        attr1: undefined
      };
    }
  }
}
</script>


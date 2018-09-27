<template>
  <div class="tab-container">
    <el-tabs style='margin-top:15px;' v-model="activeName">
      <!-- <el-tab-pane v-for="item in tabMapOptions" :label="item.name" :key='item.id' :name="item.code">
        <keep-alive>
          <tab-pane v-if='activeName==item.code' :type='item.id'></tab-pane>
        </keep-alive>
      </el-tab-pane> -->
      <el-tab-pane label="角色类型" name="zidingyi01">
        <keep-alive>
          <tab-pane activeName='zidingyi01' type="1"></tab-pane>
        </keep-alive>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import tabPane from './components/groupDetail';
import {
  getAllGroupTypes
} from 'api/admin/group/index';
export default {
  name: 'group',
  components: {
    tabPane
  },
  data() {
    return {
      tabMapOptions: [
      ],
      activeName: 'zidingyi01'
    }
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      getAllGroupTypes().then(data => {
        this.tabMapOptions = data.data;
      });
    }
  }
}
</script>

<style scoped>
.tab-container {
  margin: 30px;
}
</style>

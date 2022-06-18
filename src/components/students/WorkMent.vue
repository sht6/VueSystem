<template>
  <div class="workList">
    <el-table :data="tableData" v-loading="loading" border style="width: 100%">
      <el-table-column prop="id" label="用户ID" align="center">
      </el-table-column>
      <el-table-column prop="userId" label="所属班级" align="center">
      </el-table-column>
      <el-table-column prop="title" label="作业名称" align="center">
      </el-table-column>
      <el-table-column prop="completed_text" label="完成请况" align="center">
      </el-table-column>
    </el-table>
    <page :url="url" :total="total"></page>
  </div>
</template>
<script>
import Page from "../common/Pageing.vue";
export default {
  components: {
    Page,
  },
  data() {
    return {
      tableData: [],
      total: 0,
      loading: true,
      url: "/works",
    };
  },
};
</script>

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
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="page"
      :page-sizes="[5, 10, 20, 50, 100]"
      :page-size="size"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    >
    </el-pagination>
  </div>
</template>
<script>
import { getWorkInfos } from "@/utils/table";
export default {
  data() {
    return {
      tableData: [],
      page: 1,
      size: 5,
      total: 0,
      loading: true,
    };
  },
  created() {
    getWorkInfos(this, "/works", { page: this.page, size: this.size }, [
      "completed",
    ]);
  },
  methods: {
    handleSizeChange(val) {
      this.size = val;
      this.page = 1;
      getWorkInfos(this, "/works", { page: this.page, size: val }, [
        "completed",
      ]);
    },
    handleCurrentChange(val) {
      this.page = val;
      getWorkInfos(this, "/works", { page: val, size: this.size }, [
        "completed",
      ]);
    },
  },
};
</script>

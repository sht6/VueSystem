<template>
  <div class="page">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="page"
      :page-sizes="[5, 10, 20, 50, 100]"
      :page-size="size"
      layout="total, sizes, prev, pager, next, jumper"
      :url="url"
      :total="total"
    >
    </el-pagination>
  </div>
</template>
<script>
import { getWorkInfos } from "@/utils/table";
export default {
  props: {
    url: String,
    total: Number,
  },
  data() {
    return {
      page: 1,
      size: 5,
    };
  },
  created() {
    getWorkInfos(this.$parent, "/works", { page: this.page, size: this.size }, [
      "completed",
    ]);
  },
  methods: {
    handleSizeChange(val) {
      this.size = val;
      this.page = 1;
      getWorkInfos(this.$parent, "/works", { page: this.page, size: val }, [
        "completed",
      ]);
    },
    handleCurrentChange(val) {
      this.page = val;
      getWorkInfos(this.$parent, "/works", { page: val, size: this.size }, [
        "completed",
      ]);
    },
  },
};
</script>

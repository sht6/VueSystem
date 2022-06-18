<template>
  <div class="header">
    <el-header>
      <div class="title">后台管理系统</div>
      <div>{{ name }}</div>
    </el-header>
  </div>
</template>

<script>
import { getToken } from "@/utils/setToken";
export default {
  name: "",
  data() {
    return {
      name: "",
    };
  },
  created() {
    this.name = getToken("username");
  },
};
</script>

<style scoped lang="scss">
.header {
  .el-header {
    width: 100%;
    background-color: rgb(7, 125, 172);
    line-height: 60px;
    color: #fff;
    display: flex;
    justify-content: space-between;
    .title {
      width: 200px;
      font-size: 24px;
    }
  }
}
</style>

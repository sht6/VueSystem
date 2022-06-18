<template>
  <div class="footer">
    <el-card>
      Frond-End {{ newDate }}

      @SHEN
    </el-card>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      newDate: new Date(),
    };
  },
  // 挂载时间
  mounted() {
    let that = this;
    this.timer = setInterval(function () {
      that.newDate = new Date().toLocaleString();
    });
  },
  // 销毁时清除计时器
  beforeDestroy: function () {
    if (this.timer) {
      clearInterval(this.timer);
    }
  },
};
</script>

<style scoped lang="scss"></style>

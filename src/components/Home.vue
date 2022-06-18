<template>
  <div class="home">
    <Header></Header>
    <el-container class="content">
      <Menu></Menu>
      <el-container>
        <el-main
          ><div class="cont">
            <el-card><Bread></Bread></el-card>
            <router-view class="route"></router-view></div
        ></el-main>
        <el-footer><Footer></Footer></el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Header from "./common/Header.vue";
import Footer from "./common/Footer.vue";
import Menu from "./common/Menu.vue";
import Bread from "./common/Breadcrumb.vue";
export default {
  name: "Home",
  components: {
    Header,
    Footer,
    Menu,
    Bread,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.home {
  width: 100%;
  height: 100%;
  .content {
    position: absolute;
    width: 100%;
    height: 700px;
    top: 60px;
    bottom: 0;
    .el-container {
      height: 100%;
      .route {
        margin-top: 20px;
      }
    }
    .cont {
      margin: 20px;
    }
  }
}
</style>

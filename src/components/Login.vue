<template>
  <div class="login">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>后台管理系统</span>
      </div>
      <el-form label-width="80px" :model="form" ref="form" :rules="rules">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login('form')"> 登录</el-button>
        </el-form-item>
        <div class="hint">
          温馨提示：
          <hr style="border: none" />
          未登录过的新用户，自动注册
          <hr style="border: none" />
          注册过的可凭账号密码登录
        </div>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import { usernameRule, passwordRule } from "../utils/vaildata.js";
import { setToken } from "@/utils/setToken.js";
import { login } from "@/api/api.js";
export default {
  name: "Login",
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
      rules: {
        username: [{ validator: usernameRule, trigger: "blur" }],
        password: [{ validator: passwordRule, trigger: "blur" }],
      },
    };
  },
  methods: {
    login(form) {
      this.$refs[form].validate((valid) => {
        if (valid) {
          /* 
          // 把这个方法封装成api进行调用
          this.service.post("/login", this.form).then((res) => {
            if (res.data.status === 200) {
              setToken("username", res.data.username);
              setToken("token", res.data.token);
              this.$message({ message: res.data.message, type: "success" });
              this.$router.push("/home");
            }
            console.log(res);
          });. */

          login(this.form).then((res) => {
            if (res.data.status === 200) {
              setToken("username", res.data.username);
              setToken("token", res.data.token);
              this.$message({ message: res.data.message, type: "success" });
              this.$router.push("/home");
            }
          });
        } else {
          console.error(this.form);
        }
      });
    },
  },
};
</script>

<style lang="scss">
.login {
  width: 100%;
  height: 100%;
  background: url(../assets/img/bg.jpg) center no-repeat;
  background-size: 100% 100%;
  position: absolute;
  .el-card {
    background-color: #65768557;
  }
  .box-card {
    width: 450px;
    margin: 200px auto;
    color: #fff;
    //     height: 300px;
    //     position: relative;
    //     left: 50%;
    //     top: 50%;
    //     transform: translate(-50%, -50%);
    .el-form .el-form-item__label {
      color: #fff;
    }
    .clearfix {
      font-size: 34px;
    }
    .el-button {
      width: 100%;
    }
    .hint {
      font-family: Arial, Helvetica, sans-serif;
      color: rgb(225, 34, 34);
      font-size: 10px;
    }
  }
}
</style>

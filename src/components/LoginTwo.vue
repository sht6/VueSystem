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
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    // element-ui的用户名和密码校验方式
    const validateName = (rule, value, callback) => {
      // 请输入4-10为昵称
      let reg = /^[a-zA-Z0-9]{4,10}$/;
      if (value === "") {
        callback(new Error("请输入正确的用户名"));
      } else if (!reg.test(value)) {
        callback(new Error("请输入4-10位用户名"));
      } else {
        callback();
      }
    };
    const validatePass = (rule, value, callback) => {
      // 请输入4-10为昵称
      let pass =
        /^\S*(?=\S{6,12})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/;
      if (value === "") {
        callback(new Error("请输入正确的密码"));
      } else if (!pass.test(value)) {
        callback(new Error("请输入6-12位密码包含数字大小写和符号"));
      } else {
        callback();
      }
    };
    return {
      form: {
        username: "",
        password: "",
      },
      rules: {
        username: [{ validator: validateName, trigger: "blur" }],
        password: [{ validator: validatePass, trigger: "blur" }],
      },
    };
  },
  methods: {
    login(form) {
      this.$refs[form].validate((valid) => {
        if (valid) {
          console.log(this.form);
          this.axios
            .post("https://rapserver.sunmi.com/app/mock/340/login", this.form)
            .then((res) => {
              if (res.data.status === 200) {
                this.$message({ message: res.data.message, type: "success" });
                this.$router.push("/home");
              }
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          console.error(this.form);
        }
      });
    },
  },
};
</script>

<style scoped lang="scss">
.login {
  width: 100%;
  height: 100%;
  background-color: skyblue;
  position: absolute;
  .box-card {
    width: 450px;
    margin: 200px auto;
    //     height: 300px;
    //     position: relative;
    //     left: 50%;
    //     top: 50%;
    //     transform: translate(-50%, -50%);
    .clearfix {
      font-size: 34px;
    }
    .el-button {
      width: 100%;
    }
  }
}
</style>

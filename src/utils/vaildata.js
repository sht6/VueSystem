// 对用户名的校验
export function usernameRule(rule, value, callback) {
  // element-ui的用户名和密码校验方式

  // 请输入4-10为昵称
  let reg = /^[a-zA-Z0-9]{4,10}$/;
  if (value === "") {
    callback(new Error("请输入正确的用户名"));
  } else if (!reg.test(value)) {
    callback(new Error("请输入4-10位用户名"));
  } else {
    callback();
  }
}

// 对密码的校验
export function passwordRule(rule, value, callback) {
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
}

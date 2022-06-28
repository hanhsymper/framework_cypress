module.exports = [
  {
    title: "login email invalid",
    email: "hanhdthsymper.vn",
    password: "Symper@123BA",
    expect: "check_validate",
    messages: ["Email không hợp lệ"],
  },
  {
    title: "password empty",
    email: "hanhdth@symper.vn",
    password: "''",
    expect: "check_validate",
    messages: ["Mật khẩu không được để trống"],
  },
  {
    title: "password empty",
    email: "hanhdth@symper.vn",
    password: "zsdfgh",
    expect: "login_not_success",
    messages: ["Không thể đăng nhậpTài khoản hoặc mật khẩu không chính xác!"],
  },

  {
    title: "login success",
    email: "hanhdth@symper.vn",
    password: "Symper@123BA",
    expect: "check_cuccess",
  },
];

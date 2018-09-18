
function checkform() {
  $user_name = document.getElementById("username").value;
  $user_pwd = document.getElementById("password").value;
  if ($user_name == '' || $user_pwd == '') {
    alert("不能为空");
    return false;
  };
  window.location.href = "./views/index/index.html";
  return true;
}
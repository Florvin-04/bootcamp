$(document).ready(function () {
  let rememberUser = localStorage.getItem("rememberUser");

  if (rememberUser == "true") {
    window.location.href = "home.html";
  }

  $("[logIn-form]").submit(function (e) {
    e.preventDefault();

    let userName = $("#username").val().trim();
    let password = $("#password").val().trim();
    let remember = $("#remember").prop("checked");

    if (userName == "user" && password == "pw123") {
    //   console.log(userName, password, remember);

      localStorage.setItem("rememberUser", remember);

      window.location.href = "home.html";
    } else {
      alert("Incorrect Credentials");
    }

    $("#username").val("");
    $("#password").val("");
  });
});


function changeUserName() {
  let userName = document.getElementById("userName");
  let userName2 = document.getElementById("userName2");

  let newUserName = prompt("Enter your userName").trim();

  userName.innerHTML = newUserName;
  userName2.innerHTML = newUserName;
}

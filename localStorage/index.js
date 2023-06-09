$(document).ready(function () {
  let email;
  let firstName;

  let user = {
    firstName: firstName,
    email: email,
  };

  $("#email_register").submit(function (e) {
    email = $("#email").val();
    firstName = $("#fname").val();

    console.log(user);

    e.preventDefault();
  });
});

$(document).ready(function () {
  $("p").hide();
  $("[data-button-hide]").click(function () {
    $(this).text("Clicked!");
    $("p").slideToggle(500);
  });

  $("[form-submit]").submit(function (e) {
    e.preventDefault();
    console.log("submit");
  });

  //   $("#myInput").change(function () {
  //     var enteredValue = $(this).val(); // Get the value of the input field
  //     $("#pageTitle").text(enteredValue); // Change the text of the h1 element
  //   });

  //   function greet() {
  //     alert("hello");
  //   }

  //   $("#myInput").on("input", function () {
  //     var enteredValue = $(this).val(); // Get the value of the input field
  //     $("#pageTitle").text(enteredValue); // Change the text of the h1 element
  //     // greet();
  //   });

  var isShaking = false; // Flag variable to track the shake animation state

  $("#myForm").submit(function (e) {
    e.preventDefault(); // Prevent the default form submission

    var name = $('input[name="name"]').val(); // Get the value of the input field

    if (name === "") {
      $("#errorMessage").show(); // Show the error message

      if (!isShaking) {
        // Shake the input field and trigger action after shake
        isShaking = true; // Set the flag to true to prevent multiple shakes
        $('input[name="name"]').effect("shake", { times: 4, complete: triggerAction }, 400);
      }
    } else {
      $("#errorMessage").hide(); // Hide the error message
      // Proceed with form submission or any other desired action
    }
  });

  function triggerAction() {
    console.log("Shake animation complete. Triggering subsequent action...");
    isShaking = false; // Reset the flag to false after shake animation is complete
    // Perform any action after the shake animation is complete
  }

  //

  $("#addItem").click(function () {
    var newItemText = prompt("Enter item text:"); // Prompt the user to enter item text

    if (newItemText !== null && newItemText !== "") {
      var newItem = $("<li class='asd '></li>").text(newItemText); // Create a new <li> element with the entered text
      $("#myList").append(newItem); // Append the new item to the list
    }
  });

  $("#cpw").on("input", function () {
    let cpw = $(this).val(); // Get the value of the input field
    let pw = $("#pw").val();

    if (cpw == pw) {
      console.log("confrm");
    } else {
      console.log("ng");
    }

    // greet();
  });

  ////////////////
  //// FORM //////
  // VALIDATION //
  ////////////////

  $("[btn-form2-submit]").click(function (e) {
    e.preventDefault();

    let value = $("[color-picker]").val();
    console.log(value);

    // let formatter = new Intl.DateTimeFormat("en-GB", {
    //   year: "numeric",
    //   month: "2-digit",
    //   year: "2-digit",
    // });

    // const date = new Date(2019, 1, 1);
    // const result = formatter.format(date);
    // console.log(result);
  });
});

$(document).ready(function () {
  let studCount = localStorage.getItem("studCount") || $("#student-count").text();
  $("#student-count").text(studCount);

  $("#studentButton").click(function () {
    studCount++;
    $("#student-count").text(studCount);
    localStorage.setItem("studCount", studCount);
  });

  $("#darkMode").click(function () {
    $("body").toggleClass("bg-light bg-dark bg-white");
    $("header").toggleClass("bg-light bg-dark text-light");
    $("nav").toggleClass("bg-light bg-dark text-light");
    $("div").toggleClass("bg-light bg-dark text-light");
    $(this).toggleClass("btn-dark text-light");
  });
});

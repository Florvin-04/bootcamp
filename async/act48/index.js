$(document).ready(function () {
  function changeStyle() {
    $(".red_team").css({
      color: "red",
    });

    $(".blue_team").css({
      color: "blue",
    });

    $("[class*='team']").css({
      "font-size": "20px",
    });
  }

  setTimeout(changeStyle, 3500);
});

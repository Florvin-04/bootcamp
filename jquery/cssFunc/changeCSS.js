$(document).ready(function () {
  $("[btn-change-clr]").click(function () {
    let a = $("[first-para]").css({
      color: "red",
      textTransform: "uppercase",
      fontSize: "10px",
    });

    console.log(a[0]);
    console.log($("[first-para]").css({}));
  });
});

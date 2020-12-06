$(document).ready(() => {
  var mainLinks = document.querySelectorAll(".linkBox .main");
  var subLinks = document.querySelectorAll(".subLinks");

  subLinks.forEach((obj) => {
    $(obj).on("mouseover", function () {
      $(this).css("display", "flex");
    });
    $(obj).on("mouseleave", function () {
      $(this).css("display", "none");
    });
  });

  mainLinks.forEach((obj) => {
    $(obj).on("mouseover", function () {
      var dataval = $(this).attr("data-value");
      $(`#${dataval}_sublink`).css("display", "flex");
    });
    $(obj).on("mouseleave", function () {
      var dataval = $(this).attr("data-value");
      $(`#${dataval}_sublink`).css("display", "none");
    });
  });
});

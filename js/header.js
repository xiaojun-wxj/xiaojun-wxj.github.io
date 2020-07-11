$(".header .search .find").click(function () {
  $(".header .search .find").css("border", "1px solid white");
  $(".header .search .find").attr("placeholder", "");
});
$(".header-bottom  .list ").mouseenter(function () {
  $(this).siblings().animate({ opacity: 1 });
});
$(".header-bottom  .list-item ").mouseleave(function () {
  $(this).find(".menu").animate({ opacity: 0 });
});

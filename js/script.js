$(".p-header__button").click(function () {
  $(this).toggleClass("open");
  $(".p-nav").toggleClass("active");
  $(".c-cover__overlay").toggleClass("active");
  $("body").css("overflow", "hidden");
});
$(".p-nav__button").click(function () {
  $(".p-header__button").removeClass("open");
  $(".p-nav").removeClass("active");
  $(".c-cover__overlay").removeClass("active");
  $("body").css("overflow", "visible");
});

$(".p-nav a").click(function () {
  $(".p-header__button").removeClass("open");
  $(".p-nav").removeClass("active");
  $(".c-cover__overlay").removeClass("active");
  $("body").css("overflow", "visible");
});

$(window).scroll(function () {
  $(".slideUp").each(function () {
    const scroll = $(window).scrollTop();
    const blockPosition = $(this).offset().top;
    const windowHeight = $(window).height();
    if (scroll > blockPosition - windowHeight + 100) {
      $(this).addClass("move");
    } else {
      $(this).removeClass("move");
    }
  });
});
$(window).scroll(function () {
  const stickyHeight = $(".l-container").offset().top;
  if ($(this).scrollTop() > stickyHeight) {
    $(".p-header__top").addClass("sticky");
  } else {
    $(".p-header__top").removeClass("sticky");
  }
});

//===========jQuery作動のチェック用=============
// $(function () {
//   alert("jQueryが正常に動作しています！");
// });

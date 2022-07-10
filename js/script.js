$(".p-header__button").click(function () {
  $(this).toggleClass("open");
  $(".p-header__nav").toggleClass("active");
  $(".c-cover__overlay").toggleClass("active");
});

$(".p-header a").click(function () {
  $(".p-header__button").removeClass("open");
  $(".p-header__nav").removeClass("active");
  $(".c-cover__overlay").removeClass("active");
});

$(window).scroll(function () {
  $(".slideUp").each(function () {
    const scroll = $(window).scrollTop();
    const blockPosition = $(this).offset().top;
    const windowHeight = $(window).height();
    if (scroll > blockPosition - windowHeight + 100) {
      $(this).addClass("move");
    }
  });
});
$(window).scroll(function () {
  const stickyHeight = $(".p-content-about").offset().top;
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

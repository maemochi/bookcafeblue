//ヘッダーボタンをクリックした時の処理
$(".p-header__button").click(function () {
  $(this).toggleClass("open");
  $(".p-nav").toggleClass("active");
  $(".c-cover__overlay").toggleClass("active");
  $("body").css("overflow", "hidden");
});
//navボタンをクリックした時の処理
$(".p-nav__button").click(function () {
  $(".p-header__button").removeClass("open");
  $(".p-nav").removeClass("active");
  $(".c-cover__overlay").removeClass("active");
  $("body").css("overflow", "visible");
});

// nav内リンクをクリックした時の処理
$(".p-nav a").click(function () {
  $(".p-header__button").removeClass("open");
  $(".p-nav").removeClass("active");
  $(".c-cover__overlay").removeClass("active");
  $("body").css("overflow", "visible");
});

// スクロール時のアニメーション(ふわっとスライド表示)
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
// スクロール後、ヘッダーを固定表示
$(window).scroll(function () {
  const stickyHeight = $(".l-container").offset().top;
  if ($(this).scrollTop() > stickyHeight) {
    $(".p-header__top").addClass("sticky");
  } else {
    $(".p-header__top").removeClass("sticky");
  }
});

// ヘッダー固定時のアンカーリンク位置ずれ調整
$(function () {
  const headerHight = 100;
  $("a[href^='#']").click(function () {
    const href = $(this).attr("href");
    const target = $(href == "#" || href == "" ? "html" : href);
    const position = target.offset().top - headerHight;
    $("html, body").animate({ scrollTop: position }, 300, "linear");
    return false;
  });
});

//===========jQuery作動のチェック用=============
// $(function () {
//   alert("jQueryが正常に動作しています！");
// });

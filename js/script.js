jQuery(document).ready(function (e) {
  // header responsive nav
  var $toggler = $(".header__nav .nav__toggler");
  $toggler.on("click", function () {
    var $navCol = $('.header__nav .nav__collapse')
    $navCol.slideToggle(700).css('display', 'flex')
  });
  // new typeit
  new TypeIt("#simpleUsage", {
    strings: ["Have Any Project in Mind?", "Don’t Be Hesitate to Contact Us."],
    speed: 50,
    waitUntilVisible: true,
  }).go();
  new TypeIt("#PageTitle", {
    strings: ["We’re Creative", "& Minimalist"],
    speed: 50,
    waitUntilVisible: true,
  }).go();
  new TypeIt("#sectSubTItle", {
    strings: ["From Big to Small Clients,", "Two Things I Always Promise"],
    speed: 50,
    waitUntilVisible: true,
  }).go();

  $("#fullpage").fullpage({
    sectionsColor: ["#fff", "#e97d7d", "#ffecb6", "#c1c8fb", "#1B1C23"],
  });
});
1;
2;
3;
4;
5;
jQuery(document).ready(function ($) {
  $("#fullpage").fullpage({
    sectionsColor: ["#fff", "#fff", "#c1c8fb"],
  });
});
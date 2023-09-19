const menuIcon = $("nav .fa-bars");
const menuItems = $("nav #links");
const headerHeight = $("header").outerHeight();
const links = $("nav a");

links.on("click", function (e) {
  e.preventDefault();
  let targetLink = $(this).attr("href");
  let targetPos = $(targetLink).offset().top - headerHeight;
  $("html,body").animate({ scrollTop: targetPos }, 100);
});

menuItems.on("click", function (e) {
  e.stopPropagation();
});

$(window).on("click", function (e) {
  if (!$(e.target).hasClass("navbar-collapse")) {
    menuItems.removeClass("show");
  }
});

function createIntersectionObserver(className) {
  return new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        $(entry.target).addClass(className);
      } else {
        $(entry.target).removeClass(className);
      }
    });
  });
}

const animSections = createIntersectionObserver("show-section");
const animCards = createIntersectionObserver("show-card");
const animImage = createIntersectionObserver("scale-up-center");
const animPara = createIntersectionObserver("slide-top");
const animHeadings = createIntersectionObserver("tracking-in-expand");
const animMainHeading = createIntersectionObserver("tracking-in-contract-bck");
const animMap = createIntersectionObserver("scale-up-center");

const hiddenSections = $("section");
const hiddenCards = $(".card");
const hiddenImage = $("#about-section img");
const hiddenPara = $("#about-section div:nth-of-type(2)>p");
const hiddenHeadings = $("section h2");
const hiddenMainHeading = $("#landing-section h1");
const hiddenMap = $("#contact-section iframe");

hiddenSections.each(function () {
  animSections.observe(this);
});
hiddenCards.each(function () {
  animCards.observe(this);
});
hiddenImage.each(function () {
  animImage.observe(this);
});
hiddenPara.each(function () {
  animPara.observe(this);
});
hiddenHeadings.each(function () {
  animHeadings.observe(this);
});
hiddenMainHeading.each(function () {
  animMainHeading.observe(this);
});
hiddenMap.each(function () {
  animMap.observe(this);
});

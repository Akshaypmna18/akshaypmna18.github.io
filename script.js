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

const animCards = createIntersectionObserver("show-card");
const animMainHeading = createIntersectionObserver("tracking-in-contract-bck");

const hiddenCards = $("a");
const hiddenMainHeading = $(" h1");

hiddenCards.each(function () {
  animCards.observe(this);
});
hiddenMainHeading.each(function () {
  animMainHeading.observe(this);
});

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

const hiddenCards = $("a");

hiddenCards.each(function () {
  animCards.observe(this);
});

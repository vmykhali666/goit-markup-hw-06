const refs = {
  portfolioItems: document.querySelectorAll(".portfolio__item"),
  filtersButtons: document.querySelectorAll(".portfolio-filter__button"),
};

refs.filtersButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const category = button.dataset.filter;
    filterCards(category);
    setActiveButton(button);
  });
});

function filterCards(category) {
  refs.portfolioItems.forEach((item) => {
    const cardCategory = item.dataset.category;
    if (category === "all" || cardCategory === category) {
      item.classList.remove("hidden");
    } else {
      item.classList.add("hidden");
    }
  });
}

function setActiveButton(activeButton) {
  refs.filtersButtons.forEach((button) => {
    if (button === activeButton) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });
}

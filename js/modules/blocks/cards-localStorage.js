function pushCardValueToLocalStorage() {
  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    card.addEventListener("click", function () {
      localStorage.setItem("card-img-src", this.querySelector(".card__image").getAttribute("src"));
      localStorage.setItem("card-category", this.querySelector(".card__category").textContent);
      localStorage.setItem("card-name", this.querySelector(".card__name").textContent);
      localStorage.setItem("card-price", this.querySelector(".price__new").textContent);
      localStorage.setItem("card-rating", this.getAttribute("data-rating"));
    });
  });
}

module.exports = pushCardValueToLocalStorage;

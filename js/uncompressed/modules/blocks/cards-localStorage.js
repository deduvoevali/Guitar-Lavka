function pushCardValueToLocalStorage() {
	const cards = document.querySelectorAll(".card");

	cards.forEach((card) => {
		card.addEventListener("click", function () {
			localStorage.setItem(
				"cardData",
				JSON.stringify({
					cardImgSrc: this.querySelector(".card__image").getAttribute("src"),
					cardCategory: this.querySelector(".card__category").textContent,
					cardName: this.querySelector(".card__name").textContent,
					cardPrice: this.querySelector(".price__new").textContent,
					cardRating: this.getAttribute("data-rating"),
				}),
			);
		});
	});
}

module.exports = pushCardValueToLocalStorage;

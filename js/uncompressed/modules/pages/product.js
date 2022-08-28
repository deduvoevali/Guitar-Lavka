function ad() {
	function ad(params) {}
}

function product() {
	function generatePageContent() {
		const cardData = JSON.parse(localStorage.getItem("cardData"));

		document.querySelector("#lightgallery").childNodes.forEach((link) => {
			link.setAttribute("href", cardData.cardImgSrc);
			link.firstChild.setAttribute("src", cardData.cardImgSrc);
			link.firstChild.setAttribute("alt", cardData.cardName);
		});

		document.querySelector("title").textContent = cardData.cardCategory + ": " + cardData.cardName + " - Guitar Lavka";
		document.querySelector(".product__category").textContent = cardData.cardCategory;
		document.querySelector(".product__name").textContent = cardData.cardName;
		document.querySelector(".control__price").textContent = cardData.cardPrice.slice(1);
		document.querySelector(".stars").style.width = cardData.cardRating + "%";
		document.querySelector(".installment").textContent = "₴" + Math.round(parseInt(cardData.cardPrice.slice(1).replace(/ /g, "")) / 10);
	}

	generatePageContent();

	function makeTabsWorking(tabsBtnSelector, tabsContentSelector, tabsBtnActiveSelector, tabsContentActiveSelector) {
		const tabsBtns = document.querySelectorAll(tabsBtnSelector),
			panels = document.querySelectorAll(tabsContentSelector);

		tabsBtns.forEach((tab) => {
			tab.addEventListener("click", function () {
				for (let i = 0; i < tabsBtns.length; i++) {
					panels[i].classList.remove(tabsContentActiveSelector);
					tabsBtns[i].classList.remove(tabsBtnActiveSelector);
				}

				this.classList.add(tabsBtnActiveSelector);

				panels[[...tabsBtns].indexOf(this)].classList.add(tabsContentActiveSelector);
			});
		});
	}

	makeTabsWorking(".info-tabs__btn", ".info-tabs__pane", "info-tabs__btn--active", "info-tabs__pane--show");

	function productAudio() {
		document.querySelector(".play").addEventListener("click", function () {
			document.querySelector("audio").play();

			this.classList.remove("play--active");
			document.querySelector(".pause").classList.add("pause--active");
		});

		document.querySelector(".pause").addEventListener("click", function () {
			document.querySelector("audio").pause();

			this.classList.remove("pause--active");
			document.querySelector(".play").classList.add("play--active");
		});
	}

	productAudio();

	lightGallery(document.getElementById("lightgallery"), {
		plugins: [lgZoom, lgThumbnail],
		speed: 700,
	});

	function onControlButtons() {
		document.querySelector(".control__add-to-cart").addEventListener("click", function () {
			this.classList.add("control__add-to-cart--active");
			this.textContent = "В КОРЗИНУ";
			this.addEventListener("click", () => {
				document.location.href = "cart.html";
			});
		});

		document.querySelector(".control__buy").addEventListener("click", function () {
			this.classList.add("control__buy--active");
			this.textContent = "Покупаем...";

			setTimeout(() => {
				document.location.href = "cart.html";
			}, 1000);
		});
	}

	onControlButtons();
}

module.exports = product;

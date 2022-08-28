function addToCartBtn() {
	document.querySelectorAll(".add-to-cart__btn").forEach((btn) => {
		btn.addEventListener("click", function () {
			this.classList.add("add-to-cart__btn--active");
			this.textContent = "В КОРЗИНУ";
			this.addEventListener("click", () => {
				document.location.href = "cart.html";
			});
		});
	});
}

module.exports = addToCartBtn;

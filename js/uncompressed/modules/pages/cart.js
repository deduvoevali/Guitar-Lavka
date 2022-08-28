function cartPage() {
  function onPriceChange() {
    const productCard = document.querySelectorAll(".cart-promo__product-item .item__inner");

    // adding the specials buttons events

    productCard.forEach((card) => {
      card.addEventListener("click", function (e) {
        //creating card LOCAL variables

        const itemPrice = card.querySelector("#price"),
          initalPrice = card.querySelector(".item__quantity-display").getAttribute("data-price"),
          productsQuantity = card.querySelector(".item__quantity-display");

        if (e.target.className.includes("minus")) {
          if (productsQuantity.value > 1) productsQuantity.value--; // changing input value

          itemPrice.textContent = "₴" + initalPrice * productsQuantity.value;
        }

        if (e.target.className.includes("plus")) {
          if (productsQuantity.value < 10) productsQuantity.value++; // changing input value

          itemPrice.textContent = "₴" + initalPrice * productsQuantity.value;
        }

        // changing check values

        const totalCheckQuantity = document.querySelector(".total-check-quantity"),
          totalCheckPrice = document.querySelector(".total-check-price");

        const pricesArr = [],
          quantityArr = [];

        document.querySelectorAll(".item__price").forEach((price) => pricesArr.push(parseInt(price.textContent.slice(1)))); // generating all cards prices array
        document.querySelectorAll(".item__quantity-display").forEach((quantity) => quantityArr.push(parseInt(quantity.value))); // generating all cards prices array

        totalCheckQuantity.textContent = quantityArr.reduce((prev, curr) => prev + curr) + " шт.";
        totalCheckPrice.textContent = "₴" + pricesArr.reduce((prev, curr) => prev + curr);
      });
    });
  }

  onPriceChange();

  function buttonEvent() {
    document.querySelector(".check__submit").addEventListener("click", function (e) {
      e.preventDefault();
      this.textContent = "Оформляем...";

      setTimeout(() => {
        document.location.href = "success.html";
        this.textContent = "Перейти к оформлению";
      }, 1000);
    });
  }

  buttonEvent();
}

module.exports = cartPage;

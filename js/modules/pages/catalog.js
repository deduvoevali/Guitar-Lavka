function catalog() {
  function filterArrows() {
    document.querySelectorAll(".filter__name-wrapper").forEach((item) => {
      item.addEventListener("click", function () {
        this.parentElement.classList.toggle("filter--active");
        this.lastElementChild.classList.toggle("filter__arrow--active");
      });
    });
  }

  filterArrows();

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

  function generateProducts() {
    class Card {
      constructor(name, imgSrc, category, price, discount, rating, reviewsCounter, inStock) {
        this.name = name;
        this.imgSrc = imgSrc;
        this.category = category;
        this.price = price;
        this.discount = discount;
        this.rating = rating;
        this.inStock = inStock;
        this.inStockDisplay();

        this.reviewsCounter = reviewsCounter;

        this.parent = document.querySelector(".catalog__grid");
      }

      inStockDisplay() {
        this.inStock ? (this.inStock = "") : (this.inStock = "none");
      }

      render() {
        const card = document.createElement("div");
        card.innerHTML = `
            <a href="product.html">
              <img class="card__image" src=${this.imgSrc} alt="card">
            </a>
      
            <div class="card__textcontent">
      
              <div class="card__body">
                <div>
                  <a href="catalog.html">
                    <p class="card__category">${this.category}</p>
                  </a>
                  <a href="product.html">
                    <h4 class="card__name">${this.name}</h4>
                  </a>
                </div>
                <a href="#" class="favorite">
                  <svg class="default" width="20" height="22" viewBox="0 0 20 22" fill="none"
                    xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <rect width="20" height="22" fill="url(#pattern0)" />
                    <defs>
                      <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                        <use xlink:href="#image0_4_5" transform="translate(-0.05) scale(0.0114583 0.0104167)" />
                      </pattern>
                      <image id="image0_4_5" width="96" height="96"
                        xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABmJLR0QA/wD/AP+gvaeTAAAFfElEQVR4nO2dW6gVVRjH/19mF7yEafpUhJSBB8vsQkZJNy8nKsjyQZI44UMvQUEQXaWHQoqIeigfeqmksKiwpJLAvIFSGmhmUKKlJCFl2TleTqLn18OMdDLds9bMmpm9z6wfHM7Lt9b81//bs/asy6wtRSKRSCQSiUQikUgkEolEmoKVWTkwUtKM9K9L0qWSxksamV67T9J+SbskbZe0UdJqM/u9JD0XSLpZ0nWpnomSxkoaJQlJByXtk7Qj1bNO0nozO1iGnlIADOgG3gf68ecYsAaYDwwPoGd4WtfatG5fjgDvAXOAUj+whQHmAd/maOTp+AV4AhiRQ8sI4Clgb0A9W4C5ZXhXCGASsCpgQ09mN3CPh557gT0l6vkCuKRMT50BFgB9JTZ2MMuBMS20nA98XJGWXmB+lV6f3FgDFlfU2MH8BEw7hZ6rgZ9r0PMcVX83kJi/pIbGnqAXuHWQnplUdxeeitfJmYRchYDFkh7PUzYg/ZK6lbThc0ln1ytHz5vZ076FvBMALJC01LdcSfyV/j+vVhX/Mt/MlvkU8EoAMEnSN0oGUpH/0ytpmpntdC1whucFliia34rRSjxyxjkBwDxJt/gqaiAzgbtdg526oPQbfqukKXlVNYytkq40M7ICXe+AbkXzfbhC0iyXQNcEPJBfS2PpcQnK7IKAUZJ+U/3P2Z3GEUnjzOxwqyCXO+BGRfPzcK6kG7KCXBIwo7iWxnJTVoBLAroCCGkqk7MCXBIwKYCQpnJZVoBLAsYFENJUMr1zSUCcesjPqKwAlwQcDyCkqWR655KAPwIIaSr7swJiAsol0zuXBOwOIKSpZHrnkoDNAYQ0lU1ZATEB5ZLpnctk3Bgl+yULbxNsGEclTTCzA62CMu8AM/tT0upQqhrEqizzJff1gA8LimkiTp65LkmOk7RHyRRrJJvDki40syCPoUr3679TVFWDWOpivuSxLwjokrTNp0yDudzMtrkEOm9LMbPtSrYARlqzwtV8yX9n3BRJW+S/oaspHJc01cy+cy3gZWSa2Xd9VTWIt3zMl/Jtzr1IyQtscZ3gv/RKmmxme30KeXclZrZH0iLfcg3gSV/zpfzvBwyT9JWkq/KUH4JskjTdzLwXr3I/UgKTlUw2NX1w1i/pWp8nn8Hkfpoxs+8lPZa3/BDikbzmSwUHVemu6U8k3VGkng5muZk5b0U/FYVHtel09deS2uO92erYoaTryZzxbEXhAVU6XT1X0qGidXUQhyTNLWq+FGhEm/aBPZIGQtTX5gxI6vEdcJ2OYFMKZvaBpIdC1dfGPJq2NQhB53TMbImkl0LW2Wa8aGavhKww+NRy+mT0pqT7Q9ddM8sk3WdmQbvZUub2Sc75+VTSzDLqr4HVkrrN7O/QFZe2uAKMlrRS0vSyrlERGyTNMbO+MiovbV7fzHqV3AHryrpGBWxQ8skvxXypguVFktOuPlPnveq0Ucknv7fMi1SyvtuBSajEfKmipUUzOyTpTklrq7heQdZIml2F+VKFa7tpg2ZLCjaIKYEVkm4vs8+vHWAY8EZ1h1k58zZwZt3+VALJkWcv1Gz4YF6l3c8ELQPgYWCgRuMHgGfr9qFWgIXkO9G2KMeAhXW3vy0A7gIOV2h+P8kBVJETADOAAxWY3wfcVnd72xKgi+S86LL4FZhadzvbGuBi4IcSzN9Ju5z33O4AY4GNAc3fDIyvu10dBTASWBnA/C9JpsYjvgBnAcsKmP8RcE7d7ehoSEbNL+cw/zUgvscQCmCRh/nP1K13SAL0AEdbGH8MeLBunUMaYBbJ7weczEGgqXtUqwW4Btg3yPz9wPV162oUwETgR2AXkHk4XqQEgAnAhLp1RCKRSCQSiUQikUgkEnHlHzoTZ4zDFzKzAAAAAElFTkSuQmCC" />
                    </defs>
                  </svg>
      
                  <svg class="active" width="20" height="22" viewBox="0 0 20 22" fill="none"
                    xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <rect width="20" height="22" fill="url(#pattern0)" />
                    <rect width="20" height="22" fill="url(#pattern1)" />
                    <defs>
                      <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                        <use xlink:href="#image0_728_27" transform="translate(-0.05) scale(0.0114583 0.0104167)" />
                      </pattern>
                      <pattern id="pattern1" patternContentUnits="objectBoundingBox" width="1" height="1">
                        <use xlink:href="#image1_728_27" transform="translate(-0.05) scale(0.0114583 0.0104167)" />
                      </pattern>
                      <image id="image0_728_27" width="96" height="96"
                        xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABmJLR0QA/wD/AP+gvaeTAAAFfElEQVR4nO2dW6gVVRjH/19mF7yEafpUhJSBB8vsQkZJNy8nKsjyQZI44UMvQUEQXaWHQoqIeigfeqmksKiwpJLAvIFSGmhmUKKlJCFl2TleTqLn18OMdDLds9bMmpm9z6wfHM7Lt9b81//bs/asy6wtRSKRSCQSiUQikUgkEolEmoKVWTkwUtKM9K9L0qWSxksamV67T9J+SbskbZe0UdJqM/u9JD0XSLpZ0nWpnomSxkoaJQlJByXtk7Qj1bNO0nozO1iGnlIADOgG3gf68ecYsAaYDwwPoGd4WtfatG5fjgDvAXOAUj+whQHmAd/maOTp+AV4AhiRQ8sI4Clgb0A9W4C5ZXhXCGASsCpgQ09mN3CPh557gT0l6vkCuKRMT50BFgB9JTZ2MMuBMS20nA98XJGWXmB+lV6f3FgDFlfU2MH8BEw7hZ6rgZ9r0PMcVX83kJi/pIbGnqAXuHWQnplUdxeeitfJmYRchYDFkh7PUzYg/ZK6lbThc0ln1ytHz5vZ076FvBMALJC01LdcSfyV/j+vVhX/Mt/MlvkU8EoAMEnSN0oGUpH/0ytpmpntdC1whucFliia34rRSjxyxjkBwDxJt/gqaiAzgbtdg526oPQbfqukKXlVNYytkq40M7ICXe+AbkXzfbhC0iyXQNcEPJBfS2PpcQnK7IKAUZJ+U/3P2Z3GEUnjzOxwqyCXO+BGRfPzcK6kG7KCXBIwo7iWxnJTVoBLAroCCGkqk7MCXBIwKYCQpnJZVoBLAsYFENJUMr1zSUCcesjPqKwAlwQcDyCkqWR655KAPwIIaSr7swJiAsol0zuXBOwOIKSpZHrnkoDNAYQ0lU1ZATEB5ZLpnctk3Bgl+yULbxNsGEclTTCzA62CMu8AM/tT0upQqhrEqizzJff1gA8LimkiTp65LkmOk7RHyRRrJJvDki40syCPoUr3679TVFWDWOpivuSxLwjokrTNp0yDudzMtrkEOm9LMbPtSrYARlqzwtV8yX9n3BRJW+S/oaspHJc01cy+cy3gZWSa2Xd9VTWIt3zMl/Jtzr1IyQtscZ3gv/RKmmxme30KeXclZrZH0iLfcg3gSV/zpfzvBwyT9JWkq/KUH4JskjTdzLwXr3I/UgKTlUw2NX1w1i/pWp8nn8Hkfpoxs+8lPZa3/BDikbzmSwUHVemu6U8k3VGkng5muZk5b0U/FYVHtel09deS2uO92erYoaTryZzxbEXhAVU6XT1X0qGidXUQhyTNLWq+FGhEm/aBPZIGQtTX5gxI6vEdcJ2OYFMKZvaBpIdC1dfGPJq2NQhB53TMbImkl0LW2Wa8aGavhKww+NRy+mT0pqT7Q9ddM8sk3WdmQbvZUub2Sc75+VTSzDLqr4HVkrrN7O/QFZe2uAKMlrRS0vSyrlERGyTNMbO+MiovbV7fzHqV3AHryrpGBWxQ8skvxXypguVFktOuPlPnveq0Ucknv7fMi1SyvtuBSajEfKmipUUzOyTpTklrq7heQdZIml2F+VKFa7tpg2ZLCjaIKYEVkm4vs8+vHWAY8EZ1h1k58zZwZt3+VALJkWcv1Gz4YF6l3c8ELQPgYWCgRuMHgGfr9qFWgIXkO9G2KMeAhXW3vy0A7gIOV2h+P8kBVJETADOAAxWY3wfcVnd72xKgi+S86LL4FZhadzvbGuBi4IcSzN9Ju5z33O4AY4GNAc3fDIyvu10dBTASWBnA/C9JpsYjvgBnAcsKmP8RcE7d7ehoSEbNL+cw/zUgvscQCmCRh/nP1K13SAL0AEdbGH8MeLBunUMaYBbJ7weczEGgqXtUqwW4Btg3yPz9wPV162oUwETgR2AXkHk4XqQEgAnAhLp1RCKRSCQSiUQikUgkEnHlHzoTZ4zDFzKzAAAAAElFTkSuQmCC" />
                      <image id="image1_728_27" width="96" height="96"
                        xlink:href="data:image/png;base64,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" />
                    </defs>
                  </svg>
      
      
                </a>
              </div>
      
              <div class="card__footer">
                <div class="price">
                  <del class="price__old" id="price">${this.discount}</del>
                  <p class="price__new" id="price">${this.price}</p>
                </div>
                <div class="rating">
                  <div class="stars" style="width:${this.rating}%;">
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M6.19231 0L7.58257 4.849L12.0815 4.849L8.4418 7.84585L9.83206 12.6949L6.19231 9.69801L2.55256 12.6949L3.94282 7.84585L0.303073 4.849L4.80205 4.849L6.19231 0Z"
                        fill="#FFD600" />
                    </svg>
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M6.19231 0L7.58257 4.849L12.0815 4.849L8.4418 7.84585L9.83206 12.6949L6.19231 9.69801L2.55256 12.6949L3.94282 7.84585L0.303073 4.849L4.80205 4.849L6.19231 0Z"
                        fill="#FFD600" />
                    </svg>
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M6.19231 0L7.58257 4.849L12.0815 4.849L8.4418 7.84585L9.83206 12.6949L6.19231 9.69801L2.55256 12.6949L3.94282 7.84585L0.303073 4.849L4.80205 4.849L6.19231 0Z"
                        fill="#FFD600" />
                    </svg>
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M6.19231 0L7.58257 4.849L12.0815 4.849L8.4418 7.84585L9.83206 12.6949L6.19231 9.69801L2.55256 12.6949L3.94282 7.84585L0.303073 4.849L4.80205 4.849L6.19231 0Z"
                        fill="#FFD600" />
                    </svg>
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M6.19231 0L7.58257 4.849L12.0815 4.849L8.4418 7.84585L9.83206 12.6949L6.19231 9.69801L2.55256 12.6949L3.94282 7.84585L0.303073 4.849L4.80205 4.849L6.19231 0Z"
                        fill="#FFD600" />
                    </svg>
                  </div>
                  <a href="product.html">
                    <div class="rating__counter">${this.reviewsCounter}</div>
                  </a>
                </div>
                <div class="wide-blocks">
                  <div class="gallery">
                    <img src="img/catalog/card-gallery-1.png" alt="gallery">
                    <img src="img/catalog/card-gallery-2.png" alt="gallery">
                    <img src="img/catalog/card-gallery-3.png" alt="gallery">
                  </div>
                  <div class="add-to-cart">
                    <button class="add-to-cart__btn">
                      <img src="img/catalog/cart.svg" alt="cart">
      
                      В КОРЗИНУ
                    </button>
                    <label>Добавить к сравнению </label>
                  </div>
                </div>
                <p class="in-stock-display" id="${this.inStock}">
                  в наличии
                </p>
              </div>
            </div>`;

        card.className = "card";

        card.setAttribute("data-sort", this.price.replace(/ /g, ""));
        card.setAttribute("data-reviews", this.reviewsCounter.replace(/ /g, "").replace(/[А-я]/g, ""));
        card.setAttribute("data-rating", this.rating);

        this.inStockDisplay();

        this.parent.append(card);

        addToCartBtn();
      }
    }

    const indeces = [];

    for (let i = 0; i < 50; i++) {
      const randomIndex = Math.round(Math.random() * 6);
      indeces.push(randomIndex);
      switch (randomIndex) {
        case 0:
          new Card("Kepma A1C Sunburst", "img/catalog/card-images/a1c-1.jpg", "Гитары", "18 010", "", 100, "15 отзывов", false).render();
          break;
        case 1:
          new Card("Enya EUC-MAD", "img/catalog/card-images/ukulele.png", "Укулелe", "22 210", "24 890", 90, "12 отзывов", true).render();
          break;
        case 2:
          new Card("Kepma ES36-E TRANS K10 Black", "img/catalog/card-images/kepma-black.jpeg", "Гитары", "32 910", "", 60, "12 отзывов", true).render();
          break;
        case 3:
          new Card("Kepma F-01S Black", "img/catalog/card-images/kepma-f-01.jpeg", "Гитары", "39 910", "", 77, "25 отзывов", true).render();
          break;
        case 4:
          new Card("Kepma D1C DREAD", "img/catalog/card-images/kepma-dred-black.jpeg", "Гитары", "32 210", "42 300", 40, "25 отзывов", true).render();
          break;
        case 5:
          new Card("Kepma F1-OM", "img/catalog/card-images/kepma-f1-om.jpeg", "Гитары", "55 010", "", 100, "1 отзыв", true).render();
          break;
        case 6:
          new Card("Kepma ES36-E TRANS K10 Black", "img/catalog/card-images/Kepma-ES36-E.jpg", "Гитары", "35 010", "", 100, "1 отзыв", false).render();
          break;
      }
    }
  }

  generateProducts();

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

  pushCardValueToLocalStorage();

  function changeContentStockText() {
    document.querySelectorAll("#none").forEach((element) => {
      element.textContent = "нет в наличии";
    });
  }

  changeContentStockText();

  function stockFilterProducts() {
    const checkbox = document.querySelector("#in-stock__checkbox");

    checkbox.addEventListener("change", () => {
      if (checkbox.checked) {
        document.querySelectorAll("#none").forEach((element) => {
          element.parentElement.parentElement.parentElement.style.display = "none";
        });
      } else {
        document.querySelectorAll("#none").forEach((element) => {
          element.parentElement.parentElement.parentElement.style.display = "flex";
        });
      }
    });
  }

  stockFilterProducts();

  function sortingContent() {
    const sortingSelect = document.querySelector("#catalog-sorting-type");
    const catalog = document.querySelector(".catalog__grid");

    function insertAfter(elem, refElem) {
      return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
    }

    sortingSelect.addEventListener("change", function () {
      document.querySelectorAll(".card").forEach((card) => {
        card.remove();
      });

      generateProducts(); // reload catalog content

      let childrenLength = catalog.children.length - 1;

      switch (this.selectedIndex) {
        case 0:
          document.location.reload();
          break;
        case 1:
          for (let i = 0; i < childrenLength; i++) {
            for (let j = 0; j < childrenLength; j++) {
              if (+catalog.children[i].getAttribute("data-reviews") > +catalog.children[j].getAttribute("data-reviews")) {
                const replaceNode = catalog.replaceChild(catalog.children[i], catalog.children[j]);
                insertAfter(replaceNode, catalog.children[i]);
              }
            }
          }

          break;
        case 2:
          for (let i = 0; i < childrenLength; i++) {
            for (let j = 0; j < childrenLength; j++) {
              if (+catalog.children[i].getAttribute("data-sort") < +catalog.children[j].getAttribute("data-sort")) {
                const replaceNode = catalog.replaceChild(catalog.children[i], catalog.children[j]);
                insertAfter(replaceNode, catalog.children[i]);
              }
            }
          }

          break;
        case 3:
          for (let i = 0; i < childrenLength; i++) {
            for (let j = 0; j < childrenLength; j++) {
              if (+catalog.children[i].getAttribute("data-sort") > +catalog.children[j].getAttribute("data-sort")) {
                const replaceNode = catalog.replaceChild(catalog.children[i], catalog.children[j]);
                insertAfter(replaceNode, catalog.children[i]);
              }
            }
          }
          break;
      }

      cardsQuantity();
    });
  }

  sortingContent();

  function cardsQuantity() {
    let catalogItems = document.querySelectorAll(".card"),
      pages;

    function sliceCatalogItems(itemsQuant) {
      pages = [];
      for (let i = 0; i < catalogItems.length; i += itemsQuant) {
        pages.push([...catalogItems].slice(i, i + itemsQuant));
      }
    }

    function displayPage(pageIndex) {
      pages[pageIndex].forEach((item) => {
        document.querySelector(".catalog__grid").append(item);
      });
    }

    function generatePaginationButtons(currentPageIndex) {
      if (document.querySelectorAll(".page").length > 0) document.querySelectorAll(".page").forEach((page) => page.remove());

      const pageline = document.querySelector(".pagination__pages");

      function pageEvent(e) {
        e.preventDefault();

        for (let item of pageline.children) item.classList.remove("page--active");

        this.classList.add("page--active");

        managePages(+this.textContent - 1);
      }

      for (let i = 0; i < pages.length; i++) {
        const pageLink = document.createElement("a");
        pageLink.setAttribute("href", "#");
        i === currentPageIndex ? (pageLink.className = "page page--active") : (pageLink.className = "page");
        pageLink.textContent = i + 1;
        pageLink.addEventListener("click", pageEvent);

        pageline.append(pageLink);
      }
    }

    function managePages(pageIndex) {
      sliceCatalogItems(+document.querySelector("#cards-quantity__input").value);

      catalogItems.forEach((item) => {
        item.remove();
      });
      displayPage(pageIndex);
      generatePaginationButtons(pageIndex); //
    }

    managePages(0);

    generatePaginationButtons(0);

    document.querySelector("#cards-quantity__input").addEventListener("change", () => {
      managePages(document.querySelector(".page--active").textContent - 1);
    });
  }

  cardsQuantity();

  function catalogLayoutButtons() {
    const gridBtn = document.querySelector("#grid-layout"),
      wideBtn = document.querySelector("#wide-layout"),
      catalogGrid = document.querySelector(".catalog__grid");

    gridBtn.addEventListener("click", function () {
      this.classList.add("active-layout");
      wideBtn.classList.remove("active-layout");

      catalogGrid.classList.remove("catalog__grid--wide");

      document.querySelectorAll(".card").forEach((card) => {
        card.classList.remove("card--wide");
      });
    });

    wideBtn.addEventListener("click", function () {
      document.querySelectorAll(".card").forEach((card) => {
        card.remove();
      });

      generateProducts(); // reload catalog content

      this.classList.add("active-layout");
      gridBtn.classList.remove("active-layout");

      catalogGrid.classList.add("catalog__grid--wide");

      document.querySelectorAll(".card").forEach((card) => {
        card.classList.add("card--wide");
      });

      cardsQuantity();
    });
  }

  catalogLayoutButtons();
}

module.exports = catalog;

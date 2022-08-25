function product() {
  function generatePageContent() {
    document.querySelector("#lightgallery").childNodes.forEach((link) => {
      link.setAttribute("href", localStorage.getItem("card-img-src"));
      link.firstChild.setAttribute("src", localStorage.getItem("card-img-src"));
      link.firstChild.setAttribute("alt", localStorage.getItem("card-name"));
    });


    document.querySelector("title").textContent = localStorage.getItem("card-category") + ': ' + localStorage.getItem("card-name") + ' - Guitar Lavka';
    document.querySelector(".product__category").textContent = localStorage.getItem("card-category");
    document.querySelector(".product__name").textContent = localStorage.getItem("card-name");
    document.querySelector(".control__price").textContent = localStorage.getItem("card-price").slice(1);
    document.querySelector(".stars").style.width = localStorage.getItem("card-rating") + "%";
    document.querySelector(".installment").textContent = "₴" + Math.round(parseInt(localStorage.getItem("card-price").slice(1).replace(/ /g, "")) / 10);
  }

  generatePageContent();

  function makeTabsWorking(tabsBtnSelector, tabsContentSelector, tabsBtnActiveSelector, tabsContentActiveSelector) {
    const tabsBtns = document.querySelectorAll(tabsBtnSelector),
      panels = document.querySelectorAll(tabsContentSelector);

    tabsBtns.forEach((tab) => {
      tab.addEventListener("click", function () {
        for (let i = 0; i < 5; i++) {
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
}

module.exports = product;

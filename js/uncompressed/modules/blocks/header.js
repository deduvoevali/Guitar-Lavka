function header() {
  const hamburger = document.querySelector(".header .hamburger");
  const searchInput = document.querySelector(".header .search");

  //hamburger

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("hamburger--active");
    document.querySelector(".header .nav").classList.toggle("nav--active");
  });

  //search input and nav-menu animatins

  searchInput.addEventListener("focus", () => {
    document.querySelector(".header .search-bar").classList.add("search-bar--active");

    if (window.screen.width <= 1000) return;

    // JS animations was useless here(

    document.querySelector(".header .nav").style.opacity = "0";

    setTimeout(() => {
      document.querySelector(".header .nav").style.display = "none";
    }, 100);
  });

  searchInput.addEventListener("focusout", () => {
    document.querySelector(".header .search-bar").classList.remove("search-bar--active");

    if (window.screen.width <= 1000) return;

    // JS animations was useless here(

    setTimeout(() => {
      if (!document.querySelector(".header .search-bar").className.includes("search-bar--active")) {
        document.querySelector(".header .nav").style.display = "block";
        setTimeout(() => {
          document.querySelector(".header .nav").style.opacity = "100%";
        }, 200);
      }
    }, 800);
  });
}

module.exports = header;

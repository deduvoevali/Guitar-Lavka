function headerHome() {
  const hamburger = document.querySelector(".header-homepage .hamburger");
  const searchInput = document.querySelector(".header-homepage .search");

  //hamburger

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("hamburger--active");
    document.querySelector(".header-homepage  .nav").classList.toggle("nav--active");
  });

  // search-width

  searchInput.addEventListener("focus", () => {
    document.querySelector(".header-homepage .search-bar").classList.add("search-bar--active");

    document.querySelector(".header-homepage .logo").classList.toggle("logo--active");
  });

  searchInput.addEventListener("focusout", () => {
    document.querySelector(".header-homepage .search-bar").classList.remove("search-bar--active");
    document.querySelector(".header-homepage .logo").classList.remove("logo--active");
  });
}

module.exports = headerHome;

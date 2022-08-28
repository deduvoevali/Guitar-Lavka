function serviceMenu() {
  document.querySelector("#services-menu").addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(".services-menu-wrapper").style.opacity = 0;
    document.querySelector(".services-menu-wrapper").style.display = "block";
    setTimeout(() => {
      document.querySelector(".services-menu-wrapper").style.opacity = 1;
    }, 0);
  });

  document.querySelector(".close, .services-menu-wrapper").addEventListener("click", function (e) {
    if (e.target.className === "close" || e.target.className === "services-menu-wrapper") {
      document.querySelector(".services-menu-wrapper").style.opacity = 1;
      document.querySelector(".services-menu-wrapper").style.opacity = 0;

      setTimeout(() => {
        document.querySelector(".services-menu-wrapper").style.display = "none";
      }, 400);
    }
  });
}

module.exports = serviceMenu;

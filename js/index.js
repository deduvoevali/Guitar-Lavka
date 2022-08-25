window.addEventListener("DOMContentLoaded", () => {
  
  //Blocks
  const header = require("./modules/blocks/header"),
    headerHome = require("./modules/blocks/header-home"),
    serviceMenu = require("./modules/blocks/service-menu");

  const pushCardValueToLocalStorage = require("./modules/blocks/cards-localStorage"),
    popular = require("./modules/blocks/popular"),
    showcase = require("./modules/blocks/showcase"),
    price = require("./modules/blocks/price");

  //Pages
  const home = require("./modules/pages/home"),
    catalog = require("./modules/pages/catalog"),
    product = require("./modules/pages/product");

  //Blocks

  try {
    header();
  } catch {}
  try {
    headerHome();
  } catch {}
  try {
    serviceMenu();
  } catch {}
  try {
    pushCardValueToLocalStorage();
  } catch {}
  try {
    popular();
  } catch {}
  try {
    showcase();
  } catch {}

  //Pages

  try {
    home();
  } catch {}
  try {
    catalog();
  } catch {}
  try {
    product();
  } catch {}

  //Price

  try {
    price();
  } catch {}
});

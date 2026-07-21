"use strict";

import { products } from "../data/products.js";

const productLists = document.querySelectorAll("[data-product-list]");
const productPrices = document.querySelectorAll("[data-product-price]");

console.log(productLists, productPrices);

export const renderProducts = function () {
  for (let i = 0; i < productLists.length; i++) {
    productLists[i].textContent = products[i].name;
    productPrices[i].textContent = `Rp ${products[i].price}`;
  }
};

renderProducts();

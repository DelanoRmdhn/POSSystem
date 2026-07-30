"use strict";

import { startingState, state } from "./state/store.js";

import { products } from "../Javascript/data/products.js";
import {
  addToCart,
  updateCartCounter,
  addItem,
  runServices,
} from "./services/cart.js";

import { renderProducts } from "../Javascript/ui/productsList.js";
import { renderCart, renderReceipt } from "./ui/renderCart.js";

//starting State
startingState();

// RenderProducts
renderProducts(products);

//add Button
const buttonsAdd = document.querySelectorAll("[data-btn-add]  ");
for (let i = 0; i < buttonsAdd.length; i++) {
  buttonsAdd[i].addEventListener("click", function () {
    //
    console.log("Button Add Clicked");
    addToCart(i);

    //Tampilkan product ke cart
    renderCart();

    // Jalanin Fungsi Perhitungan
    runServices();
  });
}

//CHECKOUT
const checkoutBtn = document.getElementById("checkout-btn");
checkoutBtn.addEventListener("click", renderReceipt);

//Reset cart
const resetBtn = document.getElementById("reset-btn");
const resetCartBtn = document.getElementById("reset-cart");

resetBtn.addEventListener("click", startingState);
resetCartBtn.addEventListener("click", startingState);

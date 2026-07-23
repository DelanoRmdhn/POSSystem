"use strict";

import { startingState } from "./state/store.js";

import { products } from "../Javascript/data/products.js";
import { renderProducts } from "../Javascript/ui/productsList.js";
import {cart} from "./state/store.js";
import { addToCart } from "./services/cart.js";
import { renderCart } from "./ui/renderCart.js";

//starting State
startingState();

// RenderProducts
renderProducts(products);

//add Button
const buttonsAdd = document.querySelectorAll("[data-btn-add");


for (let i = 0; i < buttonsAdd.length; i++) {
  buttonsAdd[i].addEventListener("click", function () {
    //
    console.log("Button Add Clicked");
    addToCart(i);

    // Masukin Elemen Li Baru ke cart apabila belum ada di cart
    renderCart();
    if (cart.length !== 0) {
      document.querySelector(".cart-items-empty").classList.add("hidden");
      document.querySelector(".cart-items-active").classList.remove("hidden");
    }
  });
}


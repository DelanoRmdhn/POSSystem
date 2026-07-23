"use strict";

import { startingState,resetCart} from "./state/store.js";

import { products } from "../Javascript/data/products.js";
import { renderProducts } from "../Javascript/ui/productsList.js";
import {cart} from "./state/store.js";
import { addToCart,updateCartCounter,addItem} from "./services/cart.js";
import { renderCart} from "./ui/renderCart.js";


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

    // Masukin Elemen Li Baru ke cart apabila belum ada di cart
    renderCart();

    //nilai cartCounter sesuai dengan jumlah item di cart
    updateCartCounter();

    //
  });
}

//add item button

//Reset cart
const resetBtn = document.getElementById("reset-btn");
const resetCartBtn = document.getElementById("reset-cart");

resetBtn.addEventListener("click",resetCart);
resetCartBtn.addEventListener("click",resetCart);
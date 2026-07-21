"use strict";

import { startingState } from "./state/store.js";

import { products } from "../Javascript/data/products.js";
import { renderProducts } from "../Javascript/ui/productsList.js";

//starting State
startingState();

// RenderProducts
renderProducts(products);

//add Button
const buttonsAdd = document.querySelectorAll("[data-btn-add");
const newLi = document.createElement("li");
const parentUl = document.querySelector(".ul-parent");

let cart = [];

for (let i = 0; i < buttonsAdd.length; i++) {
  buttonsAdd[i].addEventListener("click", function () {
    //
    let sudahAda = false;

    for (let j = 0; j < cart.length; j++) {
      if (cart[j].id === products[i].id) {
        cart[j].quantity += 1;
        sudahAda = true;
        break;
      }
    }

    if (!sudahAda) {
      cart.push({
        id: products[i].id,
        name: products[i].name,
        price: products[i].price,
        quantity: 1,
      });
    }
    console.log(cart[i]);

    // Masukin Elemen Li Baru ke cart apabila belum ada di cart
    renderCart();
    if (cart.length !== 0) {
      document.querySelector(".cart-items-empty").classList.add("hidden");
      document.querySelector(".cart-items-active").classList.remove("hidden");
    }
  });
}

const renderCart = function () {
  parentUl.innerHTML = "";

  for (let i = 0; i < cart.length; i++) {
    parentUl.insertAdjacentHTML(
      "beforeend",
      `
          <li
          class="list-items py-4 flex flex-row items-center justify-between"
          >
          <div class="flex-1">
          <h4 class="text-sm font-normal">${cart[i].name}</h4>
          <p class="text-xs text-gray-500">Rp ${cart[i].price}</p>
          </div>
        <div
        class="flex flex-row justify-between items-center bg-neutral gap-2 p-1 rounded-lg"
        >
        <button
        class="w-7 h-7 flex items-center justify-center rounded bg-white hover:text-primary duration-200"
        >
        -
        </button>
        <p class="text-sm font-bold w-6 text-center" id='quantity'>${cart[i].quantity}</p>
        <button
        class="w-7 h-7 flex items-center justify-center rounded bg-white hover:text-primary duration-200"
        >
        +
        </button>
        </div>
        </li>
        `,
    );
  }
};

"use strict";
import { state } from "../state/store.js";
import {
  addItem,
  removeItem,
  updateCartCounter,
  runServices,
} from "../services/cart.js";

const parentUl = document.querySelector(".ul-parent");

export const renderCart = function () {
  parentUl.innerHTML = "";

  if (state.cart.length === 0) {
    document.querySelector(".cart-items-empty").classList.remove("hidden");
    document.querySelector(".cart-items-active").classList.add("hidden");
    return;
  }
  document.querySelector(".cart-items-empty").classList.add("hidden");
  document.querySelector(".cart-items-active").classList.remove("hidden");
  document.getElementById("cart-count").textContent = state.cart.length;

  for (let i = 0; i < state.cart.length; i++) {
    parentUl.insertAdjacentHTML(
      "beforeend",
      `
          <li
          class="list-items py-4 flex flex-row items-center justify-between"
          >
          <div class="flex-1">
          <h4 class="text-sm font-normal">${state.cart[i].name}</h4>
          <p class="text-xs text-gray-500">Rp ${state.cart[i].price}</p>
          </div>
        <div
        class="flex flex-row justify-between items-center bg-neutral gap-2 p-1 rounded-lg"
        >
        <button
        class="w-7 h-7 flex items-center justify-center rounded bg-white hover:text-primary duration-200 btn-decrement"
        >
        -
        </button>
        <p class="text-sm font-bold w-6 text-center" id='quantity'>${state.cart[i].quantity}</p>
        <button
        class="w-7 h-7 flex items-center justify-center rounded bg-white hover:text-primary duration-200 btn-increment"
        >
        +
        </button>
        </div>
        </li>
        `,
    );

    //Tambahin Button untuk tambah item di cart
    const incrementButton =
      parentUl.lastElementChild.querySelector(".btn-increment");
    incrementButton.addEventListener("click", function () {
      addItem(i);
      renderCart();
      updateCartCounter();
    });

    //Tambahin Button untuk kurangin item di cart
    const decrementButton =
      parentUl.lastElementChild.querySelector(".btn-decrement");
    decrementButton.addEventListener("click", function () {
      removeItem(i);
      renderCart();
      updateCartCounter();
    });
  }
};

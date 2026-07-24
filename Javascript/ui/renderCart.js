"use strict";
import { checkoutModalEl, state, closeReceipt } from "../state/store.js";
import {
  addItem,
  removeItem,
  updateCartCounter,
  runServices,
  calculateSubtotal,
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

const parentUl2 = document.getElementById("checkout-items");
export const renderReceipt = function () {
  parentUl2.innerHTML = "";
  if (state.cart.length === 0) {
    alert("Keranjang Kosong!");
    return;
  }

  for (let i = 0; i < state.cart.length; i++) {
    parentUl2.insertAdjacentHTML(
      "beforeend",
      `
        <tr class="border-b border-dashed border-gray-300">
          <td class="py-2">${state.cart[i].name}</td>
          <td class="py-2 text-center">${state.cart[i].quantity}x</td>
          <td class="py-2 text-right">Rp. ${state.cart[i].price * state.cart[i].quantity}</td>
        </tr>
      `,
    );
  }
  document.getElementById("subtotal-receipt").textContent =
    `Rp ${state.subtotal}`;
  document.getElementById("tax-receipt").textContent = `Rp ${state.tax}`;
  document.getElementById("discount-receipt").textContent =
    `Rp ${state.discountAmount}`;
  document.getElementById("total-receipt").textContent = `Rp ${state.total}`;
  checkoutModalEl.classList.remove("hidden");
};

const closeModalBtn = document.getElementById("cancel-modal-btn");
closeModalBtn.addEventListener("click", closeReceipt);

'use strict';
import {cart} from "../state/store.js";

const parentUl = document.querySelector(".ul-parent");

export const renderCart = function () {
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

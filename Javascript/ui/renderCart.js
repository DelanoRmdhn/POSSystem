'use strict';
import {cart,cartCounter} from "../state/store.js";
import { addItem,removeItem,updateCartCounter} from "../services/cart.js";

const parentUl = document.querySelector(".ul-parent");

export const renderCart = function () {
  parentUl.innerHTML = "";

      if (cart.length === 0) {
      document.querySelector(".cart-items-empty").classList.remove("hidden");
      document.querySelector(".cart-items-active").classList.add("hidden");
      return;
    }
    document.querySelector(".cart-items-empty").classList.add("hidden");
    document.querySelector(".cart-items-active").classList.remove("hidden");
    document.getElementById("cart-count").textContent = cart.length;
    
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
        class="w-7 h-7 flex items-center justify-center rounded bg-white hover:text-primary duration-200 btn-decrement"
        >
        -
        </button>
        <p class="text-sm font-bold w-6 text-center" id='quantity'>${cart[i].quantity}</p>
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
    const incrementButton = parentUl.lastElementChild.querySelector(".btn-increment");
        incrementButton.addEventListener("click", function () {
            addItem(i);
            renderCart();
            updateCartCounter();
        });

    //Tambahin Button untuk kurangin item di cart
    const decrementButton = parentUl.lastElementChild.querySelector(".btn-decrement");
        decrementButton.addEventListener("click", function () {
            removeItem(i);
            renderCart();
            updateCartCounter();
        });
  }
};

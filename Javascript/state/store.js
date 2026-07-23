"use strict";


// Starting State
const cartActive = document.getElementById("cart-active");
const cartNonActive = document.getElementById("cart-non-active");

export let cart = [];
export let cartCounter = 0;

export const startingState = function () {
  cart.length = 0;
  cartCounter = 0;
  cartActive.classList.add("hidden");
  cartNonActive.classList.remove("hidden");
};

export const resetCart = function (index) {
  cart.length = 0;
  cartCounter = 0;

  cartActive.classList.add("hidden");
  cartNonActive.classList.remove("hidden");
  document.getElementById("cart-count").textContent = cart.length;
};

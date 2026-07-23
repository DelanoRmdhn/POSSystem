"use strict";

// Starting State
const cartActive = document.getElementById("cart-active");
const cartNonActive = document.getElementById("cart-non-active");
export let cart = [];

export const startingState = function () {
  cart.length = 0;
  cartActive.classList.add("hidden");
  cartNonActive.classList.remove("hidden");
};

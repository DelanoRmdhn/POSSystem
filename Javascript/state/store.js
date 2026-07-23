"use strict";

// Starting State
const cartActive = document.getElementById("cart-active");
const cartNonActive = document.getElementById("cart-non-active");

export const startingState = function () {
  cartNonActive.classList.remove("hidden");
};

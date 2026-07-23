"use strict";


// Starting State
const cartActive = document.getElementById("cart-active");
const cartNonActive = document.getElementById("cart-non-active");

// export let cart = [];
// export let cartCounter = 0;
// export let subtotal = 0;

export const state = {
  cart: [],
  cartCounter: 0,
  subtotal: 0
}

export const startingState = function () {
  state.cart.length = 0;
  state.cartCounter = 0;
  state.subtotal = 0;
  cartActive.classList.add("hidden");
  cartNonActive.classList.remove("hidden");
};

export const resetCart = function (index) {
  state.cart.length = 0;
  state.cartCounter = 0;
  state.subtotal = 0;

  cartActive.classList.add("hidden");
  cartNonActive.classList.remove("hidden");
  document.getElementById("cart-count").textContent = state.cart.length;
};

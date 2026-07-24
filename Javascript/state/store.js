"use strict";

// Starting State
const cartActive = document.getElementById("cart-active");
const cartNonActive = document.getElementById("cart-non-active");
export const checkoutModalEl = document.getElementById("checkout-modal");

export const state = {
  cart: [],
  cartCounter: 0,
  subtotal: 0,
  tax: 0,
  discount: 0,
  discountAmount: 0,
  total: 0,
};

export const startingState = function () {
  state.cart.length = 0;
  state.cartCounter = 0;
  state.subtotal = 0;
  state.tax = 0;
  state.discount = 0;
  state.discountAmount = 0;
  state.total = 0;

  cartActive.classList.add("hidden");
  cartNonActive.classList.remove("hidden");
  // checkoutModalEl.classList.add("hidden");
  document.getElementById("cart-count").textContent = state.cart.length;

  //Cart
  document.getElementById("subtotal").textContent = `Rp ${state.subtotal}`;
  document.getElementById("tax").textContent = `Rp ${state.tax}`;
  document.getElementById("discount-input").value = state.discount;
  document.getElementById("total").textContent = `Rp ${state.total}`;
};

export const closeReceipt = function () {
  checkoutModalEl.classList.add("hidden");
};

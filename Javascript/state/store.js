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

let { cart, cartCounter, subtotal, tax, discount, discountAmount, total } =
  state;
export const startingState = function () {
  console.log(state);

  cart.length = 0;
  cartCounter = 0;
  subtotal = 0;
  tax = 0;
  discount = 0;
  discountAmount = 0;
  total = 0;

  cartActive.classList.add("hidden");
  cartNonActive.classList.remove("hidden");
  // checkoutModalEl.classList.add("hidden");
  document.getElementById("cart-count").textContent = cart.length;

  //Cart
  document.getElementById("subtotal").textContent = `Rp ${subtotal}`;
  document.getElementById("tax").textContent = `Rp ${tax}`;
  document.getElementById("discount-input").value = discount;
  document.getElementById("total").textContent = `Rp ${total}`;
};

export const closeReceipt = function () {
  checkoutModalEl.classList.add("hidden");
};

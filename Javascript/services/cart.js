"use strict";
import {state} from "../state/store.js";
import {products} from "../data/products.js";
import {resetCart} from "../state/store.js";


const cartCount = document.getElementById("cart-count");

export const addToCart = function (index) {
    let sudahAda = false;
        for (let i = 0; i < state.cart.length; i++) {
          if (state.cart[i].id === products[index].id) {
            state.cart[i].quantity += 1;
            sudahAda = true;
            break;
          }
        }

        if (!sudahAda) {
            state.cart.push({
            id: products[index].id,
            name: products[index].name,
            price: products[index].price,
            quantity: 1,
            });
        }
}

//LOGIC UNTUK UPDATE CART COUNTER   
export const updateCartCounter = function () {
    let count = 0;

    for(let i = 0; i < state.cart.length; i++) {
        count += state.cart[i].quantity;
    }
    cartCount.textContent = count;
    console.log("Cart Counter Updated: " + count);
}

//LOGIC UNTUK TAMBAH DAN KURANGI QUANTITY DI CART
export const addItem = function (index) {
    state.cart[index].quantity++;
}

//LOGIC UNTUK KURANGI ITEM DI CART
export const removeItem = function (index) {
    if(state.cart[index].quantity > 1) {
    state.cart[index].quantity--;
    } else if (state.cart[index].quantity === 1) {
        for(let i = index; i < state.cart.length - 1; i++) {
            state.cart[i] = state.cart[i + 1];
        }
        state.cart.length--;
        if(state.cart.length === 0) {
            resetCart();
        }
    }
}

//Logic Perhitungan Sub Total
const subtotalElement = document.getElementById("subtotal");

export const calculateSubtotal = function () {
    let currentSubtotal = 0;
    for(let i = 0; i < state.cart.length; i++) {
        currentSubtotal += state.cart[i].price * state.cart[i].quantity;
    }
    state.subtotal = currentSubtotal;
    subtotalElement.textContent = `Rp ${state.subtotal}`;
}



//logic perhitungan pajak
const taxEl = document.getElementById("tax");
export const calculateTax = function () {
    let currentTax = 0;
    for(let i = 0; i < state.cart.length; i++) { 
        currentTax += (state.cart[i].price * state.cart[i].quantity) * 0.10; // 10% tax
    }
    state.tax = currentTax;
    taxEl.textContent = `Rp ${state.tax}`;
}

//Validasi input Diskon
const discountInput = document.getElementById("discount-input");
export const calculateDiscount = function () {
    discountInput.addEventListener("change", function () {
        state.discount = parseInt(discountInput.value);
        if(isNaN(state.discount) || state.discount < 0) {
            state.discount = 0;
            discountInput.value = 0;
        } else {
            state.discount = parseInt(discountInput.value);
        }
    });
};

//logic Perhitungan Total
const grandTotal = document.getElementById("total");
export const calculateTotal = function () {
 state.discountAmount = state.subtotal * (state.discount / 100);
    // console.log("Discount Amount: " + state.discountAmount);
    state.total =
        state.subtotal -
        state.discountAmount +
        state.tax;

    grandTotal.textContent = `Rp ${state.total}`;
}
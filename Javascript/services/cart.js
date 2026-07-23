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
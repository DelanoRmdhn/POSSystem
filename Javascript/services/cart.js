"use strict";
import {cart, cartCounter} from "../state/store.js";
import {products} from "../data/products.js";
import {resetCart} from "../state/store.js";


const cartCount = document.getElementById("cart-count");

export const addToCart = function (index) {
    let sudahAda = false;
        for (let i = 0; i < cart.length; i++) {
          if (cart[i].id === products[index].id) {
            cart[i].quantity += 1;
            sudahAda = true;
            break;
          }
        }

        if (!sudahAda) {
            cart.push({
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

    for(let i = 0; i < cart.length; i++) {
        count += cart[i].quantity;
    }
    cartCount.textContent = count;
    console.log("Cart Counter Updated: " + count);
}

//LOGIC UNTUK TAMBAH DAN KURANGI QUANTITY DI CART
export const addItem = function (index) {
    cart[index].quantity++;
}

//LOGIC UNTUK KURANGI ITEM DI CART
export const removeItem = function (index) {
    if(cart[index].quantity > 1) {
    cart[index].quantity--;
    } else if (cart[index].quantity === 1) {
        for(let i = index; i < cart.length - 1; i++) {
            cart[i] = cart[i + 1];
        }
        cart.length--;
        if(cart.length === 0) {
            resetCart();
        }
    }
}
"use strict";
import {cart} from "../state/store.js";
import {products} from "../data/products.js";

const newLi = document.createElement("li");
const parentUl = document.querySelector(".ul-parent");


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
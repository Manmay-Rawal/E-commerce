// import Cart from "../model/cart.models.js";
const Cart = require("../model/cart.models.js")

async function createCart(user) {
  try {
    const cart = new Cart({ user });
    const createCart = await cart.save();
    return createCart;
  } catch (error) {
    throw new Error(error.message);
  }
}

module.exports =  { createCart };

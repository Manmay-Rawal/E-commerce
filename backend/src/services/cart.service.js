const Cart = require("../model/cart.models.js")
const CartItems = require("../model/cartItems.models.js")
const Product = require("../model/product.models.js")

async function createCart(user) {
  try {
    const cart = new Cart({ user });
    const createCart = await cart.save();
    return createCart;
  } catch (error) {
    throw new Error(error.message);
  }
}

async function findUserCart(userId){
  try {
    let cart=await Cart.findOne({user:userId});
    let cartItems = await CartItems.find({cart:cart._id}).populate("product")
    cart.cartItems=cartItems;

    let totalPrice=0;
    let totalDiscountedPrice=0;
    let totalItem=0;

    for(let cartItems of cart.cartItems){
      totalPrice += cartItems.price;
      totalDiscountedPrice += cartItems.discountedPrice;
      totalItem += cartItems.quantity;
    }

    cart.totalPrice=totalPrice;
    cart.totalItem=totalItem;
    cart.discounte=totalPrice-totalDiscountedPrice;

    return cart
  } catch (error) {
    throw new Error(error.message)
  }
}

async function addCartItem(userId,req){
  try {
    const cart=await Cart.findOne({user:userId});
    const product = await Product.findById(req.productId)

    const isPresent = await CartItem.findOne({cart:cart._id,product:product._id,userId})

    if(!isPresent){
      const CartItem = new CartItem({
        product:product._id,
        cart:cart._id,
        quantity:1,
        userId,
        price:product.price,
        size:req.size,
        discountedPrice:product.discountedPrice,
      })

      const createdCartItem=await cartItem.save();
      cart.cartItems.push(createdCartItem);
      await cart.save();
      return "Item added to cart"
    }
  } catch (error) {
    throw new Error(error.message)
  }
}

module.exports =  { createCart ,addCartItem,findUserCart};

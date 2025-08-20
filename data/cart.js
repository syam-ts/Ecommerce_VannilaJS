import '../data/cart-oop.js';

export let cart = JSON.parse(localStorage.getItem('cart')) || [];


export const removeFromCart = (productId) => {
  const newCart = [];
  cart.forEach((cartItem) => {
    if (cartItem.productId !== productId) {
      newCart.push(cartItem);
    }
  });

  cart = newCart;
  saveToStorage();
};


export const saveToStorage = () => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

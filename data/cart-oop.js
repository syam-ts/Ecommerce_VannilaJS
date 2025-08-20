
import './cart-class.js';

const cart = {

  cart: JSON.parse(localStorage.getItem("cart")) || [],
  removeFromCart(productId) {
    const newCart = [];
    cart.forEach((cartItem) => {
      if (cartItem.productId !== productId) {
        newCart.push(cartItem);
      }
    });

    this.cart = newCart;
    saveToStorage();
  },
  saveToStorage() {
    localStorage.setItem("cart", JSON.stringify(this.cart));
  },
};
 
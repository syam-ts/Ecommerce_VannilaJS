class Cart {
    #cart;

   constructor(cart) {
    this.#cart = cart || [];
   } 
 
  #removeFromCart = (productId) =>{
    const newCart = [];
    cart.forEach((cartItem) => {
      if (cartItem.productId !== productId) {
        newCart.push(cartItem);
      }
    });
    this.#cart = newCart;
    saveToStorage();
  };

   print = () =>{
      console.log('CART PRINT: ',this.#cart)
  }

  #saveToStorage = () => {
    localStorage.setItem("cart", JSON.stringify(this.#cart));
  };
}

const cart = new Cart(JSON.parse(localStorage.getItem("cart")) ); 

console.log(cart);

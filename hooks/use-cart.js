import { useState, createContext, useContext, useEffect } from 'react';
import products from '../products.json';
import { initiateCheckout } from '../lib/payments';

const defaultCart = {
  products: {},
};

export const CartContext = createContext();

export function useCartState() {
  const [cart, updateCart] = useState(defaultCart);

  // useEffect(() => {
  //   const stateFromStorage = window.localStorage.getItem('MEG_Shop_cart');
  //   const data = stateFromStorage && JSON.parse(stateFromStorage);
  //   if (data) {
  //     updateCart(data);
  //   }
  // }, []);

  // useEffect(() => {
  //   const data = JSON.stringify(cart);
  //   window.localStorage.setItem('MEG_Shop_cart', data);
  // }, [cart]);

  const cartItems = Object.keys(cart.products).map((key) => {
    const product = products.find(({ id }) => `${id}` === `${key}`);

    return {
      ...cart.products[key],
      pricePerItem: product.price,
      title: product.title,
    };
  });

  const subtotal = cartItems.reduce(
    (accumulator, { pricePerItem, quantity }) => {
      return accumulator + pricePerItem * quantity;
    },
    0
  );

  const totalQuantity = cartItems.reduce((accumulator, { quantity }) => {
    return accumulator + quantity;
  }, 0);

  function addToCart({ id }) {
    updateCart((prev) => {
      let cart = { ...prev };

      if (cart.products[id]) {
        cart.products[id].quantity = cart.products[id].quantity + 1;
      } else {
        cart.products[id] = {
          id,
          quantity: 1,
        };
      }
      return cart;
    });
  }

  function removeItem({ id }) {
    updateCart((prev) => {
      let cart = { ...prev };

      if (cart.products[id].quantity === 1) {
        delete cart.products[id];
      } else {
        cart.products[id].quantity = cart.products[id].quantity - 1;
      }
      return cart;
    });
  }

  function updateItem({ id, quantity }) {
    updateCart((prev) => {
      let cart = { ...prev };

      if (cart.products[id]) {
        cart.products[id].quantity = quantity;
      }
      return cart;
    });
  }

  function checkout() {
    initiateCheckout({
      lineItems: cartItems.map((item) => {
        return {
          price: item.id,
          quantity: item.quantity,
        };
      }),
    });
  }

  return {
    cart,
    updateCart,
    cartItems,
    subtotal,
    totalQuantity,
    addToCart,
    removeItem,
    updateItem,
    checkout,
  };
}

export function useCart() {
  const cart = useContext(CartContext);
  return cart;
}

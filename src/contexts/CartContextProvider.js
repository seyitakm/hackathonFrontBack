import React, { createContext, useContext, useReducer } from "react";
import { CART } from "../helpers/consts";
import {
  calcSubPrice,
  calcTotalPrice,
  getCountSpecsInCart,
} from "../helpers/func";

const cartContext = createContext();

export const useCart = () => {
  return useContext(cartContext);
};

const INIT_STATE = {
  cart: JSON.parse(localStorage.getItem("cart")),
  cartLength: getCountSpecsInCart(),
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case CART.GET_CART:
      return { ...state, cart: action.payload };
    case CART.GET_CART_LENGTH:
      return { ...state, cartLength: action.payload };
    default:
      return state;
  }
}

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const getCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart"));

    if (!cart) {
      localStorage.setItem(
        "cart",
        JSON.stringify({ specs: [], totalPrice: 0 })
      );

      cart = {
        specs: [],
        totalPrice: 0,
      };
    }
    dispatch({
      type: CART.GET_CART,
      payload: cart,
    });
  };

  const addSpecsToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem("cart"));

    if (!cart) {
      cart = {
        specs: [],
        totalPrice: 0,
      };
    }

    let newProduct = {
      item: product,
      count: 1,
      subPrice: +product.price,
    };

    let productToFind = cart.specs.filter(
      (elem) => elem.item.id === product.id
    );

    if (productToFind.length === 0) {
      cart.specs.push(newProduct);
    } else {
      cart.specs = cart.specs.filter((elem) => elem.item.id !== product.id);
    }

    cart.totalPrice = calcTotalPrice(cart.specs);

    localStorage.setItem("cart", JSON.stringify(cart));

    dispatch({
      type: CART.GET_CART,
      payload: cart,
    });
  };

  function deleteSpecsInCart(id) {
    let cart = JSON.parse(localStorage.getItem("cart"));

    cart.specs = cart.specs.filter((elem) => elem.item.id !== id);
    cart.totalPrice = calcTotalPrice(cart.specs);
    localStorage.setItem("cart", JSON.stringify(cart));

    getCart();
    dispatch({
      type: CART.GET_CART_LENGTH,
      payload: cart,
    });
  }

  const changeSpecsCount = (count, id) => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    cart.specs = cart.specs.map((product) => {
      if (product.item.id === id) {
        product.count = count;
        product.subPrice = calcSubPrice(product);
      }
      return product;
    });
    cart.totalPrice = calcTotalPrice(cart.specs);
    localStorage.setItem("cart", JSON.stringify(cart));
    dispatch({
      type: CART.GET_CART,
      payload: cart,
    });
  };

  function checkSpecsInCart(id) {
    let cart = JSON.parse(localStorage.getItem("cart"));

    if (cart) {
      let newCart = cart.specs.filter((elem) => elem.item.id === id);
      return newCart.length > 0 ? true : false;
    } else {
      cart = {
        specs: [],
        totalPrice: 0,
      };
    }
  }

  const values = {
    getCart,
    addSpecsToCart,
    changeSpecsCount,
    checkSpecsInCart,
    deleteSpecsInCart,
    cart: state.cart,
  };

  return <cartContext.Provider value={values}>{children}</cartContext.Provider>;
};

export default CartContextProvider;

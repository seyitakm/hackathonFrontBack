import axios from "axios";

export const ACTIONS = {
  GET_PRODUCTS: "GET_PRODUCTS",
  GET_PRODUCT_DETAILS: "GET_PRODUCT_DETAILS",
};

export const CART = {
  GET_CART: "GET_CART",
  GET_CART_LENGTH: "GET_CART_LENGTH",
};

export const JSON_API_PRODUCTS = "https://makers-clinic.herokuapp.com/doctor/";
export const JSON_API_AUTH = "https://makers-clinic.herokuapp.com/account/";
axios(`${JSON_API_PRODUCTS}/`);

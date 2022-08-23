import axios from "axios";
import React, { createContext, useContext, useReducer } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ACTIONS, JSON_API_PRODUCTS } from "../helpers/consts";

export const productContext = createContext();

export const useProducts = () => {
  return useContext(productContext);
};

const INIT_STATE = {
  products: [],
  productDetails: {},
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ACTIONS.GET_PRODUCTS:
      return { ...state, products: action.payload };
    case ACTIONS.GET_PRODUCT_DETAILS:
      return { ...state, productDetails: action.payload };
    default:
      return state;
  }
};

const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const location = useLocation();
  const navigate = useNavigate();

  const addProduct = async (newProduct) => {
    await axios.post(`${JSON_API_PRODUCTS}doctor/`, newProduct);
    getProducts();
  };

  const getProducts = async () => {
    const { data } = await axios(
      `${JSON_API_PRODUCTS}/${window.location.search}`
    );

    dispatch({
      type: ACTIONS.GET_PRODUCTS,
      payload: data,
    });
  };

  const deleteProduct = async (id) => {
    await axios.delete(`${JSON_API_PRODUCTS}/${id}`);
    getProducts();
  };

  const getProductDetails = async (id) => {
    const { data } = await axios(`${JSON_API_PRODUCTS}/${id}`);
    dispatch({
      type: ACTIONS.GET_PRODUCT_DETAILS,
      payload: data,
    });
  };

  const saveEditedProduct = async (newProduct) => {
    await axios.patch(`${JSON_API_PRODUCTS}/${newProduct.id}`, newProduct);
    getProducts();
  };

  const fetchByParams = (query, value) => {
    const search = new URLSearchParams(location.search);

    if (value === "all") {
      search.delete(query);
    } else {
      search.set(query, value);
    }
    const url = `${location.pathname}?${search.toString()}`;
    navigate(url);
  };

  // console.log(location.pathname);

  const values = {
    getProducts,
    addProduct,
    deleteProduct,
    getProductDetails,
    saveEditedProduct,
    fetchByParams,

    products: state.products,
    productDetails: state.productDetails,
  };

  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContextProvider;

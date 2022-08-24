import axios from "axios";
import React, { createContext, useContext, useReducer } from "react";
import { useNavigate } from "react-router-dom";

export const specialtiesContext = createContext();
export const useProducts = () => useContext(specialtiesContext);

const INIT_STATE = {
  specs: [],
  pages: 0,
  oneProduct: null,
  categories: [],
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_PRODUCTS":
      return {
        ...state,
        products: action.payload.results,
        pages: Math.ceil(action.payload.count / 5),
      };
    case "GET_CATEGORIES":
      return { ...state, categories: action.payload };
    case "GET_ONE_PRODUCT":
      return { ...state, oneProduct: action.payload };
    default:
      return state;
  }
}

const API = "https://makers-clinic.herokuapp.com/";

const SpecialtiesContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const navigate = useNavigate();

  async function getSpecs() {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const Authorization = `Bearer ${token.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios(
        `${API}doctor/doctor/${window.location.search}`,
        config
      );
      console.log(res);
      dispatch({
        type: "GET_PRODUCTS",
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function getCategories() {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const Authorization = `Bearer ${token.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };

      const res = await axios(`${API}doctor/categories/`, config);
      console.log(res);
      dispatch({
        type: "GET_CATEGORIES",
        payload: res.data.results,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function addSpecs(newProduct) {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const Authorization = `Bearer ${token.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios.post(`${API}doctor/doctor/`, newProduct, config);
      console.log(res);
      navigate("/spec");
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteSpec(id) {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const Authorization = `Bearer ${token.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };

      await axios.delete(`${API}doctor/doctor/{id}/`, config);
      getSpecs();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <specialtiesContext.Provider
      value={{
        addSpecs,
        getSpecs,
        getCategories,
        deleteSpec,
        specs: state.specs,
        pages: state.pages,
        categories: state.categories,
      }}
    >
      {children}
    </specialtiesContext.Provider>
  );
};

export default SpecialtiesContextProvider;

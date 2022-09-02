import axios from "axios";
import React, { createContext, useContext, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { JSON_API_DOCS } from "../helpers/consts";

export const specialtiesContext = createContext();
export const useProducts = () => useContext(specialtiesContext);

// const s = {
//   adress: "",
//   categories: [],
//   comments: [],
//   description: "",
//   expirience: "",
//   first_name: "",
//   id: null,
//   image: "",
//   last_name: "",
//   likes: null,
//   number: "",
//   rating: null,
//   service_listing: [],
// };
const INIT_STATE = {
  specs: [],
  pages: 0,
  oneProduct: {},
  category: [],
  // specMore: {},

  oneComment: {},
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_PRODUCTS":
      return {
        ...state,
        specs: action.payload.results,
        pages: Math.ceil(action.payload.count / 7),
      };
    case "GET_CATEGORIES":
      return { ...state, category: action.payload };
    case "GET_ONE_PRODUCT":
      return { ...state, oneProduct: action.payload };

    // case "GET_SPEC_MORE":
    //   return { ...state, specMore: action.payload };

    case "GET_COMMENT":
      return { ...state, oneComment: action.payload };

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
      const res = await axios.get(
        `${JSON_API_DOCS}doctor/${window.location.search}`,
        config
      );

      console.log(window.location.search);

      dispatch({
        type: "GET_PRODUCTS",
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function getLike(id) {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const Authorization = `Bearer ${token.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios.get(`${API}doctor/toggle_like/${id}/`, config);
      console.log(res);
    } catch (error) {
      console.log([error.response.data.detail]);
    }
  }
  async function getFavorite(id) {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const Authorization = `Bearer ${token.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios.get(
        `${API}doctor/add_to_favorites/${id}/`,
        config
      );
      console.log(res);
    } catch (error) {
      console.log([error.response.data.detail]);
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

      const res = await axios.post(
        `${JSON_API_DOCS}doctor/`,
        newProduct,
        config
      );
      console.log(res);

      navigate("/spec");
    } catch (error) {
      console.log(error);
    }
  }

  // const searchSpecs = async (order, page, firstName) => {
  //   const token = JSON.parse(localStorage.getItem("token"));
  //   const Authorization = `Bearer ${token.access}`;
  //   const config = {
  //     headers: {
  //       Authorization,
  //     },
  //   };

  //   let res = await axios(
  //     `https://makers-clinic.herokuapp.com/doctor/doctor/search/?ordering=${order}&page=${page}&first_name=${firstName}`,
  //     config
  //   );
  //   return res.data;
  // };

  // async function editSpec(id) {
  //   try {
  //     const token = JSON.parse(localStorage.getItem("token"));
  //     const Authorization = `Bearer ${token.access}`;
  //     const config = {
  //       headers: {
  //         Authorization,
  //       },
  //     };

  //     await axios.patch(`${API}doctor/doctor/${id}/`, config);
  //     getSpecs();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  async function deleteSpec(id) {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const Authorization = `Bearer ${token.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };

      await axios.delete(`${API}doctor/doctor/${id}/`, config);
      getSpecs();
    } catch (error) {
      console.log(error);
    }
  }

  async function getProductDetails(id) {
    // console.log(id);
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const Authorization = `Bearer ${token.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };

      let res = await axios(`${API}doctor/doctor/${id}/`, config);
      dispatch({
        type: "GET_ONE_PRODUCT",
        payload: res.data,
      });
      // console.log(res.data);
      getSpecs();
    } catch (error) {
      console.log(error);
    }
  }

  async function saveEditedProduct(newProduct) {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const Authorization = `Bearer ${token.access}`;
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization,
        },
      };
      await axios.patch(
        `${API}doctor/doctor/${newProduct.id}/`,
        newProduct,
        config
      );
      getSpecs();
    } catch (error) {
      console.log(error);
    }
  }

  async function postComment(formData) {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const Authorization = `Bearer ${token.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios.post(`${API}doctor/comments/`, formData, config);
      console.log(res);
      dispatch({
        type: "GET_COMMENT",
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
      console.log([error.response.data.detail]);
    }
  }
  async function editComment(formData, id) {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const Authorization = `Bearer ${token.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios.patch(
        `${API}doctor/comments/${id}`,
        formData,
        config
      );
      console.log(res);
    } catch (error) {
      console.log(error);
      console.log([error.response.data.detail]);
    }
  }
  async function deleteComment(id) {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const Authorization = `Bearer ${token.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios.delete(`${API}doctor/comments/${id}`, config);
      console.log(res);
    } catch (error) {
      console.log(error);
      console.log([error.response.data.detail]);
    }
  }
  return (
    <specialtiesContext.Provider
      value={{
        addSpecs,
        getSpecs,
        getCategories,
        deleteSpec,
        saveEditedProduct,
        getProductDetails,
        getLike,
        getFavorite,
        postComment,
        editComment,
        deleteComment,
        oneProduct: state.oneProduct,
        specs: state.specs,
        pages: state.pages,
        category: state.category,
        oneComment: state.oneComment,
      }}
    >
      {children}
    </specialtiesContext.Provider>
  );
};

export default SpecialtiesContextProvider;

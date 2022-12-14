import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const authContext = React.createContext();
export const useAuth = () => useContext(authContext);

const API = "https://makers-clinic.herokuapp.com/";

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [error, setError] = useState();

  const navigate = useNavigate();

  const register = async (formData) => {
    try {
      const result = await axios.post(`${API}account/register/`, formData);
      navigate("/activation");
    } catch (error) {
      console.log(Object.values(error.response.data).flat(2)[0]);
      console.log(error);
      setError(Object.values(error.response.data).flat(2)[0]);
    }
  };

  const login = async (formData, email) => {
    try {
      const result = await axios.post(`${API}account/login/`, formData);

      localStorage.setItem("token", JSON.stringify(result.data));
      localStorage.setItem("email", email);
      setUser(email);
      navigate("/");
    } catch (error) {
      console.log([error.response.data.detail]);
      setError([error.response.data.detail]);
    }
  };

  // const username1 = async (id) => {
  //   try {
  //     const res = await axios.get(`${API}account/users/username/`);
  //     console.log(res);
  //     setUsername(username);
  //   } catch (error) {
  //     console.log([error.response.data.detail]);
  //     setError([error.response.data.detail]);
  //   }
  // };

  const forgot_password = async (formData, email) => {
    try {
      const result = await axios.post(
        `${API}account/forgot_password/`,
        formData
      );
      setUser(email);
      navigate("/login");
      console.log(result);
    } catch (error) {
      console.log([error.response.data.detail]);
      setError([error.response.data.detail]);
    }
  };
  const change_password = async (formData) => {
    try {
      let token = JSON.parse(localStorage.getItem("token"));
      const Authorization = `Bearer ${token.access}`;
      const result = await axios.patch(
        `${API}account/change-password/`,
        formData,
        { headers: { Authorization } }
      );
      localStorage.setItem(
        "token",
        JSON.stringify({ refresh: token.refresh, access: result.data.access })
      );
      let email = localStorage.getItem("email");
      setUser(email);
      // console.log(result.data);
      navigate("/login");
    } catch (error) {
      console.log([error.response.data.detail]);
      setError([error.response.data.detail]);
    }
  };
  async function checkAuth() {
    let token = JSON.parse(localStorage.getItem("token"));
    try {
      const Authorization = `Bearer ${token.access}`;

      let result = await axios.post(
        `${API}account/api/token/refresh/`,
        {
          refresh: token.refresh,
        },
        { headers: { Authorization } }
      );
      localStorage.setItem(
        "token",
        JSON.stringify({ refresh: token.refresh, access: result.data.access })
      );
      let email = localStorage.getItem("email");
      setUser(email);
    } catch (error) {
      logout();
    }
  }

  function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.removeItem("cart");
    setUser("");
    navigate("/login");
  }

  return (
    <authContext.Provider
      value={{
        register,
        login,
        checkAuth,
        logout,
        setError,
        forgot_password,
        change_password,

        error,
        user,
      }}
    >
      {children}
    </authContext.Provider>
  );
};

export default AuthContextProvider;

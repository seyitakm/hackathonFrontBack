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
      console.log(result);
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
      console.log(result.data);

      localStorage.setItem("token", JSON.stringify(result.data));
      localStorage.setItem("email", email);
      setUser(email);
      navigate("/");
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
      let username = localStorage.getItem("email");
      setUser(username);
    } catch (error) {
      logout();
    }
  }

  function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    setUser("");
    navigate("/login");
  }
  return (
    <authContext.Provider
      value={{ register, login, checkAuth, logout, setError, error, user }}
    >
      {children}
    </authContext.Provider>
  );
};

export default AuthContextProvider;

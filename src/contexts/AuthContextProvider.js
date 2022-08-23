import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const authContext = React.createContext();
export const useAuth = () => useContext(authContext);



const API = "https://makers-clinic.herokuapp.com/docs/";


const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [error, setError] = useState();

  const navigate = useNavigate();

  const register = async (formData) => {
    try {
      const res = await axios.post(`${API}/account/register/`, formData);
      console.log(res);
      navigate("/login");
    } catch (error) {
      console.log(Object.values(error.response.data).flat(2)[0]);
      console.log(error);
      setError(Object.values(error.response.data).flat(2)[0]);
    }
  };
  return (
    <authContext.Provider value={{ register, error, user }}>
      {children}
    </authContext.Provider>
  );
};

export default AuthContextProvider;

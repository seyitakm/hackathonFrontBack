import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const contactContext = React.createContext();
export const useContact = () => useContext(contactContext);

const API = "https://makers-clinic.herokuapp.com/feedback/";

const ContactUsContext = ({ children }) => {
  const navigate = useNavigate();
  const [error, setError] = useState();
  const [response, setResponse] = useState();

  const feedback = async (formData) => {
    try {
      const res = await axios.post(`${API}`, formData);
      navigate("/contacts");
      console.log(res);
      setResponse(res.data.success);
    } catch (error) {
      console.log([error.response.data.detail]);
      setError([error.response.data.detail]);
    }
  };
  return (
    <contactContext.Provider
      value={{ feedback, error, setError, response, setResponse }}
    >
      {children}
    </contactContext.Provider>
  );
};

export default ContactUsContext;

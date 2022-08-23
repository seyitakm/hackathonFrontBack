import React, { useContext } from "react";

export const authContext = React.createContext();
export const useAuth = () => useContext(authContext);

const AuthContextProvider = ({ children }) => {
  return <authContext.Provider value={{}}>{children}</authContext.Provider>;
};

export default AuthContextProvider;

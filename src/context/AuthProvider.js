import React, { createContext, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  // State to hold the authentication token
  const [auth, setAuth] = useState({});

  // Provide the authentication context to the children components
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;
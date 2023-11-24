// authContext.jsx
import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  let storedIsAuthenticated;
  try {
    storedIsAuthenticated = localStorage.getItem("isAuthenticated");
    storedIsAuthenticated = storedIsAuthenticated
      ? JSON.parse(storedIsAuthenticated)
      : false;
  } catch (error) {
    console.error("Error parsing isAuthenticated from localStorage:", error);
    storedIsAuthenticated = false;
  }

  const [isAuthenticated, setIsAuthenticated] = useState(storedIsAuthenticated);

  // Actualiza el almacenamiento local cuando cambia el estado de autenticación
  useEffect(() => {
    localStorage.setItem("isAuthenticated", JSON.stringify(isAuthenticated));
  }, [isAuthenticated]);

  const login = () => {
    // Lógica de autenticación (verifica el usuario y la contraseña)
    setIsAuthenticated(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth debe ser utilizado dentro de un AuthProvider");
  }
  return context;
};

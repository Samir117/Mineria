// AuthContext.js

import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Datos del usuario autenticado

  const login = (userData) => {
    // Lógica para autenticar al usuario
    setUser(userData);
  };

  const logout = () => {
    // Lógica para cerrar sesión
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

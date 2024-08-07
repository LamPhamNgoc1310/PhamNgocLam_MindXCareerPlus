import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(false);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const value = {
    currentUser,
    setCurrentUser,
    formData,
    setFormData,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

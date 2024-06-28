// not done yet

import { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const isLoggedIn = localStorage.getItem('isAuthenticated');
    const [isAuthenticated, setIsAuthenticated] = useState(!!isLoggedIn);

    // change the authentication boolean value when logged in
    useEffect(() => {
        const isLoggedIn = localStorage.getItem('isAuthenticated');
        setIsAuthenticated(!!isLoggedIn);
    }, [isLoggedIn]);

    // set the value in the localStorage?
    const value = {
        isAuthenticated,
        setIsAuthenticated,
    };

    return <>
        {children}
    </>
}

export { AuthContext, AuthProvider };
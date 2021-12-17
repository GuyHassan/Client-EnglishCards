import React, { useState, createContext } from 'react';

export const LoginContext = createContext({});

export const LoginProvider = ({ children }) => {
    const [userLoggedIn, setUserLoggedIn] = useState(() => {
        const isLoggedIn = localStorage.getItem('userID');
        if (isLoggedIn) return true;
        return false;
    })

    return <LoginContext.Provider value={{ userLoggedIn, setUserLoggedIn }}>
        {children}
    </LoginContext.Provider>

}
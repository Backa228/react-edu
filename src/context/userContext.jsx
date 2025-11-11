import { createContext, use, useState } from 'react';

export const UserContext = createContext();

export const useUser = () => use(UserContext)

export const UserProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState("");

    const logOut = () => {
        setIsLoggedIn(false);
        // setUsername(null);
    };
    const logIn = (inputName, inputPassword) => {
        if ((inputPassword === "123") && (inputName === "Andriy")) {
            setIsLoggedIn(true);
            setUsername(inputName);
        }
    };

    return (
        <UserContext.Provider value={ { isLoggedIn, username, logIn, logOut} }>
            {children}
        </UserContext.Provider>

    );
};
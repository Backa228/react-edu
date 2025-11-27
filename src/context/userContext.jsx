import { createContext, use, useState } from 'react';
import { useNavigate } from 'react-router-dom'

export const UserContext = createContext();

export const useUser = () => use(UserContext)

export const UserProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState("");

    const navigate = useNavigate()

    const logIn = (inputName, inputPassword) => {
        if ((inputPassword === "123") && (inputName === "Andriy")) {
            setIsLoggedIn(true);
            setUsername(inputName);

            // navigate('/dashboard', { replace: true })
        }
    };

    const logOut = () => {
        setIsLoggedIn(false);
        // setUsername(null);

        navigate('/', { replace: true })
    };

    return (
        <UserContext.Provider value={ { isLoggedIn, username, logIn, logOut} }>
            {children}
        </UserContext.Provider>

    );
};
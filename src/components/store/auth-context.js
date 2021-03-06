import { createContext, useEffect, useReducer, useState } from "react";
import { petsReducer } from "./petsReducer";

const AuthContext = createContext({
    isLoggedIn: false,
    onLogin: (email, password) => {},
    onLogout: () => {},
});

export const AuthContextProvider = (props) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const storedLoggedInfo = localStorage.getItem("isLOggedIn");
        if (+storedLoggedInfo === 1) {
            setIsLoggedIn(true);
        }
    }, []);

    const loginHandler = (email, password) => {
        localStorage.setItem("isLoggedIn", 1);
        setIsLoggedIn(true);
    };

    const logoutHandler = () => {
        localStorage.removeItem("isLoggedIn");
        setIsLoggedIn(false);
    };

    const [state, dispatch] = useReducer(petsReducer, []);

    return (
        <AuthContext.Provider
            value={{
                isLoggedIn,
                onLogin: loginHandler,
                onLogout: logoutHandler,
                state,
                dispatch
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
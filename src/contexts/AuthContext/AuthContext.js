import { createContext, useContext, useEffect, useState } from "react";
import { getCurrentUser } from "../../services/UserService";
import { getAccessToken, logout, setAccessToken } from "../../store/accessTokenStore";
import { verifyJWT } from "../../utils/jwtHelper";



const AuthContext = createContext();

export const useAuthContext = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState();
    const [isAuthenticationFetched, setIsAuthenticationFetched] = useState();
    const [toast, setToast] = useState();

    const login = (token, navigate) => {
        setAccessToken(token);
        getUser(navigate);
    }

    const getUser = (callback) => {
        getCurrentUser()
            .then(user => {
                setUser(user);
                setIsAuthenticationFetched(true);
                callback && callback();
            })
    }

    const createToast = (message, type) => {
        setToast({message: message, type: type})
        setTimeout(() => {
            setToast()
        }, 3600);
    }

    useEffect(() => {
        if (getAccessToken()) {
            if (!verifyJWT(getAccessToken())) {
                logout();
                createToast("Access denied, logging you out.", "fail");
            } else {
                getUser();
            }
        } else {
            setIsAuthenticationFetched(true);
        }
    }, [])


    const value = {
        user,
        isAuthenticationFetched,
        login,
        getUser,
        toast,
        createToast
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;
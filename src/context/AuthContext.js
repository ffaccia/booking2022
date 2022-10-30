import { createContext, useReducer, useEffect } from "react";

const INITIAL_STATE = {
    user: JSON.parse(localStorage.getItem("user") ?? null),
    loading: false,
    error: null
};

export const AuthContext = createContext(INITIAL_STATE);

/* dispatch is this func SearchReducer
   INITIAL_STATE is passed as his first arg 
   the argument of dispatch becomes action */
const AuthReducer = (state, action) => {
    console.log("state vale")
    console.log(state)
    switch (action.type) {
        case "LOGIN_START":
            return {
                user: null,
                loading: true,
                error: null
            }
        case "LOGIN_SUCCESS":
            return {
                user: action.payload,
                loading: false,
                error: null
            }
        case "LOGIN_ERROR":
            return {
                user: null,
                loading: false,
                error: action.payload
            }
        case "LOGOUT":
            console.log("logout dentro dispatch")
            return {
                user: null,
                loading: false,
                error: null
            }
        default:
            return {
                user: null,
                loading: false,
                error: null
            }
    }
};

export const AuthContextProvider = ({ children }) => {
    const [state, dispatchAuth] = useReducer(AuthReducer, INITIAL_STATE);
    console.log("children")
    console.log(state.user)

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(state.user))
    }, [state.user])


    return (
        <AuthContext.Provider
            value={{
                user: state.user,
                loading: state.loading,
                error: state.options,
                dispatchAuth,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

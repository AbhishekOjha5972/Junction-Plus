import React, { createContext, useReducer, useState } from 'react'
import Reducer from './Reducer';


const inicialState = { isAuth: false, token: false }

// TODO:- Creating the AuthContext 

export const AuthContext = createContext();

// TODO:- CREATING THE AUTHCONTEXT PROVIDER

const AuthContextProvider = ({ children }) => {

    // TODO: - CREATING THE MAIN USER AUTHENTICATION STATE
    const [state, dispatch] = useReducer(Reducer, inicialState)
    const [authState, setAuthState] = useState({ isAuth: false, token: false })


    // TODO: - USER LOGIN FUNCTION 

    const UserLogin = (token) => {
        dispatch({ type: "USER_LOGIN", payload: { isAuth: true, token: token } })
    }

    // TODO: - USER LOGOUT FUNCTION 

    const UserLogout = () => {
        dispatch({ type: "USER_LOGOUT", payload: { isAuth: false, token: false } })
    }

    return (
        <AuthContext.Provider value={{state,authState, UserLogin, UserLogout }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider
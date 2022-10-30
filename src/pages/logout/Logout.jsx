import React, { useContext, useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { AuthContext } from "../../context/AuthContext.js"

const Logout2 = () => {
    const navigate = useNavigate()
    useEffect(async() => {
        const res = await axios.get("/auth/logout")
        console.log(res.data)
        navigate("/")
        return
    }, [])
}

const doGet = async () => {
}

const Logout = () => {

    console.log("AuthContext")
    console.log(AuthContext._currentValue)
    const { dispatchAuth } = useContext(AuthContext);

    try {
        console.log("eseguo logout")
        console.log(dispatchAuth)
        dispatchAuth({ type: "LOGOUT", payload: {} })
        console.log("AuthContext._currentValue")
        console.log(AuthContext._currentValue)
        Logout2()

    } catch (err) {
        console.log("error login")
        console.log(err)
        dispatchAuth({ type: "LOGIN_ERROR", payload: err.response.data })
    } finally {
       
    }

    return (<div></div>)
}

export default Logout
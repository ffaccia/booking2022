
import axios from "axios";
import React from 'react'
import { useState, useContext } from 'react'
import { AuthContext } from "../../context/AuthContext.js"
import "./login.css"

const Login = () => {

    const [credentials, setCredentials] = useState({
        email: undefined,
        password: undefined
    })
    
    const { user, loading, error, dispatchAuth } = useContext(AuthContext)

    const handleChange = (e) => {
        setCredentials((prev) => {
            console.log(prev)
            return {
                ...prev, [e.target.id]: [e.target.value]
            }
        })
    }

    const handleClick = async (e) => {
        console.log("handleClick")
        console.log(credentials)
        e.preventDefault()
        dispatchAuth({ type: "LOGIN_START" })

        try {
            const res = await axios.post("/auth/login", credentials)
            dispatchAuth({ type: "LOGIN_SUCCESS", payload: res.data })
            console.log(res.data)
        } catch (err) {
            console.log("error login")
            console.log(err)
            dispatchAuth({ type: "LOGIN_ERROR", payload: err.response.data })
        }
    }

    return (
        <div className="login">
            <div className="loginContainer">
                <div className="loginFormWrapper">
                    <h2 className="captionLoginForm">Login Entry Point</h2>
                    <form action="" className="loginForm">

                        <input type="email" id="email"
                            className="loginInput" placeholder="email"
                            onChange={(e) => handleChange(e)}
                        />

                        <input type="password" id="password"
                            className="loginInput" placeholder="password"
                            onChange={(e) => handleChange(e)}
                        />
                        <button className="loginSubmit" onClick={(e) => handleClick(e)}>Login</button>
                        {error && <span className="error">{error}</span>}
                    </form>
                </div>
            </div>
        </div>
    )

}

export default Login
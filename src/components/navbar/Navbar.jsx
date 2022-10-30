import './navbar.css'
import React, { useContext } from 'react'
import { Link } from "react-router-dom"
import { AuthContext } from '../../context/AuthContext'

const Navbar = () => {

    const { user } = useContext(AuthContext)
    console.log("navbar")
    console.log(user)
    return (
        <div className="navbar">
            <div className="navContainer">
                <Link to="/hotels/ggg" style={{ color: "inherit", textdecoration: "capitalize" }}>
                    <span className="logo">BookingFace</span>
                </Link>
                <div className="navItems">
                    {(!user) ? (
                        <>
                            <button className="navButton">Register</button>
                            <Link to="/login"><button className="navButton">Login</button></Link>
                        </>
                    ) :
                        <Link to="/logout"><button className="navButton">Logout</button>
                        </Link>
                    }
                </div>
            </div>
        </div>
    )
}

export default Navbar
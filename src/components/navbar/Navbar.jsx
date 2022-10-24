import './navbar.css'
import React from 'react'
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navContainer">
                <Link to="/hotels/ggg" style={{color: "inherit", textdecoration: "capitalize"}}>
                <span className="logo">BookingFace</span>
                </Link> 
                <div className="navItems">
                    <button className="navButton">Register</button>
                    <button className="navButton">Login</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar
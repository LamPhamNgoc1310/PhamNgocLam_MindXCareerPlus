import React from 'react'
import "./Navbar.css"
export default function Navbar() {
    return (
        <div className="nav-bar">
            <div className="logo">
                <a href="" className="clickable">Catify</a>
            </div>

            <div className="navigation">
                <a href="./landing">Home</a>
                <a href="./about">About</a>
                <a href="./signup">Sign up</a>
                <a href="./login">Log in</a>
            </div>
        </div>
    )
}

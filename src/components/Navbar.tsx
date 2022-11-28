import React from "react";
import {NavLink} from 'react-router-dom'

export  const Navbar: React.FC = () => {
    return (
        <nav>
            <div className="nav-wrapper  indigo darken-4 px1">
            <a href="/" className="brand-logo">Type</a>
            <ul className="right hide-on-med-and-down">
                <li><a href="sass.html">Sass</a></li>
                <li><NavLink to="/">TODOS</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
            </ul>
            </div>
        </nav>
    )
}
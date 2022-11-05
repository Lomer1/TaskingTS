import React from "react";

export  const Navbar: React.FC = () => {
    return (
        <nav>
            <div className="nav-wrapper  indigo darken-4 px1">
            <a href="/" className="brand-logo">Type</a>
            <ul className="right hide-on-med-and-down">
                <li><a href="sass.html">Sass</a></li>
                <li><a href="/">Components</a></li>
                <li><a href="/">JavaScript</a></li>
            </ul>
            </div>
        </nav>
    )
}
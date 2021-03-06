import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <div className="flex-row px-1 nav">
            <h2>Christian Tielking</h2>
            <nav className="navbar">
                <Link to="/projects" className="nav-link text-light">Projects</Link>
                <Link to="/contact" className="nav-link text-light">Contact Me</Link>
                <Link to="/" className="nav-link text-light">About Me</Link>
            </nav>
        </div>
    )
}

export default Nav;
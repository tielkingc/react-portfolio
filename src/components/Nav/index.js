import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <div className="flex-row px-1 bg-primary">
            <h2>Christian Tielking</h2>
            <nav className="navbar">
                <Link to="/projects" className="nav-link text-light">Projects</Link>
            </nav>
        </div>
    )
}

export default Nav;
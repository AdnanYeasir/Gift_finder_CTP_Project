import React from 'react';
import '../styles/Navbar.css';

function Navbar() {
    return (
        <nav className='navbar'>
            <div className='navbar-brand'>Gift Finder</div>
            <div className='navbar-links'>
                <a href='/' className='navbar-item'>Home</a>
                <a href='/favorites' className='navbar-item'>Favorites</a>
                <a href='/logout' className='navbar-item'>Log out</a>
            </div>

        </nav>
    );
}
export default Navbar;
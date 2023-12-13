import React from 'react';
import '../styles/Navbar.css';
import GiftLogo from '../assets/gift.png';

function Navbar() {
    return (
        <nav className='navbar'>
            <div className='navbar-brand'>Gift Finder
                <img src={GiftLogo} alt='gift logo' className='logo'/>
            </div>
            <div className='navbar-links'>
                <a href='/' className='navbar-item'>Home</a>
                <a href='/favorites' className='navbar-item'>Favorites</a>
                <a href='/logout' className='navbar-item'>Log out</a>
            </div>

        </nav>
    );
}
export default Navbar;
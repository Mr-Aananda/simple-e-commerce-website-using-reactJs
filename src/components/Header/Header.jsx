import React from 'react';
import logo from '../../images/abazon.png';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="" />

            <nav>
                <a href="/home">Home</a>
                <a href="/review">Order Review</a>
                <a href="/manage">Manage Inventory</a>

                <span className='auth'>
                    <a href="">Login</a>
                    <a href="">Register</a>
                </span>
            </nav>
        </div>
    );
};

export default Header;

import React from 'react';
// import Link from 'react'
import { IconContext } from 'react-icons';
import { FaDribbble, FaBehance, FaCalendar, FaHeart, FaHome } from 'react-icons/fa';
// import { IconContext } from 'react-icons/lib';

const Navbar = () => {
    return (
        <header>
            <div className='logo_wrapper'>Lim<span>uru</span></div>
            <div className='menu_container'>
                <div className='link'>Home</div>
                <div className='link'>Home</div>
                <div className='link'>Home</div>
                <div className='link'>Home</div>
                <span className='donate_menu'>
                    <IconContext.Provider value={{ color:'white', size:'15px' }}>
                        <FaHeart />
                    </IconContext.Provider>
                    Donate 
                </span>
            </div>       
        </header>
    );
};

export default Navbar;
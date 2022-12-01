import React from 'react';
import { IconContext } from 'react-icons';
import { FaDribbble, FaBehance, FaCalendar, FaHeart, FaHome } from 'react-icons/fa';
// import { IconContext } from 'react-icons/lib';

const Navbar = () => {
    return (
        <header>
            <div className='logo_wrapper'>Lim<span>uru</span></div>
            <div className='menu_container'>
                <span>
                    <IconContext.Provider value={{color:'#000', size:'18px', className:'icons_container'}} >
                        <div className='icon'> <FaHome/> </div>
                        <div className='icon'> <FaDribbble/> </div>
                    </IconContext.Provider>
                </span>
                <span>
                    <IconContext.Provider value={{color:'#000', size:'18px'}}>
                        <div className='icon'><FaCalendar/></div>
                        hello@gmail.com
                        
                    </IconContext.Provider>
                </span>
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
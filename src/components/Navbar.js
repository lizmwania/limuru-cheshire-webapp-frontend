import React from 'react';
import { IconContext } from 'react-icons';
import { FaDribbble, FaBehance, FaCalendar } from 'react-icons/fa';
// import { IconContext } from 'react-icons/lib';

const Navbar = () => {
    return (
        <header>
            <div className='logo_wrapper'>Lim<span>uru</span></div>
            <div className='menu_container'>
                <span>
                    <IconContext.Provider value={{color:'#000', size:'18px', className:'icons_container'}} >
                        <div className='icon'> <FaBehance/> </div>
                        <div className='icon'> <FaDribbble/> </div>
                    </IconContext.Provider>
                </span>
                <span>
                    <IconContext.Provider value={{color:'#000', size:'18px', className:'icons_container'}}>
                        <div className='icon'><FaCalendar/></div>
                        hello@gmail.com
                        
                    </IconContext.Provider>
                </span>
                <span className='menu'>
                    <span></span>
                    <span></span>
                    <span></span>
                </span>
            </div>       
        </header>
    );
};

export default Navbar;
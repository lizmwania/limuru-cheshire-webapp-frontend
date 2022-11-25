import React from 'react';
import { IconContext } from 'react-icons';
import { FaCalendar, FaChevronCircleRight } from 'react-icons/fa';
const Card = () => {
    return (
        <div className='service_container'>
            <div className='title_wrapper'>
                <span className='service_title'>Services</span>
                <h2>View what we do</h2>
            </div>
            <div className='service_card'>
                <div className='card'>
                    <span className='service_icon' style={{backgroundColor:'#ddfbf9'}}>
                        <IconContext.Provider value={{color:'#14da8f', size:'22px'}}>
                            <FaCalendar />
                        </IconContext.Provider>
                    </span>
                    <h3>helping the needy <br/>join us</h3>
                    <a href='#'>
                        <span>learn more</span>
                        <IconContext.Provider value={{color:'#14da8f', size:'18px' }}>
                            <FaChevronCircleRight/>
                        </IconContext.Provider>
                    </a>
                </div>
                <div className='card'>
                    <span className='service_icon' style={{backgroundColor:'#ddfbf9'}}>
                        <IconContext.Provider value={{color:'#14da8f', size:'22px'}}>
                            <FaCalendar />
                        </IconContext.Provider>
                    </span>
                    <h3>helping the needy <br/>join us</h3>
                    <a href='#'>
                        <span>learn more</span>
                        <IconContext.Provider value={{color:'#14da8f', size:'18px' }}>
                            <FaChevronCircleRight/>
                        </IconContext.Provider>
                    </a>
                </div>
                <div className='card dark'>
                    <span className='service_icon' style={{backgroundColor:'#ddfbf9'}}>
                        <IconContext.Provider value={{color:'#14da8f', size:'22px'}}>
                            <FaCalendar />
                        </IconContext.Provider>
                    </span>
                    <h3>helping the needy <br/>join us</h3>
                    <a href='#'>
                        <span>learn more</span>
                        <IconContext.Provider value={{color:'#14da8f', size:'18px' }}>
                            <FaChevronCircleRight/>
                        </IconContext.Provider>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Card;
import React from 'react';
import { IconContext } from 'react-icons';
import { FaCalendar, FaChevronCircleRight } from 'react-icons/fa';
const Card = () => {
    return (
        <div className='service_container'>
            <div className='title_wrapper'>
                <h2>View what we do</h2>
                <p>
                Lorem ipsum dolor sit amet consectetur. Vitae dignissim montes semper 
                <br/>
                at posuere odio tellus ut. Eu pellentesque ac semper sed.
                </p>
            </div>
            <div className='service_card'>
                <div className='card'>
                    <span className='service_icon'>
                        <IconContext.Provider value={{color:'white', size:'25px'}}>
                            <FaCalendar />
                        </IconContext.Provider>
                    </span>
                    <h3>Education </h3>
                    <p>Lorem starts here</p>
                    
                </div>
                <div className='card' style={{backgroundColor:'#f54f0d'}}>
                    <span className='service_icon'>
                        <IconContext.Provider value={{color:'white', size:'25px'}}>
                            <FaCalendar />
                        </IconContext.Provider>
                    </span>
                    <h3>Education </h3>
                    <p>Lorem starts here</p>
                   
                </div>
                <div className='card'>
                    <span className='service_icon'>
                        <IconContext.Provider value={{color:'white', size:'22px'}}>
                            <FaCalendar />
                        </IconContext.Provider>
                    </span>
                    <h3>Education </h3>
                    <p>Lorem starts here</p>
                    
                </div>
            </div>
        </div>
    );
};

export default Card;
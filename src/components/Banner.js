import React from 'react';
import { FaStar, FaChevronCircleRight } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import img from '../images/image1.svg'

const Banner = () => {
    return (
        <div className='content_wrapper'>
            <div className='left_content_wrapper'>
                <h2>
                    <span>Lorem Lipsum is always trying 
                        <br/>
                        to design and build
                    </span>
                </h2>
                <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque 
                laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis
                </p>
                <div className='btn_group'>
                    <div className='btn btn_primary'>Join us
                        <IconContext.Provider value={{ color:'#14da8f', size:'25px' }}>
                            <FaChevronCircleRight />
                        </IconContext.Provider>
                    </div>
                    <div className='btn btn_secondary'>Here</div>
                </div>
                <div className='review_container'>
                    <p className='total_review'>64+</p>
                    <IconContext.Provider value={{color:'black', size:'18px'}}>
                        <span> <FaStar/> </span>
                        <span> <FaStar/> </span>
                        <span> <FaStar/> </span>
                        <span> <FaStar/> </span>
                    </IconContext.Provider>
                    <p> More than 50+ people help</p>
                </div>  
            </div>
            
            <div className='right_content_wrapper'>
                <img src={img} alt='bg' />
            </div>


        </div>
    );
};

export default Banner;
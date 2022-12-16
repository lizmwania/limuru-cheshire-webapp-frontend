import React from 'react';
import { FaStar, FaChevronCircleRight } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import img from '../images/img1.png';
import img2 from '../images/img2.png';

const Banner = () => {
    return (
        <>
        <div className='bg_image'>
            {/* <img src={img2} alt='bg' /> */}
        <div className='content_wrapper'>
            <div className='left_content_wrapper'>
                <h4> Lorem LIpsum topic</h4>
                <h2>
                    <span> We reach <span className='second'>marginalized</span></span>
                    <span> Vulnarable, <span className='second'>disabled</span></span>
                    
                </h2>
                <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque 
                laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis
                </p>
                <div className='btn_group'>
                    <div className='btn btn_primary'>
                        Learn More
                    </div>
                </div>  
            </div>
            
            <div className='right_content_wrapper'>
                
                <img src={img} alt='bg' />
            </div>

            
        </div>
        </div>
        {/* <div className='bg_decor'> 
                <img src={img2} alt='bg' />
        </div> */}
        </>
    );
};

export default Banner;
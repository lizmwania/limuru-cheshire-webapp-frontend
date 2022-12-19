import React from 'react';
import { FaHeart } from 'react-icons/fa';
import img from '../images/change.png';
const ChangeWorld = () => {
    return (
        <div className='changeworld_container'>
            <div className='left_content'>
                <h3>We can Change the World</h3>
                <h1>Our Mission</h1>
                <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque 
                laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis
                </p>
                <div className='btn_group'>
                    <div className='btn btn_primary'>
                        <FaHeart/>
                        Donate
                    </div>
                </div>
            </div>
            <div className='right_content'>
                <img src={img}  alt='changeworld' />
            </div>
            
        </div>
    );
}

export default ChangeWorld;

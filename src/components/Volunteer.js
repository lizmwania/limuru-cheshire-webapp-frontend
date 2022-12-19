import React from 'react';
import img from '../images/volunteer.png';
import decor from '../images/decore1.png';
const Volunteer = () => {
    return (
        <>
        <div className='volunteer_container'>
            <div className='left_content'>
                <h3>Become a Volunteer</h3>
                <h1>We Can Change The 
                    <br/>
                    World
                </h1>
                <img src={img} alt='volunteer' />
            </div>
            <div className='right_content'>
                <p>
                Lorem ipsum dolor sit amet consectetur. 
                Quis pulvinar sodales quis et. Orci sed at 
                sed aliquam dui quis in. Diam non vitae morbi 
                massa rhoncus cursus semper vel. Neque dignissim 
                sed nunc et lectus consectetur morbi.
                </p>
                <div className='review_container'>
                    <div className='item_review'>
                        <p className='review_item'> Projects </p>
                            <span>50+</span>
                        <p>
                            Lorem ipsum dolor sit amet consectetur. 
                            Quis pulvinar sodales quis et. Orci sed 
                            at 
                        </p>
                    </div>
                    <div className='item_review'>
                        <p className='review_item'> Projects </p>
                            <span>50+</span>
                        <p>
                            Lorem ipsum dolor sit amet consectetur. 
                            Quis pulvinar sodales quis et. Orci sed 
                            at 
                        </p>
                    </div>
                </div>  
                <div className='btn_group'>
                    <div className='btn btn_primary'>
                        Learn More
                    </div>
                </div>
            </div>
            
        </div>
        <div className='decor_content'>
            <img src={decor} alt='decore' />
        </div>    
        </>
    );
}

export default Volunteer;

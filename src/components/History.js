import React from 'react';
import img from '../images/history.png';
const History = () => {
    return (
        <div className='history_container'>
            <div className='left_content'>
                <img src={img} alt='history' />
            </div>
            <div className='right_content'>
                <h3>Our Story</h3>
                <div className='btn_group'>
                    <div className='btn btn_primary'>
                        Who we are
                    </div>
                    <div className='btn btn_primary'>
                        Our Vision
                    </div>
                    <div className='btn btn_primary'>
                        Our History
                    </div>
                </div>
                <p>
                Lorem ipsum dolor sit amet consectetur. Quis pulvinar sodales quis et. Orci sed at sed aliquam dui quis in. Diam non vitae morbi massa rhoncus cursus semper vel. Neque dignissim sed nunc et lectus consectetur morbi.
                Lorem ipsum dolor sit amet consectetur. Quis pulvinar sodales quis et. Orci sed at sed aliquam dui quis in. Diam non vitae morbi massa rhoncus cursus semper vel. Neque dignissim sed nunc et lectus consectetur morbi.
                Lorem ipsum dolor sit amet consectetur. Quis pulvinar sodales quis et. Orci sed at sed aliquam dui quis in. Diam non vitae morbi massa rhoncus cursus semper vel. Neque dignissim sed nunc et lectus consectetur morbi.
                </p>
                
            </div>
            
        </div>
    );
}

export default History;

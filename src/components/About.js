import React from 'react';
import img from '../images/about.png';
const About = () => {
    return (
        <div className='about_container'>
            <div className='left_content'>
                <h3>About Us</h3>
                <h1>Our Mission</h1>
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
            <div className='right_content'>
                <img src={img}  alt='aboutus' />
            </div>
            
        </div>
    );
}

export default About;

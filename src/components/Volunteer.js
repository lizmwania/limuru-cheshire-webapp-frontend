import React from 'react';
import { motion } from 'framer-motion';
import img from '../images/volunteer.png';
import decor from '../images/decore1.png';

let easing = [0.6, -0.05, 0.01, 0.99];

const container = {
    show: {
        transition:{
            staggerChildren:0.5
        }
    }
};

const item = {
    hidden: {opacity:0,y:200},
    show: {
        opacity:1,
        y:0,
        transition:{
            ease:'easeOut',
            duration:1
        }
    }
}

const Volunteer = () => {
    return (
        <motion.div>
        <motion.div className='volunteer_container' variants={container} initial="hidden" exit="exit" whileInView="show" viewport={{once:false}}>
            <motion.div className='left_content' variants={item} >
                <h3>Become a Volunteer</h3>
                <h1>We Can Change The 
                    <br/>
                    World
                </h1>
                <img src={img} alt='volunteer' />
            </motion.div>
            <motion.div className='right_content' variants={item} >
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
            </motion.div>
            
        </motion.div>
        <div className='decor_content'>
            <img src={decor} alt='decore' />
        </div>    
        </motion.div>
    );
}

export default Volunteer;

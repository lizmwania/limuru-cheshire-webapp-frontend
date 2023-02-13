import React from 'react';
import { motion } from 'framer-motion';
import img from '../images/history.png';

// let easing = [0.6, -0.05, 0.01, 0.99];

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

const History = () => {
    return (
        <motion.div className='history_container' variants={container} initial="hidden" exit="exit" whileInView="show" viewport={{once:false}}>
            <motion.div className='left_content' variants={item} >
                <img src={img} alt='history' />
            </motion.div>
            <motion.div className='right_content' variants={item}>
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
                
            </motion.div>
            
        </motion.div>
    );
}

export default History;

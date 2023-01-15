import React from 'react';
import { motion } from 'framer-motion';
import { IconContext } from 'react-icons';
import { FaCalendar} from 'react-icons/fa';

let easing = [0.6, -0.05, 0.01, 0.99];

const container = {
    show: {
        transition:{
            staggerChildren:0.2
        }
    }
};

const item = {
    hidden: {opacity:0,y:20},
    show: {
        opacity:1,
        y:0,
        transition:{
            ease:'easeOut',
            duration:.2
        }
    }
}

const title = {
    hidden: {
        y:60,
        opacity:0
    },
    show:{
        y:0,
        opacity:1,
        transition:{
            delay:.2,
            duration:0.6,
            ease: easing
        }
    }
};

const hoverEffect = {
    whileHover:{
        scale:.8, rotate:630, borderRadius:"100%"
    },
    whileTap:{
        scale:.8, rotate:630, borderRadius:"100%"
    },
}

const Card = () => {
    return (
        <motion.div className='service_container'>
            <div className='title_wrapper'>
                
                <motion.h2
                initial={{y:200, opacity:0}}
                animate={{y:0, opacity:1}}
                exit={{opacity:0}}
                transition={{duration:.5, delay:1}}
                >
                    View what we do
                </motion.h2>
                <motion.p variants={title}>
                Lorem ipsum dolor sit amet consectetur. Vitae dignissim montes semper 
                <br/>
                at posuere odio tellus ut. Eu pellentesque ac semper sed.
                </motion.p>
            </div>
            <motion.div className='service_card' variants={container} initial="hidden" exit="exit" whileInView="show" viewport={{once:false}} >
                <motion.div className='card' variants={item}>
                    <motion.span className='service_icon' variants={hoverEffect} whileHover="whileHover" whileTap="whileTap" >
                        <IconContext.Provider value={{color:'white', size:'25px'}}>
                            <FaCalendar />
                        </IconContext.Provider>
                    </motion.span>
                    <h3>Education </h3>
                    <p>Lorem starts here</p>
                    
                </motion.div>
                <motion.div className='card' style={{backgroundColor:'#f54f0d'}} variants={item}>
                    <motion.span className='service_icon' variants={hoverEffect} whileHover="whileHover" whileTap="whileTap" >
                        <IconContext.Provider value={{color:'white', size:'25px'}}>
                            <FaCalendar />
                        </IconContext.Provider>
                    </motion.span>
                    <h3>Education </h3>
                    <p>Lorem starts here</p>
                   
                </motion.div>
                <motion.div className='card' variants={item}>
                    <motion.span className='service_icon' variants={hoverEffect} whileHover="whileHover" whileTap="whileTap" >
                        <IconContext.Provider value={{color:'white', size:'22px'}}>
                            <FaCalendar />
                        </IconContext.Provider>
                    </motion.span>
                    <h3>Education </h3>
                    <p>Lorem starts here</p>
                    
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default Card;
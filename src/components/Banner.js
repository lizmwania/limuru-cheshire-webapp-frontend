import React from 'react';
import { motion } from 'framer-motion';
import img from '../images/img1.png';

let easing = [0.6,-0.05, 0.01, 0.99];

const transition = {duration:1.4, ease:[0.6, 0.01,-0.05, 0.9]};


const stagger = {
  animate: {
    transition:{
      delayChildren:0.4,
      staggerChildren:0.2,
      staggerDirection:1,
    }
  }
};

const fadeInUp = {
  initial:{
    y:-60,
    opacity:0,
    transition:{duration:1, ease:easing}
  },
  animate:{
    y:0,
    opacity:1,
    transition:{
      duration:0.6,
      delay:0.5,
      ease:easing
    }
  }
};

const header = {
  initial: {
    y:-60,
    opacity: 0,
    transition:{duration:0.05, ease:easing}
  },
  animate:{
    y:0,
    opacity:1,
    animation:{
      duration:0.6,
      ease:easing
    }
  }
};

const firstName = {
  initial: {
    y:-20,
  },
  animate:{
    y:0,
    transition:{
      delayChildren:0.4,
      staggerChildren:0.04,
      staggerDirection:1
    }
  }
}

const lastName = {
  initial: {
    y:-20,
  },
  animate:{
    y:0,
    transition:{
      delayChildren:0.4,
      staggerChildren:0.04,
      staggerDirection:-1
    }
  }
}

const letter ={
  initial:{
    y:400,
  },
  animate:{
    y:0,
    transition:{duration:0.8, ...transition}
  }
}

const btnGroup ={
  initial:{
    y:-60,
    opacity:0,
    transition:{duration:0.6, ease:easing}
  },
  animate:{
    y:0,
    opacity:1,
    animation:{duration:0.6, ease:easing}
  }
}

const Banner = () => {
    return (
        <motion.div 
        initial='initial' animate='animate'>
            <motion.div className='content_wrapper' 
            initial={{opacity:0, scale:0}} animate={{opacity:1, scale:1}} 
            transition={{duration:0.3, ease:easing}}
            >
                <div className='left_content_wrapper'>
                    <motion.h4> 
                        <motion.span variants={firstName} initial="initial" animate="animate" classname='first'>
                            <motion.span variants={letter}>L</motion.span>
                            <motion.span variants={letter}>o</motion.span>
                            <motion.span variants={letter}>r</motion.span>
                            <motion.span variants={letter}>e</motion.span>
                            <motion.span variants={letter}>m</motion.span>
                            <motion.span variants={letter} className='second'>L</motion.span>
                            <motion.span variants={letter}>i</motion.span>
                            <motion.span variants={letter}>p</motion.span>
                            <motion.span variants={letter}>s</motion.span>
                            <motion.span variants={letter}>u</motion.span>
                            <motion.span variants={letter}>m</motion.span>
                            
                        </motion.span>
                        {/* <span>
                        Lorem ipsum dolor 
                        </span> */}
                    </motion.h4>
                    <motion.h2>

                        <motion.span variants={firstName} initial="initial" animate="animate" classname='second'>
                            <motion.span variants={letter} className='first'>We</motion.span>
                            <motion.span variants={letter} className='second'>Reach</motion.span>
                            <motion.span variants={letter} className='second'>Marginalized</motion.span>
                            <motion.span variants={letter} className='first'>Vulnarable &</motion.span>
                            {/* <motion.span variants={letter} className='second'>and</motion.span> */}
                            <motion.span variants={letter} className='second'>Disabled</motion.span>
                        </motion.span>
                        {/* <motion.span> We reach <span className='second' variants={letter}>marginalized</span></motion.span>
                        <span> Vulnarable, <span className='second'>disabled</span></span> */}
                        
                    </motion.h2>

                    <motion.p variants={fadeInUp} >
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque 
                    laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis
                    </motion.p>
                    <motion.div className='btn_group' variants={stagger} >
                        <motion.div className='btn btn_primary' variants={btnGroup} whileHover={{scale:1.05}} whileTap={{scale:0.95}} >  
                            Learn More
                        </motion.div>
                    </motion.div>  
                </div>
                
                <motion.div className='right_content_wrapper'>
                    <motion.img src={img} alt='bg' initial={{x:200, opacity:0}} animate={{x:0, opacity:1}} transition={{duration:.5, delay:0.8}} />
                </motion.div>

                
            </motion.div>
        </motion.div>
    );
};

export default Banner;
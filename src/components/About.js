import React from 'react';
import { motion } from 'framer-motion';
import img from '../images/about.png';

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

// const title = {
//     hidden: {
//         y:60,
//         opacity:0
//     },
//     show:{
//         y:0,
//         opacity:1,
//         transition:{
//             delay:.2,
//             duration:0.6,
//             ease: easing
//         }
//     }
// };

const stagger = {
    animate: {
      transition:{
        delayChildren:0.4,
        staggerChildren:0.2,
        staggerDirection:1,
      }
    }
  };

const About = () => {
    return (
      <motion.div
        className="about_container"
        variants={container}
        initial="hidden"
        exit="exit"
        whileInView="show"
        viewport={{ once: false }}
      >
        <motion.div className="left_content" variants={item}>
          <motion.h3 variants={stagger}>About Us</motion.h3>
          <h1>Our Mission</h1>
          <p>
            Our mission is to foster holistic empowerment for girls living with
            disabilities, with the aim of integrating them into society. We
            believe that by providing access to education, training, and
            resources, we can equip these girls with the skills and confidence
            they need to lead fulfilling lives. We are committed to promoting
            economic empowerment through our programs, enabling girls to become
            financially independent and to contribute to their communities. Our
            goal is to create a more inclusive and accepting society that values
            diversity and celebrates the unique strengths and abilities of every
            girl living with disabilities.
          </p>
          {/* <div className="btn_group">
            <div className="btn btn_primary">Learn More</div>
          </div> */}
        </motion.div>
        <motion.div className="right_content" variants={item}>
          <img src={img} alt="aboutus" />
        </motion.div>
      </motion.div>
    );
}

export default About;

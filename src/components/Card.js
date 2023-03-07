import React from 'react';
import { motion } from 'framer-motion';
import { IconContext } from 'react-icons';
import { FaCalendar, FaBookReader, FaPeopleArrows} from "react-icons/fa";

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
      <motion.div className="service_container">
        <div className="title_wrapper">
          <h2 style={{ color: "rgb(0, 0, 0, 0.8)", fontSize: "2rem" }}>
            What We Do...
          </h2>
          <motion.p variants={title}>
            We admit girls between 12 – 25 years and offer vocational training
            currently to 56 girls with various forms of disabilities including;
            mental retardation, hearing impairment, speech impairment, physical
            disabilities, dyslexia, autism, attention deficient, hyperactive
            disorders, epilepsy and cerebral palsy. Majority of the girls
            manifest multiple disorders which is a major challenge for them to
            fit in the ordinary education system.
          </motion.p>
        </div>
        <motion.div
          className="service_card"
          variants={container}
          initial="hidden"
          exit="exit"
          whileInView="show"
          viewport={{ once: false }}
        >
          <motion.div className="card" variants={item}>
            <motion.span
              className="service_icon"
              variants={hoverEffect}
              whileHover="whileHover"
              whileTap="whileTap"
            >
              <IconContext.Provider value={{ color: "white", size: "25px" }}>
                <FaCalendar />
              </IconContext.Provider>
            </motion.span>
            <h3>Advocacy </h3>
            <p>At Limuru Cheshire, we are dedicated to advocating for the rights and needs of people living with disabilities.</p>
          </motion.div>
          <motion.div
            className="card"
            style={{ backgroundColor: "#f54f0d" }}
            variants={item}
          >
            <motion.span
              className="service_icon"
              variants={hoverEffect}
              whileHover="whileHover"
              whileTap="whileTap"
            >
              <IconContext.Provider value={{ color: "white", size: "25px" }}>
                <FaBookReader />
              </IconContext.Provider>
            </motion.span>
            <h3>Education </h3>
            <p>We believe that education is a fundamental human right and that it has the power to transform lives and communities</p>
          </motion.div>
          <motion.div className="card" variants={item}>
            <motion.span
              className="service_icon"
              variants={hoverEffect}
              whileHover="whileHover"
              whileTap="whileTap"
            >
              <IconContext.Provider value={{ color: "white", size: "22px" }}>
                <FaPeopleArrows />
              </IconContext.Provider>
            </motion.span>
            <h3>Respect </h3>
            <p>Respect for all individuals, regardless of their race, ethnicity, gender, disabilities, or any other characteristic</p>
          </motion.div>
        </motion.div>
      </motion.div>
    );
};

export default Card;
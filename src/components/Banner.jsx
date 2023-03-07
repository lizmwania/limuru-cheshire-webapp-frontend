import React from "react";
import { motion } from "framer-motion";
import img from "../images/img1.png";

let easing = [0.6, -0.05, 0.01, 0.99];

// const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

const stagger = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
};

// const fadeInUp = {
//   initial: {
//     y: -60,
//     opacity: 0,
//     transition: { duration: 1, ease: easing },
//   },
//   animate: {
//     y: 0,
//     opacity: 1,
//     transition: {
//       duration: 0.6,
//       delay: 0.5,
//       ease: easing,
//     },
//   },
// };

// const header = {
//   initial: {
//     y:-60,
//     opacity: 0,
//     transition:{duration:0.05, ease:easing}
//   },
//   animate:{
//     y:0,
//     opacity:1,
//     animation:{
//       duration:0.6,
//       ease:easing
//     }
//   }
// };

// const firstName = {
//   initial: {
//     y: -20,
//   },
//   animate: {
//     y: 0,
//     transition: {
//       delayChildren: 0.4,
//       staggerChildren: 0.04,
//       staggerDirection: 1,
//     },
//   },
// };

// const lastName = {
//   initial: {
//     y:-20,
//   },
//   animate:{
//     y:0,
//     transition:{
//       delayChildren:0.4,
//       staggerChildren:0.04,
//       staggerDirection:-1
//     }
//   }
// }

// const letter = {
//   initial: {
//     y: 400,
//   },
//   animate: {
//     y: 0,
//     transition: { duration: 0.8, ...transition },
//   },
// };

const btnGroup = {
  initial: {
    y: -60,
    opacity: 0,
    transition: { duration: 0.6, ease: easing },
  },
  animate: {
    y: 0,
    opacity: 1,
    animation: { duration: 0.6, ease: easing },
  },
};

const Banner = () => {
  return (
    <motion.div initial="initial" animate="animate">
      <div className="banner-container">
        <motion.div
          className="content_wrapper"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, ease: easing }}
        >
          <div className="left_content_wrapper">
            <h2 style={{ fontSize: "1.2rem", color: "#ee3705" }}>
              Limuru Cheshire Home
            </h2>
            <h4 style={{ color: "rgb(0, 0, 0, 0.8)" }}>
              A community-based empowerment facility for girls living with
              disabilities.
            </h4>
            <h4 style={{ color: "rgb(0, 0, 0, 0.8)", fontWeight:"300" }}>
              Founded in 1972 by Leonard Cheshire, the home envisions art
              all-inclusive society where persons living with disabilities are
              empowered to develop to their full potentials to lead dignified
              lives.
            </h4>

            <motion.div className="btn_group" variants={stagger}>
              <motion.a
              href="/donate"
                className="btn btn_primary"
                variants={btnGroup}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Donate 
              </motion.a>
            </motion.div>
          </div>

          <motion.div className="right_content_wrapper">
            <motion.img
              src={img}
              alt="bg"
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Banner;

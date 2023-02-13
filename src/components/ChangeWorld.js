import React from "react";
import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";
import img from "../images/change.png";

let easing = [0.6, -0.05, 0.01, 0.99];

const container = {
  show: {
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 200 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeOut",
      duration: 1,
    },
  },
};

const ChangeWorld = () => {
  return (
    <motion.div
      className="changeworld_container"
      variants={container}
      initial="hidden"
      exit="exit"
      whileInView="show"
      viewport={{ once: false }}
    >
      <div className="changeworld_content">
        <motion.div className="left_content" variants={item}>
          <h3>We can Change the World</h3>
          <h1>Our Mission</h1>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis
          </p>
          <div className="btn_group">
            <div className="btn btn_primary">
              <FaHeart
                style={{
                  marginRight: ".5rem",
                }}
              />
              Donate
            </div>
          </div>
        </motion.div>
        <motion.div className="right_content" variants={item}>
          <img src={img} alt="changeworld" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ChangeWorld;

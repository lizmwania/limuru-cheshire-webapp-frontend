import React from "react";
import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";
import img from "../images/change.png";
import world from "../images/world.png"


// let easing = [0.6, -0.05, 0.01, 0.99];

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
          <img
            src={world}
            style={{
              width: "50%",
              height: "auto",
            }}
            alt="changeworld"
          />
          <h1>Let's Join Hands Together</h1>
          <p>
            As a community-based empowerment facility for girls living with
            disabilities, we believe that every girl deserves the opportunity to
            reach her full potential. That's why we're committed to creating a
            supportive and inclusive environment where girls can learn, grow,
            and thrive. By joining hands together, we can empower these girls to
            overcome the challenges they face and achieve their dreams. With our
            collaborative efforts, we can build a community that is truly
            inclusive and empowering for all.
          </p>
          <div className="btn_group">
            <a className="btn btn_primary" href="/donate">

              <FaHeart
                style={{
                  marginRight: ".5rem",
                }}
              />
              Donate
            </a>
          </div>
        </motion.div>
        <motion.div className="right_content" variants={item}>
          <img src={img} alt="changeworld" />
        </motion.div>
      </div>
      <p
        style={{
          padding: "1.5rem 0",
          textAlign: "center",
          color: "#ee3705",
          fontWeight: "300",
        }}
      >
        <i>
          And we say thank you for your generous contribution, you have touched
          a soul and the community at large. <br></br> Thank you!
        </i>
      </p>
    </motion.div>
  );
};

export default ChangeWorld;

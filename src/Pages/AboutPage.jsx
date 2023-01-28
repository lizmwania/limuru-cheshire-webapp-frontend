import React from "react";
import "../styles/AboutPage.scss";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import AboutBanner from "../images/aboutus/img3.png";
import AboutFoundation from "../images/aboutus/img1.png";
import AboutMission from "../images/aboutus/img2.png";
import AboutDorm from "../images/aboutus/dorm.png";
import AboutLine from "../images/Line.png";
import AboutClass from "../images/aboutus/classes.png";
import AboutLearners from "../images/aboutus/learners.png";
import AboutRectangle from "../images/aboutus/Rectangle.png";
import AboutProjectOne from "../images/aboutus/project1.png";

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

const title = {
  hidden: {
    y: 60,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.2,
      duration: 0.6,
      ease: easing,
    },
  },
};

const stagger = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <div className="AboutBannerContainer">
        <img src={AboutBanner} className="AboutBanner" alt="AboutBanner" />
        <div class="AboutCenteredText">
          <h1>About Us</h1>
          <p id="about-para">
            View our facilities and some of our income generating activities
          </p>
        </div>
      </div>
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
          <h1>Our Foundation</h1>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis
          </p>
        </motion.div>
        <motion.div className="right_content" variants={item}>
          <img src={AboutFoundation} alt="aboutus" />
        </motion.div>
      </motion.div>

      <motion.div
        className="history_container"
        variants={container}
        initial="hidden"
        exit="exit"
        whileInView="show"
        viewport={{ once: false }}
      >
        <motion.div className="left_content" variants={item}>
          <img src={AboutMission} alt="history" />
        </motion.div>
        <motion.div className="right_content" variants={item}>
          <motion.h3 variants={stagger}>About Us</motion.h3>
          <h1>Our Mission</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Quis pulvinar sodales quis
            et. Orci sed at sed aliquam dui quis in. Diam non vitae morbi massa
            rhoncus cursus semper vel. Neque dignissim sed nunc et lectus
            consectetur morbi. Lorem ipsum dolor sit amet consectetur. Quis
            pulvinar sodales quis et. Orci sed at sed aliquam dui quis in. Diam
            non vitae morbi massa rhoncus cursus semper vel. Neque dignissim sed
            nunc et lectus consectetur morbi. Lorem ipsum dolor sit amet
            consectetur. Quis pulvinar sodales quis et. Orci sed at sed aliquam
            dui quis in. Diam non vitae morbi massa rhoncus cursus semper vel.
            Neque dignissim sed nunc et lectus consectetur morbi.
          </p>
        </motion.div>
      </motion.div>
      <p class="about-pro">
        We have a number of projects currently underway that not only help to
        generate income for us, but also equips the girls with relevant skills.
      </p>

      {/* Dormitories Content */}
      <motion.div
        className="dorm_container"
        variants={container}
        initial="hidden"
        exit="exit"
        whileInView="show"
        viewport={{ once: false }}
      >
        <motion.div className="left_content" variants={item}>
          <img src={AboutLine} alt="aboutus" />
          <h1>Our Dormitories</h1>
          <p>
            We have a number of projects currently underway that not only help
            to generate income for us.
          </p>
        </motion.div>
        <motion.div className="right_content" variants={item}>
          <img src={AboutDorm} alt="aboutus" />
        </motion.div>
      </motion.div>

      {/* Classrooms content */}
      <motion.div
        className="classes_container"
        variants={container}
        initial="hidden"
        exit="exit"
        whileInView="show"
        viewport={{ once: false }}
      >
        <motion.div className="right_content" variants={item}>
          <img src={AboutClass} alt="classes" />
        </motion.div>
        <motion.div className="left_content" variants={item}>
          <img src={AboutLine} alt="aboutus" />
          <h1>Our Classrooms</h1>
          <p>
            We have a number of projects currently underway that not only help
            to generate income for us.
          </p>
        </motion.div>
      </motion.div>

      {/* Classes with Learners Content */}
      <motion.div
        className="learners_container"
        variants={container}
        initial="hidden"
        exit="exit"
        whileInView="show"
        viewport={{ once: false }}
      >
        <motion.div className="left_content" variants={item}>
          <img src={AboutLine} alt="aboutus" />
          <h1>Classroom with learners</h1>
          <p>
            We have a number of projects currently underway that not only help
            to generate income for us.
          </p>
        </motion.div>
        <motion.div className="right_content" variants={item}>
          <img src={AboutLearners} alt="aboutus" />
        </motion.div>
      </motion.div>

      <h3 class="income_pro">Income generating projects</h3>
      <img class="rect1" src={AboutRectangle} alt="aboutus" />
      <img class="img_project1" src={AboutProjectOne} alt="aboutus" />
    </>
  );
}

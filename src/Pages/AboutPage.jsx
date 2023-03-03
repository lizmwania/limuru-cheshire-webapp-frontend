import React from "react";
import "../styles/AboutPage.scss";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import AboutBanner from "../images/aboutus/img3.png";
// import AboutFoundation from "../images/aboutus/img1.png";
// import AboutMission from "../images/aboutus/img2.png";
import AboutDorm from "../images/aboutus/dorm.png";
// import AboutLine from "../images/Line.png";
// import AboutClass from "../images/aboutus/classes.png";
// import AboutLearners from "../images/aboutus/learners.png";
// import AboutRectangle from "../images/aboutus/Rectangle.png";
import Offices from "../images/Offices.jpg";
import classes from "../images/aboutus/classes.png";
import IncomeGenerating from "../components/IncomeGenerating";
import {  BsCaretRightFill } from "react-icons/bs";
// import { IoIosCheckmarkCircleOutline } from "react-icons/io";

let easing = [0.6, -0.05, 0.01, 0.99];

// const container = {
//   show: {
//     transition: {
//       staggerChildren: 0.5,
//     },
//   },
// };

// const item = {
//   hidden: { opacity: 0, y: 200 },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       ease: "easeOut",
//       duration: 1,
//     },
//   },
// };

// const title = {
//   hidden: {
//     y: 60,
//     opacity: 0,
//   },
//   show: {
//     y: 0,
//     opacity: 1,
//     transition: {
//       delay: 0.2,
//       duration: 0.6,
//       ease: easing,
//     },
//   },
// };

// const stagger = {
//   animate: {
//     transition: {
//       delayChildren: 0.4,
//       staggerChildren: 0.2,
//       staggerDirection: 1,
//     },
//   },
// };

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <div className="AboutBannerContainer">
        <img src={AboutBanner} className="AboutBanner" alt="AboutBanner" />
        <div class="AboutCenteredText">
          <h1 className="about_title">About Us</h1>
          <p id="about-para">
            View our facilities and some of our income generating activities
          </p>
        </div>
      </div>
      {/* Facilities */}
      <div className="title">
        <h2>Who we are</h2>
      </div>
      <div className="about_cheshire">
        <p>
          <b>Limuru Cheshire Home</b> is a community-based empowerment facility
          for girls living with disabilities.
        </p>
        <p>
          Founded in <strong> 1972 </strong> by{" "}
          <strong> Leonard Cheshire</strong>, the home envisions art
          all-inclusive society where persons living with disabilities are
          empowered to develop to their full potentials to lead dignified lives.
        </p>
        <p>
          Our four key thematic areas are;
          <ul className="thematic_list">
            <li> Rehabilitation and care for girls living with disability</li>
            <li>Inclusive Education</li>
            <li>
              Livelihoods and Economic Empowerment through vocational training
            </li>
            <li>
              Lobbying and advocacy for disability-friendly laws and policie
            </li>
          </ul>
          <div className="paras">
            <p>
              We admit girls between 12 – 25 years and offer vocational training
              currently to 56 girls with various forms of disabilities
              including; mental retardation, hearing impairment, speech
              impairment, physical disabilities, dyslexia, autism, attention
              deficient, hyperactive disorders, epilepsy and cerebral palsy.
              Majority of the girls manifest multiple disorders which is a major
              challenge for them to fit in the ordinary education system.
            </p>
            <p>
              Limuru Cheshire Home has remained committed to empowering girls
              living with disabilities. However, the Centre has suffered from
              gradual erosion of donor support at a time when this is needed
              most resulting to below par service delivery and sending the girls
              back home due to lack of financial resources threatens their lives
              more and exposes them to unthinkable forms of abuses.
            </p>
            <p>
              Access to vocational training empowers them to gain
              self-confidence and build their esteem, strengthen their voice to
              speak for themselves and gain economic independence to contribute
              to their own welfare and that of their families.
            </p>
          </div>
        </p>
      </div>
      <div className="title">
        <h2>Our Facilities</h2>
      </div>
      <div className="AboutContainer">
        {/* first */}
        <motion.div initial="initial" animate="animate">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, ease: easing }}
          >
            <div class="facilities-wrapper">
              <div class="facilities-content">
                <h3 class="facilities-content-title">
                  <strong>Classrooms</strong>
                </h3>

                <p class="facilities-content-text">
                  We have modern classrooms that are equiped with state of the
                  art .....
                </p>

                <ul class="facilities-list">
                  <li class="facilities-list-item">
                    <p>
                      <BsCaretRightFill style={{ color: "#f54f0d" }} />
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                    </p>
                  </li>
                  <li class="facilities-list-item">
                    <p>
                      <BsCaretRightFill style={{ color: "#f54f0d" }} />
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                    </p>
                  </li>
                  <li class="facilities-list-item">
                    <p>
                      <BsCaretRightFill style={{ color: "#f54f0d" }} />
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                    </p>
                  </li>
                </ul>
              </div>
              <figure class="facilities-banner">
                <img src={classes} width="20%" alt="svg" />
              </figure>
            </div>
          </motion.div>
        </motion.div>
        <div class="facilities-wrapper">
          <figure class="facilities-banner">
            <img src={AboutDorm} alt="svg" />
          </figure>

          <div class="facilities-content">
            <h3 class="facilities-content-title">
              <strong>Dormitories </strong>
            </h3>

            <p class="facilities-content-text">
              We have modern dormitories that are equiped with state of the art
              .....
            </p>

            <ul class="facilities-list">
              <li class="facilities-list-item">
                <p>
                  <BsCaretRightFill style={{ color: "#f54f0d" }} />
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                </p>
              </li>
              <li class="facilities-list-item">
                <p>
                  <BsCaretRightFill style={{ color: "#f54f0d" }} />
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                </p>
              </li>
              <li class="facilities-list-item">
                <p>
                  <BsCaretRightFill style={{ color: "#f54f0d" }} />
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                </p>
              </li>
            </ul>
          </div>
        </div>
        {/* third */}
        <div class="facilities-wrapper">
          <figure class="facilities-banner">
            <img src={Offices} width="20%" alt="svg" />
          </figure>

          <div class="facilities-content">
            <h3 class="facilities-content-title">
              <strong>Our Offices</strong>
            </h3>

            <p class="facilities-content-text">
              We have modern offices that are equiped with state of the art that
              .....
            </p>

            <ul class="facilities-list">
              <li class="facilities-list-item">
                <p>
                  <BsCaretRightFill style={{ color: "#f54f0d" }} />
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                </p>
              </li>
              <li class="facilities-list-item">
                <p>
                  <BsCaretRightFill style={{ color: "#f54f0d" }} />
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                </p>
              </li>
              <li class="facilities-list-item">
                <p>
                  <BsCaretRightFill style={{ color: "#f54f0d" }} />
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* end of facilities */}

      <IncomeGenerating />
    </>
  );
}

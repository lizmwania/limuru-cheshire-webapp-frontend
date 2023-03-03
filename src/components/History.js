import React, {useState} from 'react';
import { motion } from 'framer-motion';
import img from '../images/history.png';
// import { useState } from 'react';

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
      const [activeTab, setActiveTab] = useState(0);

      // Define the content to show for each tab
      const tabs = [
        {
          title: "Who we are",
          content:
            "We are a community-based empowerment facility for girls living with disabilities. Our mission is to provide a safe and nurturing environment where girls can develop the skills, knowledge, and confidence they need to lead successful and fulfilling lives. Through our programs and services, we aim to empower girls with disabilities by offering education and training, mentorship, and access to resources and opportunities. Our goal is to build a community that celebrates diversity, inclusivity, and empowerment for all.",
        },
        {
          title: "Our Vision",
          content:
            "We value creating an all-inclusive society where girls living with disability can live dignified lives. Our community-based empowerment facility is committed to providing a supportive and empowering environment that celebrates diversity and fosters inclusivity. Through our programs and services, we equip girls with the skills, knowledge, and confidence they need to pursue their dreams and lead fulfilling lives. Our vision is a world where every girl, regardless of her abilities, has the opportunity to thrive and succeed.",
        },
        {
          title: "Our History",
          content: 'A community-based empowerment facility for girls living with disabilities. Founded in 1972 by Leonard Cheshire, the home envisions art all-inclusive society where persons living with disabilities are empowered to develop to their full potentials to lead dignified lives.',
        },
      ];

      const activeTabContent = tabs[activeTab].content;
    return (
      <motion.div
        className="history_container"
        variants={container}
        initial="hidden"
        exit="exit"
        whileInView="show"
        viewport={{ once: false }}
      >
        <motion.div className="left_content" variants={item}>
          <img src={img} alt="history" />
        </motion.div>
        <motion.div className="right_content" variants={item}>
          <h3>Our Story</h3>
          <div className="btn_group tabs">
            {tabs.map((tab, index) => (
              <div
                className={`btn ${
                  index === activeTab
                    ? "btn_primary active"
                    : "btn_primary_bordered"
                }`}
                onClick={() => setActiveTab(index)}
                key={tab.title}
              >
                {tab.title}
              </div>
            ))}
          </div>
          <p>{activeTabContent}</p>
        </motion.div>
      </motion.div>
    );
}

export default History;

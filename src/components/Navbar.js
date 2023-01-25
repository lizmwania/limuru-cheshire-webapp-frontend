import React, {useState } from "react";
import { animate, motion } from "framer-motion";
import '../styles/NavBar.scss'
import { AiFillHeart } from "react-icons/ai";

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
    transition:{duration:0.6, ease:easing}
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

const firstname = {
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

const lastname = {
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
    transition:{duration:1, ...transition}
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



export default function Navbar () {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div initial='initial' animate='animate'>
      <motion.div className="Navbar" variants={stagger}>
        <motion.a href="/" className="nav-logo" variants={header}>
          Limuru Cheshire
        </motion.a>
        <motion.div className={`nav-items ${isOpen && "open"}`} variants={stagger}>
          <motion.a href="/">Home </motion.a>
          <motion.a href="/about">About</motion.a>
          <motion.a href="/volunteer"> Work with us </motion.a>
          <motion.a href="/impact"> Impact Stories </motion.a>
          <motion.a href="/tour"> Tour the Village </motion.a>
          <motion.a href="/contact"> Contact Us </motion.a>
          <motion.a href="/donate" className="donate" variants={header}>
            Donate{" "}<AiFillHeart style={{fontSize: "22px"}}/>
          </motion.a>
        </motion.div>
        <div
          className={`nav-toggle ${isOpen && "open"}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="bar"></div>
        </div>
      </motion.div>
    </motion.div>
  );
};


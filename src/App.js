import React from "react";
import { motion } from "framer-motion";
import "./styles/App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import VolunteerApplication from "./Pages/VolunteerApplication";
import HomePage from "./Pages/HomePage";
import ImpactPage from "./Pages/ImpactPage";
import Footer from "./components/Footer";
import DonatePage from "./Pages/DonatePage";
import ContactPage from "./Pages/ContactPage";

let easing = [0.6,-0.05, 0.01, 0.99]
const transition = {duration:1, ease:[0.6, 0.01,-0.05, 0.9]};

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
    opacity:0,
  },
  animate:{
    transition:{
      delay:2.5,
      duration:.3
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
    transition:{
      delay:.8,
      duration:0.6,
      ease:easing
    }
  }
};

const h3 = {
  initial:{
    top:'20%',
    opacity:0,
    transition:{duration:0.05, ease:easing}
  },
  animate:{
    top:'50%',
    opacity:.1,
    transition:{delay:1.2, duration:0.6, ease:easing}

  }
};

const dots = {
  initial:{
    x:-400
  },
  animate:{
    initial:{
      transition:{duration:.2, ...transition}
    }
  }
};

const letter = {
  initial: {
    opacity: 0,
    x:-400,
  },
  animate: {
    opacity:1,
    x:0,
    transition:{
      duration:.2, ...transition
    }
  }
}

function App() {
  return (
    <motion.div className="App">
      <Router>
        <Routes>
          <Route path="" element={<HomePage />} />
          <Route path="/impact" element={<ImpactPage />} />
          <Route path="/volunteer" element={<VolunteerApplication />} />
          <Route path="/donate" element={<DonatePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Router>
      <Footer/>
    </motion.div>
  );
}

export default App;

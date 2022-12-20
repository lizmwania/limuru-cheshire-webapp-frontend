import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import VolunteerApplication from "./Pages/VolunteerApplication";
import "./styles/App.scss";
import HomePage from "./Pages/HomePage";
import ImpactPage from "./Pages/ImpactPage";
import Footer from "./components/Footer";
import DonatePage from "./Pages/DonatePage";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="" element={<HomePage />} />
          <Route path="/impact" element={<ImpactPage />} />
          <Route path="/volunteer" element={<VolunteerApplication />} />
          <Route path="/donate" element={<DonatePage />} />
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;

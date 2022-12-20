import React from "react";
import About from "../components/About";
import Banner from "../components/Banner";
import Card from "../components/Card";
import ChangeWorld from "../components/ChangeWorld";
import Contact from "../components/Contact";
import History from "../components/History";
import Navbar from "../components/Navbar";
import Volunteer from "../components/Volunteer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Banner />
      <Card />
      <About />
      <History />
      <Volunteer />
      <ChangeWorld/>
      <Contact/>
    </>
  );
}

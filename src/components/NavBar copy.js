import React, {useState } from "react";
import '../styles/NavBar.scss'
import { AiOutlineHeart } from "react-icons/ai";

export default function Navbar () {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="Navbar">
        <a href="/" className="nav-logo">
          Limuru Cheshire
        </a>
        <div className={`nav-items ${isOpen && "open"}`}>
          <a href="/">Home </a>
          <a href="/#about">About</a>
          <a href="/volunteer"> Work with us </a>
          <a href="/impact"> Impact Stories </a>
          <a href="/#"> Contact Us </a>
          <a href="/donate" className="donate">
            Donate{" "}<AiOutlineHeart style={{fontSize: "22px"}}/>
          </a>
        </div>
        <div
          className={`nav-toggle ${isOpen && "open"}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="bar"></div>
        </div>
      </div>
    </>
  );
};


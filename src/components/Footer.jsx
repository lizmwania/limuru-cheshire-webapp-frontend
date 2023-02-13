import React from "react";
import ScrollToTop from "react-scroll-to-top";
import "../styles/Footer.scss";
import { SocialIcon } from "react-social-icons";
import { FaArrowUp } from "react-icons/fa";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="FooterSection">
      <footer className="footer">
        <ScrollToTop
          component={<FaArrowUp />}
          style={{
            color: "#f54f0d",
            fontSize: "30px",
            boxShadow: "none",
            width: "0px",
            height: "0px",
            paddingBottom: "1em",
            paddingRight: "0.6em",
            backgroundColor: "transparent",
          }}
          smooth
        />
        <div className="container">
          <div className="footer-section">
            <div className="footer-col">
              <h4>Important Link</h4>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="/volunteer">Work with us</a>
                </li>
                <li>
                  <a href="/impact">Impact Stories</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Get Involved</h4>
              <ul>
                <li>
                  <a href="#">Partner with us</a>
                </li>
                <li>
                  <a href="#">Volunteer</a>
                </li>
                <li>
                  <a href="#">Volunteer/Intership</a>
                </li>
                <li>
                  <a href="#">Donations</a>
                </li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Projects</h4>
              <ul>
                <li>
                  <a href="#">Clothes Sewing</a>
                </li>
                <li>
                  <a href="#">Poulty farming</a>
                </li>
                <li>
                  <a href="#">Crop Farming</a>
                </li>
                <li>
                  <a href="#">Hair dressing</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Reach out to us</h4>
              <div className="social-links">
                <a href="#" target="_blank" rel="noreferrer">
                  {" "}
                  <SocialIcon
                    network="google"
                    style={{ height: 25, width: 25 }}
                  />
                </a>
                <a href="#" target="_blank" rel="noreferrer">
                  {" "}
                  <SocialIcon
                    network="whatsapp"
                    style={{ height: 25, width: 25 }}
                  />
                </a>
                <a href="#" target="_blank" rel="noreferrer">
                  {" "}
                  <SocialIcon
                    network="twitter"
                    style={{ height: 25, width: 25 }}
                  />
                </a>
                <a href="#" target="_blank" rel="noreferrer">
                  {" "}
                  <SocialIcon
                    network="tiktok"
                    style={{ height: 25, width: 25 }}
                  />
                </a>
                <a href="#" target="_blank" rel="noreferrer">
                  {" "}
                  <SocialIcon
                    network="instagram"
                    style={{ height: 25, width: 25 }}
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="SubLandingPageFooter">
            <hr />
            <p className="textOne">| TOGETHER | WE | CAN | CHANGE | LIVES |</p>
            <p className="textTwo">
              © {new Date().getFullYear()} Copyright Limuru Chesire. All Rights
              Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

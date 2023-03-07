import React from "react";
import JoinTeam from "../images/help2.jpg";
import "../styles/VolunteerApplication.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { RiDoubleQuotesL } from "react-icons/ri";
import ReactTooltip from "react-tooltip";
import { HiInformationCircle } from "react-icons/hi";
import Navbar from "../components/Navbar";
export default function VolunteerApplication() {
  return (
    <>
      <Navbar />
      <div className="VolunteerBannerContainer">
        <img src={JoinTeam} className="VolunteerBanner" alt="VolunteerBanner" />
        <div class="VolunteerCenteredText">
          <h1>Become a Limuru Cheshire Volunteer</h1>
        </div>
      </div>
      <div className="VolunteerApplication">
        <p className="VolunteerApplicationTitle">
          We are looking for great volunteers to help us help the girls in
          equiping them with the skills they require.
        </p>

        <div className="Testimonial">
          <RiDoubleQuotesL style={{ fontSize: "42px", color: "#f54f0d" }} />
          <p>
            For we are God's handiwork, created in Christ Jesus to do good
            works, which God prepared in advance for us to do.
          </p>
          <p style={{ fontSize: "16px", color: "grey" }}>Ephesians 2:10, ESV</p>
        </div>
        <p style={{ textAlign: "center", fontSize: "28px", fontWeight: "400" }}>
          Register Today!
        </p>
        <p className="ApplicationFormtitle">
         Click the link below, complete the set of questions, and we will follow up with you via email
          or phone regarding upcoming volunteer opportunities. We look forward
          to meeting you!{" "}
        </p>
        <br />
        {/* Application form */}
        <center>
          {" "}
          <a href="https://forms.gle/bViFZgeAGjZY6Hjv8" target="_blank" className="btn-submit">
            Complete Form
          </a>
        </center>
        {/* End of application form */}
      </div>
      <br /> <br /> <br />
    </>
  );
}

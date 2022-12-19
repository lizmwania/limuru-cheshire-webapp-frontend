import React from "react";
import JoinTeam from "../images/help2.jpg";
import "../styles/VolunteerApplication.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { RiDoubleQuotesL } from "react-icons/ri";
import ReactTooltip from "react-tooltip";
import { HiInformationCircle } from "react-icons/hi";
import Navbar from "../components/NavBar";
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
          Complete the brief form below and we will follow up with you via email
          or phone regarding upcoming volunteer opportunities. We look forward
          to meeting you!{" "}
        </p>
        <br />
        {/* Application form */}
        <div className="ApplicationForm">
          <form className="row g-3">
            <div className="col-md-12">
              <label className="required">1. Title</label>
              <a data-tip="Pick title you prefer" data-event="click focus">
                <HiInformationCircle />
              </a>
              <ReactTooltip />

              <select
                id="inputTitle"
                className="form-control"
                name="title"
                required
              >
                <option defaultValue>--Select Title--</option>
                <option defaultValue="defaultValue">Mr</option>
                <option>Mrs</option>
                <option>Dr</option>
                <option>Hon</option>
              </select>
            </div>
            <div className="col-md-12">
              <label className="required">2. Full Name </label>
              <a data-tip="Applicant's full name" data-event="click focus">
                <HiInformationCircle />
              </a>
              <ReactTooltip />
              <input
                type="text"
                class="form-control form-control-lg"
                id="name"
              />
            </div>

            <div className="col-md-12">
              <label className="required">3. Email Address</label>
              <a
                data-tip="Enter your valid Email Address"
                data-event="click focus"
              >
                <HiInformationCircle />
              </a>
              <ReactTooltip />
              <input
                className="form-control form-control-lg"
                type="text"
                required
              />
            </div>
            <div className="col-12">
              <label className="required">4. Phone Number: </label>
              <a
                data-tip="Enter your primary Phone number"
                data-event="click focus"
              >
                <HiInformationCircle />
              </a>
              <ReactTooltip />
              <input
                id="phone_number"
                type="number"
                className="form-control form-control-lg"
                name="phone_number"
              />
            </div>
            <div className="col-12">
              <label className="nonrequiredlabel">
                5. Internship and/or voluntering period applying for:
                <a
                  data-tip="Select the period that you will be available"
                  data-event="click focus"
                >
                  <HiInformationCircle />
                </a>
                <ReactTooltip />
              </label>

              <div class="form-check">
                <div style={{ height: "10px" }} />
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label class="nonrequiredlabel">
                  January - June - [1ST Cohort]
                </label>
              </div>
              <div style={{ height: "10px" }} />
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                />
                <label class="nonrequiredlabel">
                  July - December - [2ND Cohort]
                </label>
              </div>
              <br />
              <div className="col-md-12">
                <label className="nonrequiredlabel">
                  6. List three or more outcomes that you intend to achieve by
                  the end of your internship and or volunteering{" "}
                  <a
                    data-tip="List some of the achievements you intend to achieve"
                    data-event="click focus"
                  ></a>
                  <HiInformationCircle />
                  <ReactTooltip />
                </label>

                <textarea
                  className="form-control form-control-lg"
                  type="text"
                  row="12"
                  required
                />
              </div>
              <br />
              <div className="col-md-12">
                <label className="nonrequiredlabel">
                  7. Kindly provide any volunteer activity you have taken part
                  in:{" "}
                  <a
                    data-tip="List some of the related volunteer activities"
                    data-event="click focus"
                  >
                    <HiInformationCircle />
                  </a>
                  <ReactTooltip />
                </label>

                <textarea
                  className="form-control form-control-lg"
                  type="text"
                  row="12"
                  required
                />
              </div>
            </div>
          </form>
          <button className="btn-submit">Submit</button>
        </div>
        {/* End of application form */}
      </div>
      <br /> <br /> <br />
    </>
  );
}

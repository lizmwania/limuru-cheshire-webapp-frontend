import React from 'react'
// import { HiInformationCircle } from 'react-icons/hi'
import ReactTooltip from 'react-tooltip'
import Navbar from '../components/Navbar'
import '../styles/ContactPage.scss'

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <div className="ContactContainer">
        <p style={{ textAlign: "center", fontSize: "28px", fontWeight: "400" }}>
          Contact Us!
        </p>
        <p className="ContactFormtitle">
          Our lovely team would like to hear from you
        </p>
        <br />
        {/* contact form */}
        <div className="ContactForm">
          <form className="row g-3">
            <div className="col-md-12">
              <label className="required">First Name </label>
              <a data-tip="Applicant's full name" data-event="click focus">
                {/* <HiInformationCircle /> */}
              </a>
              <ReactTooltip />
              <input
                type="text"
                class="form-control form-control-lg"
                id="name"
              />
            </div>
            <div className="col-md-12">
              <label className="required">Last Name </label>
              <a data-tip="Applicant's full name" data-event="click focus">
                {/* <HiInformationCircle /> */}
              </a>
              <ReactTooltip />
              <input
                type="text"
                class="form-control form-control-lg"
                id="name"
              />
            </div>

            <div className="col-md-12">
              <label className="required">Email Address</label>
              <a
                data-tip="Enter your valid Email Address"
                data-event="click focus"
              >
                {/* <HiInformationCircle /> */}
              </a>
              <ReactTooltip />
              <input
                className="form-control form-control-lg"
                type="text"
                required
              />
            </div>
            <div className="col-12">
              <label className="required">Phone Number: </label>
              <a
                data-tip="Enter your primary Phone number"
                data-event="click focus"
              >
                {/* <HiInformationCircle /> */}
              </a>
              <ReactTooltip />
              <input
                id="phone_number"
                type="number"
                className="form-control form-control-lg"
                name="phone_number"
              />
            </div>

            <div className="col-md-12">
              <label className="required">
                Message
                <a
                  data-tip="List some of the related volunteer activities"
                  data-event="click focus"
                >
                  {/* <HiInformationCircle /> */}
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
          </form>
          <button className="btn-submit">Send message</button>
        </div>

        <div className="MapContainer">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="ContactTitle"
            loading="lazy"
            style={{ filter: "opacity(0.7)" }}
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d90256.46989614451!2d36.80476501014542!3d-1.2880827889894189!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d89586303f%3A0x249cb113a045ce9c!2sKRA%20Offices!5e0!3m2!1sen!2ske!4v1668174135269!5m2!1sen!2ske"
          />
        </div>
      </div>
    </>
  );
}

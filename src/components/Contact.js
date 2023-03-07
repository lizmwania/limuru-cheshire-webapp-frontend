import React from 'react';
import { Fade } from "react-awesome-reveal";

const Contact = () => {
    return (
      <div className="contact_container">
        <div className="title_wrapper">
          <p>Have a question?</p>
          <Fade>
            <h2>Get in touch with us.</h2>
            <div className="btn_group">
              <a href="contact" className="btn btn_primary">Contact Us</a>
            </div>
          </Fade>
        </div>
      </div>
    );
}

export default Contact;

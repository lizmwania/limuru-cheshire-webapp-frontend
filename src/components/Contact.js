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
              <div className="btn btn_primary">Contact Us</div>
            </div>
          </Fade>
        </div>
      </div>
    );
}

export default Contact;

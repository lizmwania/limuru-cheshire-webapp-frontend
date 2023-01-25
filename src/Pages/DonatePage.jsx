import React from "react";
import Navbar from "../components/Navbar";
import "../styles/DonatePage.scss";
import save from "../images/save2.JPG";
import mpesa from "../images/mpesa.png";
import products from "../images/sewing.png";
import happy from "../images/fees.png";
import handshake from "../images/hands.jpg";

export default function DonatePage() {
  return (
    <div>
      <Navbar />
      <div className="DonationBannerContainer">
        <img src={save} className="DonationBanner" alt="DonationBanner" />
        <div className="DonationCenteredText">
          <h1>Make dreams come true</h1>
          <p>Your generous donations will go a long way in helping the girls</p>
        </div>
      </div>
      <p className="donationWays">There are many ways to give:</p>
      <div className="donateSection">
        <div className="card" style={{ width: "15rem" }}>
          <img className="donationPageImage" src={mpesa} alt="Donate" />
          <div className="card-body">
            <h5 className="donationTitle">Donate through Mpesa</h5>
            <p className="donationDescription">
              Lipa na M-Pesa through paybill number{" "}
              <span style={{ fontWeight: "bold" }}>986508</span> and the account
              number is your phone number.
            </p>
          </div>
        </div>
        <div className="card" style={{ width: "15rem" }}>
          <img className="donationPageImage" src={happy} alt="Donate" />
          <div className="card-body">
            <h5 className="donationTitle">Sponsoring a girl</h5>
            <p className="donationDescription">
              Support one or more girls through paying their training fee of
              Ksh. 54,000. This will cover all their tution expenses. 
            </p>
          </div>
        </div>
        {"                                            "}
        <div className="card" style={{ width: "15rem" }}>
          <img className="donationPageImage" src={products} alt="Donate" />
          <div className="card-body">
            <h5 className="donationTitle">Donate Equipments</h5>
            <p className="donationDescription">
              Donate training equipments and materials such as sewing and
              kniting machines, computers, laptops, etc.
            </p>
          </div>
        </div>
        <div className="card" style={{ width: "15rem" }}>
          <img className="donationPageImage" src={handshake} alt="Donate" />
          <div className="card-body">
            <h5 className="donationTitle">Visiting</h5>
            <p className="donationDescription">
              You can visit to share life with the gils and encourage them.
              Small acts like visiting the girls and talking to them will go a
              long way in helping them.
            </p>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
}

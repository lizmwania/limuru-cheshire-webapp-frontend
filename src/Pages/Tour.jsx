import React from "react";
import Gallery from "../components/Gallery";
import TourImage from "../images/banner.jpg";
import Image1 from "../images/poultry.jpg";
import Image2 from "../images/about.png";
import Image3 from "../images/happpy.jpg";
import Image4 from "../images/volunteer.png";
import Image5 from "../images/fam.jpg";
import Image6 from "../images/poultry2.jpg";
import Navbar from "../components/Navbar";

export default function Tour() {
  const galleryImages = [
    {
      img: Image1,
    },
    {
      img: Image2,
    },
    {
      img: Image4,
    },
    {
      img: Image5,
    },
    {
      img: Image6,
    },
    {
      img: Image1,
    },
    {
      img: Image2,
    },
    
    {
      img: Image4,
    },
    {
      img: Image5,
    },
    {
      img: Image6,
    },
    {
      img: Image1,
    },
    {
      img: Image2,
    },
    
    {
      img: Image4,
    },
    {
      img: Image5,
    },
    {
      img: Image6,
    },
  ];
  return (
    <div>
      <Navbar />
      <div className="VolunteerBannerContainer">
        <img
          src={TourImage}
          className="VolunteerBanner"
          alt="VolunteerBanner"
        />
        <div class="VolunteerCenteredText">
          <h1>Tour the Village</h1>
          <p>A picture is worth a thousand words</p>
        </div>
      </div>
      <Gallery
        galleryImages={galleryImages}
        style={{ width: "90%", margin: "auto" }}
      />
    </div>
  );
}

import React from "react";
import ImpactStories from "../components/ImpactStories";
import Navbar from "../components/Navbar";
import ImpactBanner from "../images/ImpactStory.jpg";
import "../styles/ImpactPage.scss";

export default function ImpactPage() {
  return (
    <>
    <Navbar/>
      <div className="ImpactBannerContainer">
        <img src={ImpactBanner} className="ImpactBanner" alt="ImpactBanner" />
        <div class="ImpactCenteredText">
          <h1>Stories worth sharing</h1>
          <p>View some testimonials of our achievement over the years</p>
        </div>
      </div>
      {/* Impact Stories */}
      <div className="ImpactStories">
        <p className="ImpactStoriesBanner">
          With the help of our partners and well wishers we have been able to
          have an impact on the lives on a significant number of girls for the
          18 years we have been in operation. These are stories that are worth
          sharing!
        </p>
        <p className="ImpactStories-Paragraph">
          Below, read the stories of individuals whose lives have been
          transformed through the tireless and selfless work of our network of
          volunteers and partners. We SALUTE THEM! It wouldn't have been possible 
          without them.
        </p>
    <ImpactStories/>
      </div>
    </>
  );
}

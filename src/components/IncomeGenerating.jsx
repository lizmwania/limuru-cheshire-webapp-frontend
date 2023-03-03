import React from "react";
import "../styles/IncomeGenerating.scss";
import horticulture from "../images/aboutus/horticulture.png";
import poultry from "../images/aboutus/poultry.png";
import bakery from "../images/aboutus/baking.png";
import beadwork from "../images/aboutus/beadworks.png";

export default function IncomeGenerating() {
  return (
    <div className="IncomeGenerating">
      <h2 className="IncomeGeneratingTitle">Income Generating Activities</h2>
      <p style={{ textAlign: "center", width: "90%", margin: "auto", fontSize: "14px", color: "grey"}}>
        We have a number of projects currently underway that not only help to
        generate income for us, but also equips the girls with relevant skills.
      </p>
      <br />  <br />
      <div
        className="IncomeSection"
        style={{ borderLeft: "5px solid #FD2155" }}
      >
        <div className="IncomeLeftSection">
          <h4>Poultry Farming</h4>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English
          </p>
        </div>
        <img src={poultry} alt="Class " className="IncomeImages" />
      </div>
      <br />
      <div
        className="IncomeSection"
        style={{ borderLeft: "5px solid #1aaa1a" }}
      >
        <div className="IncomeLeftSection">
          <h4>Horticultural Farming</h4>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English
          </p>
        </div>
        <img src={horticulture} alt="Class " className="IncomeImages" />
      </div>
      <br />
      <div
        className="IncomeSection"
        style={{ borderLeft: "5px solid #FFA500" }}
      >
        <div className="IncomeLeftSection">
          <h4>Baking</h4>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English
          </p>
        </div>
        <img src={bakery} alt="Class " className="IncomeImages" />
      </div>
      <br />
      <div
        className="IncomeSection"
        style={{ borderLeft: "5px solid rgb(129, 216, 247)" }}
      >
        <div className="IncomeLeftSection">
          <h4>Beadwork design</h4>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English
          </p>
        </div>
        <img src={beadwork} alt="Class " className="IncomeImages" />
      </div>
      <br/>  <br/>
    </div>
  );
}

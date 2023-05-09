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
      <p
        style={{
          textAlign: "center",
          width: "90%",
          margin: "auto",
          fontSize: "14px",
          color: "grey",
        }}
      >
        We have a number of projects currently underway that not only help to
        generate income for us, but also equips the girls with relevant skills.
      </p>
      <br /> <br />
      <div
        className="IncomeSection"
        style={{ borderLeft: "5px solid #FD2155" }}
      >
        <div className="IncomeLeftSection">
          <h4>Poultry Farming</h4>
          <p>
            Our poultry project teaches our girls how to raise and care for
            chickens. We have several breeds, including egg-laying hens and meat
            birds, which our girls feed, clean, and care for. In addition to
            providing eggs and meat for our own use, we sell our excess produce
            to local markets. Our girls are involved in all aspects of the
            process, including marketing and sales.
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
            Our horticultural farming project is an important part of our
            efforts to teach our girls sustainable agriculture practices. We
            grow a range of fruits and vegetables, which not only provide
            healthy nutrition for our girls, but also generate income when we
            sell them to local markets. Our girls are involved in all aspects of
            the farming process, from planting and harvesting to marketing and
            sales.
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
            Our baking project teaches our girls to bake a variety of treats,
            including cakes, cookies, and bread. In addition to providing baked
            products for our own use, we sell our excess products to local
            markets. Our girls are involved in all aspects of the baking
            process, from measuring and mixing ingredients to packaging and
            sales.
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
            Our beadwork project provides our girls with a creative outlet and
            the opportunity to learn new skills. We have a range of materials
            and supplies for making unique and beautiful beaded jewelry and
            accessories, which we sell. Our girls are involved in all aspects of
            the production process, from designing and creating the pieces to
            marketing and sales.
          </p>
        </div>
        <img src={beadwork} alt="Class " className="IncomeImages" />
      </div>
      <br /> <br />
    </div>
  );
}

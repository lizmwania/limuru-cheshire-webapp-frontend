import React from "react";
import "../styles/Pillars.scss";
import pillarImg from "../images/change.png";
import { BsFillPinFill } from "react-icons/bs";

export default function Pillars() {
  return (
    <div className="pillars">
      <div className="row">
        <div className="pillarcontent">
          <div style={{ display: "flex", alignItems: "center" }}>
            <BsFillPinFill
              style={{
                fontSize: "1.5rem",
                color: "#f54f0d",
                marginRight: "1rem",
              }}
            />
            <span style={{ fontSize: "2rem", fontWeight: "500" }}>
              Core Pillars{" "}
            </span>
          </div>
          <h1 className="PillarPageTitle">
            We believe in the five core pillars that keep us going and guide us
            then it comes to making crucial day to day decisions.{" "}
          </h1>

          <div style={{paddingLeft:"1.2rem"}}>
            <div className="Listofpillars">
              <div class="circle">
                <p>1</p>
              </div>
              <div>
                <p className="PillarTitle">Advocacy</p>
                <p className="moreInformation">
                  We strongly believe in the pillar of unity and helps us unite
                </p>
              </div>
            </div>
            <div className="Listofpillars">
              <div class="circle">
                <p>2</p>
              </div>
              <div>
                <p className="PillarTitle">Inclusion</p>
                <p className="moreInformation">
                  We strongly believe in the pillar of unity and helps us unite
                </p>
              </div>
            </div>
            <div className="Listofpillars">
              <div class="circle">
                <p>3</p>
              </div>
              <div>
                <p className="PillarTitle">Respect for diversity</p>
                <p className="moreInformation">
                  We strongly believe in the pillar of unity and helps us unite
                </p>
              </div>
            </div>
            <div className="Listofpillars">
              <div class="circle">
                <p>40</p>
              </div>
              <div>
                <p className="PillarTitle">Education</p>
                <p className="moreInformation">
                  We strongly believe in the pillar of unity and helps us unite
                </p>
              </div>
            </div>
            <div className="Listofpillars">
              <div class="circle">
                <p>5</p>
              </div>
              <div>
                <p className="PillarTitle">The fifth pillar</p>
                <p className="moreInformation">
                  We strongly believe in the pillar of unity and helps us unite
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <img src={pillarImg} alt="our pillars" className="PillarBanner" />
        </div>
      </div>
    </div>
  );
}

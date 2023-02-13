import React from "react";
import "../styles/Pillars.scss";
import pillarImg from "../images/change.png";
import { BsFillPinFill } from "react-icons/bs";

export default function Pillars() {
  return (
    <div className="pillars">
      <div className="row">
        <div className="">
          <BsFillPinFill style={{ fontSize: "25px", color: "#f54f0d" }} />
          <span style={{ fontSize: "1.2rem", color: "#f54f0d" }}>
            Core Pillars{" "}
          </span>
          <h1 className="PillarPageTitle">
            We believe in the five core pillars that keep us going and guide us
            then it comes to making crucial day to day decisions.{" "}
          </h1>

          <div className="Listofpillars">
            <div class="circle">
              <span>1</span>
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
              <span>2</span>
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
              <span>3</span>
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
              <span>4</span>
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
              <span>5</span>
            </div>
            <div>
              <p className="PillarTitle">The fifth pillar</p>
              <p className="moreInformation">
                We strongly believe in the pillar of unity and helps us unite
              </p>
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

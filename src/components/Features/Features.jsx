import React from "react";
import bg from "../../assets/bg-elements.png";
import "./features.css";
import AntiScratch from "../../assets/AntiScratch.png";
import AntiBacterial from "../../assets/AntiBacterial.png";
import Transparency from "../../assets/Transparency.png";

const Features = () => {
  return (
    <section>
      <div className="section__features section container">
        <div className="features__container container">
          <img className="bg-elements" src={bg} alt="bg-elements" />
          <div className="features__text">
            <h1>
              Main Features Of <h1 className="high"> Protectors </h1>
            </h1>
          </div>

          <div className="feature__grid">
            <div className="feature__box">
              <img src={AntiBacterial} alt="AntiBacteria" />
              <h1>Anti-Bacterial</h1>
              <button class="cta">
                <span class="hover-underline-animation"> Learn More </span>
                <svg
                  viewBox="0 0 46 16"
                  height="10"
                  width="30"
                  xmlns="http://www.w3.org/2000/svg"
                  id="arrow-horizontal"
                >
                  <path
                    transform="translate(30)"
                    d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                    data-name="Path 10"
                    id="Path_10"
                  ></path>
                </svg>
              </button>
            </div>

            <div className="feature__box">
              <img src={Transparency} alt="Transparency" />
              <h1>Excellent Transparency</h1>
              <button class="cta">
                <span class="hover-underline-animation"> Learn More </span>
                <svg
                  viewBox="0 0 46 16"
                  height="10"
                  width="30"
                  xmlns="http://www.w3.org/2000/svg"
                  id="arrow-horizontal"
                >
                  <path
                    transform="translate(30)"
                    d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                    data-name="Path 10"
                    id="Path_10"
                  ></path>
                </svg>
              </button>
            </div>

            <div className="feature__box">
              <img src={AntiScratch} alt="AntiScratch" />
              <h1>Anti-Scratch</h1>
              <button class="cta">
                <span class="hover-underline-animation"> Learn More </span>
                <svg
                  viewBox="0 0 46 16"
                  height="10"
                  width="30"
                  xmlns="http://www.w3.org/2000/svg"
                  id="arrow-horizontal"
                >
                  <path
                    transform="translate(30)"
                    d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                    data-name="Path 10"
                    id="Path_10"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

import React from "react";
import "./devices.css";
import iconsBG from "../../assets/icons-bg.png";
import phoneBG from "../../assets/phone-bg.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Devices = () => {
  useEffect(() => {
    Aos.init({
      duration: 1500,
    });
  }, []);
  return (
    <section id="Devices">
      <div className="section__devices section container">
        <div className="devices__container container">
          <img data-aos="fade-left" className="img1" src={iconsBG} alt="iconsBG" />
          <img data-aos="fade-right" className="img2" src={phoneBG} alt="iconsBG" />
          <div data-aos="fade-left" className="devices__text">
            <h1>
              We Make Your Device
              <h1 className="high"> Damage Free </h1>
            </h1>
          </div>

          <div className="device__grid">
            <div data-aos="zoom-out-down" className="device__box">
              <i class="uil uil-mobile-android"></i>
              <h1>Mobile Phone</h1>
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

            <div data-aos="zoom-out-down" className="device__box">
              <i class="uil uil-laptop"></i>
              <h1>Laptop</h1>
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

            <div data-aos="zoom-out-down" className="device__box">
              <i class="uil uil-tablet"></i>
              <h1>Tablet</h1>
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

export default Devices;

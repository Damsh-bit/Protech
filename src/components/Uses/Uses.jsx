import React from "react";
import bgphone from "../../assets/bg-phone2.png";
import bgphone2 from "../../assets/bg-phone3.png";
import Phone from "../../assets/MobilePhone.png";
import Laptop from "../../assets/Laptop.png";
import SmartWatch from "../../assets/SmartWatch.png";
import "./uses.css";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Uses = () => {
  useEffect(() => {
    Aos.init({
      duration: 1500
    });
  },[])
  return (
    <section id="Uses">
      <div data-aos="fade-right" className="bg">
        <div className="section__uses section container ">
          <div className="uses__container container ">
            <img data-aos="fade-down" className="img-bg1" src={bgphone} alt="bg-elements" />
            <img data-aos="fade-up" className="img-bg2" src={bgphone2} alt="bg-elements" />
            <div data-aos="fade-down" className="uses__text">
              <h1>Use Cases</h1>
            </div>

            <div className="feature__grid">
              <div data-aos="zoom-in-left" className="uses__box">
                <img src={Phone} alt="Phone" />
                <h1>Phone</h1>
              </div>

              <div data-aos="zoom-in-left" className="uses__box">
                <img src={Laptop} alt="Laptop" />
                <h1 >Laptop</h1>
              </div>

              <div data-aos="zoom-in-left" className="uses__box">
                <img src={SmartWatch} alt="SmartWatch" />
                <h1 >Smart Watch</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Uses;

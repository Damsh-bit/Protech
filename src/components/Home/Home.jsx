import React from "react";
import Header from "../Header/Header";
import HomeBrand from "../../assets/home-brand.png";
import Icons from "../../assets/Icons.png";
import "./home.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    Aos.init({
      duration: 1500,
    });
  }, []);
  return (
    <section id="Home">
      <div className="section__home section container">
        <Header />
        <div className="home__container section container">
          <div data-aos="fade-left" className="home__text">
            <h3 >No Scratch No Crack</h3>
            <h1 >Ultimate Protection for Your Device</h1>
            <span >
              The maximum protection for all your mobile devices, take your
              protected device everywhere.
            </span>

            <img data-aos="flip-down"  src={Icons} alt="IconsHome" />
          </div>

          <div>
            <img data-aos="fade-right" height="600px" width="600px" src={HomeBrand} alt="HomeBrand" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

import React from "react";
import Header from "../Header/Header";
import HomeBrand from '../../assets/home-brand.png';
import Icons from '../../assets/Icons.png';
import "./home.css";

const Home = () => {
  return (
    <section>
      <div className="section__home section container">
        <Header />
        <div className="home__container section container">
          <div className="home__text">
            <h3>No Scratch No Crack</h3>
            <h1>Ultimate Protection for Your Device</h1>
            <span>
              The maximum protection for all your mobile devices, take your
              protected device everywhere.
            </span>

            <img src={Icons} alt="IconsHome" />
          </div>

          <div>
            <img height="600px" width="600px" src={HomeBrand} alt="HomeBrand" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

import React from "react";
import "./header.css";

const Header = () => {
  return (
    <section className=" navbar__section section">
      <header>
        <nav>
          <ul className="navbar">
            <div>
              <h1>Prootech</h1>
            </div>
            <div>
              <li>
                <a href="#Home"> Home </a>
              </li>
              <li>
                <a href="#Features"> Features</a>
              </li>
              <li>
                <a href="#Devices">Devices </a>{" "}
              </li>
              <li>
                <a href="#Uses">Uses </a>{" "}
              </li>
            </div>
          </ul>
        </nav>
      </header>
    </section>
  );
};

export default Header;

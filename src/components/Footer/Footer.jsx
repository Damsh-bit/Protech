import React from "react";
import "./footer.css";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Footer = () => {
  useEffect(() => {
    Aos.init({
      duration: 1500
    });
  },[])
  return (
    <section data-aos="fade-down" className="section__footer bg section">
      <div  className="footer__content section">
        <div className="footer__social">
          <div><h1 className="logo">Prootech</h1></div>
          <div>
            <i class="uil uil-twitter"></i>
            <i class="uil uil-google"></i>
            <i class="uil uil-instagram-alt"></i>
            <i class="uil uil-linkedin"></i>
          </div>
        </div>
        <div className="grid__social">
          <div className="footer_text-box">
            <h1>Product</h1>
            <span>Landingpage</span>
            <span>Features</span>
            <span>Documentation</span>
            <span>Referral Program</span>
            <span>Pricing</span>
          </div>
          <div className="footer_text-box">
            <h1>Features</h1>
            <span>Anti-Bacterial</span>
            <span>Excellent Transparency</span>
            <span>Shock Resistent</span>
            <span>Anti-Fingerprint</span>
            <span>Anti-Scratch</span>
          </div>
          <div className="footer_text-box">
            <h1>Company</h1>
            <span>About</span>
            <span>Terms</span>
            <span>Privacy Policy</span>
            <span>Careers</span>
          </div>
          <div className="footer_text-box">
            <h1>More</h1>
            <span>Documentation</span>
            <span>License</span>
            <span>Changelog</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;

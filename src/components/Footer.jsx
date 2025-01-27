import React from "react";
import "./Footer.css";
import rijksLogo from "../assets/rijks.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <img className="rijks-logo" src={rijksLogo} alt="Rijksmuseum logo" />
      <h4>
        Explore the rich art collection of Rijksmuseum and discover art history.
      </h4>
      <p>
        © 2025 Rijksmuseum Collection Viewer. Designed by CaliforNya. All rights
        reserved.
      </p>
    </footer>
  );
};

export default Footer;

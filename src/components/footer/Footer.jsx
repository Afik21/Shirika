import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <span>2023 &copy; Shirika.</span>
        <div>
          <span>Powered by </span>
          <Link to="/" className="link">
            Afik Foundation
          </Link>
        </div>
        <Link to="/" className="link">
          Terms and conditions of use
        </Link>
      </div>
    </div>
  );
};

export default Footer;

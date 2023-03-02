import React from "react";
import { Link } from "react-router-dom";
import ControlLanguage from "../languages/ControlLanguage";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <Link to="/" className="link logo">
          Shirika
        </Link>
        <div className="navigation">
          <Link to="/login" className="link btn-sign in">
            Sign in
          </Link>
          <Link to="/register" className="link btn-sign up">
            Sign up
          </Link>
          <ControlLanguage />
        </div>
      </div>
    </div>
  );
};

export default Header;

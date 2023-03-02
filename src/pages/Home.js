import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { Link } from "react-router-dom";
import { IoLogoApple, DiAndroid } from "../middlewares/icons";

const Home = () => {
  return (
    <div className="app">
      <Header />
      <div className="home-body">
        <div className="body-banner">
          <img
            src={
              process.env.PUBLIC_URL +
              "/gros-plan-jolie-jeune-femme-insouciante-assise-sol.jpg"
            }
            alt="banner"
          />
        </div>
        <div className="body-content">
          <div className="content">
            <h2 className="title t-1">
              It's easy talking to your friends with Shirika
            </h2>
            <p className="title t-2">
              Chat AI Solution with language's borderless...
            </p>
            <p className="title t-3">Download in your prefered platform</p>
            <div className="mobile-download">
              <Link to="" className="link btn-download ios">
                <IoLogoApple className="icon" /> <span>IoS</span>
              </Link>
              <Link to="" className="link btn-download android">
                <DiAndroid className="icon" /> <span>Android</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="ruban">
        <div className="ruban-left">
          <img src={process.env.PUBLIC_URL + "/6976388_4575.jpg"} />
        </div>
        <div className="ruban-right">
          <p className="title t-1">
            Language can't stop me from talking to my neighbor from any part of
            the world...
          </p>
          <hr />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;

import React, { useState } from "react";
import Header from "../components/header/Header.jsx";
import Footer from "../components/footer/Footer.jsx";
import { Link } from "react-router-dom";
import { MdOutlinePhotoCamera } from "../middlewares/icons";

const Register = () => {
  const [step, setStep] = useState(0);

  const next = () => setStep((prev) => prev + 1);
  let fragments = {
    0: (
      <div className="step step-one">
        <h2 className="title t-1">Welcome to Shirika!</h2>
        <img src={process.env.PUBLIC_URL + "/6976388_4575.jpg"} />
        <p className="title t-2">
          Read our <Link to="">Terms and conditions of use</Link>, and Tap
          "Agree and Continue" to accept it.
        </p>
        <button className="button btn-next" onClick={next}>
          Agree and Continue
        </button>
      </div>
    ),
    1: (
      <form className="step step-two">
        <h2 className="title t-1">
          Enter your phone or/and your e-mail address
        </h2>
        <p className="title t-2">
          Shirika will need to verify your phone number or your e-mail
        </p>
        <div className="input-div">
          <select className="input-select">
            <option disabled>Choose a country</option>
            {/* <option></option> */}
          </select>
        </div>
        <div className="code-phone">
          <div className="code">+243</div>
          <div className="phone">
            <div className="input-div">
              <input
                type="text"
                className="input-form"
                autoComplete="none"
                placeholder=" "
                name="telephone"
              />
              <label htmlFor="telephone" className="label-form">
                Phone number
              </label>
            </div>
          </div>
        </div>
        <div className="input-div">
          <input
            type="text"
            className="input-form"
            autoComplete="none"
            placeholder=" "
            name="mail"
          />
          <label htmlFor="mail" className="label-form">
            E-mail
          </label>
        </div>
        <button type="button" className="button btn-next" onClick={next}>
          Next
        </button>
      </form>
    ),
    2: (
      <form className="step step-three">
        <h2 className="title t-1">
          Verifying your phone or your e-mail address
        </h2>
        <p className="title t-2">
          Can't send an SMS with your code because you've tried to register{" "}
          <strong>+243 8161-94942</strong> recently.{" "}
          <span>Wrong number or e-mail ?</span>
        </p>
        <div className="otp-code">
          <input
            type="text"
            className="input-form"
            autoComplete="none"
            placeholder="-"
            name=""
          />
          <input
            type="text"
            className="input-form"
            autoComplete="none"
            placeholder="-"
            name=""
          />
          <input
            type="text"
            className="input-form"
            autoComplete="none"
            placeholder="-"
            name=""
          />
          <input
            type="text"
            className="input-form"
            autoComplete="none"
            placeholder="-"
            name=""
          />
          <input
            type="text"
            className="input-form"
            autoComplete="none"
            placeholder="-"
            name=""
          />
          <input
            type="text"
            className="input-form"
            autoComplete="none"
            placeholder="-"
            name=""
          />
        </div>
        <p className="title t-2">Enter 6-digit code</p>
        <button className="button btn-next" onClick={next}>
          Next
        </button>
      </form>
    ),
    3: (
      <form className="step step-four">
        <h2 className="title t-1">Profile Info</h2>
        <p className="title t-2">
          Please provide your name and an optional profite photo
        </p>
        <div className="avatar">
          <div className="img display-flex justify-content-center align-items-center">
            <img src={process.env.PUBLIC_URL + "/user.png"} />
          </div>
          <div className="browser">
            <input type="file" id="input-file" className="input-file" />
            <label htmlFor="input-file" className="label">
              <MdOutlinePhotoCamera className="icon" />
            </label>
          </div>
        </div>
        <div className="profile-info">
          <div className="info">
            <div className="input-div">
              <input
                type="text"
                className="input-form"
                autoComplete="none"
                placeholder=" "
                name="telephone"
              />
              <label htmlFor="telephone" className="label-form">
                Phone number
              </label>
              <label htmlFor="telephone" className="label-icon">
                20
              </label>
            </div>
          </div>
          <div className="emoji">&#128512;</div>
        </div>
        <Link to="/chat" className="button btn-next">
          Next
        </Link>
      </form>
    ),
  };
  return (
    <div className="">
      <Header />
      <div className="regisetr-body">{fragments[step]}</div>
      <Footer />
    </div>
  );
};

export default Register;

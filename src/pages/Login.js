import React, { useState } from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { QRCodeCanvas } from "qrcode.react";

const Login = () => {
  const [loginOption, setLoginOption] = useState(false);
  return (
    <div>
      <Header />
      <div className="login-body">
        <form className="login-form">
          <h2 className="title t-2">
            To use Shirika on your computer, choose connect way :
          </h2>
          <div className="login-options">
            <div
              className={loginOption ? "login-qr" : "login-qr active"}
              onClick={() => setLoginOption(!loginOption)}
            >
              Connect with QRCode
            </div>
            <div
              className={loginOption ? "login-code active" : "login-code"}
              onClick={() => setLoginOption(!loginOption)}
            >
              Connect with Code
            </div>
          </div>
          {loginOption ? (
            <div className="code-option">
              <div className="input-div">
                <input
                  type="text"
                  className="input-form"
                  autoComplete="none"
                  placeholder=" "
                  name="code"
                />
                <label htmlFor="code" className="label-form">
                  Enter the code that you have recevied in your mail
                </label>
              </div>
              <button className="button btn-connect">Connect</button>
            </div>
          ) : (
            <div className="qrcode-option">
              <div className="left">
                <ol>
                  <li>Open Shirika on your phone</li>
                  <li>
                    Tap <strong>Menu</strong> <span></span> or setting{" "}
                    <span></span> and select <strong>Linked Devices</strong>
                  </li>
                  <li>Click on connect a device</li>
                  <li>Point your phone to this screen to capture the code</li>
                </ol>
              </div>
              <div className="right">
                <QRCodeCanvas
                  value={"https://picturesofpeoplescanningqrcodes.tumblr.com/"}
                  size={200}
                  bgColor={"#ffffff"}
                  fgColor={"#000000"}
                  level={"L"}
                  includeMargin={false}
                  imageSettings={{
                    src: "https://static.zpao.com/favicon.png",
                    x: undefined,
                    y: undefined,
                    height: 24,
                    width: 24,
                    excavate: true,
                  }}
                />
              </div>
            </div>
          )}
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Login;

import React from "react";
import Button from "../components/button";
import InputText from "../components/InputText";
import "./header.css";

function Header() {
  return (
    <div className="container">
      <div>
        <div className="header-first">
          <a href="http://remoteroofing.com/">
            <div>
              <img src={require("../assets/logo.png")} />
            </div>
          </a>
          <div>
            <img src={require("../assets/phone.png")} />
          </div>
          <div>
            <a href="tel:+1-800-401-7716">
              <div>
                <strong>+1 (800) 401-7716</strong>
              </div>
            </a>
          </div>
        </div>

        <div className="header-second">
          <div className="home">Home</div>
          <div className="services">Services</div>
          <div className="works">How it works</div>
        </div>
        <div className="header-body">
          <div>
            <h1> Free roof Repair & local Roofing Quote</h1>
            <h2>
              Get your roof inspected remotely and connect with our trusted
              roofers
            </h2>
          </div>
        <div className='form-wrapper'>
          <form className="header-form">
            <InputText placeholder="Your Address" />
            <Button title="Get Inspection" />
          </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header;

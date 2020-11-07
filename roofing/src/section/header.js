import React from "react";
import Button from "../components/button";
import InputText from "../components/InputText";
import "./header.css";
import Logo from "../assets/logo.png";
import Phone from "../assets/phone.png";
import location from "../assets/location.png";
import Card from "../components/card";

function Header() {
  return (
    <div className='section1'>
    <div className="container">
      <div className="header-first">
        <div className="upper-left">
          <a href="http://remoteroofing.com/">
            <img className="logo" src={Logo} />
          </a>
        </div>
        <div className="upper-right">
          <div>
            <img className="phone-icon" src={Phone} />
          </div>
            <a href="tel:+1-800-401-7716" >
              <div className="phone-number">
                <strong >+1 (800) 401-7716</strong>
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
        <div className="body-text">
          <h1> Free roof Repair Inspection & Local Roofing Quote</h1>
          <h3>
            Get your roof inspected remotely and connect with our trusted
            roofers
          </h3>
        </div>
        <div className="form-wrapper">
          <form className="header-form">
            <img className='location-logo' src={location}/>
            <InputText placeholder="Your Address" />
            <Button title="Get Inspection" />
          </form>
        </div>
      </div>
      <div>
        <Card/>
      </div>
    </div>
    </div>
  );
}
export default Header;

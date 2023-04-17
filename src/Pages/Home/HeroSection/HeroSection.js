import React from "react";
import "./HeroSection.css";
import chair from "../../../assets/images/chair.png";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="row">
          <div className="col-md-6 d-flex align-items-center">
            <div>
              <h1>Your New Smile Starts Here</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the
              </p>
              <button className="btn btn-success">GET STARTED</button>
            </div>
          </div>
          <div className="col-md-6 ">
            <div>
              <img className="img-fluid" src={chair} alt="Chair" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

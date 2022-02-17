import React from "react";
import Button from "../Button/Button";
import "./HeroSection.css";
import "../../App";

const HeroSection = () => {
  return (
    <div className="hero-container">
      <video src="/public/videos/video-2.mp4 auto play loop muted" />
      <h1>ADVENTURE CALLING</h1>
      <p>Are you ready?</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          {" "}
          GET STARTED
        </Button>

 <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          {" "}
          WATCH TRAILER <i className="far fa-play-circle" />
        </Button>


      </div>
    </div>
  );
};

export default HeroSection;

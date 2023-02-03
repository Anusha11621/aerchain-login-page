import { Typography } from "@mui/material";
import React, { Component } from "react";
import dashboardImg from "../MiddlePart/Dashboard.svg";
import viewpageImg from "../MiddlePart/viewpage.svg";
import "./sliderStyle.css";
import FrameSvg from "../MiddlePart/frame.svg";

class Slider extends Component {
  render() {
    return (
      <>
        <div
          style={{
            position: "relative",
          }}
        >
          <img
            style={{
              position: "absolute",
              right: "50px",
              top: "-20px",
            }}
            src={FrameSvg}
            alt="Frame1"
          />
          <div style={{ marginBottom: "50px" }} class="carousel">
            <div class="carousel__item">
              <img className="slider-images" src={dashboardImg} alt="Image1" />
            </div>
            <div class="carousel__item">
              <img className="slider-images" src={viewpageImg} alt="Image2" />
            </div>
            <div class="carousel__item">
              <img className="slider-images" src={dashboardImg} alt="Image1" />
            </div>
            <div class="carousel__item">
              <img className="slider-images" src={viewpageImg} alt="Image2" />
            </div>
            <div class="carousel__item">
              <img className="slider-images" src={dashboardImg} alt="Image1" />
            </div>
            <div class="carousel__item">
              <img className="slider-images" src={viewpageImg} alt="Image2" />
            </div>
            <div class="carousel__item">
              <img className="slider-images" src={dashboardImg} alt="Image1" />
            </div>
            <div class="carousel__item">
              <img className="slider-images" src={viewpageImg} alt="Image2" />
            </div>
            <div class="carousel__item">
              <img className="slider-images" src={viewpageImg} alt="Image2" />
            </div>
          </div>
          <img
            style={{ position: "absolute", left: "-25px", bottom: "50px" }}
            src={FrameSvg}
            alt="Frame2"
          />
        </div>
      </>
    );
  }
}

export default Slider;

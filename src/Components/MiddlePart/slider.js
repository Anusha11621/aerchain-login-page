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
        <img
          style={{
            position: "absolute",
            right: "42.7%",
            top: "175px",
          }}
          src={FrameSvg}
          alt="Frame1"
        />
        <div style={{ marginBottom: "50px" }} class="carousel">
          <div class="carousel__item">
            <img style={{ height: "500px" }} src={dashboardImg} alt="Image1" />
          </div>
          <div class="carousel__item">
            <img style={{ height: "500px" }} src={viewpageImg} alt="Image2" />
          </div>
          <div class="carousel__item">
            <img style={{ height: "500px" }} src={dashboardImg} alt="Image1" />
          </div>
          <div class="carousel__item">
            <img style={{ height: "500px" }} src={viewpageImg} alt="Image2" />
          </div>
          <div class="carousel__item">
            <img style={{ height: "500px" }} src={dashboardImg} alt="Image1" />
          </div>
          <div class="carousel__item">
            <img style={{ height: "500px" }} src={viewpageImg} alt="Image2" />
          </div>
          <div class="carousel__item">
            <img style={{ height: "500px" }} src={dashboardImg} alt="Image1" />
          </div>
          <div class="carousel__item">
            <img style={{ height: "500px" }} src={viewpageImg} alt="Image2" />
          </div>
          <div class="carousel__item">
            <img style={{ height: "500px" }} src={viewpageImg} alt="Image2" />
          </div>
        </div>
        <img
          style={{ position: "absolute", left: "17.5%", bottom: "300px" }}
          src={FrameSvg}
          alt="Frame2"
        />
      </>
    );
  }
}

export default Slider;

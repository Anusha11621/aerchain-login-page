import { Typography } from "@mui/material";
import React, { Component } from "react";
import dashboardImg from "../MiddlePart/Dashboard.svg";
import viewpageImg from "../MiddlePart/viewpage.svg";
import "./slider2.css";

class Slider extends Component {
  constructor() {
    super();
    this.state = {
      currentImage: 1,
      name: "Dashboard",
    };
  }

  // componentDidMount() {
  //   this.interval1 = setInterval(() => {
  //     this.setState((prevState) => ({
  //       currentImage: prevState.currentImage === 1 ? 2 : 1,
  //     }));
  //   }, 2000);
  // }

  // componentWillUnmount() {
  //   clearInterval(this.interval1);
  // }
  render() {
    return (
      <>
        {/* <div className="card image-container">
          <img
            className={`image ${
              this.state.currentImage === 1 ? "card-info" : "card-bio"
            }`}
            src={dashboardImg}
            alt="Image 1"
          />
          <img
            className={`image ${
              this.state.currentImage === 2 ? "card-bio" : "card-info"
            }`}
            src={viewpageImg}
            alt="Image 2"
          />
        </div>
        <Typography
          style={{
            color: "#FFFFFF",
            fontSize: "18px",
            height: "18px",
            marginBottom: "31.61px",
          }}
        >
          {this.state.name}
        </Typography> */}
        <div class="carousel">
          <div class="carousel__item">
            <img src={dashboardImg} alt="Image1" />
          </div>
          <div class="carousel__item">
            <img src={viewpageImg} alt="Image2" />
          </div>
          <div class="carousel__item">
            <img src={dashboardImg} alt="Image1" />
          </div>
          <div class="carousel__item">
            <img src={viewpageImg} alt="Image2" />
          </div>
          <div class="carousel__item">
            <img src={dashboardImg} alt="Image1" />
          </div>
          <div class="carousel__item">
            <img src={viewpageImg} alt="Image2" />
          </div>
          <div class="carousel__item">
            <img src={dashboardImg} alt="Image1" />
          </div>
          <div class="carousel__item">
            <img src={viewpageImg} alt="Image2" />
          </div>
          <div class="carousel__item">
            <img src={viewpageImg} alt="Image2" />
          </div>
        </div>
        {/* <div class="wrapper">
          <div class="carousel">
            <div class="carousel__item">
              <img src={dashboardImg} alt="Image1" />
            </div>
            <div class="carousel__item">
              <img src={viewpageImg} alt="Image2" />
            </div>
            <div class="carousel__item">
              <img src={viewpageImg} alt="Image2" />
            </div>
            <div class="carousel__item">
              <img src={viewpageImg} alt="Image2" />
            </div>
            <div class="carousel__item">
              <img src={viewpageImg} alt="Image2" />
            </div>
            <div class="carousel__item">
              <img src={viewpageImg} alt="Image2" />
            </div>
            <div class="carousel__item">
              <img src={viewpageImg} alt="Image2" />
            </div>
            <div class="carousel__item">
              <img src={viewpageImg} alt="Image2" />
            </div>
            <div class="carousel__item">
              <img src={viewpageImg} alt="Image2" />
            </div>
          </div>
        </div> */}
      </>
    );
  }
}

export default Slider;

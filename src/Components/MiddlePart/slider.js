import { Typography, Box } from "@mui/material";
import { Stack, width } from "@mui/system";
import React, { Component } from "react";
import dashboardImg from "../MiddlePart/Dashboard.svg";
import viewpageImg from "../MiddlePart/viewpage.svg";
import "./sliderStyle.css";

class Slider extends Component {
  constructor() {
    super();
    this.state = {
      currentImage: 1,
      name: "Dashboard",
    };
  }

  componentDidMount() {
    this.interval1 = setInterval(() => {
      this.setState((prevState) => ({
        currentImage: prevState.currentImage === 1 ? 2 : 1,
      }));
    }, 2000);
    this.interval2 = setInterval(() => {
      this.setState((prevState) => ({
        name: prevState.name === "Dashboard" ? "View Page" : "Dashboard",
      }));
    }, 2000);
  }

  componentWillUnmount() {
    clearInterval(this.interval1);
    clearInterval(this.interval2);
  }
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
        <div class="card image-container">
          <div class="card-info">
            <img src={dashboardImg} />
          </div>
          <div class="card-bio">
            <img src={viewpageImg} />
          </div>
        </div>
        <Typography
          style={{
            color: "#FFFFFF",
            fontSize: "18px",
            height: "18px",
            marginBottom: "31.61px",
          }}
        ></Typography>
      </>
    );
  }
}

export default Slider;

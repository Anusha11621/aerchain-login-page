import React, { Component } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";

import Typography from "@mui/material/Typography";
import BlackCirclesSvg from "../MiddlePart/blackCircle.svg";
import WhiteCirclesSvg from "../MiddlePart/whiteCircle.svg";
import FrameSvg from "../MiddlePart/frame.svg";

class ProfileCard extends Component {
  render() {
    return (
      <>
        <img
          style={{ position: "absolute", right: "22%", top: "170px" }}
          src={FrameSvg}
          alt="Frame1"
        />
        <div>
          <Card
            sx={{
              position: "relative",
              minWidth: "325px",
              height: "400px",
              marginBottom: "88.57px",
              marginTop: "6px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1651684215020-f7a5b6610f23?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
              alt="Not Found"
              style={{
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                marginTop: "29.12px",
                marginBottom: "10.91px",
                objectFit: "cover",
              }}
            />
            <Typography
              style={{
                // width: "214.86px",
                height: "18.8px",
                fontWeight: "bold",
                fontSize: "16px",
                marginBottom: "10px",
              }}
            >
              UX Circle has just great!
            </Typography>
            <Typography
              style={{
                width: "275.84px",
                height: "100px",
                fontSize: " 14px",
                textAlign: "center",
                marginBottom: "15.89px",
                color: "rgba(0, 0, 0, 0.5)",
                lineHeight: "20px",
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipiscing elit posuere vel
              venenatis eu sit massa volutpat massa rhoncus odio feugiat tellus,
              elit massa sed.
            </Typography>
            <Typography
              style={{
                height: "14px",
                fontWeight: 700,
                fontSize: "12.0857px",
                marginBottom: "5.21px",
              }}
            >
              John Carter
            </Typography>
            <Typography
              style={{
                height: "14px",
                fontWeight: 400,
                fontSize: "12.0857px",
                marginBottom: "28.97px",
              }}
            >
              San Francisco, CA
            </Typography>
            <div style={{ display: "flex", gap: "8.73px" }}>
              <img src={BlackCirclesSvg} alt="Image1" />
              <img src={WhiteCirclesSvg} alt="Image2" />
              <img src={WhiteCirclesSvg} alt="Image3" />
            </div>
          </Card>
          <img
            style={{ position: "absolute", right: "42%", bottom: "300px" }}
            src={FrameSvg}
            alt="Frame2"
          />
        </div>
      </>
    );
  }
}

export default ProfileCard;

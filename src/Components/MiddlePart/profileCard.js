import React, { Component } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";

import Typography from "@mui/material/Typography";
import BlackCirclesSvg from "../MiddlePart/blackCircle.svg";
import WhiteCirclesSvg from "../MiddlePart/whiteCircle.svg";

class ProfileCard extends Component {
  render() {
    return (
      <div>
        <Card
          sx={{
            minWidth: "282px",
            height: "329px",
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
              width: "67.14px",
              height: "67.14px",
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
              fontSize: "14.78px",
              marginBottom: "5.44px",
            }}
          >
            UX Circle has just great!
          </Typography>
          <Typography
            style={{
              width: "257.84px",
              height: "81px",
              fontSize: " 12.0857px",
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
            <img src={BlackCirclesSvg} />
            <img src={WhiteCirclesSvg} />
            <img src={WhiteCirclesSvg} />
          </div>
        </Card>
      </div>
    );
  }
}

export default ProfileCard;

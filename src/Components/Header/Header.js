import { WidthFull } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { width } from "@mui/system";
import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <>
        <div
          // sx={{ fontWeight: "regular" }}
          style={{
            width: "431px",
            fontSize: "30px",
            color: "#FFFFFF",
            height: "41px",
            marginTop: "44px",
            marginBottom: "40px",
            fontWeight: "300",
            textAlign: "center",
          }}
        >
          Welcome to <span style={{ fontWeight: "400" }}>Aerchain</span>
        </div>
      </>
    );
  }
}

export default Header;

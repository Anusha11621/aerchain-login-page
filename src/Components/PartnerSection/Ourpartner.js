import { Typography } from "@mui/material";
import React, { Component } from "react";
import ourpartner1 from "../PartnerSection/ourpartner1.svg";
import ourpartner2 from "../PartnerSection/ourpartner2.svg";
import ourpartner3 from "../PartnerSection/ourpartner3.svg";
import ourpartner4 from "../PartnerSection/ourpartner4.svg";
import ourpartner5 from "../PartnerSection/ourpartner5.svg";
import ourpartner6 from "../PartnerSection/ourpartner6.svg";
import ourpartner7 from "../PartnerSection/ourpartner7.svg";

class Ourpartner extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "11.39px",
        }}
      >
        <Typography
          style={{
            fontSize: "10px",
            color: "#FFFFFF",
            width: "161px",
            fontWeight: 600,
            // marginRight: "32px",
          }}
        >
          Partner in our success journey
        </Typography>
        <div
          style={{
            display: "flex",
            // gap: "11.39px",
            // marginRight: "30px"
            width: "365.19px",
            justifyContent: "space-evenly",
          }}
        >
          <img src={ourpartner1} alt="Not Found" />
          <img src={ourpartner2} alt="Not Found" />
          <img src={ourpartner3} alt="Not Found" />
          <img src={ourpartner4} alt="Not Found" />
          <img src={ourpartner5} alt="Not Found" />
          <img src={ourpartner6} alt="Not Found" />
          <img src={ourpartner7} alt="Not Found" />
        </div>
      </div>
    );
  }
}

export default Ourpartner;

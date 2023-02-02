import React, { Component } from "react";
import Header from "./Header/Header";
import Slider from "./MiddlePart/slider";
import Ourpartner from "./PartnerSection/Ourpartner";
import background from "../background.svg";

class IAmSupplier extends Component {
  render() {
    return (
      <div style={{ display: "flex" }}>
        <div
          style={{
            width: "100%",
            height: "100vh",
            backgroundImage: `url(${background})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundSize: "cover",
          }}
        >
          <Header />
          <Slider />
          <Ourpartner />
        </div>
        <div style={{ width: "40%" }}>
          <p>Anusha Part</p>
        </div>
      </div>
    );
  }
}

export default IAmSupplier;

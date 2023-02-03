import React, { Component } from "react";
import Header from "./Header/Header";
import Slider from "./MiddlePart/slider";
import Ourpartner from "./PartnerSection/Ourpartner";
import background from "../background.svg";
import CustomerForm from "./Forms/CustomerForm";
class IAmSupplier extends Component {
  render() {
    return (
      <div style={{ display: "flex" }}>
        <div
          className="hidden-component"
          style={{
            backgroundImage: `url(${background})`,
            backgroundRepeat: "no-repeat",
          }}
        >
          <Header />
          <Slider />
          <Ourpartner />
        </div>
        <div className="form-width">
          <CustomerForm />
        </div>
      </div>
    );
  }
}

export default IAmSupplier;

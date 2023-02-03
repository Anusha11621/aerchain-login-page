import React, { Component } from "react";
import Header from "./Header/Header";
import ProfileCard from "./MiddlePart/profileCard";
import Ourpartner from "./PartnerSection/Ourpartner";
import background from "../backgroundBlueImage.svg";
import Froms from "../Components/Forms/Forms";
class IAmCustomer extends Component {
  render() {
    return (
      <div style={{ display: "flex" }}>
        <div className="form-width">
          <Froms />
        </div>
        <div className="hidden-component">
          <Header />
          <ProfileCard />
          <Ourpartner />
        </div>
      </div>
    );
  }
}

export default IAmCustomer;

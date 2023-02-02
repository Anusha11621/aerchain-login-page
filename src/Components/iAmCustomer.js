import React, { Component } from "react";
import Header from "./Header/Header";
import ProfileCard from "./MiddlePart/profileCard";
import Ourpartner from "./PartnerSection/Ourpartner";
import background from "../backgroundBlueImage.svg";
import Froms from '../Components/Forms/Forms'
class IAmCustomer extends Component {
  render() {
    return (
      <div style={{ display: "flex" }}>
        <div style={{ width: "40%" }}>
          <Froms/>
        </div>
        <div
          style={{
            position: "static",
            width: "100%",
            height: "100vh",
            minHeight: "700px",
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
          <ProfileCard />
          <Ourpartner />
        </div>
      </div>
    );
  }
}

export default IAmCustomer;

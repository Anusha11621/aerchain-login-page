// // import "./App.css";
// // import Navbar from "./Components/Navbar";
// import Header from "./Components/Header/Header";
// import Navbar from "./Components/Navbar";
// import { Paper } from "@mui/material";
// import Slider from "./Components/MiddlePart/slider";
// import Ourpartner from "./Components/PartnerSection/Ourpartner";
// import IAmSupplier from "./Components/iAmSupplier";
// import IAmCustomer from "./Components/iAmCustomer";
// import { Stack } from '@mui/system';
// import './App.css';
// // import Navbar from './Components/Navbar';
// import Animations from './Components/Animations/Animations';
// import Forms from './Components/Forms/Forms';
// function App() {
//   return (
//     <>
//       <Navbar />
//       <IAmSupplier/>
//       <IAmCustomer/>
//     </>
//   );
import "./App.css";

import IAmSupplier from "./Components/iAmSupplier";
import IAmCustomer from "./Components/iAmCustomer";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Button, Typography } from "@mui/material";
import logo from "../src/Components/Aerchain.jpg";

// import backgroundImg from "";

import React, { Component } from "react";
let toggleBtn
class App extends Component {
  constructor() {
    super();
    this.state = {
      toggle: false,
    };
  }
  render() {
    return (
      <>
        <Box style={{ flexGrow: 2 }} height="71px">
          <AppBar
            position="static"
            style={{
              height: "71px",
              backgroundColor: "#FCFCFD",
            }}
          >
            <Toolbar className="navbar-container">
              <img src={logo} alt="Not Found" style={{ paddingLeft: "14px" }} />

              <div
                style={{ display: "flex", gap: "6px", alignItems: "center" }}
              >
                <Typography style={{ color: "black" }}>Supplier</Typography>
                <label class="switch">
                  <input type="checkbox" id="toggle" />
                  <span class="slider"></span>
                </label>
                <Typography style={{ color: "black" }}>Customer</Typography>
              </div>
            </Toolbar>
          </AppBar>
        </Box>
        <IAmSupplier />
        {/* <IAmCustomer /> */}
      </>
    );
  }
}

export default App;

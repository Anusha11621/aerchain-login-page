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

class App extends Component {
  constructor() {
    super();
    this.state = {
      toggle: false,
    };
  }
  handleToggle = () => {
    this.setState((state) => ({
      toggle: !state.toggle,
    }));
  };
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
                  <input type="checkbox" />
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

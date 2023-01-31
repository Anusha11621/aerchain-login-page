import * as React from "react";
import AppBar from "@mui/material/AppBar";

import Box from "@mui/material/Box";

import Toolbar from "@mui/material/Toolbar";
import { Button } from "@mui/material";
import logo from "./Aerchain.jpg";
import "../App.css";
import { Component } from "react";

class Navbar extends Component {
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
      <Box sx={{ flexGrow: 1 }} height="71px">
        <AppBar
          position="static"
          sx={{
            height: "71px",
            backgroundColor: "#FCFCFD",
          }}
        >
          <Toolbar className="navbar-container">
            <img src={logo} alt="Not Found" style={{ paddingLeft: "14px" }} />
            <Button
              onClick={this.handleToggle}
              style={{
                textTransform: "none",
                backgroundColor: "#FE9023",
                color: "#FFFFFF",
                padding: `${this.state.toggle ? " 8px 29.9px" : " 8px 34.4px"}`,
                marginRight: "18px",
                borderRadius: "6.4px",
              }}
            >
              {this.state.toggle ? "I am Customer" : "I am Supplier"}
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    );
  }
}

export default Navbar;

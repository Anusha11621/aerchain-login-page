import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Button } from "@mui/material";
import logo from "./Aerchain.jpg";
import "../App.css";
export default function Navbar() {
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
          <button className="navbar-button">
            <span className="btn-text">I am Customer</span>
          </button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

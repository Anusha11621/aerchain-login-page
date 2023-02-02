import "./App.css";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar";
import { Paper } from "@mui/material";
import Slider from "./Components/MiddlePart/slider";
import Ourpartner from "./Components/PartnerSection/Ourpartner";
import IAmSupplier from "./Components/iAmSupplier";
import IAmCustomer from "./Components/iAmCustomer";
// import backgroundImg from "";

function App() {
  return (
    <>
      <Navbar />
      <IAmSupplier />
      {/* <IAmCustomer /> */}
    </>
  );
}

export default App;

// import "./App.css";
// import Navbar from "./Components/Navbar";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar";
import { Paper } from "@mui/material";
import Slider from "./Components/MiddlePart/slider";
import Ourpartner from "./Components/PartnerSection/Ourpartner";
import IAmSupplier from "./Components/iAmSupplier";
import IAmCustomer from "./Components/iAmCustomer";
import { Stack } from '@mui/system';
import './App.css';
// import Navbar from './Components/Navbar';
import Animations from './Components/Animations/Animations';
import Forms from './Components/Forms/Forms';
function App() {
  return (
    <>
      <Navbar />
      <IAmSupplier/>
      <IAmCustomer/>
    </>
  );
}

export default App;

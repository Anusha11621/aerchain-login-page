// import "./App.css";
// import Navbar from "./Components/Navbar";

// function App() {
//   return (
//     <div>
//       <Navbar />
//     </div>
import { Stack } from '@mui/system';
import './App.css';
import Navbar from './Components/Navbar';
import Animations from './Components/Animations/Animations';
import Forms from './Components/Forms/Forms';
function App() {
  return (
    <>
      {/* <Navbar></Navbar> */}
      <Stack direction={'row'} spacing={2} justifyContent="space-between">
        <Forms></Forms>
        {/* <Animations></Animations> */}
      </Stack>
    </>
  );
}

export default App;

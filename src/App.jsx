import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.scss";
import Landing from "./pages/Landing/Landing";
import Details from "./pages/Details/Details";
import { Box, Container } from "@mui/material";
import AppInput from "./components/AppInput/AppInput";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        

        <Landing />


        {/* <Container maxWidth="lg">
          
        <AppInput label="Full Name"  />
        <AppInput />

        </Container> */}


      </div>
    </>
  );
}

export default App;

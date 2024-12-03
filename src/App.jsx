import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.scss";
import Landing from "./pages/Landing/Landing";
import Details from "./pages/Details/Details";
import { Box } from "@mui/material";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        

        <Landing />


      </div>
    </>
  );
}

export default App;

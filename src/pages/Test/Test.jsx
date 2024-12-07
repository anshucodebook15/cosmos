import React from "react";
import "./Test.scss";
import { Typo_Basefont, Typo_Heading, Typo_Smallfont, Typo_Subheading, Typo_Subtitle } from "../../components/Typo/Typo";
import { Container } from "@mui/material";

const Bookbtn = () => {
  return (
    <>
      <div className="Bookbtn"></div>
    </>
  );
};

const HeadingBar = () => {
  return (
    <>
      <div className="HeadingBar"></div>
    </>
  );
};


const NewTicketBar = () => {
  return (
    <>

      <Container>
        <h2></h2>
      </Container>

    </>
  )
}

const Test = () => {
  return (
    <div className="Test">
      <h2>Test </h2>

      <div className="glassmorph">

        <Typo_Heading text="Brunch Park" />
        <Typo_Subtitle text="anshu" />
        <Typo_Subheading text="About" />
        <Typo_Basefont text="Gather your loved ones and step into Brunch Park – a celebration of food, fun, and family, brought to you by The Daily All Day x Maushi For the Foodies: Dive into a mouthwatering spread featuri" />


        {/*  */}
        <NewTicketBar />

      </div>
    </div>
  );
};

export default Test;

/**
 * 
 * Raw Code
 * 
 *         <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
 * 
 * 
 */

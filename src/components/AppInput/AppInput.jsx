import React from "react";
import "./AppInput.scss";

const AppInput = () => {
  return (
    <div className="AppInput">
      <h2>AppInput </h2>

      <label htmlFor="">Name</label>
      <input type="text" placeholder="test" className="AppInput" />
    </div>
  );
};

export default AppInput;

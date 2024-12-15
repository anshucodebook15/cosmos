import React, { useState } from "react";
import "./Paymentgateway.scss";
import { cashfree } from "../../cashfree/cashfree";
import axios from "axios";

const Paymentgateway = () => {
  const [loading, setLoading] = useState(false);
  const [sessionID, setSessionID] = useState("");
  const [error, setError] = useState("");

  // Define version
  let version = cashfree.version();

  const getSessionID = (e) => {
    e.preventDefault();

    // Loading On
    setLoading(true);

    axios
      .post("", { version })
      .then((res) => {
        setLoading(false);
        setSessionID(res.data);
      })
      .catch((err) => {
        setLoading(false);
        setError("Sommething Went Wrong...please try again");
      });
  };

  const handlePayment = () => {
    let checkoutOptions = {
      paymentSessionId: "payment-session-id",
      returnUrl:
        "https://test.cashfree.com/pgappsdemos/v3success.php?myorder={order_id}",
    };
    cashfree.checkout(checkoutOptions).then(function (result) {
      if (result.error) {
        alert(result.error.message);
      }
      if (result.redirect) {
        console.log("Redirection");
      }
    });
  };

  return (
    <div className="Paymentgateway">
      <h2>Paymentgateway </h2>
    </div>
  );
};

export default Paymentgateway;

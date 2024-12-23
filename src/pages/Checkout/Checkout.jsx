import React, { useEffect, useState } from "react";
import "./Checkout.scss";
import Container from "@mui/material/Container";
// import Grid from "@mui/material/Grid2";
import Button from "@mui/material/Button";
import { purple } from "@mui/material/colors";
import {
  Typo_Basefont,
  Typo_Heading,
  Typo_Smallfont,
  Typo_Subheading,
  Typo_Subtitle,
} from "../../components/Typo/Typo";
import { Box, Stack } from "@mui/material";
import IconTitle from "../../components/IconTitle/IconTitle";
import { calender, clock, map, ticket } from "../../assets";
import Grid from "@mui/material/Grid2";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import { appcol, ts } from "../../theme/apptheme";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import { NavLink, useNavigate } from "react-router";
import { NavigateTo } from "../../routes/Routes";
import Glassmorph from "../../components/Glassmorph/Glassmorph";
import CheckoutBar from "../../components/CheckoutBar/CheckoutBar";
import {
  addCheckoutDetails,
  checkoutTotalandTickects,
  checkReferCode,
  clearAppState,
  fetchOrder,
  fetchReferCode,
  SelectBooking,
} from "../Booking/BookingSlice";
import { useDispatch, useSelector } from "react-redux";
import { usePriceHook } from "../../hooks/usePriceHook";
import AppInput from "../../components/AppInput/AppInput";
import ActionButton from "../../components/ActionButton/ActionButton";
// import { cashfree } from "../../cashfree/cashfree";
import { load } from "@cashfreepayments/cashfree-js";
import { COSBaseURL } from "../../api/API";

const isEmailValid = (email) => {
  let pattern = "[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,}";
  return !!email.match(pattern);
};

const isMobileValid = (mobile) => {
  let pattern = "^[7-9][0-9]{9}$";
  return !!mobile.match(pattern);
};

const PaymentBar = ({ proceedtopayment, disabled = false }) => {
  return (
    <>
      <div className="CheckoutBar">
        <Box sx={{ padding: 3.6 }}>
          <Container>
            <Box sx={{ marginRight: 4 }}>
              <Stack
                direction={"row"}
                justifyContent={"flex-end"}
                alignItems={"flex-end"}
              >
                <Box>
                  <ActionButton
                    text={"Pay Now"}
                    disabled={disabled}
                    onclick={proceedtopayment}
                  />
                </Box>
              </Stack>
            </Box>
          </Container>
        </Box>
      </div>
    </>
  );
};

const CheckoutForm = ({ details, handleChange }) => {
  return (
    <>
      <Box marginBottom={4}>
        <AppInput
          type="text"
          name="name"
          val={details.name}
          handleChange={handleChange}
          label="Full Name"
          placeholder=""
        />
        <AppInput
          type="email"
          name="email"
          val={details.email}
          handleChange={handleChange}
          label="Email "
          placeholder=""
        />
        <AppInput
          type="number"
          name="mobile"
          val={details.mobile}
          handleChange={handleChange}
          label="Mobile Number"
          placeholder=""
        />
      </Box>
    </>
  );
};

const ReferBox = () => {
  const dispatch = useDispatch();
  const { refer_code } = useSelector(SelectBooking);

  const [referState, setReferState] = useState(true);

  useEffect(() => {
    if (referState.length > 2) {
      setReferState(false);
    }
  }, [refer_code]);

  const handleReferCodeCheck = (e) => {
    let { name, value } = e.target.value;

    console.log("name value", name, value);

    dispatch(checkReferCode({ name, value }));
  };

  // console.log("this is refer code", refer_code);

  return (
    <>
      <Box marginBottom={4}>
        <Grid container spacing={2} alignItems={"center"}>
          <Grid size={8}>
            <AppInput
              type="text"
              name="refer_code"
              val={refer_code}
              handleChange={handleReferCodeCheck}
              label="Enter Refer Code"
              placeholder=""
            />
          </Grid>
          <Grid size={4} alignSelf={"right"}>
            <button disabled={referState} onclick={handleReferCodeCheck}>
              Apply Refer Code
            </button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

const Checkout = () => {
  // const navigate = useNavigate();
  const { formatPrice, calConvenience } = usePriceHook();
  const dispatch = useDispatch();
  const {
    seats,
    error,
    total,
    name,
    email,
    mobile,
    payment_session_id,
    refer_code,
    refer_code_error,
    discount_of,
    refer_code_status,
  } = useSelector(SelectBooking);
  const allticketdata = useSelector(SelectBooking);
  const [paynowbtn, setPaynowbtn] = useState(true);
  const [formerror, setFormerror] = useState("");

  //
  const [onRedirect, setOnRedirect] = useState(false);
  const [reloadStop, setReloadStop] = useState(true);

  // Refer State
  const [referState, setReferState] = useState(true);
  const [referInputState, setReferInputState] = useState(false);

  useEffect(() => {
    if (refer_code.length > 2) {
      setReferState(false);
    }

    if (refer_code_status === "ACTIVE") {
      dispatch(checkoutTotalandTickects());
      setReferState(true);
      setReferInputState(true);
    }
  }, [refer_code, refer_code_status]);

  // This redirect on reload if user not convinced
  useEffect(() => {
    if (reloadStop) {
      const eventAfterOnload = (e) => {
        e.preventDefault();
        e.returnValue = "";
      };

      window.addEventListener("beforeunload", eventAfterOnload);

      let timer;

      if (total.price === 0) {
        timer = setTimeout(() => {
          window.location.href = "/booking";
        }, 0);
      }

      return () => {
        window.removeEventListener("beforeunload", eventAfterOnload);
        clearTimeout(timer);
      };
    }
  }, [total, reloadStop]);

  // For Input Error
  useEffect(() => {
    if (name !== "" && email !== "" && mobile !== "") {
      setPaynowbtn(false);
    }
    setFormerror("");
  }, [name, email, mobile]);

  // get session id
  useEffect(() => {
    if (payment_session_id) {
      handleCashfreePayment();
      return;
    }
    return () => {};
  }, [payment_session_id]);

  // Update react redux state to provide details
  const handleAddCheckoutDetails = (e) => {
    const { name, value } = e.target;
    if (name === "mobile" && value.length === 11) {
      return;
    }
    dispatch(addCheckoutDetails({ name, value }));
  };

  const handleProceedToPayment = () => {
    if (!isEmailValid(email)) {
      setFormerror("Please Enter your correct email");
      return;
    }
    if (!isMobileValid(mobile)) {
      setFormerror("Please enter correct Mobile Number");
      return;
    }

    // Seat configuration
    let seats_order = seats.map((item) => {
      let neworder = {
        areaID: item.areaID,
        count: item.count,
        price: item.price,
      };
      return neworder;
    });

    // Create Customer Order
    let customer_order = {
      name: name,
      email: email,
      mobile: mobile,
      refer_code: refer_code,
      seats: seats_order,
      total: {
        total_tickets: total.tickets,
        convenience_fee: total.convenience_fee,
        total_amount: total.finalprice.toFixed(2),
      },
    };

    dispatch(fetchOrder(customer_order));
    setPaynowbtn(true);
    setReloadStop(false);
  };

  const handleCashfreePayment = async () => {
    const cashfree = await load({
      mode: "sandbox", //or production
    });

    let checkoutOptions = {
      paymentSessionId: payment_session_id,
      returnUrl: `${COSBaseURL}payments/status/{order_id}`,
    };

    cashfree.checkout(checkoutOptions).then(function (result) {
      if (result.error) {
        alert(result.error.message);
      }
      if (result.redirect) {
        console.log("Redirection");
        console.log(result);
      }
    });
  };

  const handleReferCodeCheck = () => {
    dispatch(
      fetchReferCode({
        refer_code: refer_code,
      })
    );
  };

  console.log("allticketdata", allticketdata);

  return (
    <div className="Details">
      <Container maxWidth="lg">
        <Box sx={{ paddingBlock: "1rem" }}>
          <Grid container spacing={2}>
            <Grid size={12}>
              <Box
                sx={{
                  margin: "1rem",
                }}
              >
                <Box sx={{ marginBottom: "2.8rem" }}>
                  <Grid container spacing={1} justifyContent={"space-between"}>
                    <Grid size={{ lg: 4, md: 4, sm: 12, xs: 12 }}>
                      <Box sx={{ paddingTop: 2 }}>
                        {/* Title and Date Box */}
                        <Box sx={{ marginBottom: 0 }}>
                          <Typo_Heading text="Dunes Of Cosmos " />
                        </Box>
                        <Box sx={{ marginBottom: 4 }}>
                          <Typo_Subtitle
                            text="Featuring Paradox and Celebrity DJ"
                            fs={"2rem"}
                          />
                        </Box>
                        <Box sx={{ marginBottom: { lg: 4, sm: 6, xs: 6 } }}>
                          <Box>
                            <div className="IconTitle">
                              <Box sx={{ marginBottom: 2 }}>
                                <div className="flx aic">
                                  <Box sx={{ paddingRight: 2 }}>
                                    <img
                                      src={calender}
                                      alt=""
                                      className="iconwidth20"
                                    />
                                  </Box>
                                  <Typo_Basefont
                                    text={"30th and 31st December 2024"}
                                    fc="white"
                                    fw="500"
                                    fs="1.8rem"
                                  />
                                </div>
                              </Box>
                            </div>
                          </Box>

                          <Box>
                            <div className="IconTitle">
                              <Box sx={{ marginBottom: 2 }}>
                                <div className="flx aic">
                                  <Box sx={{ paddingRight: 2 }}>
                                    <img
                                      src={clock}
                                      alt=""
                                      className="iconwidth20"
                                    />
                                  </Box>
                                  <Typo_Basefont
                                    text={"6:00 PM - 10:00 PM"}
                                    fc="white"
                                    fw="500"
                                  />
                                </div>
                              </Box>
                            </div>
                          </Box>

                          <Box>
                            <IconTitle
                              icon={map}
                              text={
                                <>
                                  <Link
                                    href="https://www.google.com/maps/dir//Lohagal+Panchsheel+Rd,+C+Block,+Panchsheel+Nagar,+Ajmer,+Lohagal,+Rajasthan+305004/@26.5041369,74.5682678,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x396be630b27b083f:0x797a581420e1b4fc!2m2!1d74.6506772!2d26.5041396?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
                                    variant="body2"
                                    sx={{
                                      fontSize: "1.4rem",
                                      color: "#bcbcbc",
                                    }}
                                  >
                                    {
                                      "STAR QUEEN - Lohagal Panchsheel Road C-Block (Ajmer) Rajasthan (305004)"
                                    }
                                  </Link>
                                </>
                              }
                            />
                          </Box>
                        </Box>

                        {/* Billing Details */}
                        <Box
                          sx={{
                            border: 1,
                            borderColor: "white",
                            overflow: "hidden",
                            borderRadius: "10px",
                            height: "100%",
                            padding: 2,
                            marginBottom: 4,
                          }}
                        >
                          <div className="flx flxdc jcsb h100">
                            <Box>
                              <Box sx={{ marginBottom: 2 }}>
                                <Typo_Subheading text={"Bill Summary"} />
                              </Box>

                              <Box marginBottom={4}>
                                <Stack
                                  sx={{ marginBottom: 0.6 }}
                                  direction={"row"}
                                  justifyContent={"space-between"}
                                >
                                  <Typo_Subtitle text="Total Ticket Price" />
                                  <Typo_Subtitle
                                    text={`${formatPrice(total.price)}`}
                                  />
                                </Stack>
                                <Stack
                                  sx={{ marginBottom: 0.6 }}
                                  direction={"row"}
                                  justifyContent={"space-between"}
                                >
                                  <Typo_Basefont
                                    text="(Inc. of GST)"
                                    fc={ts.g100}
                                  />
                                  {/* <Typo_Subtitle text="₹117.94" /> */}
                                </Stack>

                                <Stack
                                  direction={"row"}
                                  justifyContent={"space-between"}
                                  sx={{ marginBottom: 1 }}
                                >
                                  <Typo_Subtitle text="Convenience fee (2%)" />
                                  <Typo_Subtitle
                                    text={`+ ${formatPrice(
                                      total.convenience_fee
                                    )}`}
                                  />
                                </Stack>

                                {total.discount_cost > 0 ? (
                                  <Stack
                                    direction={"row"}
                                    justifyContent={"space-between"}
                                    sx={{ background: "#101010" }}
                                  >
                                    <Typo_Subtitle text="Discount Availed" />
                                    <Typo_Subtitle
                                      text={`- ${formatPrice(
                                        total.discount_cost
                                      )}`}
                                    />
                                  </Stack>
                                ) : (
                                  ""
                                )}
                              </Box>
                            </Box>

                            <Box sx={{ borderTop: 1, paddingTop: 1 }}>
                              <Stack
                                direction={"row"}
                                justifyContent={"space-between"}
                              >
                                <Typo_Subtitle
                                  text={"Amount to be paid"}
                                  fc="white"
                                />
                                <Typo_Subtitle
                                  text={`${formatPrice(total.finalprice)}`}
                                  fc="white"
                                />
                              </Stack>
                            </Box>
                          </div>
                        </Box>
                      </Box>
                    </Grid>

                    {/* Payment Form */}
                    <Grid size={{ lg: 7, md: 7, sm: 12, xs: 12 }}>
                      {/* Refer Box */}
                      <Box
                        sx={{
                          borderBottom: 1,
                          marginBottom: 2,
                          borderColor: "#4f4f4f",
                        }}
                      >
                        {refer_code_error ? (
                          <>
                            <Box
                              sx={{
                                padding: 0.5,
                                background: "red",
                                color: "ffffff",
                                marginBottom: 1,
                              }}
                            >
                              <p>{refer_code_error}</p>
                            </Box>
                          </>
                        ) : (
                          ""
                        )}

                        {refer_code_status === "ACTIVE" ? (
                          <>
                            <Box
                              sx={{
                                padding: 0.5,
                                background: "green",
                                color: "ffffff",
                                marginBottom: 1,
                              }}
                            >
                              <p>Congratulations ⭐🎆 Refer Code Applied!</p>
                            </Box>
                          </>
                        ) : (
                          ""
                        )}

                        <Box marginBottom={4}>
                          <Grid container spacing={2} alignItems={"center"}>
                            <Grid size={8}>
                              <AppInput
                                disabled={referInputState}
                                type="text"
                                name="refer_code"
                                val={refer_code}
                                handleChange={handleAddCheckoutDetails}
                                label="Enter Refer Code"
                                placeholder=""
                              />
                            </Grid>
                            <Grid size={4} alignSelf={"right"}>
                              <button
                                disabled={referState}
                                onClick={handleReferCodeCheck}
                              >
                                Apply Refer Code
                              </button>
                            </Grid>
                          </Grid>
                        </Box>
                      </Box>

                      {formerror ? (
                        <>
                          <Box>{formerror}</Box>
                        </>
                      ) : (
                        ""
                      )}

                      {/* Checkout Form */}
                      <Box>
                        <Box marginBottom={4}>
                          <AppInput
                            type="text"
                            name="name"
                            val={name}
                            handleChange={handleAddCheckoutDetails}
                            label="Full Name"
                            placeholder=""
                          />
                          <AppInput
                            type="email"
                            name="email"
                            val={email}
                            handleChange={handleAddCheckoutDetails}
                            label="Email "
                            placeholder=""
                          />
                          <AppInput
                            type="number"
                            name="mobile"
                            val={mobile}
                            handleChange={handleAddCheckoutDetails}
                            label="Mobile Number"
                            placeholder=""
                          />
                        </Box>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>

      {/* Bottom Spacer */}
      <Box sx={{ padding: { lg: 0, md: 0, sm: 1, xs: 1 } }}></Box>

      <div className="posab">
        <PaymentBar
          proceedtopayment={handleProceedToPayment}
          disabled={paynowbtn}
        />
      </div>
    </div>
  );
};

export default Checkout;

{
  /* <div className="breadcrumb">
          <Box sx={{paddingLeft: 2}}> 
            <Typo_Subtitle text={"Live / Event in Ajmer / Paradox & Milind"} />
          </Box>
        </div>
        
                        {/* About Event  */
}
{
  /* <Grid container>
                  <Grid size={12}>
                    <Box sx={{ paddingBlock: "1rem" }}>
                      <Box sx={{ marginBottom: "1.6rem" }}>
                        <Typo_Subheading text="About" />
                      </Box>

                      <Box
                        sx={{
                          borderRadius: 2,
                          background: "#141414",
                          padding: "1.4rem",
                          marginBottom: "2rem",
                        }}
                      >
                        <Typo_Basefont
                          text="Gather your loved ones and step into Brunch Park – a celebration of food, fun, and family, brought to you by The Daily All Day x Maushi
For the Foodies: Dive into a mouthwatering spread featuring culinary delights from Tsuki, Bai Mu Dan, Mad House Grill, and Juju to name a few.
For the Music Lovers"
                          fw="500"
                        />
                      </Box>
                    </Box>
                  </Grid>
                  <Grid size={6}></Grid>
                </Grid> 


                  let checkoutOptions = {
      paymentSessionId: payment_session_id,
      returnUrl: "http://localhost:5000/api/status/{order_id}",
    };
        
        
        
        
        */
}

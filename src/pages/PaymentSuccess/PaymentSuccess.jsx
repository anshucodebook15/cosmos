import React from "react";
import "./PaymentSuccess.scss";
import Lottie from "react-lottie";
import { Congrats } from "../../json";
import { Box, Container } from "@mui/material";
import {
  Typo_Heading,
  Typo_Subheading,
  Typo_Subtitle,
} from "../../components/Typo/Typo";

const AppSuccessLottie = () => {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: Congrats,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <>
      <Lottie options={defaultOptions} height={400} width={400} />
    </>
  );
};

const PaymentSuccess = () => {
  return (
    <div>
      <AppSuccessLottie />
      <Container>
        <Box textAlign={"center"}>
          <Box>
            <Typo_Heading text="WELCOME TO DUNES OF COSMOS" fs="4rem" />
          </Box>
          <Box sx={{ padding: 2 }}>
            <Typo_Subtitle
              text="Please check your email, we have send your ticket on your email!"
              fs="2.4rem"
            />
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default PaymentSuccess;

// success

/**
 * 
 * 
 * import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const App = () => {
  return (
    <DotLottieReact
      src="https://lottie.host/5afa7e9a-f26d-457a-9253-a86627c7289b/huPV9xAQC8.lottie"
      loop
      autoplay
    />
  );
};

 */

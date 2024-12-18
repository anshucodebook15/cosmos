import React from "react";
import "./PaymentFailure.scss";
import Lottie from "react-lottie";
import { Congrats, Oops } from "../../json";
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
    animationData: Oops,
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

const PaymentFailure = () => {
  return (
    <div>
      <AppSuccessLottie />
      <Container>
        <Box textAlign={"center"}>
          <Box>
            <Typo_Heading
              text="Something Went Wrong ! Please if any query contact us on"
              fs="4rem"
            />
          </Box>
          <Box sx={{ padding: 2 }}>
            <Typo_Subtitle
              text="Email Us : dunesofcosmos@gmail.com"
              fs="2.4rem"
            />
            <Typo_Subtitle text="Call us: +91-8690630405" fs="2.4rem" />
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default PaymentFailure;

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

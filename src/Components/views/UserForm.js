import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import StepOne from "../StepsComponents/StepOne";
import StepTwo from "../StepsComponents/StepTwo";
import StepThree from "../StepsComponents/StepThree";
import StepFour from "../StepsComponents/StepFour";

import NavigationBtnsComponent from "../ButtonsComponents/NavigationBtnsComponent";
import StatusLine from "./StatusLine";
import Error from "./Error";

const WrapperBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  background: #fbfbfd;
`;

const AnimatedComp = styled.div`
  position: relative;
  margin: 0 auto;
  animation: slide 1s normal forwards;

  @keyframes slide {
    0% {
      left: -150%;
    }
    100% {
      left: 0;
    }
  }
`;

const CurrentStep = ({ step }) => {
  switch (step) {
    case 1:
      return <StepOne />;
    case 2:
      return <StepTwo />;
    case 3:
      return <StepThree />;
    case 4:
      return <StepFour />;

    default:
      return `Step ${step} not found`;
  }
};

const UserForm = () => {
  const state = useSelector((state) => state.app);
  const { currentStep, isError, statusLineWidth } = state;

  return (
    <WrapperBox>
      <StatusLine width={statusLineWidth} />

      <AnimatedComp>
        <CurrentStep step={currentStep} />
      </AnimatedComp>

      <NavigationBtnsComponent />

      {isError && <Error />}
    </WrapperBox>
  );
};

export default UserForm;

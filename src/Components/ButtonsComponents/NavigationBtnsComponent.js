import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setError,
  setNextStep,
  setPrevStep,
} from "../../Redux/actionsCreators";
import styled from "styled-components";

const NavigationBtnBox = styled.div`
  width: 100%;
  height: 60px;
  position: relative;
  background: #fff;
  box-shadow: inset 0px -1px 0px #e7e9f0;

  .next-btn,
  .back-btn {
    position: absolute;
    right: 10%;
    top: 50%;
    transform: translateY(-50%);
    background: #61ad15;
    padding: 6px 20px;
    border: 0.5px solid #518b18;
    font-size: 16px;
    line-height: 26px;
    text-align: center;
    color: #fff;
    box-shadow: 0 2px 4px rgba(73, 129, 18, 0.3);
    border-radius: 4px;
    &:focus {
      outline: none;
    }
    &:hover {
      cursor: pointer;
    }
  }

  .back-btn {
    right: auto;
    left: 10%;
    background: #fff;
    border: 1px solid #e7e9f0;
    color: #5d606b;
  }
  .disabled {
    background: #f4f6f9;
    border: 0.5px solid #e7e9f0;
    color: #a8acbc;
    &:hover {
      cursor: default;
    }
  }
`;

const NavigationBtnsComponent = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.app);
  const {
    showPrevState,
    currentStep,

    isChosenValue,
  } = state;

  const handleNextStep = () => {
    if (!isChosenValue) {
      dispatch(setError(true));
    } else {
      dispatch(setNextStep(currentStep + 1));
    }
  };

  const handlePrevStep = () => {
    dispatch(setPrevStep(currentStep - 1));
  };

  return (
    <NavigationBtnBox>
      <button className="next-btn" />
      <button
        disabled={currentStep > 3}
        onClick={handleNextStep}
        className={`next-btn ${currentStep > 3 && "disabled"} `}
      >
        Next step &#8594;
      </button>
      {showPrevState && (
        <button className="back-btn" onClick={handlePrevStep}>
          Back
        </button>
      )}
    </NavigationBtnBox>
  );
};

export default NavigationBtnsComponent;

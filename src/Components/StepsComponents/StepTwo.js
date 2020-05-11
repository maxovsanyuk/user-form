import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import { setChosenValue, setStepTwo } from "../../Redux/actionsCreators";

const Input = styled.input`
  width: 100%;
  padding: 15px;
  margin-top: 5px;
  color: #a8acbc;
  font-size: 16px;
  background: #ffffff;
  border: 1px solid #e7e9f0;
  box-sizing: border-box;
  box-shadow: inset 0px 1px 2px rgba(41, 47, 66, 0.17);
  border-radius: 4px;
  &:focus {
    outline: none;
  }
  &:hover {
    cursor: pointer;
  }
`;

const StepTwo = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.app);
  const { stepTwoValue, isChosenValue } = state;

  if (!stepTwoValue && isChosenValue) {
    dispatch(setChosenValue(false));
  }

  useEffect(() => {
    stepTwoValue && dispatch(setChosenValue(true));
  }, []);

  return (
    <>
      <h1
        style={{
          textAlign: "center",
          fontSize: "38px",
          marginBottom: "50px",
        }}
      >
        How many separete sole <br /> proprietorships do you have?
      </h1>

      <div>Please enter a quantity</div>
      <Input
        onChange={(e) => dispatch(setStepTwo(e.target.value))}
        className="input"
        defaultValue={stepTwoValue}
        type="number"
      />
    </>
  );
};

export default StepTwo;

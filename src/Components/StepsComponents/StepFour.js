import React from "react";
import { green } from "@material-ui/core/colors";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";

import { useSelector, useDispatch } from "react-redux";
import { setStepFour } from "../../Redux/actionsCreators";
import TotalValueComp from "../TotalValueComp";

const GreenRadio = withStyles({
  root: {
    color: green[400],
    "&$checked": {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);

const radioGroupArray = [
  { value: "TaxGig", label: "TaxGig Hero" },
  { value: "Another Pro", label: "Find another Pro" },
];

const StepFour = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.app);
  const { stepOneValue, stepTwoValue, stepThreeValues, stepFourValue } = state;

  const thirdStepResult =
    Object.values(stepThreeValues).length === 1
      ? 10
      : Object.values(stepThreeValues).length * 5;

  const totalValue =
    parseInt(stepOneValue) + Math.pow(stepTwoValue, 2) + thirdStepResult;

  return (
    <FormControl>
      <h1 style={{ textAlign: "center", fontSize: "38px" }}>
        Ready to see your score
      </h1>
      <div style={{ marginBottom: "40px", textAlign: "center" }}>
        We value a freedom of choice. You can pick our pre-selected PRO <br />
        specially for you or find one on your own.You decide.
      </div>
      <RadioGroup
        value={stepFourValue}
        onChange={(e) => dispatch(setStepFour(e.target.value))}
        style={{ width: "350px", margin: "0 auto" }}
      >
        {radioGroupArray.map(({ value, label }) => {
          return (
            <Paper
              key={value}
              style={{
                marginBottom: "20px",
                padding: "15px 0 15px 20px",
                background: value === "TaxGig" && "#6E5BE2",
                color: value === "TaxGig" && "#fff",
              }}
            >
              <FormControlLabel
                value={value}
                checked={stepFourValue === value}
                control={<GreenRadio />}
                label={
                  <div
                    style={{
                      display: "flex",
                      width: "300px",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    {label}
                    {value === "TaxGig" && (
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        <span
                          style={{
                            fontWeight: 300,
                            color: "#E7E9F0",
                            fontSize: "13px",
                          }}
                        >
                          Fixed price
                        </span>
                        <span style={{ textAlign: "right" }}>450$</span>
                      </div>
                    )}
                  </div>
                }
                style={{
                  width: "100%",
                }}
              />
            </Paper>
          );
        })}
      </RadioGroup>
      {stepFourValue === "TaxGig" && <TotalValueComp value={totalValue} />}
    </FormControl>
  );
};

export default StepFour;

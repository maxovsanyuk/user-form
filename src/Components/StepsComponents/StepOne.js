import React from "react";
import TableCell from "@material-ui/core/TableCell";
import { green } from "@material-ui/core/colors";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";

import { useSelector, useDispatch } from "react-redux";
import { setStepOne } from "../../Redux/actionsCreators";

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
  { value: "10", label: "Employed" },
  { value: "20", label: "Unemployed" },
  { value: "30", label: "Self-employed" },
];

const StepOne = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.app);
  const { stepOneValue } = state;

  return (
    <FormControl>
      <h1
        style={{ textAlign: "center", fontSize: "38px", marginBottom: "50px" }}
      >
        What is your employment <br /> status?
      </h1>
      <RadioGroup
        value={stepOneValue}
        onChange={(e) => dispatch(setStepOne(e.target.value))}
        style={{ width: "540px", margin: "0 auto" }}
      >
        <Paper style={{ display: "flex", flexDirection: "column" }}>
          {radioGroupArray.map(({ value, label }) => {
            return (
              <TableCell key={value}>
                <FormControlLabel
                  value={value}
                  checked={stepOneValue === value}
                  control={<GreenRadio />}
                  label={label}
                  style={{ width: "100%" }}
                />
              </TableCell>
            );
          })}
        </Paper>
      </RadioGroup>
    </FormControl>
  );
};

export default StepOne;

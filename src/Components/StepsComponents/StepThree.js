import React, { useState } from "react";
import TableCell from "@material-ui/core/TableCell";
import { green } from "@material-ui/core/colors";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

import isEmpty from "lodash/isEmpty";

import { useSelector, useDispatch } from "react-redux";
import { setChosenValue, setStepThree } from "../../Redux/actionsCreators";

const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    "&$checked": {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

const radioGroupArray = [
  { name: "checked1", label: "Single" },
  { name: "checked2", label: "Married filing jointly" },
  { name: "checked3", label: "Married filing separatly" },
  { name: "checked4", label: "Head of Household" },
  {
    name: "checked5",
    label: "Qualifying widow(-er) dependent child",
  },
];

const StepThree = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.app);
  const { stepThreeValues, isChosenValue } = state;

  if (!isEmpty(stepThreeValues)) {
    const isCheckedItem = Object.values(stepThreeValues).filter(
      (i) => i.checked
    );

    if (isEmpty(isCheckedItem) && isChosenValue) {
      dispatch(setChosenValue(false));
    } else if (!isEmpty(isCheckedItem) && !isChosenValue) {
      dispatch(setChosenValue(true));
    }
  }

  const handleChangeCheckbox = (event) => {
    dispatch(
      setStepThree({
        ...stepThreeValues,
        [event.target.name]: {
          checked: event.target.checked,
          value: event.target.checked ? 1 : 0,
        },
      })
    );
  };

  return (
    <FormControl onChange={handleChangeCheckbox}>
      <h1
        style={{ textAlign: "center", fontSize: "38px", marginBottom: "50px" }}
      >
        What best describes your filing
        <br /> status?
      </h1>
      <div style={{ width: "540px", margin: "0 auto" }}>
        <Paper style={{ display: "flex", flexDirection: "column" }}>
          {radioGroupArray.map((value, i) => {
            const { name, label } = value;

            return (
              <TableCell>
                <FormControlLabel
                  style={{ width: "100%" }}
                  control={
                    <GreenCheckbox
                      checked={
                        !isEmpty(stepThreeValues[name]) &&
                        stepThreeValues[name].checked
                      }
                      name={name}
                      color="primary"
                    />
                  }
                  label={label}
                />
              </TableCell>
            );
          })}
        </Paper>
      </div>
    </FormControl>
  );
};

export default StepThree;

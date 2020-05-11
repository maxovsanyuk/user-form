import {
  SET_NEXT_STEP,
  SET_STEP_ONE,
  SET_ERROR,
  SET_CHOOSEN_VALUE,
  SET_PREV_STEP,
  SET_STEP_TWO,
  SET_STEP_THREE,
  SET_STEP_FOUR,
} from "./types";

const initialState = {
  stepOneValue: null,
  stepTwoValue: 1,
  stepThreeValues: {},
  stepFourValue: null,
  isChosenValue: false,
  currentStep: 1,
  statusLineWidth: 25,
  showPrevState: false,
  isError: false,
};

export const appReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_NEXT_STEP:
      return {
        ...state,
        currentStep: payload,
        showPrevState: payload > 1,
        statusLineWidth: state.statusLineWidth + 25,
        isChosenValue: false,
      };

    case SET_PREV_STEP:
      return {
        ...state,
        currentStep: payload,
        showPrevState: payload > 1,
        statusLineWidth: state.statusLineWidth - 25,
      };

    case SET_STEP_ONE:
      return {
        ...state,
        stepOneValue: payload,
        isChosenValue: true,
        isError: false,
      };

    case SET_STEP_TWO:
      return {
        ...state,
        stepTwoValue: payload,
        isChosenValue: true,
        isError: false,
      };

    case SET_STEP_THREE:
      return {
        ...state,
        stepThreeValues: payload,
        isChosenValue: true,
        isError: false,
      };

    case SET_STEP_FOUR:
      return {
        ...state,
        stepFourValue: payload,
        isChosenValue: true,
        isError: false,
      };

    case SET_ERROR:
      return {
        ...state,
        isError: true,
      };

    case SET_CHOOSEN_VALUE:
      return {
        ...state,
        isChosenValue: payload,
      };

    default:
      return { ...state };
  }
};

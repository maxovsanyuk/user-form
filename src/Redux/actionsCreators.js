import {
  SET_NEXT_STEP,
  SET_PREV_STEP,
  SET_ERROR,
  SET_CHOOSEN_VALUE,
  SET_STEP_ONE,
  SET_STEP_TWO,
  SET_STEP_THREE,
  SET_STEP_FOUR,
} from "./types";

export function setNextStep(payload) {
  return {
    type: SET_NEXT_STEP,
    payload,
  };
}

export function setStepOne(payload) {
  return {
    type: SET_STEP_ONE,
    payload,
  };
}

export function setPrevStep(payload) {
  return {
    type: SET_PREV_STEP,
    payload,
  };
}

export function setChosenValue(payload) {
  return {
    type: SET_CHOOSEN_VALUE,
    payload,
  };
}

export function setStepTwo(payload) {
  return {
    type: SET_STEP_TWO,
    payload,
  };
}

export function setStepThree(payload) {
  return {
    type: SET_STEP_THREE,
    payload,
  };
}

export function setStepFour(payload) {
  return {
    type: SET_STEP_FOUR,
    payload,
  };
}

export function setError() {
  return {
    type: SET_ERROR,
  };
}

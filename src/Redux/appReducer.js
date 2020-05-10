import {
  SHOW_LOADER,
  HIDE_LOADER,
  SHOW_ALERT,
  HIDE_ALERT,
  LOAD_USERS_DATA,
  SET_OFFSET,
} from "./types";

const initState = {
  isloading: false,
  isAlert: false,
  token:
    "cmpc3hcajyh3e5ksz6xho9t77flp4pesa300js9y8w9v6xptzj0vlk0halesk27hgqslukjxpepzkmaz6jpfj8zw0x5fwsajezvb",
  limit: 10,
  offset: 1,
  offsetLimit: 100,
};

export const appReducer = (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SHOW_LOADER:
      return { ...state, isloading: true };

    case HIDE_LOADER:
      return { ...state, isloading: false };

    case SHOW_ALERT:
      return { ...state, isAlert: true };

    case HIDE_ALERT:
      return { ...state, isAlert: null };

    case LOAD_USERS_DATA:
      return { ...state, isAlert: null, usersData: payload };

    case SET_OFFSET:
      return { ...state, offset: payload };

    default:
      return { ...state };
  }
};

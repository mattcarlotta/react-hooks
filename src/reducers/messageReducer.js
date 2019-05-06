import * as types from "../types";

const initialState = {
  message: "",
  show: false
};

const messageReducer = (state = initialState, { payload, type }) => {
  switch (type) {
    case types.RESET_MESSAGE:
      return { ...state, message: "" };
    case types.HIDE_MESSAGE:
      return { ...state, show: false };
    case types.SET_MESSAGE:
      return { message: payload, show: true };
    default:
      return state;
  }
};

export default messageReducer;

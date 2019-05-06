import * as types from "../types";

const messageReducer = (state = "", { payload, type }) => {
  switch (type) {
    case types.RESET_MESSAGE:
      return "";
    case types.SET_MESSAGE:
      return payload;
    default:
      return state;
  }
};

export default messageReducer;

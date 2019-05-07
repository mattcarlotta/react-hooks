import * as types from "../types";

const inputReducer = (state = "", { payload, type }) => {
  switch (type) {
    case types.UPDATE_INPUT:
      return payload;
    case types.RESET_INPUT:
      return "";
    default:
      return state;
  }
};

export default inputReducer;

import * as types from "../types";

export const hideMessage = () => ({
  type: types.HIDE_MESSAGE
});

export const setMessage = message => ({
  type: types.SET_MESSAGE,
  payload: message
});

export const resetMessage = () => ({
  type: types.RESET_MESSAGE
});

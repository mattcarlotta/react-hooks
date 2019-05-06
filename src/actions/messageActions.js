import * as types from "../types";

export const hideMessage = () => ({
  type: types.HIDE_MESSAGE
});

export const setMessage = ({ message, type }) => ({
  type: types.SET_MESSAGE,
  payload: { message, type }
});

export const resetMessage = () => ({
  type: types.RESET_MESSAGE
});

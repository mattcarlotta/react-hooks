import * as types from "../types";

export const updateInput = value => ({
  type: types.UPDATE_INPUT,
  payload: value
});

export const resetInput = () => ({
  type: types.RESET_INPUT
});

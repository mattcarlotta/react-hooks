export default `import React, { Fragment, useCallback, useState } from "react";
import { render } from "react-dom";
import { Provider, combineReducers, createStore } from 'redux';
import { connect } from 'react-redux;
import { FaBell, FaTrash, FaPaperPlane, FaTimes } from "react-icons/fa";

// NOTE: This example covers a lot of logic within one file and ideally
// each of these functions/constants/components will be delegated to
// separate files: actions, components, containers, reducers, and types.
// For ease of reading, these have been grouped into one.

// create types that will be used to dispatch an action.
const UPDATE_INPUT = "UPDATE_INPUT";
const RESET_INPUT = "RESET_INPUT";
const SET_MESSAGE = "SET_MESSAGE";
const RESET_MESSAGE = "RESET_MESSAGE";

// create 2 actions that return a "type" and a "payload" (if needed)
// one to set a message and one to reset it.

// setMessage accepts a "message" parameter to be sent to the reducer
// as "payload".
const setMessage = message => ({
  type: SET_MESSAGE,
  payload: message
});

// resetMessage just returns a type to be sent to the reducer.
const resetMessage = () => ({
  type: RESET_MESSAGE
});

// create a messageReducer to handle the "action", "type" and "payload"
// that was returned by one of the message actions above.
const messageReducer = (state = "", { payload, type }) => {
  switch (type) {
    case RESET_MESSAGE:
      // sets state.message = "";
      return "";
    case SET_MESSAGE:
      // sets state.message = payload ("message" returned from "setMessage")
      return payload;
    default:
      // returns default/updated state.message 
      return state;
  }
};

// create 2 actions that return a "type" and a "payload" (if needed)
// one to update the input and one to reset it.

// updateInput accepts a "value" parameter to be sent to the reducer
// as "payload".
export const updateInput = value => ({
  type: types.UPDATE_INPUT,
  payload: value
});

// resetInput just returns a type to be sent to the reducer.
export const resetInput = () => ({
  type: types.RESET_INPUT
});

// create an inputReducer to handle the "action", "type" and "payload"
// that was returned by one of the input actions above.
const inputReducer = (state = "", { payload, type }) => {
  switch (type) {
    case types.UPDATE_INPUT:
      // sets state.input = payload ("value" returned from "updateInput")
      return payload;
    case types.RESET_INPUT:
      // sets state.input = "";
      return "";
    default:
      // returns default/updated state.input 
      return state;
  }
};

// combine all reducers to be used with "store" (defined below)
// "combineReducers" comes from redux and accepts an object.
// for example: { test: exampleReducer } which stores in redux
// as: state.test: value
const reducers = combineReducers({
  // stored in redux as "state.input": "value" -- the value that
  // will be returned from the "inputReducer" cases.
  input: inputReducer,
  // stored in redux as "state.message": "value" -- the value that
  // will be returned from the "messageReducer" cases.
  message: messageReducer
});

// create a "MessageForm" container component that connects to the redux store
// "MessageForm" and accepts an "inputValue" (state.input) and dispatchable 
// redux actions: "resetInput", "setMessage", and "updateInput".
let MessageForm = ({ inputValue, resetInput, setMessage, updateInput }) => {
  // when the input has been changed, retrieve the "event.target.value" and
  // update the "inputValue" (state.input) via "updateInput" redux action.
  const handleChange = useCallback(
    ({ target: { value } }) => {
      updateInput(value);
    },
    [updateInput]
  );

  // when the form has been submitted, if there's an "inputValue", dispatch
  // "setMessage" with the input's "value" to update "state.message".
  const handleSubmit = useCallback(
    e => {
      e.preventDefault();
      if (inputValue) {
        setMessage(inputValue);
        resetInput();
      }
    },
    [inputValue, resetInput, setMessage]
  );

  return (
    <Fragment>
              <form onSubmit={handleSubmit}>
                <label htmlFor="example">Message:</label>
                <input
                    type="text"
                    name="example"
                    placeholder="Add a message..."
                    onChange={handleChange}
                    value={inputValue}
                />
                <button type="button" onClick={resetInput}>
                    <FaTrash />
                </button>
                <button type="submit">
                    <FaPaperPlane /> Dispatch Message
                </button>
              </form>
        </Fragment>
  );
};

// connect to the redux store to retrieve "state.input" and 
// prepend "resetInput", "setMessage", and "updateInput" as 
// redux dispatchable actions.
MessageForm = connect(
  state => ({ inputValue: state.input }),
  { resetInput, setMessage, updateInput }
)(MessageForm);

// create a "Message" container component that connects to redux and 
// displays what's currently set in redux's "state.message". the 
// component accepts "message" (state.message) and a dispatchable
// "resetMessage" action.
let Message = ({ message, resetMessage }) => (
  message 
    ? <div>
                <div>
                    <FaBell />
                    {message}
                </div>
                <button onClick={resetMessage}>
                    <FaTimes />
                </button>
             </div>
    : null
);

// connect to the redux store to retrieve "state.message" and
// prepend "resetMessage" as a redux dispatchable action.
Message = connect(
  state => ({ message: state.message }),
  { resetMessage }
)(Message);

// create a store for the react-redux "Provider" higher order component
// to utilize.
// "createStore" comes from redux and accepts the combined "reducers" 
// defined above.
const store = createStore(reducers);

// create an "App" component that wraps the "Message" and "MessageForm" 
// components with react-redux's "Provider" component. 
// the "Provider" component requires a "store" that contains all the 
// "reducers". the "Provider" must be root level; that way, it always 
// stays mounted despite its children changing.
const App = () => (
  <Provider store={store}>
        <Message />
        <MessageForm />
    </Provider>
);

// render the "App" component defined above.
render(<App />, document.getElementById("root"));
`;

const home = "/";
const hooks = "/hooks";
const examples = "/examples";
const events = `${examples}/events`;
const misc = `${examples}/misc`;
const forms = `${examples}/forms`;
const formelems = `${forms}/elements`;

const indexItems = [
  { name: "Home", link: home },
  { name: "Hooks", link: hooks },
  { name: "Examples", link: examples }
];

const exampleHookItems = [
  { hash: "usecontext", name: "useContext", linke: hooks },
  { hash: "usecallback", name: "useCallback", linke: hooks },
  { hash: "usedebugvalue", name: "useDebugValue", linke: hooks },
  { hash: "useeffect", name: "useEffect", linke: hooks },
  { hash: "useimperativehandle", name: "useImperativeHandle", linke: hooks },
  { hash: "uselayouteffect", name: "useLayoutEffect", linke: hooks },
  { hash: "usememo", name: "useMemo", linke: hooks },
  { hash: "useref", name: "useRef", linke: hooks },
  { hash: "usestate", name: "useState", linke: hooks }
];

const exampleMisc = [
  { hash: "contextpersistence", name: "Context", link: misc },
  { hash: "draganddrop", name: "Drag and Drop", link: misc },
  { hash: "dynamicfieldsform", name: "Dynamic Fields", link: forms },
  { hash: "fetchingandupdatingdata", name: "Fetching Data", link: misc },
  { hash: "fieldvalidation", name: "Field Validation", link: forms },
  { hash: "input", name: "Input", link: formelems },
  { hash: "intervaltimer", name: "Interval Timer", link: misc },
  { hash: "keydown", name: "Key Down", link: events },
  { hash: "localstoragepersistence", name: "Local Storage", link: misc },
  { hash: "loginform", name: "Login Form", link: forms },
  { hash: "mousedown", name: "Mouse Down", link: events },
  { hash: "radiogroup", name: "Radio Group", link: formelems },
  { hash: "reduxpersistence", name: "Redux", link: misc },
  { hash: "registrationform", name: "Registration Form", link: forms },
  { hash: "select", name: "Select", link: formelems },
  { hash: "slider", name: "Slider", link: formelems },
  { hash: "simplecounter", name: "Simple Counter", link: misc },
  { hash: "toggle", name: "Toggle", link: formelems },
  { hash: "uploadform", name: "Upload Form", link: forms }
];

export { indexItems, exampleHookItems, exampleMisc };

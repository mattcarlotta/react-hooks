import React from "react";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { MemoryRouter } from "react-router-dom";
import { shallowWrapper, mountWrapper } from "./utils";
import "jest-styled-components";

configure({ adapter: new Adapter(), disableLifecycleMethods: true });

global.React = React;
global.MemoryRouter = MemoryRouter;
global.shallow = shallowWrapper;
global.mount = mountWrapper;

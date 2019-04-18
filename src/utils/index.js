import { shallow, mount } from "enzyme";

/**
 * Factory function to create a ShallowWrapper for a component
 * @function shallowWrapper
 * @param {node} Component - Component to be shallowed
 * @param {object} state - initial state for setup.
 * @returns {ShallowWrapper}
 */
export const shallowWrapper = (Component, state = null) => {
  const wrapper = shallow(Component);
  if (state) wrapper.setState(state);
  return wrapper;
};

/**
 * Factory function to create a MountedWrapper for a component
 * @function mountWrapper
 * @param {node} Component - Component to be mounted
 * @param {object} state - initial state for setup.
 * @returns {MountedWrapper}
 */
export const mountWrapper = (Component, state = null) => {
  const wrapper = mount(Component);
  if (state) wrapper.setState(state);
  return wrapper;
};

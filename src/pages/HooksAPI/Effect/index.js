export const useEffectExample = `import React, {
  Fragment,
  useCallback,
  useRef
} from 'react';

// a "ClickHandler" component that listens to clicks and will
// check if a click is outside its "div"; if so, then it will
// hide the message.
const ClickHandler = ({ children, isVisible, setVisible }) => {
  // creating a ref for our top-level "div"
  const wrapperRef = useRef();

  // check if the clicked node contains a node within the "ref"
  const handleClickOutside = useCallback(
    ({ target }) => {
      if (isVisible && wrapperRef && !wrapperRef.current.contains(target)) {
        setVisible(false);
      }
    },
    [isVisible, wrapperRef]
  );

  useEffect(
    () => {
      // in this case, this adds a click listener after
      // the render method has been painted (similar to a
      // deffered componentDidMount lifecycle)
      document.addEventListener("mousedown", handleClickOutside);

      return () => {
        // in this case, this cleans up the click listener before
        // the component has been unmounted (similar to the
        // componentWillUnmount lifecycle)
        document.removeEventListener("mousedown", handleClickOutside);
      };
    },
    // since our handleClickOutside function won't change,
    // this only happens during mounting
    [handleClickOutside]
  );

  return (
    <div ref={wrapperRef}>
      {isVisible && children}
    </div>
  );
};

// a custom "ShowAlert" component that displays a message
// after a user submits a request.
const ShowAlert = () => {
  // defining an "isVisible" boolean and a "setVisible" function
  const [isVisible, setVisible] = useState(true);

  return (
    <ClickHandler isVisible={isVisible} setVisible={setVisible}>
      <p>
        Your request to edit this guide has been received. Please allow 3 business days for a response. Thank you!
      </p>
    <ClickHandler/>
  );
};
`;

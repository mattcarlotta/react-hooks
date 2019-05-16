import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

const ScrollIntoView = ({ children, location: { pathname } }) => {
  const [currentPath, setPath] = useState("");

  useEffect(
    () => {
      if (currentPath !== pathname) {
        setPath(pathname);
        window.scrollTo({
          // behavior: "smooth",
          top: 0
        });
      }
    },
    [currentPath, pathname]
  );

  return children;
};

ScrollIntoView.propTypes = {
  children: PropTypes.node.isRequired,
  pathname: PropTypes.string
};

export default withRouter(ScrollIntoView);

import { useState, useCallback, useEffect } from "react";
import PropTypes from "prop-types";

const useScroll = hash => {
  const [ref, setRef] = useState({ node: null, title: "" });
  const scrollRef = useCallback(node => {
    if (node) {
      const title = node.textContent
        ? node.textContent.toLowerCase().replace(/\s/g, "")
        : "";

      setRef({ node, title });
    }
  }, []);

  useEffect(
    () => {
      if ((ref.node && ref.title === hash) || (ref.node && !hash)) {
        setTimeout(() => {
          window.scrollTo({
            top: hash ? ref.node.offsetTop : 0
          });
        }, 100);
      }
    },
    [hash, ref]
  );

  return [scrollRef];
};

useScroll.propTypes = {
  hash: PropTypes.string
};

export default useScroll;

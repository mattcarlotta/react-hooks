import { useState, useCallback, useEffect } from "react";
import PropTypes from "prop-types";

const useScroll = hash => {
  const [ref, setRef] = useState({ node: null, text: "" });
  const scrollRef = useCallback(node => {
    if (node) {
      const text = node.textContent
        ? node.textContent.toLowerCase().replace(/\s/g, "")
        : "";

      setRef({ node, text });
    }
  }, []);

  useEffect(
    () => {
      if (ref.node && ref.text === hash) {
        setTimeout(() => {
          window.scrollTo({
            behavior: "smooth",
            top: ref.node.offsetTop
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

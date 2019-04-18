import React, { createRef, useState, useEffect } from "react";
import PropTypes from "prop-types";

const ClickHandler = ({ children, handleChange }) => {
  const wrapperRef = createRef();
  const [isVisible, setVisible] = useState(false);

  const handleClickOutside = ({ target }) => {
    if (isVisible && wrapperRef && !wrapperRef.contains(target)) {
      setVisible(false);
    }
  };

  const handleSelectClick = () => {
    setVisible(visible => !visible);
  };

  const handleOptionSelect = props => {
    setVisible(false);
    handleChange({ ...props });
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={wrapperRef}>
      {children({
        isVisible,
        handleSelectClick,
        handleOptionSelect
      })}
    </div>
  );
};

ClickHandler.propTypes = {
  handleChange: PropTypes.func.isRequired,
  children: PropTypes.func.isRequired
};

export default ClickHandler;

// export default class ClickHandler extends Component {
//   state = {
//     isVisible: false,
//     searchText: ""
//   };

//   static propTypes = {
//     handleChange: PropTypes.func.isRequired,
//     children: PropTypes.func.isRequired
//   };

//   componentDidMount() {
//     document.addEventListener("mousedown", this.handleClickOutside);
//   }

//   componentWillUnmount() {
//     document.removeEventListener("mousedown", this.handleClickOutside);
//   }

//   handleClickOutside = ({ target }) => {
//     if (
//       this.state.isVisible &&
//       this.wrapperRef &&
//       !this.wrapperRef.contains(target)
//     ) {
//       this.handleSelectClose();
//     }
//   };

//   handleInputChange = ({ target: { value } }) => {
//     this.setState({ searchText: value, isVisible: true });
//   };

//   handleSelectClose = () => {
//     this.setState({ isVisible: false });
//   };

//   handleSelectClick = () => {
//     this.setState(prevState => ({ isVisible: !prevState.isVisible }));
//   };

//   handleOptionSelect = props => {
//     this.setState({ isVisible: false, searchText: "" }, () =>
//       this.props.handleChange({ ...props })
//     );
//   };

//   render = () => (
//     <div ref={node => (this.wrapperRef = node)}>
//       {this.props.children({
//         isVisible: this.state.isVisible,
//         handleInputChange: this.handleInputChange,
//         handleSelectClick: this.handleSelectClick,
//         handleOptionSelect: this.handleOptionSelect,
//         searchText: this.state.searchText
//       })}
//     </div>
//   );
// }

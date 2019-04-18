import React from "react";
import PropTypes from "prop-types";
import DropContainer from "./DropContainer";
import Option from "./Option";
import OptionsContainer from "./OptionsContainer";

const SelectOptionsContainer = ({
  handleOptionSelect,
  isVisible,
  name,
  selected,
  selectOptions
}) => {
  const onOptionSelect = ({
    target: {
      dataset: { name, value }
    }
  }) => {
    handleOptionSelect({ name, value });
  };

  return (
    isVisible && (
      <DropContainer>
        <OptionsContainer>
          {selectOptions.map((value, key) => (
            <Option
              key={key}
              name={name}
              value={value}
              onClick={onOptionSelect}
              selected={selected}
            />
          ))}
        </OptionsContainer>
      </DropContainer>
    )
  );
};

SelectOptionsContainer.propTypes = {
  handleOptionSelect: PropTypes.func.isRequired,
  isVisible: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  selected: PropTypes.string,
  selectOptions: PropTypes.arrayOf(PropTypes.string.isRequired)
};

export default SelectOptionsContainer;

// export default class Options extends PureComponent {
//   static propTypes = {
//     handleOptionSelect: PropTypes.func.isRequired,
//     isVisible: PropTypes.bool.isRequired,
//     name: PropTypes.string.isRequired,
//     searchText: PropTypes.string,
//     selected: PropTypes.string,
//     selectOptions: PropTypes.arrayOf(PropTypes.string.isRequired)
//   };

//   onOptionSelect = ({
//     target: {
//       dataset: { name, value }
//     }
//   }) => {
//     this.props.handleOptionSelect({ name, value });
//   };

//   optionIsActive = (selected, value) =>
//     selected === value ? "active-option" : "";

//   render = () => {
//     const { isVisible, name, searchText, selectOptions, selected } = this.props;

//     const options = !searchText
//       ? selectOptions
//       : selectOptions.filter(value =>
//           value.toLowerCase().includes(searchText.toLowerCase())
//         );

//     return (
//       isVisible && (
//         <div className="drop-container">
//           <div className="options">
//             {options && options.length > 0 ? (
//               options.map((value, key) => (
//                 <div
//                   className={`option ${this.optionIsActive(selected, value)}`}
//                   key={key}
//                   data-name={name}
//                   data-value={value}
//                   onClick={this.onOptionSelect}
//                 >
//                   {value}
//                 </div>
//               ))
//             ) : (
//               <div className="no-options">No options</div>
//             )}
//           </div>
//         </div>
//       )
//     );
//   };
// }

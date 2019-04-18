import styled from "styled-components";
import Toggle from "./Toggle";

const StyledToggle = styled(Toggle)`
  color: ${props => props.theme.alt};
  cursor: pointer;
  margin: 15px;
  padding-top: 7px;
`;

export default StyledToggle;

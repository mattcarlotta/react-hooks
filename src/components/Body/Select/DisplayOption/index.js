import styled from "styled-components";

const DisplayOption = styled.div`
  color: #bbb;
  font-size: 16px;
  -webkit-box-align: center;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  box-sizing: border-box;
  flex: 1 1 0%;
  padding: 2px 8px;
  overflow: hidden;
  ${({ value }) => (value ? "color: #484848 !important;" : null)};
`;

export default DisplayOption;

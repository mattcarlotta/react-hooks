import styled from "styled-components";

const SelectContainer = styled.div`
  @media (min-width: 1px) {
    width: 150px;
  }

  @media (min-width: 610px) {
    width: 200px;
  }

  @media (min-width: 768px) {
    width: 250px;
  }

  @media (min-width: 992px) {
    width: 300px;
  }

  display: inline-block;
`;

export default SelectContainer;

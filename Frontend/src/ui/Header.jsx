import React from "react";
import { styled } from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: end;
  padding: 1.2rem 3.2rem;
  border-bottom: 1px solid var(-color-grey-100);
  background-color: var(-color-grey-0);
`;

const Header = () => {
  return <StyledHeader>Header</StyledHeader>;
};

export default Header;

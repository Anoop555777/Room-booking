import React from "react";
import { styled } from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";

const StyleSidebar = styled.aside`
  grid-row: 1/-1;

  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  padding: 3.2rem 2.4rem;
  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-lg);
`;
const SideBar = () => {
  return (
    <StyleSidebar>
      <Logo />
      <MainNav />
    </StyleSidebar>
  );
};

export default SideBar;

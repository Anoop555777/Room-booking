import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 9.6rem;
  width: 9.6rem;
  border-radius: 11px;
  transition: all 0.5s;

  &:hover {
    outline: 4px solid var(--color-brand-600);
  }
`;

const Logo = () => {
  const src = "/img/logo-light.jpg";
  return (
    <StyledLogo>
      <Link to="/">
        <Img src={src} alt="Logo" />
      </Link>
    </StyledLogo>
  );
};

export default Logo;

import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {
  HiOutlineCalendarDays,
  HiOutlineCog6Tooth,
  HiOutlineHome,
  HiOutlineHomeModern,
  HiOutlineUsers,
} from "react-icons/hi2";

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const Li = styled.li`
  position: relative;

  border-radius: 5px;
  color: var(--color-grey-600);

  &::before {
    content: "";
    display: inline-block;
    width: 0.01px;
    position: absolute;
    background-color: var(--color-brand-600);
    top: 0;
    left: 0;
    height: 100%;
    border-radius: 5px;
    transform: scaleY(0);
    transition: transform 0.2s, width 0.4s cubic-bezier(1, 0, 0, 1) 0.2s,
      background-color 0.1s, -webkit-transform 0.2s;
  }

  &:hover {
    color: var(--color-grey-50);
  }

  &:hover::before {
    width: 100%;
    transform: scaleY(1);
  }
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;
    color: currentColor;
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
    position: relative;
    z-index: 10;
  }

  & span {
    color: currentColor;
  }

  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-50);
    background-color: var(--color-brand-600);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: currentColor;
    transition: all 0.3s;
  }

  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-grey-50);
  }
`;

import React from "react";

const MainNav = () => {
  return (
    <nav>
      <NavList>
        <Li>
          <StyledNavLink to="/dashboard">
            <HiOutlineHome />
            <span>Home</span>
          </StyledNavLink>
        </Li>

        <Li>
          <StyledNavLink to="/bookings">
            <HiOutlineCalendarDays />
            <span>Bookings</span>
          </StyledNavLink>
        </Li>

        <Li>
          <StyledNavLink to="/cabins">
            <HiOutlineHomeModern />
            <span>Cabins</span>
          </StyledNavLink>
        </Li>
        <Li>
          <StyledNavLink to="/users">
            <HiOutlineUsers />
            <span>Users</span>
          </StyledNavLink>
        </Li>
        <Li>
          <StyledNavLink to="/settings">
            <HiOutlineCog6Tooth />
            <span>Settings</span>
          </StyledNavLink>
        </Li>
      </NavList>
    </nav>
  );
};

export default MainNav;

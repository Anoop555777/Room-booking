import React from "react";
import { HiEnvelope, HiLockClosed } from "react-icons/hi2";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Form = styled.form`
  width: 100%;
`;
const FormGroup = styled.div`
  width: 100%;
  height: 50px;
  border-bottom: 2px solid #162938;
  margin: 4.8rem 0;
  position: relative;
`;

const FormInput = styled.input`
  width: 100%;
  font-size: 1.6rem;
  font-weight: 600;
  padding: 1.2rem 0.8rem;

  background: transparent;
  border: none;
  font-size: inherit;
  outline: none;

  &:focus {
    outline: none;
  }
  &:not(:placeholder-shown) ~ label {
    top: -4px;
  }
  &:placeholder-shown ~ label {
    top: 50%;
  }
  &:focus ~ label {
    top: -4px;
  }
`;

const Label = styled.label`
  position: absolute;
  top: 50%;
  left: 5px;
  transform: translateY(-50%);
  font-size: 1.6rem;
  font-weight: 600;
  pointer-events: none;
  transition: all 0.5s;
`;

const Span = styled.span`
  position: absolute;
  right: 8px;
  font-size: 2.4rem;
  color: #162938;
  top: 50%;
  transform: translateY(-50%);
`;

const Button = styled.button`
  display: inline-block;
  padding: 1rem;
  background-color: #162938;
  outline: none;
  border: none;
  color: var(--color-grey-50);
  width: 100%;
  box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.4);
  font-size: 1.6rem;
  transition: all 0.5s;
  border-radius: 11px;
  font-weight: 600;

  &:hover {
    background-color: var(--color-grey-400);
  }
`;

const StyledNavLink = styled(NavLink)`
  &:link {
    color: #b91c1c;
  }
`;

const SignIn = styled.div`
  & p {
    margin-top: 1rem;
    font-size: 1.6rem;
    color: var(--color-grey-900);
    font-weight: 600;
  }
`;

const LoginForm = () => {
  return (
    <Form>
      <FormGroup>
        <Span>
          <HiEnvelope />
        </Span>
        <FormInput type="email" id="email" placeholder="" />
        <Label htmlFor="email">Email</Label>
      </FormGroup>
      <FormGroup>
        <Span>
          <HiLockClosed />
        </Span>
        <FormInput type="password" id="password" placeholder="" />
        <Label htmlFor="password">Password</Label>
      </FormGroup>
      <Button type="submit">Login</Button>
      <SignIn>
        <p>
          Don't have an account? &nbsp;
          <StyledNavLink to="/signup">Register</StyledNavLink>
        </p>
      </SignIn>
    </Form>
  );
};

export default LoginForm;

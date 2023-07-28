import React from "react";
import styled from "styled-components";

const Form = styled.form`
  margin-top: 3.2rem;
`;
const FormGroup = styled.div`
  &:not(:last-child) {
    margin-bottom: 3.2rem;
  }
`;

const FormInput = styled.input`
  width: 80%;
  font-size: 1.6rem;
  font-weight: 600;
  padding: 1.2rem 0.8rem;

  background: none;
  border: none;
  font-size: inherit;
  border-bottom: 3px solid #181717;
  outline: none;

  &:focus {
    outline: none;
  }

  &::-webkit-input-placeholder {
    color: inherit;
  }

  &:focus:invalid {
    border-bottom: 3px solid orangered;
  }
`;

const LoginForm = () => {
  return (
    <Form>
      <FormGroup>
        <FormInput type="email" placeholder="Enter Your Email" />
      </FormGroup>
      <FormGroup>
        <FormInput type="password" placeholder="Enter Your Password" />
      </FormGroup>
    </Form>
  );
};

export default LoginForm;

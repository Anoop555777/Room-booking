import styled from "styled-components";

import Heading from "../ui/Heading";
import SignupForm from "../features/authentication/SignupForm";
const SignupBackground = styled.main`
  min-height: 100dvh;
  width: 100%;
  position: relative;
  background: url("/img/cabin-photo1.jpg");
  background-size: cover;
  background-position: center;
  opacity: 0.9;
`;

const SignupLayout = styled.div`
  padding: 2.4rem 4.8rem;
  width: 40%;
  min-height: 70dvh;
  background: transparent;
  backdrop-filter: blur(20px);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--color-grey-900);
  border: 2px solid rgba(255, 255, 255, 0.5);
  box-shadow: 0 0 30px rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 3.2rem;
`;

const Signup = () => {
  return (
    <SignupBackground>
      <SignupLayout>
        <Heading as="h4">Sign Up</Heading>
        <SignupForm />
      </SignupLayout>
    </SignupBackground>
  );
};

export default Signup;

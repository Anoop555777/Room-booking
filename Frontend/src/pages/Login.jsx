import styled from "styled-components";
import Logo from "./../ui/Logo";
import Heading from "../ui/Heading";
import LoginForm from "../features/authentication/LoginForm";
const LoginBackground = styled.main`
  min-height: 100dvh;
  width: 100%;
  position: relative;
  background: url("/img/cabin-photo1.jpg");
  background-size: cover;
  background-position: center;
  opacity: 0.9;
`;

const LoginLayout = styled.div`
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

const Login = () => {
  return (
    <LoginBackground>
      <LoginLayout>
        <Heading as="h4">Login to your account</Heading>
        <LoginForm />
      </LoginLayout>
    </LoginBackground>
  );
};

export default Login;

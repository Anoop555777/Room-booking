import styled from "styled-components";
import Logo from "./../ui/Logo";
import Heading from "../ui/Heading";
import LoginForm from "../features/authentication/LoginForm";
const LoginBackground = styled.main`
  min-height: 100dvh;
  width: 100%;
  position: relative;
  background: linear-gradient(
      to right bottom,
      rgba(249, 250, 251, 0.771),
      rgba(107, 114, 128, 0.766)
    ),
    url("/img/cabin-background.jpg");
  background-size: cover;
  background-position: center;
`;

const LoginLayout = styled.div`
  padding: 1.6rem 3.2rem;
  width: 55%;
  min-height: 70dvh;
  background: linear-gradient(
    to right bottom,
    rgba(249, 250, 251, 0.678),
    rgba(255, 255, 255, 0.653)
  );
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Login = () => {
  return (
    <LoginBackground>
      <LoginLayout>
        <Logo />
        <Heading as="h4">Login to your account</Heading>
        <LoginForm />
      </LoginLayout>
    </LoginBackground>
  );
};

export default Login;

import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "./Header";
import SideBar from "./SideBar";
const StyleAppLayout = styled.div`
  display: grid;
  grid-template-columns: 24rem 1fr;
  grid-template-rows: min-content 1fr;
  height: 100dvh;
`;

const Main = styled.main`
  padding: 3.2rem;
  background-color: var(-color-grey-50);
  overflow: scroll;
`;

const Container = styled.div`
  max-width: 120rem;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  margin: 0 auto;
`;

const AppLayout = () => {
  return (
    <StyleAppLayout>
      <Header />
      <SideBar />

      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </StyleAppLayout>
  );
};

export default AppLayout;

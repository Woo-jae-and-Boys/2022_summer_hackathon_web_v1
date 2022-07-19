import React from "react";
import Nav from "../common/nav/nav";
import PannelContainer from "./pannelContainer";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Main = () => {
  return (
    <Container>
      <Nav />
      <div>
        <PannelContainer />
      </div>
    </Container>
  );
};

export default Main;

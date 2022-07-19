import React from "react";
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
      <div>
        <PannelContainer />
      </div>
    </Container>
  );
};

export default Main;

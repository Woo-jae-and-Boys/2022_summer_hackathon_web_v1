import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

import styled from "styled-components";

const Container = styled.div`
  padding-top: 40px;
  padding-left: 20px;
  background-color: red;
  height: 80px;
`;

const Nav = () => {
  return (
    <Container>
      <div className="">
        <GiHamburgerMenu size={"40px"} />
        <h1>DAEINSO</h1>
      </div>
      <div className="navItem">
        <h2>프로젝트</h2>
        <h2>심부름</h2>
        <h2>배달</h2>
      </div>
    </Container>
  );
};

export default Nav;

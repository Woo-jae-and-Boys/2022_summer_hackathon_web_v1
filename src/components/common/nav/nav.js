import React from "react";
import { Link } from "react-router-dom";
import { BiUser } from "react-icons/bi";

import styled from "styled-components";

const Container = styled.div`
  padding-left: 81px;
  height: 100px;
  display: flex;
  align-items: center;
  > h1 {
    font-weight: 600;
    margin-right: 225px;
  }
  .navItem {
    display: flex;
    width: 209px;
    height: 40px;
    align-items: center;
    justify-content: space-between;
  }
  .searchBar {
  }
  .authContainer {
    display: flex;
    position: absolute;
    right: 30px;
    height: 50px;
    align-items: center;
  }
`;

const Nav = () => {
  return (
    <Container>
      <h1>DAEINSO</h1>
      <div className="navItem">
        <h2>프로젝트</h2>
        <h2>심부름</h2>
        <h2>배달</h2>
      </div>
      <div className="searchBar">{/* <input></input> */}</div>
      <div className="authContainer">
        <h2>
          <Link to={"/signup"}>회원가입 /</Link>
        </h2>
        <h2>
          <Link to={"/signin"}> 로그인</Link>
        </h2>
        <BiUser size={"40px"} />
      </div>
    </Container>
  );
};

export default Nav;

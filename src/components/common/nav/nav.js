import React from "react";
import { Link } from "react-router-dom";
import { GrFormSubtract } from "react-icons/gr";

import styled from "styled-components";

const Container = styled.div`
  padding-left: 81px;
  height: 100px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #cbcbcb;
  > h1 {
    font-weight: 600;
    margin-right: 225px;
  }

  #slash {
    font-size: 30px;
    transform: rotate(90deg);
  }
  .navItem {
    display: flex;
    width: 299px;
    height: 40px;
    align-items: center;
    justify-content: space-between;
  }
  .searchBar {
  }
  .authContainer {
    transform: translateX(600%);

    display: flex;
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
        <h3>
          <Link to={"/signup"}>회원가입</Link>
        </h3>

        <GrFormSubtract id="slash" />

        <h3>
          <Link to={"/signin"}> 로그인</Link>
        </h3>
      </div>
    </Container>
  );
};

export default Nav;

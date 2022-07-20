import React from "react";
import { Link } from "react-router-dom";
import { GrFormSubtract } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
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
    > h2 {
      cursor: pointer;
    }
  }
  .searchBar {
  }
  .authContainer {
    position: absolute;
    right: 40px;
    display: flex;
    align-items: center;
  }
`;

const Nav = () => {
  const token = localStorage.getItem("access_token");
  const navigate = useNavigate();
  return (
    <Container>
      <h1>
        <Link to={"/"}>DAEINSO</Link>
      </h1>
      <div className="navItem">
        <h2>
          <a href="#project">프로젝트</a>
        </h2>
        <h2>심부름</h2>
        <h2>배달</h2>
      </div>
      <div className="searchBar">{/* <input></input> */}</div>
      <div className="authContainer">
        {!token ? (
          <>
            <h3>
              <Link to={"/signup"}>회원가입</Link>
            </h3>

            <GrFormSubtract id="slash" />

            <h3>
              <Link to={"/signin"}> 로그인</Link>
            </h3>
          </>
        ) : (
          <h3
            style={{ cursor: "pointer" }}
            onClick={() => {
              localStorage.removeItem("access_token");
              navigate("/signin");
            }}
          >
            로그아웃
          </h3>
        )}
      </div>
    </Container>
  );
};

export default Nav;

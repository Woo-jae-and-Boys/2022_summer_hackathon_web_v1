import React, { useEffect } from "react";
import PannelContainer from "./pannelContainer";
import styled from "styled-components";
import useMain from "../../hooks/main/useMain";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Container = styled.div`
  margin-top: 72px;
  width: 1420px;
  margin: 0 auto;

  .list {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 35px;
  }
`;

const ItemBox = styled.div`
  width: 450px;
  height: 346px;
  > div {
    background-color: #efefef;
    width: 450px;
    height: 250px;
  }

  > h3 {
    width: 100px;
    height: 30px;
    border: 1px solid #ff8d8d;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

// const addBtn = styled;

const Main = () => {
  const { getProjectItems, projectItems, getErrandItems, errandItems } =
    useMain();
  useEffect(() => {
    getProjectItems();
    getErrandItems();
  }, [getProjectItems, getErrandItems]);
  return (
    <Wrapper>
      <PannelContainer />
      <Container>
        <>
          <h1>현재 모집중인 개발자</h1>
          {projectItems && (
            <div className="list">
              {projectItems.map((item) => (
                <Link to={`/project/${item.id}`} key={item.id}>
                  <ItemBox>
                    <div></div>
                    <h2>{item.title}</h2>
                    <h3>{item.platForm}</h3>
                  </ItemBox>
                </Link>
              ))}
            </div>
          )}
        </>
        <>
          <h1>현재 모집중인 심부름꾼</h1>
          {errandItems && (
            <div className="list">
              {errandItems.map((item) => (
                <Link to={`/errands/${item.id}`} key={item.id}>
                  <ItemBox>
                    <div></div>
                    <h2>{item.title}</h2>
                  </ItemBox>
                </Link>
              ))}
            </div>
          )}
        </>

        <>
          <h1>현재 모집중인 밥 친구</h1>
        </>
      </Container>
    </Wrapper>
  );
};

export default Main;

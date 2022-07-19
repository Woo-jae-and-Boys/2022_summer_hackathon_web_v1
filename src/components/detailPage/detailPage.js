import React from "react";
import styled from "styled-components";
import TESTIMG from "../../assets/img/testImg.png";
import { FcTwoSmartphones } from "react-icons/fc";

const DetailPage = () => {
  return (
    <>
      <DetailPageWrapper>
        <MainContainer>
          <NavBar>
            <FcTwoSmartphones style={{ fontSize: "33px" }} />
            <NavBarMent>프로젝트</NavBarMent>
          </NavBar>

          <ContentContanier>
            {/* title */}
            <ContentImportantInfoTitle>
              삼성 주소창 팀 모집(웹)
            </ContentImportantInfoTitle>

            {/* img */}
            <ContentImageContanier>
              <ContentImage src={TESTIMG} alt="배경사진" />
            </ContentImageContanier>

            <ContentButtonContanier>
              <button>지원하기</button>
            </ContentButtonContanier>
          </ContentContanier>

          {/* info */}
          <ContentInfoWrpper>
            <ProjectExplanationContainer>
              {/* title */}
              <ProjectExplanationTitle>프로젝트 설명</ProjectExplanationTitle>

              {/* content */}
              <ProjectExplanationContent>
                도담도담도담도담도담도 담도담도 담도담도담 도담도담
                도담도담도담도 담도담도도담도담도 담도 담도 담 도담도 담
                도담도담도담
                도담도담도담도담도담도담도담도도담도담도담도담도담도담도담도담도담도담도담도담도담도담도담도담도담도도담도담도담도담도담도담도담도담도담도담도담도담도담도담도담도담도담도도담도담도담도담도담도담도담도담도담도담도담도담도담도담
                도담도담도담도 담도담도담담 도도도담담
              </ProjectExplanationContent>
            </ProjectExplanationContainer>

            <DoingItWorkContainer>
              {/* title */}
              <DoingItWorkTitle>해야하는 일</DoingItWorkTitle>

              {/* content */}
              <DoingItWorkContent>
                NavBar를 만들어 주세요NavBar를 만들어 주세요NavBar를 만들어
                주세요NavBar를 만들어 주세요NavBar를 만들어 주세요NavBar를
                만들어 주세요NavBar를 만들어 주세요NavBar를 만들어
                주세요NavBar를 만들어 주세요NavBar를 만들어 주세요NavBar를
                만들어 주세요NavBar를 만들어 주세요NavBar를 만들어
                주세요NavBar를 만들어 주세요NavBar를 만들어 주세요NavBar를
                만들어 주세요NavBar를 만들어 주세요NavBar를 만들어
                주세요NavBar를 만들어 주세요NavBar를 만들어 주세요NavBar를
                만들어 주세요NavBar를 만들어 주세요NavBar를 만들어
                주세요NavBar를 만들어 주세요NavBar를 만들어 주세요NavBar를
                만들어 주세요NavBar를 만들어 주세요NavBar를 만들어
                주세요NavBar를 만들어 주세요NavBar를 만들어 주세요NavBar를
                만들어 주세요
              </DoingItWorkContent>
            </DoingItWorkContainer>

            <TeamInfoContanier>
              {/* title */}
              <TeamInfoTitle>팀 정보</TeamInfoTitle>

              {/* content */}
              <TeamInfoContent>
                정우재 금현호 유은재정우재 금현호 유은재정우재 금현호
                유은재정우재 금현호 유은재정우재 금현호 유은재정우재 금현호
                유은재정우재 금현호 유은재정우재 금현호 유은재정우재 금현호
                유은재정우재 금현호 유은재정우재 금현호 유은재정우재 금현호
                유은재정우재 금현호 유은재정우재 금현호 유은재정우재 금현호
                유은재정우재 금현호 유은재정우재 금현호 유은재정우재 금현호
                유은재정우재 금현호 유은재
              </TeamInfoContent>
            </TeamInfoContanier>
          </ContentInfoWrpper>
        </MainContainer>
      </DetailPageWrapper>
    </>
  );
};

export const DetailPageWrapper = styled.div`
  width: 100vw;
  height: calc(100vh - 110px);
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const NavBar = styled.div`
  width: 100%;
  height: 90px;
  display: flex;
  align-items: center;
`;

export const NavBarMent = styled.div`
  font-size: 1.8rem;
  font-weight: bold;
`;

export const MainContainer = styled.div`
  width: 60%;
  display: grid;
  gap: 30px;
`;

export const ContentContanier = styled.div`
  width: 100%;
  flex-direction: column;
  display: grid;
  gap: 20px;
`;

export const ContentImportantInfoTitle = styled.div`
  width: 100%;
  font-size: 2.3rem;
  font-weight: bold;
`;

export const ContentImageContanier = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #efefef;
  overflow: hidden;
  user-select: none;
`;

export const ContentImage = styled.img`
  width: 62%;
`;
export const ContentInfoWrpper = styled.div`
  width: 100%;
  display: grid;
`;

export const ContentButtonContanier = styled.div`
  width: 100%;
  display: flex;
  justify-content: right;
  align-items: center;
  margin-top: 20px;
  button {
    font-size: 20px;
    width: 150px;
    outline: none;
    padding: 12px;
    color: white;
    background-color: #ff91a0;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
`;

export const ProjectExplanationContainer = styled.div`
  width: 100%;
  padding: 60px 0;
  border-bottom: 2px solid #efefef;
`;

export const ProjectExplanationTitle = styled.div`
  width: 100%;
  font-size: 1.8rem;
  margin-bottom: 20px;
`;
export const ProjectExplanationContent = styled.div`
  width: 100%;
  font-size: 1.2rem;
  line-height: 1.7em;
`;

export const DoingItWorkContainer = styled.div`
  width: 100%;
  padding: 60px 0;
  border-bottom: 2px solid #efefef;
`;

export const DoingItWorkTitle = styled.div`
  width: 100%;
  font-size: 1.8rem;
  margin-bottom: 20px;
`;

export const DoingItWorkContent = styled.div`
  width: 100%;
  font-size: 1.2rem;
  line-height: 1.7em;
`;

export const TeamInfoContanier = styled.div`
  width: 100%;
  padding: 60px 0;
  border-bottom: 2px solid #efefef;
`;

export const TeamInfoTitle = styled.div`
  width: 100%;
  font-size: 1.8rem;
  margin-bottom: 20px;
`;

export const TeamInfoContent = styled.div`
  width: 100%;
  font-size: 1.2rem;
  line-height: 1.7em;
`;

export default DetailPage;

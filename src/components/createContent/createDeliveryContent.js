import styled from "styled-components";
import { FcClapperboard } from "react-icons/fc";
import { useState } from "react";
import ContentApi from "../../api/content/contentApi";

const CreateContent = () => {
  const [deliberyData, setDeliberyData] = useState({
    food: "",
    location: "",
    otehrInfo: "",
  });

  const handleChange = (key, value) => {
    setDeliberyData((prev) => {
      let newData = { ...prev };
      newData[key] = value;
      return newData;
    });
  };

  const createProject = () => {
    ContentApi.creaetContent("delivery", deliberyData).then((data) => {});
  };

  return (
    <CreateContentWrapper>
      <MainContainer>
        <NavBar>
          <FcClapperboard style={{ fontSize: "33px" }} />
          <NavBarMent>밥 친구 찾기</NavBarMent>
        </NavBar>

        {/* <ContentImageContainer>
          <ImgBox>
            {imageSrc ? (
              <img src={imageSrc} style={{ width: "101%" }} alt="preview-img" />
            ) : (
              <FcCamera style={{ fontSize: "100px" }} />
            )}
          </ImgBox>
          <Filebox>
            <LabelBox>
              <label htmlFor="file" style={{ cursor: "pointer" }}>
                <FcCameraIdentification style={{ fontSize: "40px" }} />
              </label>
            </LabelBox>
            <input
              id="file"
              type="file"
              onChange={(e) => {
                encodeFileToBase64(e.target.files[0]);
              }}
            />
          </Filebox>
        </ContentImageContainer> */}

        {/* 제목 */}
        <TitleAndDevPositionContainer>
          <TitleContainer>
            <div>배달 음식</div>
            <TitleInput
              type="text"
              placeholder="배달음식 입력"
              onChange={(e) => {
                handleChange("food", e.target.value);
              }}
            />
          </TitleContainer>
        </TitleAndDevPositionContainer>

        <ProjectExplanationAndDoingItWorkContainer>
          <ProjectExplanationWrapper>
            <div>장소</div>
            <DoingItWorkInput
              type="text"
              placeholder="장소를 입력해주세요."
              onChange={(e) => {
                handleChange("location", e.target.value);
              }}
            />
          </ProjectExplanationWrapper>

          <DoingItWorkContainer>
            <div>기타 정보</div>
            <ProjectExplanationInput
              placeholder="기타 정보를 적어 주세요."
              onChange={(e) => {
                handleChange("otherInfo", e.target.value);
              }}
            />
          </DoingItWorkContainer>
        </ProjectExplanationAndDoingItWorkContainer>

        <CreateContentSubmitButton>
          <button
            onClick={() => {
              createProject();
            }}
          >
            의뢰 하기
          </button>
        </CreateContentSubmitButton>
      </MainContainer>
    </CreateContentWrapper>
  );
};

export const CreateContentWrapper = styled.div`
  width: 100vw;
  height: calc(100vh - 110px);
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const MainContainer = styled.div`
  width: 60%;
  display: grid;
  gap: 30px;
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

export const ContentImageContainer = styled.div`
  width: 100%;
  height: 265px;
  display: flex;
`;

export const LabelBox = styled.div`
  position: relative;
  left: -164px;
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #efefef;
  border-radius: 50%;
  border: 1px solid #b4b4b4;
  cursor: pointer;
`;

export const Filebox = styled.div`
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: end;
  input[type="file"] {
    position: absolute;
    width: 0;
    height: 0;
    padding: 0;
    overflow: hidden;
    border: 0;
  }
`;

export const ImgBox = styled.div`
  width: 40%;
  height: 100%;
  background-color: #efefef;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CreateContentSubmitButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: right;
  align-items: center;
  margin-bottom: 20px;
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

export const TitleAndDevPositionContainer = styled.div`
  width: 100%;
  height: 100px;
`;

export const TitleContainer = styled.div`
  width: 100%;
  height: 100%;
  div {
    font-size: 1.3rem;
    height: 30%;
  }
`;

export const DevPositionContainer = styled.div`
  width: 45%;
  height: 100%;

  div {
    font-size: 1.3rem;
    height: 30%;
  }
`;

export const TitleInput = styled.input`
  width: 100%;
  height: 57%;
  margin-top: 2%;
  outline: none;
  padding-left: 10px;
  font-size: 1.1rem;
  background-color: #efefef;
  border: 1px solid #c4c4c4;
  border-radius: 5px;
`;

export const ProjectExplanationAndDoingItWorkContainer = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: space-between;
`;

export const ProjectExplanationWrapper = styled.div`
  width: 48%;
  height: 100%;
  div {
    font-size: 1.3rem;
    height: 20%;
  }
`;
export const ProjectExplanationInput = styled.textarea`
  min-width: 100%;
  min-height: 57%;
  max-width: 100%;
  max-height: 57%;
  margin-top: 2%;
  outline: none;
  padding: 10px 0 0 10px;
  font-size: 1.1rem;
  background-color: #efefef;
  border: 1px solid #c4c4c4;
  border-radius: 5px;
`;

export const DoingItWorkContainer = styled.div`
  width: 45%;
  height: 100%;
  div {
    font-size: 1.3rem;
    height: 20%;
  }
`;

export const DoingItWorkInput = styled.textarea`
  min-width: 100%;
  min-height: 57%;
  max-width: 100%;
  max-height: 57%;
  margin-top: 2%;
  outline: none;
  padding: 10px 0 0 10px;
  font-size: 1.1rem;
  background-color: #efefef;
  border: 1px solid #c4c4c4;
  border-radius: 5px;
`;

export const TeamInfoAndOthersContanier = styled.div`
  width: 100%;
  height: 300px;
  display: grid;
  gap: 20px;
`;

export const TeamInfoContanier = styled.div`
  width: 100%;
  height: 100%;
  div {
    font-size: 1.3rem;
    height: 20%;
  }
`;

export const TeamInfoInput = styled.textarea`
  min-width: 100%;
  min-height: 57%;
  max-width: 100%;
  max-height: 57%;
  margin-top: 2%;
  outline: none;
  padding: 10px 0 0 10px;
  font-size: 1.1rem;
  background-color: #efefef;
  border: 1px solid #c4c4c4;
  border-radius: 5px;
`;

export const OthersContanier = styled.div`
  width: 100%;
  height: 100%;
  div {
    font-size: 1.3rem;
    height: 20%;
  }
`;

export const OthersInput = styled.textarea`
  min-width: 100%;
  min-height: 57%;
  max-width: 100%;
  max-height: 57%;
  margin-top: 2%;
  outline: none;
  padding: 10px 0 0 10px;
  font-size: 1.1rem;
  background-color: #efefef;
  border: 1px solid #c4c4c4;
  border-radius: 5px;
`;

export default CreateContent;

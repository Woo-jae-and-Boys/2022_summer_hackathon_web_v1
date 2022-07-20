import styled from "styled-components";
import { FcClapperboard } from "react-icons/fc";
import DropDown from "../common/dropDown/dropDown";
import { useState } from "react";
import { useEffect } from "react";
import ContentApi from "../../api/content/contentApi";
import { FcCamera, FcCameraIdentification } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const CreateContent = () => {
  const value = ["웹", "안드로이드", "서버", "iOS"];
  const navigate = useNavigate();
  const [file, setFile] = useState();
  const [projcetData, setProjcetData] = useState({
    title: "",
    content: "",
    ToDo: "",
    platForm: "",
    teamInfo: "",
    otherInfo: "",
  });

  useEffect(() => {}, [projcetData]);

  const handleChange = (key, value) => {
    setProjcetData((prev) => {
      let newData = { ...prev };
      newData[key] = value;
      return newData;
    });
  };

  const [childValue, setChildValue] = useState("");
  const [imageSrc, setImageSrc] = useState("");

  const encodeFileToBase64 = (fileBlob) => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    return new Promise((resolve) => {
      reader.onload = () => {
        setImageSrc(reader.result);
        resolve();
      };
    });
  };
  const createProject = () => {
    var formData = new FormData();
    formData.append("file", file);
    formData.append("title", projcetData.title);
    formData.append("content", projcetData.content);
    formData.append("ToDo", projcetData.ToDo);
    formData.append("otherInfo", projcetData.otherInfo);
    formData.append("teamInfo", projcetData.teamInfo);
    formData.append("platForm", childValue);

    setProjcetData((prev) => {
      let newData = { ...prev };
      newData["platForm"] = childValue;
      return newData;
    });
    ContentApi.creaetContent("project", formData).then((data) => {
      // navigate("/");
      console.log(data);
      Swal.fire({
        title: "로그인 성공!",
        icon: "success",
        confirmButtonText: "확인",
      });
    });
  };
  return (
    <CreateContentWrapper>
      <MainContainer>
        <NavBar>
          <FcClapperboard style={{ fontSize: "33px" }} />
          <NavBarMent>프로젝트 의뢰하기</NavBarMent>
        </NavBar>

        <ContentImageContainer>
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
                setFile(e.target.files[0]);
              }}
            />
          </Filebox>
        </ContentImageContainer>

        {/* 제목 */}
        <TitleAndDevPositionContainer>
          <TitleContainer>
            <div>제목</div>
            <TitleInput
              type="text"
              placeholder="제목 입력"
              onChange={(e) => {
                handleChange("title", e.target.value);
              }}
            />
          </TitleContainer>

          <DevPositionContainer>
            <div>분야 선택</div>
            <DropDown
              id="dropDown"
              defaultValue={"분야"}
              childValue={value}
              setSeletedValue={setChildValue}
            />
          </DevPositionContainer>
        </TitleAndDevPositionContainer>

        <ProjectExplanationAndDoingItWorkContainer>
          <ProjectExplanationWrapper>
            <div>프로젝트 설명</div>
            <ProjectExplanationInput
              placeholder="프로젝트를 설명해 주세요."
              onChange={(e) => {
                handleChange("content", e.target.value);
              }}
            />
          </ProjectExplanationWrapper>

          <DoingItWorkContainer>
            <div>해야할 일</div>
            <DoingItWorkInput
              type="text"
              placeholder="해야할 일을 적어 주세요."
              onChange={(e) => {
                handleChange("ToDo", e.target.value);
              }}
            />
          </DoingItWorkContainer>
        </ProjectExplanationAndDoingItWorkContainer>

        <TeamInfoAndOthersContanier>
          <TeamInfoContanier>
            <div>팀 설명 & 정보</div>
            <TeamInfoInput
              type="text"
              placeholder="팀 설명 & 정보를 적어주세요."
              onChange={(e) => {
                handleChange("teamInfo", e.target.value);
              }}
            />
          </TeamInfoContanier>

          <OthersContanier>
            <div>기타 정보</div>
            <OthersInput
              type="text"
              placeholder="기타 정보를 적어주세요."
              onChange={(e) => {
                handleChange("otherInfo", e.target.value);
              }}
            />
          </OthersContanier>
        </TeamInfoAndOthersContanier>

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
  display: flex;
  justify-content: space-between;
`;

export const TitleContainer = styled.div`
  width: 48%;
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

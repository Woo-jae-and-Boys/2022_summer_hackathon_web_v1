import "./signUp.css";
import Nav from "../common/nav/nav";
import img from "./triangle.png";
import DropDown from "../common/dropDown/dropDown";
import { POSITION } from "../../model/position.model.js";
import useSignUp from "../../hooks/signUp/useSignUp";
const SignUp = () => {
  const { setSelectedValue, postUserInfo, handleChange } = useSignUp();
  return (
    <div>
      <Nav />
      <div className="components">
        <div className="head">
          <img id="triangle" src={img} alt="a" />
          <h2>회원가입</h2>
        </div>
        <div className="contents">
          <div className="email">
            <h4>이메일</h4>
            <input
              type="email"
              onChange={(e) => {
                handleChange("email", e.target.value);
              }}
            ></input>
          </div>
          <div className="password">
            <h4>비밀번호</h4>
            <input
              onChange={(e) => {
                handleChange("password", e.target.value);
              }}
            ></input>
          </div>
          <div className="name">
            <h4>이름</h4>
            <input
              onChange={(e) => {
                handleChange("name", e.target.value);
              }}
            ></input>
          </div>
          <div className="classnumber">
            <h4>학번</h4>
            <input
              onChange={(e) => {
                handleChange("studentId", e.target.value);
              }}
            ></input>
          </div>
          <div className="thch stack">
            <h4>기술스택</h4>
            <DropDown
              childValue={POSITION}
              setSeletedValue={setSelectedValue}
            />
          </div>
          <div className="other">
            <h4>기타사항</h4>
            <input
              id="etc"
              onChange={(e) => {
                handleChange("des", e.target.value);
              }}
            ></input>
          </div>
          <input
            id="button"
            type="button"
            value="가입완료"
            onClick={() => {
              postUserInfo();
            }}
          ></input>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

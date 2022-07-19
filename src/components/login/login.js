import "./login.css";
import DGSWIMG from "../../img/dgswimg.png";

const Login = () => {
  return (
    <div>
      <div className="Login">
        <img className="dgsw_img" src={DGSWIMG} alt="loginImg" />
        <div className="Login_in">
          <div className="main">
            <div className="main_text">
              <h2>인력이 필요 하신가요?</h2>
              <h1>대인소</h1>
            </div>
            <div className="main_text_two">
              <p>
                각종 대회, 프로젝트, 공모전 팀원이 필요할 때<br />
                대신 심부름, 배달 해줄 사람이 필요할 때<br />
                인력이 필요하신가요?
                <br />
                ‘대인소’로 오세요!
              </p>
            </div>
          </div>
          <div className="main_two">
            <div className="container">
              <h1>Login</h1>
              <div className="main_text">
                <h5>Email</h5>
                <input
                  type="text"
                  className="in"
                  placeholder="이메일을 입력해 주세요"
                />
              </div>
              <div className="main_text_two">
                <h5>Password</h5>
                <input
                  type="text"
                  className="inin"
                  placeholder="비밀번호를 입력해 주세요"
                />
              </div>
              <div className="main_button">
                <input type="button" className="ininin" value="로그인" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;

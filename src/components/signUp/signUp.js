import "./signUp.css"
import Nav from "../common/nav/nav"
import img from "./triangle.png"
const SignUp = () =>{
    return (
    <div>
        <Nav/>
        <div className="components">
             <div className="head">
             <img id ="triangle" src={img} alt="a"/>
                <h2>회원가입</h2>
            </div>
            <div className="contents">
                    <div className="email">
                        <h4>이메일</h4>
                        <input type="email"></input>
                    </div>
                    <div className="password">
                        <h4>비밀번호</h4>
                        <input></input>
                    </div>
                    <div className="name">
                        <h4>이름</h4>
                        <input></input>
                    </div>
                    <div className="classnumber">
                        <h4>학번</h4>
                        <input></input>
                    </div>
                    <div className="thch stack">
                        <h4>기술스택</h4>
                        <input></input>
                    </div>
                    <div className="other">
                        <h4>기타사항</h4>
                        <input id="etc"></input>

                    </div>
                    <input id="button" type="button" value="가입완료"></input>
            </div>
        </div>
    </div>
    )
}

export default SignUp
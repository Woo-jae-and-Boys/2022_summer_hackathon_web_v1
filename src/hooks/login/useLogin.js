import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { userState } from "../../store/user";
import { useRecoilState } from "recoil";
import AuthApi from "../../api/auth/authApi";
import Swal from "sweetalert2";

const useLogin = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useRecoilState(userState);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validateLoginInfo = (email, password) => {
    if (email.length <= 0 || password.length <= 0) {
      Swal.fire({
        title: "이메일 또는 패스워드를 제대로 입력해주세용",
        icon: "error",
        confirmButtonText: "확인",
      });
      return false;
    }
    return true;
  };

  const tryLogin = async () => {
    if (!validateLoginInfo(email, password)) {
      // early return
      return;
    }

    try {
      const {
        data: { token, user },
      } = await AuthApi.signIn(email, password);

      setUserInfo(user);
      localStorage.setItem("access_token", token);
      navigate("/");
      Swal.fire({
        title: "로그인 성공!",
        icon: "success",
        confirmButtonText: "확인",
      });
    } catch (e) {
      Swal.fire({
        title: "실패...",
        text: "로그인에 실패 하였습니다. 다시 시도해 주십시오.",
        icon: "error",
        confirmButtonText: "확인",
      });
    }
  };
  return { tryLogin, setEmail, setPassword, userInfo };
};

export default useLogin;

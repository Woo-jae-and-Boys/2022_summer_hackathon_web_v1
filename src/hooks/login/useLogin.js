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

  const tryLogin = async () => {
    AuthApi.signIn(email, password)
      .then((data) => {
        const { token, user } = data.data;
        setUserInfo(user);
        localStorage.setItem("access_token", token);
        navigate("/");
        Swal.fire({
          title: "로그인 성공!",
          icon: "success",
          confirmButtonText: "확인",
        });
      })
      .catch(() => {
        Swal.fire({
          title: "실패...",
          text: "로그인에 실패 하였습니다. 다시 시도해 주십시오.",
          icon: "error",
          confirmButtonText: "확인",
        });
      });
  };
  return { tryLogin, setEmail, setPassword, userInfo };
};

export default useLogin;

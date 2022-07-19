import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { userState } from "../../store/user";
import { useRecoilState } from "recoil";
import AuthApi from "../../api/auth/authApi";

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
      })
      .catch(() => {
        console.log("hi");
      });
  };
  return { tryLogin, setEmail, setPassword, userInfo };
};

export default useLogin;

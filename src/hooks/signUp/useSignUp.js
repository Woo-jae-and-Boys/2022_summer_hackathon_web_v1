import { useEffect, useState } from "react";
import AuthApi from "../../api/auth/authApi";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const useSignUp = () => {
  const navigate = useNavigate();
  const [selectedValue, setSelectedValue] = useState();
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
    name: "",
    studentId: "",
    job: "",
    des: "",
  });

  useEffect(() => {}, [userInfo]);

  const handleChange = (key, value) => {
    setUserInfo((prev) => {
      let newUserInfo = { ...prev };
      newUserInfo[key] = value;
      return newUserInfo;
    });
  };

  const postUserInfo = async () => {
    setUserInfo((prev) => {
      let newUserInfo = { ...prev };
      newUserInfo["job"] = selectedValue;
      return newUserInfo;
    });
    AuthApi.signUp(userInfo)
      .then(() => {
        navigate("/");
        Swal.fire({
          title: "회원가입 성공!",
          icon: "success",
          confirmButtonText: "확인",
        });
      })
      .catch(() => {
        Swal.fire({
          title: "실패...",
          text: "회원가입에 실패 하였습니다. 다시 시도해 주십시오.",
          icon: "error",
          confirmButtonText: "확인",
        });
      });
  };

  return { setSelectedValue, postUserInfo, setUserInfo, handleChange };
};

export default useSignUp;

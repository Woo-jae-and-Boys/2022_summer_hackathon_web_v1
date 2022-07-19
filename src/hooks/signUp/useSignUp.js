import { useEffect, useState } from "react";
import AuthApi from "../../api/auth/authApi";
import { useNavigate } from "react-router-dom";

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
    AuthApi.signUp(userInfo).then(() => {
      navigate("/");
    });
  };

  return { setSelectedValue, postUserInfo, setUserInfo, handleChange };
};

export default useSignUp;

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useAuth = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("access_token") === null) {
      navigate("/signin");
    } else {
      navigate("/");
    }
  }, [navigate]);

  return {};
};

export default useAuth;

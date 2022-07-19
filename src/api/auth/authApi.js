import customAxios from "../../lib/axios/customAxios";

class AuthApi {
  async signIn(email, password) {
    const { data } = await customAxios.post("/user/login", { email, password });
    return data;
  }

  async signUp(userInfo) {
    const { data } = await customAxios.post("/user/register", userInfo);
    return data;
  }
}

export default new AuthApi();

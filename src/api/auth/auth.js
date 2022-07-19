import customAxios from "../../lib/axios/customAxios";
import { SERVER } from "../../config";

class AuthApi {
  async signIn() {
    const { data } = await customAxios.post("/login");
    return data;
  }

  async signUp() {
    const { data } = await customAxios.post("/signup");
  }
}

export default new AuthApi();

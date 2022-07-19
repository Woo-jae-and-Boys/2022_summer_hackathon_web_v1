import customAxios from "../../lib/axios/customAxios";

class MainApi {
  async getProjectItem() {
    const { data } = await customAxios.get("/project");
    return data;
  }

  async getErrandItems() {
    const { data } = await customAxios.get("/errands");
    return data;
  }
}

export default new MainApi();

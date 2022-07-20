import customAxios from "../../lib/axios/customAxios";
class ContentApi {
  async creaetContent(type, contentInfo) {
    console.log(type, contentInfo);
    const { data } = customAxios.post(`/${type}/create`, contentInfo, {
      headers: {
        Authorization: localStorage.getItem("access_token"),
      },
    });
    return data;
  }
}

export default new ContentApi();

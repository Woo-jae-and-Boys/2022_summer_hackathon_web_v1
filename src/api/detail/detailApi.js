import customAxios from "../../lib/axios/customAxios";

class DetailApi {
  async getProjectContentData(id) {
    const { data } = await customAxios.get(`/project/${id}`);
    return data;
  }

  async getErrandsContentData(id) {
    const { data } = await customAxios.get(`/errands/${id}`);
    return data;
  }

  async getDeliveryContentData(id) {
    const { data } = await customAxios.get(`/delivery/${id}`);
    return data;
  }
}

export default new DetailApi();

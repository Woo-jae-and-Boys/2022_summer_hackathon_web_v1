import Swal from "sweetalert2";
import DetailApi from "../../api/detail/detailApi";
import { useCallback } from "react";

const useDetail = () => {
  const getProjectData = useCallback(async (id) => {
    try {
      const { data } = await DetailApi.getProjectContentData(id);

      return data;
    } catch (error) {
      Swal.fire({
        title: "실패...",
        icon: "error",
        confirmButtonText: "확인",
      });
      return error;
    }
  }, []);

  const getErrandsData = useCallback(async (id) => {
    try {
      const { data } = await DetailApi.getErrandsContentData(id);
      Swal.fire({
        title: "성공!",
        icon: "success",
        confirmButtonText: "확인",
      });

      return data;
    } catch (error) {
      Swal.fire({
        title: "실패...",
        icon: "error",
        confirmButtonText: "확인",
      });
      return error;
    }
  }, []);

  const getDeliveryData = useCallback(async (id) => {
    try {
      const { data } = await DetailApi.getDeliveryContentData(id);
      return data;
    } catch (error) {
      Swal.fire({
        title: "실패...",
        icon: "error",
        confirmButtonText: "확인",
      });
      return error;
    }
  }, []);

  return {
    getProjectData,
    getErrandsData,
    getDeliveryData,
  };
};

export default useDetail;

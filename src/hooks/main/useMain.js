import { useCallback, useState } from "react";
import MainApi from "../../api/main/mainApi";

const useMain = () => {
  const [projectItems, setProjectItems] = useState();
  const [errandItems, setErrandItems] = useState();
  const [deliveryData, setDeliveryData] = useState();

  const getProjectItems = useCallback(async () => {
    const { data } = await MainApi.getProjectItem();
    setProjectItems(data);
  }, []);

  const getErrandItems = useCallback(async () => {
    const { data } = await MainApi.getErrandItems();
    setErrandItems(data);
  }, []);

  const getDeliveryData = useCallback(async () => {
    const { data } = await MainApi.getDeliveryItems();
    setDeliveryData(data);
  }, []);

  return {
    getProjectItems,
    getErrandItems,
    getDeliveryData,
    errandItems,
    projectItems,
    deliveryData,
  };
};

export default useMain;

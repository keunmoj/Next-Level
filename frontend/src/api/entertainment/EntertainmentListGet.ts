import { serverAxios } from "../api";

const EntertainmentListGet = async () => {
  try {
    const response = await serverAxios({
      method: "get",
      url: "/show/all",
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export default EntertainmentListGet;

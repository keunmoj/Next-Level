import { serverAxios } from "../api";

const EntertainmentGet = async (id: number) => {
  try {
    const response = await serverAxios({
      method: "get",
      url: `/show/problem/${id}`,
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export default EntertainmentGet;

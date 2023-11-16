import { serverAxios } from "../api";

const DramaGet = async (id: number) => {
  try {
    const response = await serverAxios({
      method: "get",
      url: `/drama/problem/${id}`,
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export default DramaGet;

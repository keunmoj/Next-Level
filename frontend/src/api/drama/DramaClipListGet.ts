import { serverAxios } from "../api";

const DramaClipListGet = async (id: any) => {
  try {
    const response = await serverAxios({
      method: "get",
      url: `/drama/clip/${id}`,
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export default DramaClipListGet;

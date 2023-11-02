import { serverAxios } from "../api";

const EntertainmentClipListGet = async (id: any) => {
  try {
    const response = await serverAxios({
      method: "get",
      url: `/show/clip/${id}`,
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export default EntertainmentClipListGet;

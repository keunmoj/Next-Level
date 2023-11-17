import { serverAxios } from "../api";

const SingGameInfoGet = async (songId: any) => {
  try {
    const response = await serverAxios({
      method: "get",
      url: `/song/problem/${songId}`,
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export default SingGameInfoGet;

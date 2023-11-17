import { serverAxios } from "../api";

const SingPopularArtistListGet = async () => {
  try {
    const response = await serverAxios({
      method: "get",
      url: "/song/artist/all",
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export default SingPopularArtistListGet;

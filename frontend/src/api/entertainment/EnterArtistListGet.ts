import { serverAxios } from "../api";

const EnterArtistListGet = async () => {
  try {
    const response = await serverAxios({
      method: "get",
      url: "/show/artist/all",
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export default EnterArtistListGet;

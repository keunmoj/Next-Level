import { serverAxios } from "../api";

const DramarArtistListGet = async () => {
  try {
    const response = await serverAxios({
      method: "get",
      url: "drama/artist/least-twice",
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export default DramarArtistListGet;

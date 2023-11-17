import { serverAxios } from "../api";

const SingArtistSongGet = async (artistId: any) => {
  try {
    const response = await serverAxios({
      method: "get",
      url: `/song/artist/${artistId}`,
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export default SingArtistSongGet;

import { serverAxios } from "../api";

const EnterArtistClipGet = async (id: any) => {
  try {
    const response = await serverAxios({
      method: "get",
      url: `/show/artist/clip/${id}`,
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export default EnterArtistClipGet;

import { serverAxios } from "../api";

const DramaArtistClipGet = async (id: any) => {
  try {
    const response = await serverAxios({
      method: "get",
      url: `/drama/artist/clip/${id}`,
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export default DramaArtistClipGet;

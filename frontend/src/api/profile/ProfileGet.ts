import { serverAxios } from "../api";

const ProfileGet = async () => {
  try {
    const response = await serverAxios({
      method: "get",
      url: "/auth/user",
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export default ProfileGet;

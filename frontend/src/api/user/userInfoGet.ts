import { serverAxios } from "../api";

const userInfoGet = async () => {
  try {
    const response = await serverAxios({
      method: "get",
      url: `/auth/user`,
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export default userInfoGet;

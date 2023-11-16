import { formAxios } from "../api";

const Logout = async () => {
  try {
    const response = await formAxios({
      method: "post",
      url: "/auth/logout",
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export default Logout;

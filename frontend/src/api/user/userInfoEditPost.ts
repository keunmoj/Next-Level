import { formAxios } from "../api";

const UserInfoEditPost = async (request: any) => {
  try {
    const response = await formAxios({
      method: "post",
      url: "/auth/user/update",
      data: request,
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export default UserInfoEditPost;

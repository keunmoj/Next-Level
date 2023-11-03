import { serverAxios } from "../api";

const SignUp = async (request: any) => {
  try {
    const response = await serverAxios({
      method: "post",
      url: "/auth/user/add-informations",
      data: {
        request: request,
      },
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export default SignUp;

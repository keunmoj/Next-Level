import { formAxios } from "../api";

const SignUp = async (request: any) => {
  try {
    const response = await formAxios({
      method: "post",
      url: "/auth/user/addinformations",
      data: request,
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export default SignUp;

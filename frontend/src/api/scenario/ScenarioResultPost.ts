import { serverAxios } from "../api";

const ScenarioResultPost = async (formData: FormData) => {
  try {
    const response = await serverAxios({
      method: "post",
      url: "/evaluate/result",
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response;
  } catch (error) {
    console.log("error", error);
  }
};

export default ScenarioResultPost;

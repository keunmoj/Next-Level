import { serverAxios } from "../api";

const AttendancePost = async () => {
  try {
    const response = await serverAxios({
      method: "post",
      url: "/auth/user/attendance",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export default AttendancePost;

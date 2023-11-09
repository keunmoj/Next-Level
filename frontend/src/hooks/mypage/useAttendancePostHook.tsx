import AttendancePost from "@/api/mypage/AttendancePost";
import { useState } from "react";

export const useAttendancePostHook = () => {
  const [result, setResult] = useState<any>();
  const postAttendance = async () => {
    const res = await AttendancePost();
    console.log(res);
  };
  return { result, postAttendance };
};

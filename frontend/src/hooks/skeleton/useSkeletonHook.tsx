import skeletonGet from "@/api/apiSkeleton/skeletonGet";
import { useState } from "react";
export const useSkeletonHook = () => {
  const [List, setList] = useState<any>();
  const getSkeletonList = async () => {
    const res = await skeletonGet();
    // 백에서 주는 데이터를 성공적으로 받으면 데이터 저장
    // 아래는 특화 프로젝트 백 response 데이터 기준 코드
    if (res.data.success === true) {
      setList(res.data.response);
    } else {
      return;
    }
  };
  return { List };
};

// 사용법
// 사용할 컴포넌트에서
// const { List } = useSkeletonHook()
// 으로 가져옴

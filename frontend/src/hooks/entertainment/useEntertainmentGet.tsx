import EntertainmentGet from "@/api/entertainment/EntertainmentGet";
import { useState } from "react";

export const useEntertainmentGet = () => {
  const [entertainment, setEntertainment] = useState<any>(null);
  const getEntertainment = async (id: any) => {
    const res = await EntertainmentGet(id);
    setEntertainment(res.data.showProblem);
  };
  return { entertainment, getEntertainment };
};

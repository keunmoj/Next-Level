import ScenarioGet from "@/api/scenario/ScenarioGet";
import { useState } from "react";

export const useScenarioGetHook = () => {
  const [scenario, setScenario] = useState<any>();
  const getScenario = async (id: any) => {
    const res = await ScenarioGet(id);
    setScenario(res.data.data.scripts);
  };
  return { getScenario, scenario };
};

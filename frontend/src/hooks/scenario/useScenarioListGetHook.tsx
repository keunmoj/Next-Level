import ScenarioListGet from "@/api/scenario/ScenarioListGet";
import { useState } from "react";

export const useScenarioListGetHook = () => {
  const [scenarioList, setScenarioList] = useState<any>();
  const getScenarioList = async () => {
    const res = await ScenarioListGet();
    setScenarioList(res.data.data.scenarios);
  };
  return { getScenarioList, scenarioList };
};

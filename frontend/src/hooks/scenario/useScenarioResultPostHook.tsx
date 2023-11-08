import ScenarioResultPost from "@/api/scenario/ScenarioResultPost";

export const useScenarioResultPostHook = () => {
  const getScenarioResult = async (formData: any) => {
    const res = await ScenarioResultPost(formData);
    console.log(res);
  };
  return { getScenarioResult };
};

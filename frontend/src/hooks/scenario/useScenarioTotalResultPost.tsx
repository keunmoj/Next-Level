import ScenarioTotalResultPost from "@/api/scenario/ScenarioTotalResultPost";

export const useScenarioTotalResultPostHook = () => {
  // const [firstQuestion, setFirstQuestion] = useState();

  const getScenarioTotalResult = async (
    situationId: number,
    totalScore: number,
    scripts: [],
    scores: []
  ) => {
    const res = await ScenarioTotalResultPost(
      situationId,
      totalScore,
      scripts,
      scores
    );
    //   setFirstQuestion(res.data.data.response);
    console.log(res);
  };
  return { getScenarioTotalResult };
};

import ScenarioTotalResultPost from "@/api/scenario/ScenarioTotalResultPost";

export const useScenarioTotalResultPostHook = () => {
  // const [firstQuestion, setFirstQuestion] = useState();

  const getScenarioTotalResult = async (
    situationId: number,
    totalScore: number,
    scriptNumbers: [],
    scores: []
  ) => {
    const res = await ScenarioTotalResultPost(
      situationId,
      totalScore,
      scriptNumbers,
      scores
    );
    //   setFirstQuestion(res.data.data.response);
    console.log(res);
  };
  return { getScenarioTotalResult };
};

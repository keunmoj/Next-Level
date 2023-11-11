import { useLocation, useNavigate } from "react-router-dom";
import {
  StyledDetailResultChat,
  StyledDetailResultChatTop,
  StyledDetailResultChatBack,
  StyledDetailResultChatAiImg,
  StyledDetailResultChatChat,
  StyledDetailResultChatAiChatContainer,
  StyledDetailResultChatAiChatImg,
  StyledDetailResultChatAiChat,
  StyledDetailResultChatUserChatContainer,
  StyledDetailResultChatUserChat,
  StyledDetailResultChatInputContainer,
  StyledDetailResultChatInput,
  StyledDireactBottom,
  StyledDetailResultChatButton,
  StyledDetailResultChatScore,
  StyledDetailResultScore,
  StyledDetailResultDate,
} from "./Detail.styld";
import { useScenarioDetailResultGetHook } from "@/hooks/scenario/useScenarioDetailResultGetHook";
import { useEffect } from "react";

const LearningDetailResult = () => {
  // 뒤로가기
  const navigate = useNavigate();
  const goBack = () => {
    navigate("/learning");
  };

  // 채팅전송
  const location = useLocation();
  const situationProblemId = location.state.card.id;
  const learnDate = location.state.card.date;

  const { getAiResultDetail, aiResults, aiResultScore } =
    useScenarioDetailResultGetHook();
  useEffect(() => {
    getAiResultDetail(situationProblemId);
  }, []);

  useEffect(() => {
    console.log(aiResults);
  }, [aiResults]);

  return (
    <StyledDetailResultChat>
      <StyledDetailResultChatTop>
        <StyledDetailResultChatBack onClick={goBack}>
          ←
        </StyledDetailResultChatBack>
        <StyledDetailResultChatAiImg src="/chat/aiprofile.png" alt="profile" />
      </StyledDetailResultChatTop>
      <StyledDetailResultChatChat>
        <StyledDetailResultDate>{learnDate}</StyledDetailResultDate>
        {aiResults?.map((text: any, index: any) => {
          if (index % 2 === 0) {
            return (
              <StyledDetailResultChatAiChatContainer key={text.scriptNumber}>
                <StyledDetailResultChatAiChatImg
                  src="/chat/aiprofile.png"
                  alt="profile"
                />
                <StyledDetailResultChatAiChat>
                  {text.script}
                </StyledDetailResultChatAiChat>
              </StyledDetailResultChatAiChatContainer>
            );
          } else {
            return (
              <StyledDetailResultChatUserChatContainer key={text.scriptNumber}>
                <StyledDetailResultChatUserChat>
                  {text.script}
                </StyledDetailResultChatUserChat>
                <StyledDetailResultChatScore>
                  {text.score ? text.score : 0}점
                </StyledDetailResultChatScore>
              </StyledDetailResultChatUserChatContainer>
            );
          }
        })}
      </StyledDetailResultChatChat>
      <StyledDetailResultScore>
        총점 : {aiResultScore}점
      </StyledDetailResultScore>
      {/* <StyledDireactBottom>
        <StyledDetailResultChatInputContainer>
          <StyledDetailResultChatInput />
          <StyledDetailResultChatButton src="/chat/mike.png" alt="send" />
          <StyledDetailResultChatButton src="/chat/send.png" alt="send" />
        </StyledDetailResultChatInputContainer>
      </StyledDireactBottom> */}
    </StyledDetailResultChat>
  );
};

export default LearningDetailResult;

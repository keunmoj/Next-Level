import { useLocation, useNavigate } from "react-router-dom";
import {
  StyledLifeChat,
  StyledLifeChatTop,
  StyledLifeChatChat,
  StyledLifeChatAiChat,
  StyledLifeChatUserChat,
  StyledLifeChatBack,
  StyledLifeChatAiImg,
  StyledLifeChatAiChatContainer,
  StyledLifeChatAiChatImg,
  StyledLifeChatUserChatContainer,
  StyledLifeChatInputContainer,
  StyledLifeChatInput,
  StyledDireactBottom,
  StyledLifeChatButton,
} from "./Lifechat.styled";
import { useScenarioListGetHook } from "@/hooks/scenario/useScenarioListGetHook";
import { useEffect } from "react";
import { useScenarioGetHook } from "@/hooks/scenario/useScenarioGetHook";

const LearningLifeChat = () => {
  // 뒤로가기
  const navigate = useNavigate();
  const goBack = () => {
    navigate("/learning");
  };

  // api
  const loacation = useLocation();
  const scenarioId = loacation.state.scenarioId;
  // console.log(scenarioId);
  const { getScenario, scenario } = useScenarioGetHook();
  useEffect(() => {
    getScenario(scenarioId);
  }, []);

  // useEffect(() => {
  //   console.log(scenario);
  // }, [scenario]);

  return (
    <StyledLifeChat>
      <StyledLifeChatTop>
        <StyledLifeChatBack onClick={goBack}>←</StyledLifeChatBack>
        <StyledLifeChatAiImg src="/chat/aiprofile.png" alt="profile" />
      </StyledLifeChatTop>
      <StyledLifeChatChat>
        {scenario?.map((text: any, index: any) => {
          if (index % 2 === 0) {
            return (
              <StyledLifeChatAiChatContainer key={text.scriptNumber}>
                <StyledLifeChatAiChatImg
                  src="/chat/aiprofile.png"
                  alt="profile"
                />
                <StyledLifeChatAiChat>{text.script}</StyledLifeChatAiChat>
              </StyledLifeChatAiChatContainer>
            );
          } else {
            return (
              <StyledLifeChatUserChatContainer key={text.scriptNumber}>
                <StyledLifeChatUserChat>{text.script}</StyledLifeChatUserChat>
              </StyledLifeChatUserChatContainer>
            );
          }
        })}
      </StyledLifeChatChat>
      <StyledDireactBottom>
        <StyledLifeChatInputContainer>
          <StyledLifeChatInput />
          <StyledLifeChatButton src="/chat/mike.png" alt="send" />
          <StyledLifeChatButton src="/chat/send.png" alt="send" />
        </StyledLifeChatInputContainer>
      </StyledDireactBottom>
    </StyledLifeChat>
  );
};

export default LearningLifeChat;

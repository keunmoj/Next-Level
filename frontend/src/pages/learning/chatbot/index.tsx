import { useLocation, useNavigate } from "react-router-dom";
import {
  StyledDirect,
  StyledDirectTop,
  StyledDirectChat,
  StyledDirectAiChat,
  StyledDirectUserChat,
  StyledDirectBack,
  StyledDirectAiImg,
  StyledDirectAiChatContainer,
  StyledDirectAiChatImg,
  StyledDirectUserChatContainer,
  StyledDirectInputContainer,
  StyledDirectInput,
  StyledDireactBottom,
  StyledDirectButton,
} from "./Chatbot.styled";
import { useChatbotHook } from "@/hooks/chatbot/useChatbotHook";
import { useChatbotTalkingHook } from "@/hooks/chatbot/useChatbotTalkingHook";
import { useEffect, useState } from "react";

const LearningChatbot = () => {
  // 뒤로가기
  const navigate = useNavigate();
  const goBack = () => {
    navigate("/learning");
  };

  // 채팅주제 전송
  const { nextQuestion, getChatTalkingbot } = useChatbotTalkingHook();
  // User 입력 내용
  const [sendText, setSendText] = useState<any>([]);
  // Gpt 대화 내용
  const [message, setMessage] = useState<any>([]);
  // 전체 map 돌릴 state
  const [allMessage, setAllMessage] = useState<any>([]);
  useEffect(() => {
    console.log(allMessage);
  }, [allMessage]);

  const location = useLocation();
  useEffect(() => {
    // console.log(location.state.firstQuestion);
  }, []);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setAllMessage((prevSendText: any) => [
      ...prevSendText,
      e.target.name.value,
    ]);
    getChatTalkingbot(e.target.name.value);
    // console.log(nextQuestion);
  };
  useEffect(() => {
    setAllMessage((prevSendText: any) => [...prevSendText, nextQuestion]);
    // console.log(allMessage);
  }, [nextQuestion]);
  return (
    <StyledDirect>
      <StyledDirectTop>
        <StyledDirectBack onClick={goBack}>←</StyledDirectBack>
        <StyledDirectAiImg src="/chat/aiprofile.png" alt="profile" />
      </StyledDirectTop>
      <StyledDirectChat>
        {/* 첫 질문 */}
        <StyledDirectAiChatContainer>
          <StyledDirectAiChatImg src="/chat/aiprofile.png" alt="profile" />
          <StyledDirectAiChat>
            {location.state.firstQuestion}
          </StyledDirectAiChat>
        </StyledDirectAiChatContainer>

        {/* 상호 대화 */}
        {allMessage.map((text: any, index: any) => {
          if (index > 0) {
            if (index % 2 === 1) {
              return (
                <StyledDirectUserChatContainer key={text}>
                  <StyledDirectUserChat>{text}</StyledDirectUserChat>
                </StyledDirectUserChatContainer>
              );
            } else {
              return (
                <StyledDirectAiChatContainer key={text}>
                  <StyledDirectAiChatImg
                    src="/chat/aiprofile.png"
                    alt="profile"
                  />
                  <StyledDirectAiChat>{text}</StyledDirectAiChat>
                </StyledDirectAiChatContainer>
              );
            }
          }
        })}
      </StyledDirectChat>

      <StyledDireactBottom>
        <StyledDirectInputContainer onSubmit={handleSubmit}>
          <StyledDirectInput name="name" />
          <StyledDirectButton src="/chat/mike.png" alt="send" />
          <StyledDirectButton src="/chat/send.png" alt="send" />
        </StyledDirectInputContainer>
      </StyledDireactBottom>
    </StyledDirect>
  );
};

export default LearningChatbot;

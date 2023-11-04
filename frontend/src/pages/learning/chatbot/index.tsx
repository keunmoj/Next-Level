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

  const location = useLocation();
  useEffect(() => {
    console.log(location.state.firstQuestion);
  }, []);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setSendText((prevSendText: any) => [...prevSendText, e.target.name.value]);
    getChatTalkingbot(e.target.name.value);
    if (nextQuestion) {
      setMessage((prevSendText: any) => [...prevSendText, nextQuestion]);
    }
  };

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

        {sendText.map((text: any) => (
          <StyledDirectUserChatContainer key={text}>
            <StyledDirectUserChat>{text}</StyledDirectUserChat>
          </StyledDirectUserChatContainer>
        ))}
        {message.map((gettext: any) => (
          <StyledDirectAiChatContainer key={gettext}>
            <StyledDirectAiChatImg src="/chat/aiprofile.png" alt="profile" />
            <StyledDirectAiChat>{gettext}</StyledDirectAiChat>
          </StyledDirectAiChatContainer>
        ))}
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

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

  // 채팅주제 전송(모달창에서 주제 받을 수 있도록 수정 필요)
  // 여기서 임시로 테스트
  // const { firstQuestion, getChatbot } = useChatbotHook();
  const { nextQuestion, getChatTalkingbot } = useChatbotTalkingHook();

  const location = useLocation();
  useEffect(() => {
    console.log(location.state.firstQuestion);
  }, []);

  // useEffect(() => {
  //   console.log(props);
  // }, [props]);

  // Gpt 대화 내용
  const [message, setMessage] = useState<any>();

  // User 입력 내용
  const [sendText, setSendText] = useState();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // getChatbot(e.target.name.value);
    setSendText(e.target.name.value);
  };

  return (
    <StyledDirect>
      <StyledDirectTop>
        <StyledDirectBack onClick={goBack}>←</StyledDirectBack>
        <StyledDirectAiImg src="/chat/aiprofile.png" alt="profile" />
      </StyledDirectTop>
      <StyledDirectChat>
        <StyledDirectAiChatContainer>
          <StyledDirectAiChatImg src="/chat/aiprofile.png" alt="profile" />
          <StyledDirectAiChat>
            {location.state.firstQuestion}
          </StyledDirectAiChat>
        </StyledDirectAiChatContainer>
        {sendText && (
          <StyledDirectUserChatContainer>
            <StyledDirectUserChat>{sendText}</StyledDirectUserChat>
          </StyledDirectUserChatContainer>
        )}
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

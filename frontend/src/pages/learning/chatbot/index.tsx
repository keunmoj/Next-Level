import { useNavigate } from "react-router-dom";
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

const LearningChatbot = () => {
  // 뒤로가기
  const navigate = useNavigate();
  const goBack = () => {
    navigate("/learning");
  };

  // 채팅전송

  return (
    <StyledDirect>
      <StyledDirectTop>
        <StyledDirectBack onClick={goBack}>←</StyledDirectBack>
        <StyledDirectAiImg src="/chat/aiprofile.png" alt="profile" />
      </StyledDirectTop>
      <StyledDirectChat>
        <StyledDirectAiChatContainer>
          <StyledDirectAiChatImg src="/chat/aiprofile.png" alt="profile" />
          <StyledDirectAiChat>안녕하세요! 만나서 반가워요</StyledDirectAiChat>
        </StyledDirectAiChatContainer>
        <StyledDirectUserChatContainer>
          <StyledDirectUserChat>안녕! 나도 만나서 반가워!</StyledDirectUserChat>
        </StyledDirectUserChatContainer>
      </StyledDirectChat>
      <StyledDireactBottom>
        <StyledDirectInputContainer>
          <StyledDirectInput />
          <StyledDirectButton src="/chat/mike.png" alt="send" />
          <StyledDirectButton src="/chat/send.png" alt="send" />
        </StyledDirectInputContainer>
      </StyledDireactBottom>
    </StyledDirect>
  );
};

export default LearningChatbot;

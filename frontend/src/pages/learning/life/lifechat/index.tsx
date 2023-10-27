import { useNavigate } from "react-router-dom";
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

const LearningLifeChat = () => {
  // 뒤로가기
  const navigate = useNavigate();
  const goBack = () => {
    navigate("/learning");
  };

  // 채팅전송

  return (
    <StyledLifeChat>
      <StyledLifeChatTop>
        <StyledLifeChatBack onClick={goBack}>←</StyledLifeChatBack>
        <StyledLifeChatAiImg src="/chat/aiprofile.png" alt="profile" />
      </StyledLifeChatTop>
      <StyledLifeChatChat>
        <StyledLifeChatAiChatContainer>
          <StyledLifeChatAiChatImg src="/chat/aiprofile.png" alt="profile" />
          <StyledLifeChatAiChat>
            안녕하세요! 만나서 반가워요
          </StyledLifeChatAiChat>
        </StyledLifeChatAiChatContainer>
        <StyledLifeChatUserChatContainer>
          <StyledLifeChatUserChat>
            안녕! 나도 만나서 반가워!
          </StyledLifeChatUserChat>
        </StyledLifeChatUserChatContainer>
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

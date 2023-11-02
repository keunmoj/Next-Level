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
import { useChatbotHook } from "@/hooks/chatbot/useChatbotHook";

const LearningChatbot = () => {
  // 뒤로가기
  const navigate = useNavigate();
  const goBack = () => {
    navigate("/learning");
  };

  // 채팅주제 전송(모달창에서 주제 받을 수 있도록 수정 필요)
  // 여기서 임시로 테스트
  const { firstQuestion, getChatbot } = useChatbotHook();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    //   console.log(e.target.name.value);
    getChatbot(e.target.name.value);
  };

  return (
    <StyledDirect>
      <StyledDirectTop>
        <StyledDirectBack onClick={goBack}>←</StyledDirectBack>
        <StyledDirectAiImg src="/chat/aiprofile.png" alt="profile" />
      </StyledDirectTop>
      <StyledDirectChat>
        {firstQuestion && (
          <StyledDirectAiChatContainer>
            <StyledDirectAiChatImg src="/chat/aiprofile.png" alt="profile" />
            <StyledDirectAiChat>{firstQuestion}</StyledDirectAiChat>
          </StyledDirectAiChatContainer>
        )}
        {firstQuestion && (
          <StyledDirectUserChatContainer>
            <StyledDirectUserChat>
              이제 여기에 다음 대답 넣어야돼
            </StyledDirectUserChat>
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

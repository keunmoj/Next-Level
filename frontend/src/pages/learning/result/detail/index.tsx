import { useNavigate } from "react-router-dom";
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
} from "./Detail.styld";

const LearningDetailResult = () => {
  // 뒤로가기
  const navigate = useNavigate();
  const goBack = () => {
    navigate("/learning");
  };

  // 채팅전송

  return (
    <StyledDetailResultChat>
      <StyledDetailResultChatTop>
        <StyledDetailResultChatBack onClick={goBack}>
          ←
        </StyledDetailResultChatBack>
        <StyledDetailResultChatAiImg src="/chat/aiprofile.png" alt="profile" />
      </StyledDetailResultChatTop>
      <StyledDetailResultChatChat>
        <StyledDetailResultChatAiChatContainer>
          <StyledDetailResultChatAiChatImg
            src="/chat/aiprofile.png"
            alt="profile"
          />
          <StyledDetailResultChatAiChat>
            안녕하세요! 만나서 반가워요
          </StyledDetailResultChatAiChat>
        </StyledDetailResultChatAiChatContainer>
        <StyledDetailResultChatUserChatContainer>
          <StyledDetailResultChatUserChat>
            안녕! 나도 만나서 반가워!
          </StyledDetailResultChatUserChat>
          <StyledDetailResultChatScore>86점</StyledDetailResultChatScore>
        </StyledDetailResultChatUserChatContainer>
      </StyledDetailResultChatChat>
      <StyledDetailResultScore>총점 : 86점</StyledDetailResultScore>
      <StyledDireactBottom>
        <StyledDetailResultChatInputContainer>
          <StyledDetailResultChatInput />
          <StyledDetailResultChatButton src="/chat/mike.png" alt="send" />
          <StyledDetailResultChatButton src="/chat/send.png" alt="send" />
        </StyledDetailResultChatInputContainer>
      </StyledDireactBottom>
    </StyledDetailResultChat>
  );
};

export default LearningDetailResult;

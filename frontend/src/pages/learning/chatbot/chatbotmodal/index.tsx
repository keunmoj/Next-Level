import { useEffect, useState } from "react";
import {
  StyledChatbotModalPage,
  StyledChatbotModalWindow,
  StyledChatbotModalbody,
  StyledChatbotModalTitle,
  StyledChatbotModalContent,
  StyledChatbotModalImage,
  StyledChatbotModalInputContainer,
  StyledChatbotModalInput,
  StyledChatbotModalImg,
  StyledChatbotModalX,
} from "./ChatbotModal.styled";
import { useNavigate } from "react-router-dom";
import { useChatbotHook } from "@/hooks/chatbot/useChatbotHook";

const ChatbotModal = (props: any) => {
  const navigate = useNavigate();

  const { firstQuestion, getChatbot } = useChatbotHook();
  const [goChatpageQuestion, setGoChatpageQuestion] = useState();

  useEffect(() => {
    console.log(goChatpageQuestion);
  }, [goChatpageQuestion]);

  const goChatPage = () => {
    getChatbot(goChatpageQuestion);
  };

  useEffect(() => {
    if (firstQuestion) {
      console.log(firstQuestion);
      navigate("/learning/chatbot", {
        state: {
          firstQuestion: firstQuestion,
          subject: goChatpageQuestion,
        },
      });
    }
  }, [firstQuestion]);

  return (
    <StyledChatbotModalPage onClick={props.closeModal}>
      <StyledChatbotModalWindow onClick={(e: any) => e.stopPropagation()}>
        <StyledChatbotModalX onClick={props.closeModal}>X</StyledChatbotModalX>
        <StyledChatbotModalbody>
          <StyledChatbotModalImage src={props.imgsrc} alt="img" />
          <StyledChatbotModalTitle>
            어떤 주제로 대화하고 싶나요?
          </StyledChatbotModalTitle>
          <StyledChatbotModalContent>
            아래에 한글로 작성해주세요!
          </StyledChatbotModalContent>
        </StyledChatbotModalbody>
        <StyledChatbotModalInputContainer>
          <StyledChatbotModalInput
            onChange={(e: any) => setGoChatpageQuestion(e.target.value)}
          />
          <StyledChatbotModalImg
            src="/chat/send.png"
            alt="send"
            onClick={goChatPage}
          />
        </StyledChatbotModalInputContainer>
      </StyledChatbotModalWindow>
    </StyledChatbotModalPage>
  );
};

export default ChatbotModal;

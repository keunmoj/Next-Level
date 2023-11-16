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
  StyledDirectBottom,
  StyledDirectButton,
} from "./Chatbot.styled";
import { useChatbotHook } from "@/hooks/chatbot/useChatbotHook";
import { useChatbotTalkingHook } from "@/hooks/chatbot/useChatbotTalkingHook";
import { useEffect, useRef, useState } from "react";
import { use } from "i18next";

const LearningChatbot = () => {
  // 뒤로가기
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  // 채팅주제 전송
  const { nextQuestion, getChatTalkingbot } = useChatbotTalkingHook();
  // User 입력 내용
  const [sendText, setSendText] = useState<any>([]);

  // 전체 map 돌릴 state
  const [allMessage, setAllMessage] = useState<any>([]);

  // post
  // 1. subject
  const location = useLocation();
  const subject = location.state.subject;
  const firstQuestion = location.state.firstQuestion;

  // 2. request
  // 전체 대화 내용을 "A : gpt내용 B : user내용" 으로 전송
  const [sendRequest, setSendRequest] = useState<any>("");
  useEffect(() => {
    setSendRequest(" A : " + firstQuestion);
  }, [firstQuestion]);

  // 전송 눌렀을때 post 보냄
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (sendText) {
      setAllMessage((prevSendText: any) => [...prevSendText, sendText]);
      setSendRequest(
        (prevSendText: any) => prevSendText + " B : " + sendText + " "
      );
    } else {
      if (sendText) {
        setAllMessage(sendText);
        setSendRequest("B : " + sendText);
      }
    }

    // 2. request
    getChatTalkingbot(subject, sendRequest + " B : " + sendText + " ");

    setSendText(""); // 인풋창 초기화
  };

  // 다음 질문이 넘어올때, 전체 리스트에 넘어온 질문 저장
  useEffect(() => {
    if (nextQuestion) {
      setAllMessage((prevSendText: any) => [...prevSendText, nextQuestion]);
      setSendRequest(
        (prevSendText: any) => prevSendText + "A : " + nextQuestion + " "
      );
    }
  }, [nextQuestion]);

  const inputRef = useRef<HTMLInputElement>(null);
  const lastMessageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.addEventListener("focus", () => {
        if (lastMessageRef.current) {
          lastMessageRef.current.scrollIntoView({ behavior: "smooth" });
        }
      });
    }
  }, []);

  useEffect(() => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [allMessage]);

  return (
    <StyledDirect>
      <StyledDirectTop>
        <StyledDirectBack
          onClick={goBack}
          src="/sing/back.png"
          alt="back"
        ></StyledDirectBack>
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
        {allMessage?.map((text: any, index: any) => {
          if (index % 2 === 0) {
            return (
              <StyledDirectUserChatContainer key={text} ref={lastMessageRef}>
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
        })}
      </StyledDirectChat>

      <StyledDirectBottom>
        <StyledDirectInputContainer>
          <StyledDirectInput
            name="name"
            onChange={(e: any) => setSendText(e.target.value)}
            value={sendText}
            ref={inputRef}
          />
          {/* <StyledDirectButton src="/chat/mike.png" alt="send" /> */}
          <StyledDirectButton
            src="/chat/send.png"
            alt="send"
            onClick={handleSubmit}
          />
        </StyledDirectInputContainer>
      </StyledDirectBottom>
    </StyledDirect>
  );
};

export default LearningChatbot;

import { useLocation, useNavigate } from "react-router-dom";
import {
  StyledLearnLife,
  StyledLearnContainer,
  StyledLearnDirectMainBox,
  StyledLearnMainBox,
  StyledLearnIcon,
  StyledLearnContent,
  StyledLearnTitle,
  StyledLearnText,
  StyledLearnButton,
} from "./Life.styled";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useChatbotHook } from "@/hooks/chatbot/useChatbotHook";
import ChatbotModal from "../chatbot/chatbotmodal";
import { useScenarioListGetHook } from "@/hooks/scenario/useScenarioListGetHook";
import { useScenarioGetHook } from "@/hooks/scenario/useScenarioGetHook";

const LearningLife = () => {
  const { t } = useTranslation();
  const naviate = useNavigate();

  // 챗봇
  // 모달창
  const [isOpenModal, setIsOpenModal] = useState(false);

  const openModal = () => {
    setIsOpenModal(!isOpenModal);
  };
  const closeModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  const openChat = () => {
    naviate("/learning/chatbot");
  };

  const { firstQuestion, getChatbot } = useChatbotHook();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    getChatbot(e.target.name.value);
  };

  const [isChatPage, setIsChatPage] = useState(false);
  const goChatpage = () => {
    setIsChatPage(!isChatPage);
  };

  // 상황별
  const { getScenarioList, scenarioList } = useScenarioListGetHook();
  useEffect(() => {
    getScenarioList();
  }, []);

  const openLifeChat = (e: any) => {
    naviate("/learning/lifechat", {
      state: {
        scenarioId: e.target.id,
        scenariTitle: e.target.innerText,
      },
    });
  };

  return (
    <StyledLearnLife>
      {/* 대화생성 */}
      <StyledLearnContainer>
        <StyledLearnDirectMainBox>
          <StyledLearnMainBox id="chatbot">
            <StyledLearnIcon src="/learning/aibody.png" alt="food" />
            <StyledLearnContent>
              <StyledLearnTitle>{t("learning.direct.title")}</StyledLearnTitle>
              <StyledLearnText>{t("learning.direct.text")}</StyledLearnText>
            </StyledLearnContent>
          </StyledLearnMainBox>
          <StyledLearnButton onClick={openModal}>
            {t("learning.direct.start")}
          </StyledLearnButton>
        </StyledLearnDirectMainBox>
      </StyledLearnContainer>

      {/* 식당 */}
      <StyledLearnContainer>
        <StyledLearnMainBox onClick={openLifeChat} id="1">
          <StyledLearnIcon src="/learning/restarant.svg" alt="food" id="1" />
          <StyledLearnContent id="1">
            <StyledLearnTitle id="1">
              {t("learning.situation.title.restaurant")}
            </StyledLearnTitle>
            <StyledLearnText id="1">
              {t("learning.situation.text.restaurant")}
            </StyledLearnText>
          </StyledLearnContent>
        </StyledLearnMainBox>
      </StyledLearnContainer>

      {/* 헬스장 */}
      <StyledLearnContainer>
        <StyledLearnMainBox onClick={openLifeChat} id="2">
          <StyledLearnIcon src="/learning/health.svg" alt="food" id="2" />
          <StyledLearnContent id="2">
            <StyledLearnTitle id="2">
              {t("learning.situation.title.gym")}
            </StyledLearnTitle>
            <StyledLearnText id="2">
              {t("learning.situation.text.gym")}
            </StyledLearnText>
          </StyledLearnContent>
        </StyledLearnMainBox>
      </StyledLearnContainer>

      {/* 대중교통 */}
      <StyledLearnContainer>
        <StyledLearnMainBox onClick={openLifeChat} id="3">
          <StyledLearnIcon src="/learning/bus.svg" alt="food" />
          <StyledLearnContent id="3">
            <StyledLearnTitle id="3">
              {t("learning.situation.title.transport")}
            </StyledLearnTitle>
            <StyledLearnText id="3">
              {t("learning.situation.text.transport")}
            </StyledLearnText>
          </StyledLearnContent>
        </StyledLearnMainBox>
      </StyledLearnContainer>

      {/* 야구장 */}
      <StyledLearnContainer>
        <StyledLearnMainBox onClick={openLifeChat} id="4">
          <StyledLearnIcon src="/learning/baseball.svg" alt="food" id="4" />
          <StyledLearnContent id="4">
            <StyledLearnTitle id="4">
              {t("learning.situation.title.baseball")}
            </StyledLearnTitle>
            <StyledLearnText id="4">
              {t("learning.situation.text.baseball")}
            </StyledLearnText>
          </StyledLearnContent>
        </StyledLearnMainBox>
      </StyledLearnContainer>

      {/* 마트 */}
      <StyledLearnContainer>
        <StyledLearnMainBox onClick={openLifeChat} id="5">
          <StyledLearnIcon src="/learning/mart.svg" alt="food" id="5" />
          <StyledLearnContent id="5">
            <StyledLearnTitle id="5">
              {t("learning.situation.title.mart")}
            </StyledLearnTitle>
            <StyledLearnText id="5">
              {t("learning.situation.text.mart")}
            </StyledLearnText>
          </StyledLearnContent>
        </StyledLearnMainBox>
      </StyledLearnContainer>

      {/* 대학 */}
      <StyledLearnContainer>
        <StyledLearnMainBox onClick={openLifeChat} id="6">
          <StyledLearnIcon src="/learning/university.svg" alt="food" id="6" />
          <StyledLearnContent id="6">
            <StyledLearnTitle id="6">
              {t("learning.situation.title.university")}
            </StyledLearnTitle>
            <StyledLearnText id="6">
              {t("learning.situation.text.university")}
            </StyledLearnText>
          </StyledLearnContent>
        </StyledLearnMainBox>
      </StyledLearnContainer>
      {isOpenModal === true && (
        <ChatbotModal
          isDetailOpen={isOpenModal}
          closeModal={closeModal}
          openPage={openChat}
          modalTitle={t("learning.direct.topic")}
          modalText={t("learning.direct.input")}
          imgsrc="/learning/aibody.png"
          // handleSubmit={handleSubmit}
        />
      )}
    </StyledLearnLife>
  );
};

export default LearningLife;

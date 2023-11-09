import { useLocation, useNavigate } from "react-router-dom";
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
  StyledDireactBottom,
  StyledLifeChatButton,
} from "./Lifechat.styled";
import { useScenarioListGetHook } from "@/hooks/scenario/useScenarioListGetHook";
import { useEffect, useState } from "react";
import { useScenarioGetHook } from "@/hooks/scenario/useScenarioGetHook";
import LearnAiResult from "../airesult";
import ResultModal from "../resultmodal";
import useAiResultStore from "@/stores/airesult/useAiResultStore";
import { S3_ADDRESS } from "@/api/api";
import { useScenarioTotalResultPostHook } from "@/hooks/scenario/useScenarioTotalResultPost";

const LearningLifeChat = () => {
  // 뒤로가기
  const navigate = useNavigate();
  const goBack = () => {
    navigate("/learning");
  };

  // 시나리오
  const loacation = useLocation();
  const scenarioId = loacation.state.scenarioId;
  const { getScenario, scenario } = useScenarioGetHook();
  useEffect(() => {
    getScenario(scenarioId);
  }, []);
  const { getScenarioList, scenarioList } = useScenarioListGetHook();
  useEffect(() => {
    getScenarioList();
  }, []);

  const scenarioInfo = scenarioList?.filter((e: any) => {
    return e.id == scenarioId;
  });

  //전체점수
  const openResultModal = () => {
    console.log("open");
  };
  // 대화 제목, 이미지, 전체점수, 상세 정보 보러가기, 닫기

  const [isOpenModal, setIsOpenModal] = useState(false);
  const { getScenarioTotalResult } = useScenarioTotalResultPostHook();

  // 평균점수 계산
  const totalScoreList = useAiResultStore((state: any) => state.totalScoreList);
  const totalScoreSum: number = totalScoreList.reduce(
    (total: number, num: number) => total + num,
    0
  );
  const totalAverage: any = totalScoreSum / totalScoreList.length;

  // 스크립트 누적
  const totalScriptList = useAiResultStore(
    (state: any) => state.totalScriptList
  );

  const openModal = () => {
    setIsOpenModal(!isOpenModal);
    getScenarioTotalResult(
      scenarioId,
      totalAverage,
      totalScriptList,
      totalScoreList
    );
  };
  const closeModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  return (
    <StyledLifeChat>
      <StyledLifeChatTop>
        <StyledLifeChatBack onClick={goBack}>←</StyledLifeChatBack>
        <StyledLifeChatAiImg src="/chat/aiprofile.png" alt="profile" />
      </StyledLifeChatTop>
      <StyledLifeChatChat>
        {scenario?.map((text: any, index: any) => {
          if (index % 2 === 0) {
            return (
              <StyledLifeChatAiChatContainer key={text.scriptNumber}>
                <StyledLifeChatAiChatImg
                  src="/chat/aiprofile.png"
                  alt="profile"
                />
                <StyledLifeChatAiChat>{text.script}</StyledLifeChatAiChat>
              </StyledLifeChatAiChatContainer>
            );
          } else {
            return (
              <StyledLifeChatUserChatContainer key={text.scriptNumber}>
                <StyledLifeChatUserChat>
                  {text.script}
                  <LearnAiResult script={text.script} />
                </StyledLifeChatUserChat>
              </StyledLifeChatUserChatContainer>
            );
          }
        })}
      </StyledLifeChatChat>
      <StyledDireactBottom>
        <StyledLifeChatInputContainer>
          <StyledLifeChatButton onClick={openModal}>
            결과 보기
          </StyledLifeChatButton>
        </StyledLifeChatInputContainer>
        <StyledLifeChatInputContainer>
          <StyledLifeChatButton>나가기</StyledLifeChatButton>
        </StyledLifeChatInputContainer>
      </StyledDireactBottom>

      {isOpenModal === true && (
        <ResultModal
          isDetailOpen={isOpenModal}
          closeModal={closeModal}
          // openPage={openChat}
          modalTitle={scenarioInfo[0].title}
          modalText={totalAverage + "점"}
          imgsrc={S3_ADDRESS + scenarioInfo[0].image}
        />
      )}
    </StyledLifeChat>
  );
};

export default LearningLifeChat;

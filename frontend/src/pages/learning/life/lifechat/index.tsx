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
  const resetTotalScoreList = useAiResultStore(
    (state: any) => state.resetTotalScoreList
  );
  const resetTotalScriptList = useAiResultStore(
    (state: any) => state.resetTotalScriptList
  );

  useEffect(() => {
    resetTotalScoreList();
    resetTotalScriptList();
  }, []);

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

  // 대화 제목, 이미지, 전체점수, 상세 정보 보러가기, 닫기

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenExitModal, setIsOpenExitModal] = useState(false);
  const { userScenarioNum, getScenarioTotalResult } =
    useScenarioTotalResultPostHook();

  // 평균점수 계산
  const totalScoreList = useAiResultStore((state: any) => state.totalScoreList);
  const totalScoreSum: number = totalScoreList.reduce(
    (total: number, num: number) => total + num,
    0
  );
  const totalAverage: any = totalScoreSum / totalScoreList.length;

  // 스크립트 인덱스 누적
  const totalScriptList = useAiResultStore(
    (state: any) => state.totalScriptList
  );

  useEffect(() => {
    console.log(scenarioId, totalAverage, totalScriptList, totalScoreList);
  }, [totalScriptList, totalScoreList]);

  const openModal = () => {
    setIsOpenModal(!isOpenModal);
    getScenarioTotalResult(
      scenarioId, // 대화 들어올때
      totalAverage,
      totalScriptList, // 전송누를때 저장
      totalScoreList // 전송 후 hook 실행 후 저장
    );
  };

  const openExitModal = () => {
    setIsOpenExitModal(!isOpenExitModal);
  };

  const closeExitModal = () => {
    setIsOpenExitModal(!isOpenExitModal);
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
                  <LearnAiResult
                    script={text.script}
                    scriptNumber={text.scriptNumber}
                  />
                </StyledLifeChatUserChat>
              </StyledLifeChatUserChatContainer>
            );
          }
        })}
      </StyledLifeChatChat>
      <StyledDireactBottom>
        <StyledLifeChatInputContainer>
          <StyledLifeChatButton onClick={openModal}>
            결과 제출하기
          </StyledLifeChatButton>
        </StyledLifeChatInputContainer>
        <StyledLifeChatInputContainer>
          <StyledLifeChatButton onClick={openExitModal}>
            나가기
          </StyledLifeChatButton>
        </StyledLifeChatInputContainer>
      </StyledDireactBottom>

      {isOpenModal === true && (
        <ResultModal
          isDetailOpen={isOpenModal}
          // openPage={openChat}
          modalTitle={scenarioInfo[0].title}
          modalText={
            totalAverage + "점 입니다! 세부결과 페이지로 이동하시겠습니까?"
          }
          imgsrc={S3_ADDRESS + scenarioInfo[0].image}
          //   OpenButton={() => navigate(`/learning/resultdetail`,
          //     state : {
          // userScenarioNum : userScenarioNum}
          // )}
          closeButton="나가기"
          closeModal={() => navigate(`/learning`)}
        />
      )}
      {isOpenExitModal && (
        <ResultModal
          isDetailOpen={isOpenExitModal}
          closeModal={closeExitModal}
          modalTitle="정말 나가시겠습니까?"
          modalText="기록은 저장되지 않습니다."
          imgsrc={S3_ADDRESS + scenarioInfo[0].image}
          OpenButton="나가기"
          closeButton="머무르기"
          openPage={() => navigate(`/learning`)}
        />
      )}
    </StyledLifeChat>
  );
};

export default LearningLifeChat;

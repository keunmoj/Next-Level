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
import Modal from "@/components/modal";

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

  const openModal = () => {
    setIsOpenModal(!isOpenModal);
    if (totalAverage) {
      getScenarioTotalResult(
        scenarioId, // 대화 들어올때
        totalAverage,
        totalScriptList, // 전송누를때 저장
        totalScoreList // 전송 후 hook 실행 후 저장
      );
    } else {
      console.log("녹음 데이터 없음");
    }
  };

  const openExitModal = () => {
    setIsOpenModal(false);
  };

  const closeExitModal = () => {
    setIsOpenExitModal(!isOpenExitModal);
  };

  return (
    <StyledLifeChat>
      <StyledLifeChatTop>
        <StyledLifeChatBack onClick={closeExitModal}>←</StyledLifeChatBack>
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
        {/* <StyledLifeChatInputContainer>
          <StyledLifeChatButton onClick={openExitModal}>
            나가기
          </StyledLifeChatButton>
        </StyledLifeChatInputContainer> */}
      </StyledDireactBottom>

      {isOpenModal === true && (
        <Modal
          isDetailOpen={isOpenModal}
          // openPage={openChat}
          // modalTit={scenarioInfo[0].title}
          modalText={
            totalAverage
              ? totalAverage + "점 입니다!"
              : "평가가 정상적으로 이루어 지지 않았습니다."
          }
          modalTitle={totalAverage ? "평가완료" : "평가 실패"}
          // imgsrc={S3_ADDRESS + scenarioInfo[0].image}
          //   OpenButton={() => navigate(`/learning/resultdetail`,
          //     state : {
          // userScenarioNum : userScenarioNum}
          // )}
          // closeModal={() => navigate(`/learning`)}
          openPage={() => navigate(`/learning`)}
          closeModal={openExitModal}
        />
      )}
      {isOpenExitModal && (
        <Modal
          isDetailOpen={isOpenExitModal}
          closeModal={closeExitModal}
          modalTitle="페이지를 나가겠습니까?"
          modalText="기록은 저장되지 않습니다."
          openPage={() => navigate(`/learning`)}
        />
      )}
    </StyledLifeChat>
  );
};

export default LearningLifeChat;

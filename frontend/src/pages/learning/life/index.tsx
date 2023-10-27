import { useNavigate } from "react-router-dom";
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
import { useState } from "react";
import Modal from "@/components/modal";

const LearningLife = () => {
  const naviate = useNavigate();
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

  return (
    <StyledLearnLife>
      {/* 대화생성 */}
      <StyledLearnContainer>
        <StyledLearnDirectMainBox>
          <StyledLearnMainBox id="chatbot" onClick={openModal}>
            <StyledLearnIcon src="/learning/aibody.png" alt="food" />
            <StyledLearnContent>
              <StyledLearnTitle>직접 대화해보세요!</StyledLearnTitle>
              <StyledLearnText>
                원하는 상황이 있나요? 직접 챗봇과 대화하며 한국어를
                공부해보세요!
              </StyledLearnText>
            </StyledLearnContent>
          </StyledLearnMainBox>
          <StyledLearnButton>직접 대화하러가기</StyledLearnButton>
        </StyledLearnDirectMainBox>
      </StyledLearnContainer>

      {/* 식당 */}
      <StyledLearnContainer id="restarant">
        <StyledLearnMainBox>
          <StyledLearnIcon src="/learning/food.png" alt="food" />
          <StyledLearnContent>
            <StyledLearnTitle>식당</StyledLearnTitle>
            <StyledLearnText>친구와 식당에 갔다</StyledLearnText>
          </StyledLearnContent>
        </StyledLearnMainBox>
      </StyledLearnContainer>

      {/* 헬스장 */}
      <StyledLearnContainer>
        <StyledLearnMainBox>
          <StyledLearnIcon src="/learning/food.png" alt="food" />
          <StyledLearnContent>
            <StyledLearnTitle>헬스장</StyledLearnTitle>
            <StyledLearnText>친구와 식당에 갔다</StyledLearnText>
          </StyledLearnContent>
        </StyledLearnMainBox>
      </StyledLearnContainer>

      {/* 대중교통 */}
      <StyledLearnContainer>
        <StyledLearnMainBox>
          <StyledLearnIcon src="/learning/food.png" alt="food" />
          <StyledLearnContent>
            <StyledLearnTitle>대중교통</StyledLearnTitle>
            <StyledLearnText>친구와 식당에 갔다</StyledLearnText>
          </StyledLearnContent>
        </StyledLearnMainBox>
      </StyledLearnContainer>

      {/* 야구장 */}
      <StyledLearnContainer>
        <StyledLearnMainBox>
          <StyledLearnIcon src="/learning/food.png" alt="food" />
          <StyledLearnContent>
            <StyledLearnTitle>야구장</StyledLearnTitle>
            <StyledLearnText>친구와 식당에 갔다</StyledLearnText>
          </StyledLearnContent>
        </StyledLearnMainBox>
      </StyledLearnContainer>

      {/* 마트 */}
      <StyledLearnContainer>
        <StyledLearnMainBox>
          <StyledLearnIcon src="/learning/food.png" alt="food" />
          <StyledLearnContent>
            <StyledLearnTitle>마트</StyledLearnTitle>
            <StyledLearnText>친구와 식당에 갔다</StyledLearnText>
          </StyledLearnContent>
        </StyledLearnMainBox>
      </StyledLearnContainer>

      {/* 대학 */}
      <StyledLearnContainer>
        <StyledLearnMainBox>
          <StyledLearnIcon src="/learning/food.png" alt="food" />
          <StyledLearnContent>
            <StyledLearnTitle>대학</StyledLearnTitle>
            <StyledLearnText>친구와 식당에 갔다</StyledLearnText>
          </StyledLearnContent>
        </StyledLearnMainBox>
      </StyledLearnContainer>
      {isOpenModal === true && (
        <Modal
          isDetailOpen={isOpenModal}
          closeModal={closeModal}
          openPage={openChat}
          modalTitle="희망하는 대화 주제를 아래에 입력해주세요!"
          modalText="예) 식당에서 주문하기"
          imgsrc="/learning/aibody.png"
        />
      )}
    </StyledLearnLife>
  );
};

export default LearningLife;

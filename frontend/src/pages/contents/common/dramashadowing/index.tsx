import { useNavigate, useParams } from "react-router-dom";
import Youtube from "./youtube";
import {
  StyledContentPage,
  StyledButtonContainer,
  StyledButton,
} from "./Shadowing.styled";
import { useEffect, useState } from "react";
import { useDramaResultHook } from "@/hooks/drama/useDramaResultHook";
import Modal from "@/components/modal";
import usePlayerStore from "@/stores/youtube/usePlayerStore";

const Shadowing = () => {
  const { id } = useParams();
  const { postDramaResult } = useDramaResultHook();
  const setIsRecord = usePlayerStore((state: any) => state.setIsRecord);
  const [openModal, setOpenModal] = useState(false);
  const handleModal = () => {
    postDramaResult(id);
  };
  useEffect(() => {
    setIsRecord(false);
  }, []);
  return (
    <StyledContentPage>
      <Youtube id={id} />
      <StyledButtonContainer>
        <StyledButton use="submit" onClick={() => setOpenModal(true)}>
          학습종료하기
        </StyledButton>
      </StyledButtonContainer>
      {openModal && (
        <Modal
          closeModal={() => setOpenModal(false)}
          openPage={handleModal}
          modalTitle="드라마 쉐도잉"
          modalText="학습을 종료하시겠습니까?"
          completeMent="종료하기"
        ></Modal>
      )}
    </StyledContentPage>
  );
};

export default Shadowing;

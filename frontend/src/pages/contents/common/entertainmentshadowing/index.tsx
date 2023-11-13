import { useNavigate, useParams } from "react-router-dom";
import Youtube from "./youtube";

import { useEffect, useState } from "react";
import { useEnterYoutubeHook } from "@/hooks/entertainment/useEnterYoutubeHook";
import {
  StyledContentPage,
  StyledButtonContainer,
  StyledButton,
} from "./Shadowing.styled";
import Modal from "@/components/modal";
import { useEntertainmentResultHook } from "@/hooks/entertainment/useEntertainmentResultHook";
import usePlayerStore from "@/stores/youtube/usePlayerStore";

const Shadowing = () => {
  const { id } = useParams();
  const { postEntertainmentResult } = useEntertainmentResultHook();
  const [openModal, setOpenModal] = useState(false);
  const setIsRecord = usePlayerStore((state: any) => state.setIsRecord);
  const handleModal = () => {
    postEntertainmentResult(id);
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
          modalText="학습을 종료하시겠습니까?"
          completeMent="종료하기"
        ></Modal>
      )}
    </StyledContentPage>
  );
};

export default Shadowing;

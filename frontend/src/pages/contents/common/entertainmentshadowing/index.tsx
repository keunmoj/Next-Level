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
import { useTranslation } from "react-i18next";

const Shadowing = () => {
  const { t } = useTranslation();
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
          {t('contents.shadowing.finishShadowning')}
        </StyledButton>
      </StyledButtonContainer>
      {openModal && (
        <Modal
          closeModal={() => setOpenModal(false)}
          openPage={handleModal}
          modalText={t('contents.shadowing.finishText')}
          completeMent={t('contents.shadowing.completeMent')}
        ></Modal>
      )}
    </StyledContentPage>
  );
};

export default Shadowing;

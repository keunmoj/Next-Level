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
import { useTranslation } from "react-i18next";

const Shadowing = () => {
  const { t } = useTranslation();
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
          {t("contents.shadowing.finishShadowning")}
        </StyledButton>
      </StyledButtonContainer>
      {openModal && (
        <Modal
          closeModal={() => setOpenModal(false)}
          openPage={handleModal}
          modalTitle={t("contents.shadowing.dramaShadowing")}
          modalText={t("contents.shadowing.finishText")}
          completeMent={t("contents.shadowing.completeMent")}
        ></Modal>
      )}
    </StyledContentPage>
  );
};

export default Shadowing;

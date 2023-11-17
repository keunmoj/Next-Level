import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useContentDramaHook = () => {
  const navigate = useNavigate();

  const [isDramaOpenModal, setIsDramaOpenModal] = useState(false);
  const [dramaClipInfo, setDramaClipInfo] = useState<any>();

  const dramaOpenModal = (clip: any) => {
    setDramaClipInfo(clip);
    setIsDramaOpenModal(true);
  };
  const dramaCloseModal = () => {
    setIsDramaOpenModal(false);
  };
  const openDrama = () => {
    if (dramaClipInfo) {
      navigate(`/drama/shadowing/${dramaClipInfo.id}`);
    }
  };

  return {
    isDramaOpenModal,
    dramaClipInfo,
    dramaOpenModal,
    dramaCloseModal,
    openDrama,
  };
};

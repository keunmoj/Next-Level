import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useContentEnterHook = () => {
  const navigate = useNavigate();

  const [isEnterOpenModal, setIsEnterOpenModal] = useState(false);
  const [enterClipInfo, setEnterClipInfo] = useState<any>();

  const enterOpenModal = (clip: any) => {
    setEnterClipInfo(clip);
    setIsEnterOpenModal(true);
  };
  const enterCloseModal = () => {
    setIsEnterOpenModal(false);
  };
  const openEnter = () => {
    if (enterClipInfo) {
      navigate(`/entertainment/shadowing/${enterClipInfo.id}`);
    }
  };

  return {
    isEnterOpenModal,
    enterClipInfo,
    enterOpenModal,
    enterCloseModal,
    openEnter,
  };
};

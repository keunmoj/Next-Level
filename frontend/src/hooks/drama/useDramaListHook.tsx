import DramaClipListGet from "@/api/drama/DramaClipListGet";
import DramaListGet from "@/api/drama/DramaListGet";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const useDramaListGetHook = () => {
  const navigate = useNavigate();
  // 드라마 전체 리스트 받아오기
  const [DramaList, setDramaList] = useState<any>();
  const getDramaList = async () => {
    const res = await DramaListGet();
    setDramaList(res.data.data.dramas);
  };
  useEffect(() => {
    getDramaList();
  }, []);

  // 선택된 드라마의 id 저장
  const [selcectDrama, setSelcectDrama] = useState<any>();

  // 초기 랜더링 시 드라마 리스트의 첫 번째 드라마가 선택되도록 설정
  useEffect(() => {
    setSelcectDrama(DramaList?.[0]);
  }, [DramaList]);

  // 선택된 드라마의 클립 리스트 저장
  const [clipList, setClipList] = useState<any>();
  const getDramaClipList = async (id: any) => {
    const res = await DramaClipListGet(id);
    setClipList(res.data.data.problems);
  };

  // 모달의 오픈 상태 확인
  const [isOpenModal, setIsOpenModal] = useState(false);

  // 선택된 클립의 정보 저장
  const [clipInfo, setClipInfo] = useState<any>();

  // 드라마가 선택되면 해당 드라마의 클립 리스트 저장, 선택이 안됐을 때 기본 값
  useEffect(() => {
    if (selcectDrama) {
      getDramaClipList(selcectDrama.id);
    } else {
      if (DramaList?.[0].id) {
        getDramaClipList(DramaList?.[0].id);
      }
    }
  }, [DramaList, selcectDrama]);

  const openModal = (clip: any) => {
    setClipInfo(clip);
    setIsOpenModal(true);
  };
  const closeModal = () => {
    setIsOpenModal(false);
  };
  const openDrama = () => {
    if (clipInfo) {
      navigate(`/drama/shadowing/${clipInfo.id}`);
    }
  };

  const backButton = () => {
    window.history.back();
  };

  return {
    selcectDrama,
    DramaList,
    clipList,
    openModal,
    closeModal,
    setSelcectDrama,
    backButton,
    openDrama,
    isOpenModal,
    clipInfo,
  };
};

import EntertainmentClipListGet from "@/api/entertainment/EntertainmentClipListGet";
import EntertainmentListGet from "@/api/entertainment/EntertainmentListGet";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const useEntertainmentListGetHook = () => {
  const navigate = useNavigate();
  // 예능 전체 리스트 받아오기
  const [entertainmentList, setEntertainmentList] = useState<any>();
  const getEntertainmentList = async () => {
    const res = await EntertainmentListGet();
    setEntertainmentList(res.data.data.shows);
  };

  useEffect(() => {
    getEntertainmentList();
  }, []);

  // 선택된 예능의 id 저장
  const [selectEntertainment, setSelectEntertainment] = useState<any>();

  // 초기 랜더링 시 예능 리스트의 첫 번째 드라마가 선택되도록 설정
  useEffect(() => {
    setSelectEntertainment(entertainmentList?.[0]);
  }, [entertainmentList]);

  //선택된 예능의 클립 리스트 저장
  const [clipList, setClipList] = useState<any>();
  const getEntertainmentClipList = async (id: any) => {
    const res = await EntertainmentClipListGet(id);
    setClipList(res.data.data.problems);
  };

  // 모달의 오픈 상태 확인
  const [isOpenModal, setIsOpenModal] = useState(false);

  // 선택된 클립의 정보 저장
  const [clipInfo, setClipInfo] = useState<any>();

  // 예능이 선택되면 해당 예능의 클립 리스트 저장, 선택이 안됐을 때 기본 값
  useEffect(() => {
    if (selectEntertainment) {
      getEntertainmentClipList(selectEntertainment.id);
    } else {
      if (entertainmentList?.[0].id) {
        getEntertainmentClipList(entertainmentList?.[0].id);
      }
    }
  }, [entertainmentList, selectEntertainment]);
  const openModal = (clip: any) => {
    setClipInfo(clip);
    setIsOpenModal(true);
  };
  const closeModal = () => {
    setIsOpenModal(false);
  };
  const openEntertainment = () => {
    if (clipInfo) {
      navigate(`/entertainment/shadowing/${clipInfo.id}`);
    }
  };

  const backButton = () => {
    window.history.back();
  };
  return {
    selectEntertainment,
    entertainmentList,
    clipList,
    getEntertainmentList,
    openModal,
    closeModal,
    setSelectEntertainment,
    backButton,
    openEntertainment,
    isOpenModal,
    clipInfo,
  };
};

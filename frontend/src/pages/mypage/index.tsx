import { useMypageHook } from "@/hooks/mypage/useMypageHook";
import {
  StyledMypage,
  StyledMypageInfo,
  StyledMypageResult,
  StyledMypageTop,
} from "./Mypage.styled";
import Lang from "./components/lang";
import MyInfo from "./components/myinfo";
import Mylearning from "./components/mylearning";
import { useEffect, useState } from "react";
import useNavState from "@/stores/nav/useNavState";
import Modal from "@/components/modal";
import { useNavigate } from "react-router-dom";
import { S3_ADDRESS } from "@/api/api";
const MyPage = () => {
  const myPageState = useNavState((state: any) => state.myPageState);
  const navigate = useNavigate();
  const [id, setId] = useState(0);
  const [url, setUrl] = useState(0);
  useEffect(() => {
    console.log(id, url, myPageState);
  }, [id, url]);
  const [isOpenModal, setIsOpenMoal] = useState(false);
  const closeModal = () => {
    setIsOpenMoal(false);
  };
  const openPgae = () => {
    if (myPageState === "shadowing") {
      navigate("/");
    } else if (myPageState === "sing") {
      navigate("/");
    } else if (myPageState === "ai") {
      navigate("/");
    }
  };
  const openModal = () => {
    setIsOpenMoal(true);
  };
  return (
    <StyledMypage initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <StyledMypageTop>
        <Lang />
      </StyledMypageTop>
      <MyInfo></MyInfo>
      <Mylearning
        openModal={openModal}
        setId={setId}
        setUrl={setUrl}
      ></Mylearning>
      {isOpenModal === true && (
        <Modal
          isDetailOpen={isOpenModal}
          closeModal={closeModal}
          openPage={openPgae}
          modalText="진행하시겠습니까?"
          imgsrc={S3_ADDRESS + url}
        />
      )}
    </StyledMypage>
  );
};

export default MyPage;

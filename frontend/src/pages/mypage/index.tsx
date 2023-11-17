import { StyledMypage, StyledMypageTop } from "./Mypage.styled";
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
  const setSelectBottomNav = useNavState(
    (state: any) => state.setSelectBottomNav
  );

  useEffect(() => {
    setSelectBottomNav("mypage");
  }, []);

  const navigate = useNavigate();
  const [media, setMedia] = useState({
    id: "" || null,
    url: "" || null,
    title: "" || null,
    type: "" || null,
    artist: "" || null,
  });

  const [isOpenModal, setIsOpenMoal] = useState(false);
  const closeModal = () => {
    setIsOpenMoal(false);
  };
  const openPgae = () => {
    if (myPageState === "shadowing") {
      if (media.type === "DRAMA") {
        navigate(`/drama/shadowing/${media.id}`);
      } else if (media.type === "SHOW") {
        navigate(`/entertainment/shadowing/${media.id}`);
      }
    } else if (myPageState === "sing") {
      navigate(`/sing/game/${media.id}`);
    } else if (myPageState === "ai") {
      navigate("/learning/resultdetail", {
        state: {
          card: { id: media.id },
        },
      });
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
      <Mylearning openModal={openModal} setMedia={setMedia}></Mylearning>
      {isOpenModal === true && (
        <Modal
          isDetailOpen={isOpenModal}
          closeModal={closeModal}
          openPage={openPgae}
          modalArtist={
            (myPageState === "shadowing" && media.title) ||
            (myPageState === "sing" && media.artist)
          }
          modalTitle={
            (myPageState === "sing" || myPageState === "ai") && media.title
          }
          modalText="진행하시겠습니까?"
          imgsrc={S3_ADDRESS + media.url}
        />
      )}
    </StyledMypage>
  );
};

export default MyPage;

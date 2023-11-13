import { S3_ADDRESS } from "@/api/api";
import {
  StyledDrama,
  StyledDramaNav,
  StyledDramaBackButton,
  StyledDramaTitle,
  StyledDramaList,
  StyledDramaImage,
  StyledDramaName,
  StyledDramaItemContainer,
  StyledDramaItemBox,
  StyledDramaItem,
  StyledDramaItemImage,
  StyledDramaItemContnentContianer,
  StyledDramaItemContnentImg,
  StyledDramaItemTitle,
} from "./DramaListPage.styled";
import Modal from "@/components/modal";

import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useDramaListGetHook } from "@/hooks/drama/useDramaListHook";
import { useEffect } from "react";

const DramaListPage = () => {
  const { t } = useTranslation();
  const location = useLocation();

  const {
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
  } = useDramaListGetHook();
  useEffect(() => {
    console.log(clipList);
  }, [clipList]);
  return (
    <StyledDrama>
      <StyledDramaNav>
        <StyledDramaBackButton onClick={backButton} />
        <StyledDramaTitle>{t("contents.drama.allList")}</StyledDramaTitle>
        <div></div>
      </StyledDramaNav>
      <StyledDramaList>
        {DramaList?.map((drama: any) => (
          <div key={drama.id}>
            <StyledDramaImage
              isSelected={selcectDrama?.id === drama.id}
              cover={drama.cover}
              onClick={() => setSelcectDrama(drama)}
            >
              <img src={S3_ADDRESS + drama.image} alt={drama.title} />
            </StyledDramaImage>
            <StyledDramaName>{drama.title}</StyledDramaName>
          </div>
        ))}
      </StyledDramaList>
      <StyledDramaItemContainer>
        <StyledDramaItemBox>
          {clipList?.map((clip: any, index: any) => (
            <StyledDramaItem onClick={() => openModal(clip)} key={index}>
              <StyledDramaItemImage
                src={S3_ADDRESS + clip.image}
                alt={clip.title}
              />
              <StyledDramaItemContnentContianer>
                <StyledDramaItemContnentImg
                  src={S3_ADDRESS + selcectDrama?.image}
                  alt={selcectDrama.title}
                />
                <StyledDramaItemTitle>{clip.title}</StyledDramaItemTitle>
              </StyledDramaItemContnentContianer>
            </StyledDramaItem>
          ))}
        </StyledDramaItemBox>
      </StyledDramaItemContainer>
      {isOpenModal && (
        <Modal
          isDetailOpen={isOpenModal}
          closeModal={closeModal}
          openPage={openDrama}
          modalArtist={clipInfo && clipInfo.title}
          modalText={t("contents.sing.game.modal.goGameModalText")}
          completeMent={t("contents.shadowing.openMent")}
          // closeMent={t("contents.shadowing.closeMent")}
          imgsrc={
            clipInfo ? S3_ADDRESS + clipInfo.image : "/learning/abdioy.png"
          }
        />
      )}
    </StyledDrama>
  );
};

export default DramaListPage;

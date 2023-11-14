import { S3_ADDRESS } from "@/api/api";
import {
  StyledEntertainment,
  StyledEntertainmentNav,
  StyledEntertainmentBackButton,
  StyledEntertainmentTitle,
  StyledEntertainmentList,
  StyledEntertainmentImage,
  StyledEntertainmentName,
  StyledEntertainmentItemContainer,
  StyledEntertainmentItemBox,
  StyledEntertainmentItem,
  StyledEntertainmentItemImage,
  StyledEntertainmentItemContnentContianer,
  StyledEntertainmentItemContnentImg,
  StyledEntertainmentItemTitle,
} from "./EntertainmentListPage.styled";
import Modal from "@/components/modal";

import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { useEffect } from "react";
import { useEntertainmentListGetHook } from "@/hooks/entertainment/useEntertainmentListGetHook";

const EntertainmentListPage = () => {
  const { t } = useTranslation();
  const location = useLocation();

  const {
    selectEntertainment,
    entertainmentList,
    clipList,
    openModal,
    closeModal,
    setSelectEntertainment,
    backButton,
    openEntertainment,
    isOpenModal,
    clipInfo,
  } = useEntertainmentListGetHook();

  return (
    <StyledEntertainment>
      <StyledEntertainmentNav>
        <StyledEntertainmentBackButton onClick={backButton} />
        <StyledEntertainmentTitle>
          {t("contents.enter.allList")}
        </StyledEntertainmentTitle>
        <div></div>
      </StyledEntertainmentNav>
      <StyledEntertainmentList>
        {entertainmentList?.map((enter: any) => (
          <div key={enter.id}>
            <StyledEntertainmentImage
              isSelected={selectEntertainment?.id === enter.id}
              cover={enter.cover}
              onClick={() => setSelectEntertainment(enter)}
            >
              <img src={S3_ADDRESS + enter.image} alt={enter.title} />
            </StyledEntertainmentImage>
            <StyledEntertainmentName>{enter.title}</StyledEntertainmentName>
          </div>
        ))}
      </StyledEntertainmentList>
      <StyledEntertainmentItemContainer>
        <StyledEntertainmentItemBox>
          {clipList?.map((clip: any, index: any) => (
            <StyledEntertainmentItem
              onClick={() => openModal(clip)}
              key={index}
            >
              <StyledEntertainmentItemImage
                src={S3_ADDRESS + clip.image}
                alt={clip.title}
              />
              <StyledEntertainmentItemContnentContianer>
                <StyledEntertainmentItemContnentImg
                  src={S3_ADDRESS + selectEntertainment?.image}
                  alt={selectEntertainment.title}
                />
                <StyledEntertainmentItemTitle>
                  {clip.title}
                </StyledEntertainmentItemTitle>
              </StyledEntertainmentItemContnentContianer>
            </StyledEntertainmentItem>
          ))}
        </StyledEntertainmentItemBox>
      </StyledEntertainmentItemContainer>
      {isOpenModal && (
        <Modal
          isDetailOpen={isOpenModal}
          closeModal={closeModal}
          openPage={openEntertainment}
          modalArtist={clipInfo && clipInfo.title}
          modalText={t("contents.sing.game.modal.goGameModalText")}
          completeMent={t("contents.shadowing.openMent")}
          // closeMent={t("contents.shadowing.closeMent")}
          imgsrc={
            clipInfo ? S3_ADDRESS + clipInfo.image : "/learning/abdioy.png"
          }
        />
      )}
    </StyledEntertainment>
  );
};

export default EntertainmentListPage;

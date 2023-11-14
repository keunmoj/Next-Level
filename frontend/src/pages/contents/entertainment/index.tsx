import { useTranslation } from "react-i18next";
import {
  StyledEnter,
  StyledEnterBodyContainer,
  StyledEnterCategory,
  StyledEnterTodayContainer,
  StyledEnterTodayBox,
  StyledEnterTodayImg,
  StyledEnterTodayTitle,
  StyledEnterArtistContainer,
  StyledEnterArtistBox,
  StyledEnterArtistyImg,
  StyledEnterArtistTitle,
  StyledEnterAristTag,
  StyledEnterArtistTagContainer,
} from "./Entertainment.styled";
import { useEffect, useState } from "react";
import { useEnterArtistListGetHook } from "@/hooks/entertainment/useEnterArtistListGetHook";
import { useEnterArtistCliptGetHook } from "@/hooks/entertainment/useEnterArtistClipHook";
import { S3_ADDRESS } from "@/api/api";
import { useEnterTodayHook } from "@/hooks/entertainment/useEnterTodyHook";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

const Entertainment = ({ openModal }: any) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  // 오늘의 예능
  const { todayEnterTitle, todayEnterClips, getEnterToday } =
    useEnterTodayHook();
  useEffect(() => {
    getEnterToday();
  }, []);

  const {
    enterAritstClip,
    getEnterAritstClip,
    enterSelectArtistClip,
    getEnterSelectAritstClip,
  } = useEnterArtistCliptGetHook();

  // 아티스트 태그
  const { enterArtistList, enterRandomArtist, getEnterArtistList } =
    useEnterArtistListGetHook();
  const [selectartistname, setselectartistname] = useState("");

  useEffect(() => {
    getEnterArtistList();
  }, []);

  const changeClip = (e: any, enter: any) => {
    setselectartistname(enter.name);
    getEnterSelectAritstClip(enter.id);
  };

  // 아티스트별 클립
  useEffect(() => {
    if (enterRandomArtist) {
      getEnterAritstClip(enterRandomArtist.id);
    }
  }, [enterRandomArtist]);

  return (
    <StyledEnter>
      <StyledEnterBodyContainer>
        <StyledEnterCategory onClick={() => navigate("/entertainment/list")}>
          {t("contents.enter.category.today")} | {todayEnterTitle} ▶
        </StyledEnterCategory>

        {/* 오늘의 예능 각 클립 */}
        <StyledEnterTodayContainer>
          <Swiper slidesPerView={2.2} spaceBetween={50} modules={[Navigation]}>
            {todayEnterClips?.map((enter: any) => (
              <SwiperSlide key={enter.id}>
                <StyledEnterTodayBox
                  onClick={() => {
                    openModal(enter);
                  }}
                >
                  <StyledEnterTodayImg
                    src={S3_ADDRESS + enter.image}
                    alt="showimg"
                  />
                  <StyledEnterTodayTitle>{enter.title}</StyledEnterTodayTitle>
                </StyledEnterTodayBox>
              </SwiperSlide>
            ))}
          </Swiper>
        </StyledEnterTodayContainer>
      </StyledEnterBodyContainer>

      {/* 아티스트 태그 */}
      <StyledEnterBodyContainer>
        <StyledEnterArtistTagContainer>
          {enterArtistList?.map((enter: any) => (
            <StyledEnterAristTag
              key={enter.id}
              selectartistname={selectartistname}
              onClick={(e: any) => changeClip(e, enter)}
              cardname={enter.name}
            >
              #{enter.name}
            </StyledEnterAristTag>
          ))}
        </StyledEnterArtistTagContainer>
      </StyledEnterBodyContainer>

      {/* 아티스트 활약상 */}
      <StyledEnterBodyContainer>
        {selectartistname ? (
          <StyledEnterCategory>
            {selectartistname}
            {t("contents.enter.category.artist")}
          </StyledEnterCategory>
        ) : (
          <StyledEnterCategory>
            {enterRandomArtist?.name}
            {t("contents.enter.category.artist")}
          </StyledEnterCategory>
        )}

        {/* 아티스트 개별 클립 */}
        {enterSelectArtistClip ? (
          <StyledEnterArtistContainer>
            {enterSelectArtistClip?.map((enter: any) => (
              <StyledEnterArtistBox
                key={enter.id}
                onClick={() => {
                  openModal(enter);
                }}
              >
                <StyledEnterArtistyImg
                  src={S3_ADDRESS + enter.image}
                  alt="artistImg"
                />
                <StyledEnterArtistTitle>{enter.title}</StyledEnterArtistTitle>
              </StyledEnterArtistBox>
            ))}
          </StyledEnterArtistContainer>
        ) : (
          <StyledEnterArtistContainer>
            {enterAritstClip?.map((enter: any) => (
              <StyledEnterArtistBox
                key={enter.id}
                onClick={() => {
                  openModal(enter);
                }}
              >
                <StyledEnterArtistyImg
                  src={S3_ADDRESS + enter.image}
                  alt="artistImg"
                />
                <StyledEnterArtistTitle>{enter.title}</StyledEnterArtistTitle>
              </StyledEnterArtistBox>
            ))}
          </StyledEnterArtistContainer>
        )}
      </StyledEnterBodyContainer>
    </StyledEnter>
  );
};

export default Entertainment;

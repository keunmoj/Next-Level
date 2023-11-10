import { useTranslation } from "react-i18next";
import {
  StyledEnter,
  StyledEnterBodyContainer,
  StyledEnterCategory,
  StyledEnterTodayContainer,
  StyledEnterTodayBox,
  StyledEnterTodayImg,
  StyledEnterTodayTitle,
  StyledEnterTodayText,
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
import { useEntertainmentListGetHook } from "@/hooks/entertainment/useEntertainmentListGetHook";
import ListModal from "@/pages/contents/entertainment/components/listmodal";
import { S3_ADDRESS } from "@/api/api";
import { useDramaTodayHook } from "@/hooks/drama/useDramaTodayHook";
import { use } from "i18next";
import { useEnterTodayHook } from "@/hooks/entertainment/useEnterTodyHook";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
const Entertainment = () => {
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

  //종혁ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
  const { entertainmentList, getEntertainmentList } =
    useEntertainmentListGetHook();
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    getEntertainmentList();
  }, []);
  //ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
  useEffect(() => {
    getEnterArtistList();
  }, []);
  const changeClip = (e: any, card: any) => {
    console.log("오류방지콘솔", e.target.id);
    setselectartistname(card.name);
    getEnterSelectAritstClip(card.id);
  };

  // 아티스트별 클립
  useEffect(() => {
    if (enterRandomArtist) {
      // console.log("index에서 id props", enterRandomArtist);
      getEnterAritstClip(enterRandomArtist.id);
    }
  }, [enterRandomArtist]);

  return (
    <StyledEnter>
      <StyledEnterBodyContainer>
        <StyledEnterCategory onClick={() => setIsOpen(true)}>
          {t("contents.enter.category.today")}|{todayEnterTitle}▼
        </StyledEnterCategory>

        {/* 오늘의 예능 각 클립 */}
        <StyledEnterTodayContainer>
          <Swiper slidesPerView={2} spaceBetween={50} modules={[Navigation]}>
            {todayEnterClips?.map((card: any) => (
              <SwiperSlide>
                <StyledEnterTodayBox
                  key={card.id}
                  onClick={() => {
                    navigate(`/entertainment/shadowing/${card.id}`);
                  }}
                >
                  <StyledEnterTodayImg
                    src={S3_ADDRESS + card.image}
                    alt="showimg"
                  />
                  <StyledEnterTodayTitle>{card.title}</StyledEnterTodayTitle>
                  <StyledEnterTodayText>
                    "n분의 1로 계산하자"
                  </StyledEnterTodayText>
                </StyledEnterTodayBox>
              </SwiperSlide>
            ))}
          </Swiper>
        </StyledEnterTodayContainer>
      </StyledEnterBodyContainer>

      {/* 아티스트 태그 */}
      <StyledEnterBodyContainer>
        <StyledEnterArtistTagContainer>
          {enterArtistList?.map((card: any) => (
            <StyledEnterAristTag
              key={card.id}
              selectartistname={selectartistname}
              onClick={(e: any) => changeClip(e, card)}
              cardname={card.name}
            >
              #{card.name}
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
            {enterSelectArtistClip?.map((card: any) => (
              <StyledEnterArtistBox
                key={card.id}
                onClick={() => {
                  navigate(`/entertainment/shadowing/${card.id}`);
                }}
              >
                <StyledEnterArtistyImg
                  src={S3_ADDRESS + card.image}
                  alt="artistImg"
                />
                <StyledEnterArtistTitle>{card.title}</StyledEnterArtistTitle>
              </StyledEnterArtistBox>
            ))}
          </StyledEnterArtistContainer>
        ) : (
          <StyledEnterArtistContainer>
            {enterAritstClip?.map((card: any) => (
              <StyledEnterArtistBox
                key={card.id}
                onClick={() => {
                  navigate(`/entertainment/shadowing/${card.id}`);
                }}
              >
                <StyledEnterArtistyImg
                  src={S3_ADDRESS + card.image}
                  alt="artistImg"
                />
                <StyledEnterArtistTitle>{card.title}</StyledEnterArtistTitle>
              </StyledEnterArtistBox>
            ))}
          </StyledEnterArtistContainer>
        )}
      </StyledEnterBodyContainer>
      {isOpen && (
        <ListModal
          entertainmentList={entertainmentList}
          setIsOpen={setIsOpen}
        ></ListModal>
      )}
    </StyledEnter>
  );
};

export default Entertainment;

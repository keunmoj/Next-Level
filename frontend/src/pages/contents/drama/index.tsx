import { useTranslation } from "react-i18next";
import {
  StyledDrama,
  StyledDramaBodyContainer,
  StyledDramaPopular,
  StyledDramaTodayContainer,
  StyledDramaArtistTag,
  StyledDramaArtistContainer,
  StyledDramaCategory,
  StyledDramaTodayBox,
  StyledDramaTodayImg,
  StyledDramaTodayTitle,
  StyledDramaArtistClipBox,
  StyledDramaArtistClipImg,
  StyledDramaArtistClipTitle,
  StyledDramaArtistTagContainer,
  StyledDramaButton,
  StyledDramaButtonContainer,
} from "./Drama.styled";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useDramaListGetHook } from "@/hooks/drama/useDramaListHook";
import { useEffect, useState } from "react";
import { useDramaArtistListGetHook } from "@/hooks/drama/useDramaArtistHook";
import { useDramaArtistCliptGetHook } from "@/hooks/drama/useDramaArtistClipHook";
import { S3_ADDRESS } from "@/api/api";
import { useDramaTodayHook } from "@/hooks/drama/useDramaTodayHook";
import { useNavigate } from "react-router-dom";

const Drama = ({ openModal }: any) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  // 오늘의 드라마
  const { todayDramaTitle, todayDramaClips, getDramaToday } =
    useDramaTodayHook();
  useEffect(() => {
    getDramaToday();
  }, []);

  const {
    dramaAritstClip,
    getDramaAritstClip,
    dramaSelectArtistClip,
    getDramaSelectAritstClip,
  } = useDramaArtistCliptGetHook();

  // 아티스트 태그
  const { dramaArtistList, dramaRandomArtist, getDramaArtistList } =
    useDramaArtistListGetHook();
  useEffect(() => {
    getDramaArtistList();
  }, []);
  const [selectartistname, setselectartistname] = useState("");

  // // 랜덤 아티스트 클립
  useEffect(() => {
    if (dramaRandomArtist) {
      getDramaAritstClip(dramaRandomArtist.id);
    }
  }, [dramaRandomArtist]);

  // // 태그 클릭시 클립 변경
  const changeClip = (drama: any) => {
    setselectartistname(drama.artistName);
    getDramaSelectAritstClip(drama.id);
  };

  // 드라마 리스트
  const { DramaList } = useDramaListGetHook();

  return (
    <StyledDrama>
      {/* 인기드라마 */}

      <StyledDramaBodyContainer>
        <Swiper
          spaceBetween={30}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
        >
          {DramaList?.map((drama: any) => (
            <SwiperSlide key={drama.id}>
              <StyledDramaPopular
                src={S3_ADDRESS + drama.image}
                alt={drama.id}
                width={380}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </StyledDramaBodyContainer>

      {/* 오늘의 드라마 */}
      <StyledDramaBodyContainer>
        <StyledDramaTodayContainer>
          <StyledDramaCategory onClick={() => navigate("/drama/list")}>
            {t("contents.drama.category.today")} | {todayDramaTitle} ▶
          </StyledDramaCategory>
          {todayDramaClips?.map((drama: any) => (
            <StyledDramaTodayBox
              key={drama.id}
              onClick={() => {
                openModal(drama);
              }}
            >
              <StyledDramaTodayImg
                src={S3_ADDRESS + drama.image}
                alt="dramaimg"
              />

              <StyledDramaButtonContainer>
                <StyledDramaTodayTitle>{drama.title}</StyledDramaTodayTitle>
                <StyledDramaButton>학습하기 ▶</StyledDramaButton>
              </StyledDramaButtonContainer>
            </StyledDramaTodayBox>
          ))}
        </StyledDramaTodayContainer>
      </StyledDramaBodyContainer>

      {/* 아티스트 태그 */}
      <StyledDramaBodyContainer id="tag">
        <StyledDramaArtistTagContainer>
          {dramaArtistList?.map((drama: any) => (
            <StyledDramaArtistTag
              key={drama.id}
              selectartistname={selectartistname}
              onClick={() => changeClip(drama)}
              cardname={drama.artistName}
            >
              #{drama.artistName}
            </StyledDramaArtistTag>
          ))}
        </StyledDramaArtistTagContainer>
      </StyledDramaBodyContainer>

      {/* 아티스트 클립 */}
      <StyledDramaBodyContainer>
        {selectartistname ? (
          <StyledDramaCategory>
            {selectartistname}
            {t("contents.drama.category.artist")} 😍
          </StyledDramaCategory>
        ) : (
          <StyledDramaCategory>
            {dramaRandomArtist?.artistName}
            {t("contents.drama.category.artist")} 😍
          </StyledDramaCategory>
        )}

        {/* 아티스트 개별 클립 */}
        {dramaSelectArtistClip ? (
          <StyledDramaArtistContainer>
            <Swiper
              slidesPerView={2.2}
              spaceBetween={50}
              modules={[Navigation]}
            >
              {dramaSelectArtistClip?.map((drama: any) => (
                <SwiperSlide key={drama.id}>
                  <StyledDramaArtistClipBox
                    onClick={() => {
                      openModal(drama);
                    }}
                  >
                    <StyledDramaArtistClipImg
                      src={S3_ADDRESS + drama.image}
                      alt="img"
                    />
                    <StyledDramaArtistClipTitle>
                      {drama.title}
                    </StyledDramaArtistClipTitle>
                    <StyledDramaButtonContainer>
                      <StyledDramaButton>학습하기 ▶</StyledDramaButton>
                    </StyledDramaButtonContainer>
                  </StyledDramaArtistClipBox>
                </SwiperSlide>
              ))}
            </Swiper>
          </StyledDramaArtistContainer>
        ) : (
          <StyledDramaArtistContainer>
            <Swiper
              slidesPerView={2.2}
              spaceBetween={50}
              modules={[Navigation]}
            >
              {dramaAritstClip?.map((drama: any) => (
                <SwiperSlide key={drama.id}>
                  <StyledDramaArtistClipBox
                    onClick={() => {
                      openModal(drama);
                    }}
                  >
                    <StyledDramaArtistClipImg
                      src={S3_ADDRESS + drama.image}
                      alt="img"
                    />
                    <StyledDramaArtistClipTitle>
                      {drama.title}
                    </StyledDramaArtistClipTitle>
                    <StyledDramaButtonContainer>
                      <StyledDramaButton>학습하기 ▶</StyledDramaButton>
                    </StyledDramaButtonContainer>
                  </StyledDramaArtistClipBox>
                </SwiperSlide>
              ))}
            </Swiper>
          </StyledDramaArtistContainer>
        )}
      </StyledDramaBodyContainer>
    </StyledDrama>
  );
};

export default Drama;

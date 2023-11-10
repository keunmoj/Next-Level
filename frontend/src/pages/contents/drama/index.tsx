import { useTranslation } from "react-i18next";
import {
  StyledDrama,
  StyledDramaTopContainer,
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
  StyledDramaArtistClipText,
  StyledDramaArtistTagContainer,
} from "./Drama.styled";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useDramaListGetHook } from "@/hooks/drama/useDramaListHook";
import { useEffect, useState } from "react";
import { useDramaArtistListGetHook } from "@/hooks/drama/useDramaArtistHook";
import ListModal from "./components/listmodal";
import { useDramaArtistCliptGetHook } from "@/hooks/drama/useDramaArtistClipHook";
import { S3_ADDRESS } from "@/api/api";
import { useDramaTodayHook } from "@/hooks/drama/useDramaTodayHook";

const Drama = () => {
  const { t } = useTranslation();

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
  const changeClip = (e: any, card: any) => {
    console.log("오류방지콘솔", e.target.id);
    setselectartistname(card.artistName);
    getDramaSelectAritstClip(card.id);
  };

  // 드라마 리스트
  const { DramaList, getDramaList } = useDramaListGetHook();
  useEffect(() => {
    getDramaList();
  }, []);

  //종혁ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    // console.log(DramaList);
  }, [DramaList]);
  //ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
  return (
    <StyledDrama>
      {/* 인기드라마 */}

      <StyledDramaBodyContainer>
        <Swiper
          spaceBetween={30}
          // centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
        >
          {DramaList?.map((card: any) => (
            <SwiperSlide key={card.id}>
              <StyledDramaPopular
                src={S3_ADDRESS + card.image}
                alt="test"
                width={380}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </StyledDramaBodyContainer>

      {/* 오늘의 드라마 */}
      <StyledDramaBodyContainer>
        <StyledDramaTodayContainer>
          <StyledDramaCategory onClick={() => setIsOpen(true)}>
            {t("contents.drama.category.today")} | {todayDramaTitle}
          </StyledDramaCategory>
          {todayDramaClips?.map((card: any) => (
            <StyledDramaTodayBox key={card.id}>
              <StyledDramaTodayImg
                src={S3_ADDRESS + card.image}
                alt="dramaimg"
              />

              <StyledDramaTodayTitle>{card.title}</StyledDramaTodayTitle>
            </StyledDramaTodayBox>
          ))}
        </StyledDramaTodayContainer>
      </StyledDramaBodyContainer>

      {/* 아티스트 태그 */}
      <StyledDramaBodyContainer>
        <StyledDramaArtistTagContainer>
          {dramaArtistList?.map((card: any) => (
            <StyledDramaArtistTag
              key={card.id}
              selectartistname={selectartistname}
              onClick={(e: any) => changeClip(e, card)}
              cardname={card.artistName}
            >
              # {card.artistName}
            </StyledDramaArtistTag>
          ))}
        </StyledDramaArtistTagContainer>
      </StyledDramaBodyContainer>

      {/* 아티스트 클립 */}
      <StyledDramaBodyContainer>
        {selectartistname ? (
          <StyledDramaCategory>
            {selectartistname}
            {t("contents.drama.category.artist")}
          </StyledDramaCategory>
        ) : (
          <StyledDramaCategory>
            {dramaRandomArtist?.artistName}
            {t("contents.drama.category.artist")}
          </StyledDramaCategory>
        )}

        {/* 아티스트 개별 클립 */}
        {dramaSelectArtistClip ? (
          <StyledDramaArtistContainer>
            {dramaSelectArtistClip?.map((card: any) => (
              <StyledDramaArtistClipBox key={card.id}>
                <StyledDramaArtistClipImg
                  src={S3_ADDRESS + card.image}
                  alt="이미지api대기중"
                />
                <StyledDramaArtistClipTitle>
                  {card.title}
                </StyledDramaArtistClipTitle>
              </StyledDramaArtistClipBox>
            ))}
          </StyledDramaArtistContainer>
        ) : (
          <StyledDramaArtistContainer>
            {dramaAritstClip?.map((card: any) => (
              <StyledDramaArtistClipBox key={card.id}>
                <StyledDramaArtistClipImg
                  src={S3_ADDRESS + card.image}
                  alt="이미지api대기중"
                />
                <StyledDramaArtistClipTitle>
                  {card.title}
                </StyledDramaArtistClipTitle>
              </StyledDramaArtistClipBox>
            ))}
          </StyledDramaArtistContainer>
        )}
      </StyledDramaBodyContainer>
      {isOpen && (
        <ListModal DramaList={DramaList} setIsOpen={setIsOpen}></ListModal>
      )}
    </StyledDrama>
  );
};

export default Drama;

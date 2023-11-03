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
} from "./Drama.styled";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useDramaListGetHook } from "@/hooks/drama/useDramaListHook";
import { useEffect, useState } from "react";
import { useDramaArtistListGetHook } from "@/hooks/drama/useDramaArtistHook";
import ListModal from "./listmodal";
import { useDramaArtistCliptGetHook } from "@/hooks/drama/useDramaArtistClipHook";

const Drama = () => {
  const { t } = useTranslation();
  const {
    dramaAritstClip,
    getDramaAritstClip,
    dramaSelectArtistClip,
    getDramaSelectAritstClip,
  } = useDramaArtistCliptGetHook();
  // 아티스트 태그
  const { dramaArtistList, getDramaArtistList } = useDramaArtistListGetHook();
  useEffect(() => {
    getDramaArtistList();
  }, []);

  // 드라마 리스트
  const { DramaList, getDramaList } = useDramaListGetHook();
  useEffect(() => {
    getDramaList();
  }, []);

  //종혁ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    console.log(DramaList);
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
          <SwiperSlide>
            <StyledDramaPopular
              src="https://img.youtube.com/vi/4TWR90KJl84/maxresdefault.jpg"
              alt="test"
              width={380}
            />
          </SwiperSlide>
          <SwiperSlide>
            <StyledDramaPopular
              src="https://img.youtube.com/vi/4TWR90KJl84/maxresdefault.jpg"
              alt="test"
              width={380}
            />
          </SwiperSlide>
          <SwiperSlide>
            <StyledDramaPopular
              src="/contents/CrashLandingonYou.PNG"
              alt="test"
              width={380}
            />
          </SwiperSlide>
        </Swiper>
      </StyledDramaBodyContainer>

      {/* 오늘의 드라마 */}
      <StyledDramaBodyContainer>
        <StyledDramaTodayContainer>
          <StyledDramaCategory onClick={() => setIsOpen(true)}>
            {t("contents.drama.category.today")}
          </StyledDramaCategory>
          <StyledDramaTodayBox>
            <StyledDramaTodayImg>썸네일</StyledDramaTodayImg>
            <StyledDramaTodayTitle>
              [사랑의불시착] 손예진의 능청스러운 연기🥰
            </StyledDramaTodayTitle>
          </StyledDramaTodayBox>
          <StyledDramaTodayBox>
            <StyledDramaTodayImg>썸네일</StyledDramaTodayImg>
            <StyledDramaTodayTitle>
              [사랑의불시착] 손예진의 능청스러운 연기🥰
            </StyledDramaTodayTitle>
          </StyledDramaTodayBox>
        </StyledDramaTodayContainer>
      </StyledDramaBodyContainer>

      {/* 아티스트 태그 */}
      <StyledDramaBodyContainer>
        <StyledDramaArtistTag>아티스트 태그</StyledDramaArtistTag>
      </StyledDramaBodyContainer>

      {/* 아티스트 클립 */}
      <StyledDramaBodyContainer>
        <StyledDramaCategory>
          {t("contents.drama.category.artist")}
        </StyledDramaCategory>

        {/* 아티스트 개별 클립 */}
        <StyledDramaArtistContainer>
          <StyledDramaArtistClipBox>
            <StyledDramaArtistClipImg></StyledDramaArtistClipImg>
            <StyledDramaArtistClipTitle>
              [사랑의 불시착] 다음부터 셋이 그냥 만나지마 😠
            </StyledDramaArtistClipTitle>
            <StyledDramaArtistClipText>
              “웃어? 나 안간다?”
            </StyledDramaArtistClipText>
          </StyledDramaArtistClipBox>
        </StyledDramaArtistContainer>
      </StyledDramaBodyContainer>
      {isOpen && (
        <ListModal DramaList={DramaList} setIsOpen={setIsOpen}></ListModal>
      )}
    </StyledDrama>
  );
};

export default Drama;

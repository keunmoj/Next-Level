import {
  StyledSing,
  StyledSingCategory,
  StyledSingBodyContainer,
  StyledSingContentBox,
  StyledSingBox,
  StyledSingImg,
  StyledSingTitle,
  StyledSingArtistContentBox,
  StyledSingArtistBox,
  StyledSingArtistImg,
  StyledSingArtitstTitle,
} from "./Sing.styled";
import { useTranslation } from "react-i18next";
import { useSingPopularListGetHook } from "@/hooks/sing/useSingPopularListHook";
import { useSingPopularArtistListGetHook } from "@/hooks/sing/useSingPopularArtistHook";
import { S3_ADDRESS } from "@/api/api";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
const Sing = ({ openModal }: any) => {
  const { t } = useTranslation();

  // 음악 메인 인기음악 네곡
  // hook
  const { popularSongList, goSongList, goArtistList } =
    useSingPopularListGetHook();

  // 인기 아티스트
  const { popularArtistList } = useSingPopularArtistListGetHook();

  return (
    <StyledSing>
      {/* 임시 컨테이너 데이터 들어오면 map 돌릴 예정 */}
      {/* 인기음악 */}
      <StyledSingBodyContainer>
        <StyledSingCategory id="list" onClick={goSongList}>
          {t("contents.sing.category.popular")} ▶
        </StyledSingCategory>
        <StyledSingContentBox>
          {popularSongList.map((song: any) => (
            <StyledSingBox key={song.songId} onClick={() => openModal(song)}>
              <StyledSingImg
                src={S3_ADDRESS + song.coverImg}
                alt="singImg"
              ></StyledSingImg>
              <StyledSingTitle>
                {song.songTitle} - {song.artistName}
              </StyledSingTitle>
            </StyledSingBox>
          ))}
        </StyledSingContentBox>
      </StyledSingBodyContainer>

      {/* 인기아티스트 */}

      <StyledSingBodyContainer>
        <StyledSingCategory id="artist" onClick={() => goArtistList()}>
          {t("contents.sing.category.artist")} ▶
        </StyledSingCategory>
        <Swiper slidesPerView={2.5} modules={[Navigation]}>
          <StyledSingArtistContentBox>
            {popularArtistList.map((song: any) => (
              <SwiperSlide key={song.artistId}>
                <StyledSingArtistBox
                  onClick={() => goArtistList(song.artistId)}
                >
                  <StyledSingArtistImg src={S3_ADDRESS + song.image} />
                  <StyledSingArtitstTitle>
                    {song.artistName}
                  </StyledSingArtitstTitle>
                </StyledSingArtistBox>
              </SwiperSlide>
            ))}
          </StyledSingArtistContentBox>
        </Swiper>
      </StyledSingBodyContainer>
    </StyledSing>
  );
};

export default Sing;

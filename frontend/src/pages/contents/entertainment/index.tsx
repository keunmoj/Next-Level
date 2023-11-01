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
import ListModal from "@/pages/contents/entertainment/listmodal";
const Entertainment = () => {
  const { t } = useTranslation();
  const {
    enterAritstClip,
    getEnterAritstClip,
    enterSelectArtistClip,
    getEnterSelectAritstClip,
  } = useEnterArtistCliptGetHook();

  // 아티스트 태그
  const { enterArtistList, enterRandomArtist, getEnterArtistList } =
    useEnterArtistListGetHook();
  const [selectArtistName, setSelectArtistName] = useState("");

  //종혁ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
  const { entertainmentList, getEntertainmentList } =
    useEntertainmentListGetHook();
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    getEntertainmentList();
  }, []);
  useEffect(() => {
    console.log(entertainmentList);
  }, [entertainmentList]);
  //ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
  useEffect(() => {
    getEnterArtistList();
  }, []);
  const changeClip = (e: any, card: any) => {
    // console.log(card);
    setSelectArtistName(card.artistName);
    getEnterSelectAritstClip(card.artistId);
  };

  // 아티스트별 클립
  useEffect(() => {
    if (enterRandomArtist) {
      getEnterAritstClip(enterRandomArtist.artistId);
    }
  }, [enterRandomArtist]);

  return (
    <StyledEnter>
      <StyledEnterBodyContainer>
        <StyledEnterCategory onClick={() => setIsOpen(true)}>
          {t("contents.enter.category.today")}
        </StyledEnterCategory>

        {/* 오늘의 예능 각 클립 */}
        <StyledEnterTodayContainer>
          <StyledEnterTodayBox>
            <StyledEnterTodayImg>썸네일</StyledEnterTodayImg>
            <StyledEnterTodayTitle>
              [런닝맨] 다음부터 셋이 그냥 만나지마 😠
            </StyledEnterTodayTitle>
            <StyledEnterTodayText>"n분의 1로 계산하자"</StyledEnterTodayText>
          </StyledEnterTodayBox>
          <StyledEnterTodayBox>
            <StyledEnterTodayImg>썸네일</StyledEnterTodayImg>
            <StyledEnterTodayTitle>
              [런닝맨] 다음부터 셋이 그냥 만나지마 😠
            </StyledEnterTodayTitle>
            <StyledEnterTodayText>"n분의 1로 계산하자"</StyledEnterTodayText>
          </StyledEnterTodayBox>
          <StyledEnterTodayBox>
            <StyledEnterTodayImg>썸네일</StyledEnterTodayImg>
            <StyledEnterTodayTitle>
              [런닝맨] 다음부터 셋이 그냥 만나지마 😠
            </StyledEnterTodayTitle>
            <StyledEnterTodayText>"n분의 1로 계산하자"</StyledEnterTodayText>
          </StyledEnterTodayBox>
        </StyledEnterTodayContainer>
      </StyledEnterBodyContainer>

      {/* 아티스트 태그 */}
      <StyledEnterBodyContainer>
        <StyledEnterArtistTagContainer>
          {enterArtistList?.map((card: any) => (
            <StyledEnterAristTag
              key={card.artistId}
              onClick={(e: any) => changeClip(e, card)}
            >
              #{card.artistName}
            </StyledEnterAristTag>
          ))}
        </StyledEnterArtistTagContainer>
      </StyledEnterBodyContainer>

      {/* 아티스트 활약상 */}
      <StyledEnterBodyContainer>
        {selectArtistName ? (
          <StyledEnterCategory>
            {selectArtistName}
            {t("contents.enter.category.artist")}
          </StyledEnterCategory>
        ) : (
          <StyledEnterCategory>
            {enterRandomArtist?.artistName}
            {t("contents.enter.category.artist")}
          </StyledEnterCategory>
        )}

        {/* 아티스트 개별 클립 */}
        {enterSelectArtistClip ? (
          <StyledEnterArtistContainer>
            {enterSelectArtistClip?.map((card: any) => (
              <StyledEnterArtistBox key={card.showProblemId}>
                <StyledEnterArtistyImg
                  src="https://img.youtube.com/vi/Qg8W0piIn8Q/maxresdefault.jpg"
                  alt="artistImg"
                />
                <StyledEnterArtistTitle>
                  {card.problemTitle}
                </StyledEnterArtistTitle>
              </StyledEnterArtistBox>
            ))}
          </StyledEnterArtistContainer>
        ) : (
          <StyledEnterArtistContainer>
            {enterAritstClip?.map((card: any) => (
              <StyledEnterArtistBox key={card.showProblemId}>
                <StyledEnterArtistyImg
                  src="https://img.youtube.com/vi/Qg8W0piIn8Q/maxresdefault.jpg"
                  alt="artistImg"
                />
                <StyledEnterArtistTitle>
                  {card.problemTitle}
                </StyledEnterArtistTitle>
              </StyledEnterArtistBox>
            ))}
          </StyledEnterArtistContainer>
        )}
        {/* <StyledEnterArtistContainer>
          {enterAritstClip?.map((card: any) => (
            <StyledEnterArtistBox key={card.showProblemId}>
              <StyledEnterArtistyImg
                src="https://img.youtube.com/vi/Qg8W0piIn8Q/maxresdefault.jpg"
                alt="artistImg"
              />
              <StyledEnterArtistTitle>
                {card.problemTitle}
              </StyledEnterArtistTitle>
            </StyledEnterArtistBox>
          ))}
        </StyledEnterArtistContainer> */}
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

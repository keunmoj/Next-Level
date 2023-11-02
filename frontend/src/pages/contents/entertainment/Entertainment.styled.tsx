import styled, { css } from "styled-components";

const StyledEnter = styled.div``;

const StyledEnterTopContainer = styled.div`
  height: 22vh;
  background-color: aliceblue;
`;

const StyledEnterBodyContainer = styled.div`
  /* border: 1px solid yellow; */
  padding: 1rem;
`;

const StyledEnterCategory = styled.div`
  /* border-bottom: 3px solid black; */
  width: 90vw;
  font-size: 24px;
  font-family: ${(props) => props.theme.fonts.semiboldfont};
`;

const StyledEnterTodayContainer = styled.div`
  /* border: 1px solid red; */
  display: flex;
  overflow-x: scroll;
`;

const StyledEnterTodayBox = styled.div`
  border: 1px solid gray;
  width: 42vw;
  margin-top: 1rem;
  margin-right: 1rem;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
`;

const StyledEnterTodayImg = styled.div`
  background-color: aliceblue;
  border-radius: 10px;
  width: 40vw;
  height: 11vh;
  margin: 0.5rem;
`;

const StyledEnterTodayTitle = styled.div`
  /* border: 1px solid red; */
  margin: 0.5rem;
`;

const StyledEnterTodayText = styled.div`
  /* border: 1px solid black; */
`;

const StyledEnterArtistContainer = styled.div`
  /* border: 1px solid orange; */
`;

const StyledEnterArtistBox = styled.div`
  /* border: 1px solid gray; */
  display: flex;
  margin-top: 1rem;
`;

const StyledEnterArtistyImg = styled.img`
  background-color: aliceblue;
  width: 40vw;
  height: 10vh;
  border-radius: 10px;
`;

const StyledEnterArtistTitle = styled.div`
  /* border: 1px solid black; */
  padding-left: 0.5rem;
  width: 45vw;
  font-size: 18px;
`;

const StyledEnterArtistTagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const StyledEnterAristTag = styled.div.attrs<any>(() => ({}))`
  ${(props) => {
    const selectartistname = props.selectartistname;
    const id = props.key;
    const name = props.cardname;

    return css`
      border: 3px solid ${(props) => props.theme.colors.main};
      width: fit-content;
      padding: 0.5rem;
      font-size: 18px;
      margin: 0.2rem;
      border-radius: 5px;
      background-color: ${selectartistname === name ? `#4A90E2` : null};
      color: ${selectartistname === name ? `#ffffff` : null};
      font-family: ${selectartistname === name
        ? props.theme.fonts.lightfont
        : null};
    `;
  }}
`;

export {
  StyledEnter,
  StyledEnterTopContainer,
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
};

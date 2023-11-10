import styled, { css } from "styled-components";

const StyledDrama = styled.div`
  /* border: 1px solid blue; */
  font-size: ${(props) => props.theme.fontsize.regular};
`;

const StyledDramaTopContainer = styled.div`
  background-color: aliceblue;
  height: 22vh;
`;

const StyledDramaBodyContainer = styled.div`
  /* border: 1px solid yellow; */
  padding: 1rem;
`;

const StyledDramaCategory = styled.div`
  /* border-bottom: 3px solid black; */
  /* width: 40vw; */
  font-size: ${(props) => props.theme.fontsize.large};
  font-family: ${(props) => props.theme.fonts.semiboldfont};
`;

const StyledDramaPopular = styled.img`
  /* background-color: pink; */
  border-radius: 10px;
  height: 24vh;
  object-fit: fill;
`;

const StyledDramaTodayContainer = styled.div`
  /* border: 1px solid red; */
`;

const StyledDramaTodayBox = styled.div`
  /* border: 1px solid gray; */
  display: flex;
  margin-top: 1rem;
`;

const StyledDramaTodayImg = styled.img`
  background-color: aliceblue;
  width: 40vw;
  height: 10vh;
  border-radius: 10px;
`;

const StyledDramaTodayTitle = styled.div`
  padding-left: 0.5rem;
  width: 45vw;
`;

const StyledDramaArtistTagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const StyledDramaArtistTag = styled.div.attrs<any>(() => ({}))`
  ${(props) => {
    const selectartistname = props.selectartistname;
    const id = props.key;
    const name = props.cardname;

    return css`
      border: 2px solid ${(props) => props.theme.colors.main};
      width: fit-content;
      height: 15px;
      padding: 0.5rem;
      margin: 0.2rem;
      border-radius: 5px;
      display: flex;
      align-items: center;
      background-color: ${selectartistname === name ? `#4A90E2` : null};
      color: ${selectartistname === name ? `#ffffff` : null};
      font-family: ${selectartistname === name
        ? props.theme.fonts.lightfont
        : null};
    `;
  }}
`;

const StyledDramaArtistContainer = styled.div`
  /* border: 1px solid blue; */
  height: 25vh;
  display: flex;
  overflow-x: scroll;
`;

const StyledDramaArtistClipBox = styled.div`
  border: 2px solid gray;
  width: 42vw;
  margin-top: 1rem;
  margin-right: 1rem;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
`;

const StyledDramaArtistClipImg = styled.img`
  background-color: aliceblue;
  border-radius: 10px;
  width: 40vw;
  height: 11vh;
  margin: 0.5rem;
`;

const StyledDramaArtistClipTitle = styled.div`
  /* border: 1px solid red; */
  margin: 0.5rem;
`;

const StyledDramaArtistClipText = styled.div`
  /* border: 1px solid black; */
  font-family: ${(props) => props.theme.fonts.semiboldfont};
`;

export {
  StyledDrama,
  StyledDramaTopContainer,
  StyledDramaBodyContainer,
  StyledDramaCategory,
  StyledDramaPopular,
  StyledDramaTodayContainer,
  StyledDramaTodayBox,
  StyledDramaTodayImg,
  StyledDramaTodayTitle,
  StyledDramaArtistTag,
  StyledDramaArtistContainer,
  StyledDramaArtistClipBox,
  StyledDramaArtistClipImg,
  StyledDramaArtistClipTitle,
  StyledDramaArtistClipText,
  StyledDramaArtistTagContainer,
};

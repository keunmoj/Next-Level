import styled, { css } from "styled-components";

const StyledDrama = styled.div`
  /* border: 1px solid blue; */
  font-size: ${(props) => props.theme.fontsize.regular};
  height: 66vh;
  overflow: scroll;
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
  border-radius: 5px;
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
  border-radius: 5px;
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
      border: 2px solid ${(props) => props.theme.colors.gray};
      font-size: ${(props) => props.theme.fontsize.small};
      width: fit-content;
      height: 13px;
      padding: 5px;
      margin: 0.2rem;
      border-radius: 5px;
      display: flex;
      align-items: center;
      background-color: ${selectartistname === name ? `#323248` : null};
      color: ${selectartistname === name ? `#ffffff` : null};
      font-family: ${selectartistname === name
        ? props.theme.fonts.lightfont
        : null};
    `;
  }}
`;

const StyledDramaArtistContainer = styled.div`
  /* border: 1px solid blue; */
  /* height: 27vh; */
  display: flex;
  overflow-x: scroll;
`;

const StyledDramaArtistClipBox = styled.div`
  border: 2px solid gray;
  width: 42vw;
  margin-top: 1rem;
  margin-right: 1rem;
  padding: 3%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  height: 85%;
  justify-content: space-between;
`;

const StyledDramaArtistClipImg = styled.img`
  background-color: aliceblue;
  border-radius: 5px;
  width: 40vw;
  height: 11vh;
  margin: 0.5rem;
`;

const StyledDramaArtistClipTitle = styled.div`
  /* border: 1px solid red; */
  margin: 0.5rem;
  height: 6vh;
  width: 40vw;
  margin-left: 0.5rem;
`;

const StyledDramaArtistClipText = styled.div`
  font-family: ${(props) => props.theme.fonts.semiboldfont};
`;

const StyledDramaButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StyledDramaButton = styled.div`
  margin: 0rem 0.5rem 0.5rem 0.5rem;
  border: 2px solid ${(props) => props.theme.colors.gray};
  width: fit-content;
  padding: 5px 10px;
  /* height: 3vh; */
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${(props) => props.theme.fontsize.small};
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
  StyledDramaButton,
  StyledDramaButtonContainer,
};

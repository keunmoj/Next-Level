import styled, { css } from "styled-components";

const StyledEnter = styled.div`
  font-size: ${(props) => props.theme.fontsize.regular};
  height: 66vh;
  overflow: scroll;
`;

const StyledEnterTopContainer = styled.div`
  height: 22vh;
  background-color: aliceblue;
`;

const StyledEnterBodyContainer = styled.div`
  /* border: 1px solid yellow; */

  padding: 1rem;
  ${({ id }) => {
    if (id === "tag") {
      return `
      display : flex;
      justify-content: center;
      padding : 0.5rem 1rem;
      // background-color: aliceblue;
      `;
    }
  }}
`;

const StyledEnterCategory = styled.div`
  /* border-bottom: 3px solid black; */
  width: 90vw;
  font-size: ${(props) => props.theme.fontsize.large};
  font-family: ${(props) => props.theme.fonts.semiboldfont};
`;

const StyledEnterTodayContainer = styled.div`
  /* border: 1px solid red; */
  height: 26.5vh;
  display: flex;
  overflow-x: scroll;
`;

const StyledEnterTodayBox = styled.div`
  border: 1px solid gray;
  width: 42vw;
  margin-top: 1rem;
  margin-right: 1rem;
  padding: 3%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  justify-content: space-around;
  height: 85%;
`;

const StyledEnterTodayImg = styled.img`
  background-color: aliceblue;
  border-radius: 5px;
  width: 40vw;
  height: 11vh;
  margin: 0.5rem;
`;

const StyledEnterTodayTitle = styled.div`
  /* border: 1px solid red; */
  margin: 0.5rem;
  height: 6vh;
  width: 40vw;
  margin-left: 0.5rem;
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
  border-radius: 5px;
`;

const StyledEnterArtistTitle = styled.div`
  /* border: 1px solid black; */
  padding-left: 0.5rem;
  width: 45vw;
`;

const StyledEnterArtistTagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 90%;
`;

const StyledEnterAristTag = styled.div.attrs<any>(() => ({}))`
  ${(props) => {
    const selectartistname = props.selectartistname;
    const id = props.key;
    const name = props.cardname;

    return css`
      border: 1px solid ${(props) => props.theme.colors.gray};
      font-size: ${(props) => props.theme.fontsize.small};
      width: fit-content;
      height: 13px;
      padding: 5px;
      margin: 0.2rem;
      border-radius: 5px;
      display: flex;
      align-items: center;

      background-color: ${selectartistname === name ? `#323248` : `#ffffff`};
      color: ${selectartistname === name ? `#ffffff` : null};
      font-family: ${selectartistname === name
        ? props.theme.fonts.lightfont
        : null};
    `;
  }}
`;

const StyledEnterButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StyledEnterButton = styled.div`
  margin: 0rem 0.5rem 0.5rem 0.5rem;
  border: 1px solid ${(props) => props.theme.colors.gray};
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
  StyledEnterButtonContainer,
  StyledEnterButton,
};

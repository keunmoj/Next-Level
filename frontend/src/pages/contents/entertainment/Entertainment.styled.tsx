import styled from "styled-components";

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
  border-bottom: 3px solid black;
  width: 40vw;
  font-size: 18px;
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
  border: 1px solid gray;
  display: flex;
  margin-top: 1rem;
`;

const StyledEnterArtistyImg = styled.div`
  background-color: aliceblue;
  width: 40vw;
  height: 10vh;
`;

const StyledEnterArtistTitle = styled.div`
  border: 1px solid black;
  padding-left: 0.5rem;
  width: 45vw;
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
};

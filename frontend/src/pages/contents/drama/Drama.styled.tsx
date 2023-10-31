import styled from "styled-components";

const StyledDrama = styled.div`
  /* border: 1px solid blue; */
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
  width: 40vw;
  font-size: 24px;
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
  border: 1px solid gray;
  display: flex;
  margin-top: 1rem;
`;

const StyledDramaTodayImg = styled.div`
  background-color: aliceblue;
  width: 40vw;
  height: 10vh;
`;

const StyledDramaTodayTitle = styled.div`
  border: 1px solid black;
  padding-left: 0.5rem;
  width: 45vw;
`;

const StyledDramaArtistTag = styled.div`
  border: 1px solid orange;
`;

const StyledDramaArtistContainer = styled.div`
  /* border: 1px solid blue; */
  display: flex;
  overflow-x: scroll;
`;

const StyledDramaArtistClipBox = styled.div`
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

const StyledDramaArtistClipImg = styled.div`
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
  font-size: 18px;
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
};

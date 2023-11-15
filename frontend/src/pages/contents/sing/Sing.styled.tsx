import styled from "styled-components";

const StyledSing = styled.div`
  /* border: 1px solid blue; */
  /* background-color: #f6fcf7; */
  height: 66vh;
  font-size: ${(props) => props.theme.fontsize.regular};
  overflow: scroll;
`;

const StyledSingTopContainer = styled.div`
  background-color: aliceblue;
  height: 22vh;
`;

const StyledSingBodyContainer = styled.div`
  /* border: 1px solid yellow; */
  padding: 1rem;
`;

const StyledSingCategory = styled.div`
  /* border-bottom: 3px solid black; */
  width: 40vw;
  font-size: ${(props) => props.theme.fontsize.large};
  font-family: ${(props) => props.theme.fonts.semiboldfont};
`;

const StyledSingContentBox = styled.div`
  /* border: 1px solid red; */
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px 15px;
  width: 100%;
  margin-top: 2vh;
`;

const StyledSingBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledSingImg = styled.img`
  /* background-color: aliceblue; */
  width: 100%;
  height: 13vh;
  object-fit: cover;
  border-radius: 5px;
`;

const StyledSingTitle = styled.div`
  /* border: 1px solid black; */
  width: 100%;
  height: 4vh;
  font-family: ${(props) => props.theme.fonts.semiboldfont};
  display: flex;
  align-items: center;
  padding-left: 5px;
  padding-right: 5px;
  /* justify-content: center; */
`;

const StyledSingArtistContentBox = styled.div`
  /* border: 1px solid red; */
  display: flex;
  justify-content: space-between;
  overflow-x: scroll;
`;

const StyledSingArtistBox = styled.div`
  /* border: 1px solid gray; */
  /* margin: 1rem 1rem 1rem 0rem; */
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2vh;
`;

const StyledSingArtistImg = styled.img`
  width: 20vw;
  height: 20vw;
  border-radius: 100%;
  margin: 0.5rem;
  object-fit: cover;
`;

const StyledSingArtitstTitle = styled.div`
  /* border: 1px solid black; */
  font-family: ${(props) => props.theme.fonts.semiboldfont};
`;

export {
  StyledSing,
  StyledSingBodyContainer,
  StyledSingTopContainer,
  StyledSingCategory,
  StyledSingContentBox,
  StyledSingBox,
  StyledSingImg,
  StyledSingTitle,
  StyledSingArtistContentBox,
  StyledSingArtistBox,
  StyledSingArtistImg,
  StyledSingArtitstTitle,
};

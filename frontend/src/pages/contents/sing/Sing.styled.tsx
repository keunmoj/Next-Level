import styled from "styled-components";

const StyledSing = styled.div`
  /* border: 1px solid blue; */
  /* background-color: #f6fcf7; */
  /* height: 60vh; */
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
  font-size: 24px;
  font-family: ${(props) => props.theme.fonts.semiboldfont};
`;

const StyledSingContentBox = styled.div`
  /* border: 1px solid red; */
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const StyledSingBox = styled.div`
  /* border: 1px solid gray; */
  margin-top: 10px;
  margin-bottom: 10px;
  position: relative;
`;

const StyledSingImg = styled.img`
  /* background-color: aliceblue; */
  width: 43vw;
  height: 13vh;
  border-radius: 5px;
  object-fit: cover;
  box-shadow: 2px 2px 2px 2px #a8a2a2;
`;

const StyledSingPlayIcon = styled.div`
  color: white;
  /* width: 5vw; */
  position: absolute;
  top: 25%;
  left: 40%;
  font-size: 35px;
`;

const StyledSingTitle = styled.div`
  /* border: 1px solid black; */
  width: 43vw;
  height: 4vh;
  font-family: ${(props) => props.theme.fonts.semiboldfont};
  font-size: 18px;
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
  margin: 1rem 1rem 1rem 0rem;
`;

const StyledSingArtistImg = styled.img`
  width: 30vw;
  height: 30vw;
  border-radius: 100%;
  margin: 0.5rem;
  object-fit: cover;
`;

const StyledSingArtitstTitle = styled.div`
  /* border: 1px solid black; */
  text-align: center;
  font-family: ${(props) => props.theme.fonts.semiboldfont};
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
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
  StyledSingPlayIcon,
};

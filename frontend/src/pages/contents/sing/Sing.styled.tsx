import styled from "styled-components";

const StyledSing = styled.div`
  border: 1px solid blue;
`;

const StyledSingTopContainer = styled.div`
  background-color: aliceblue;
  height: 22vh;
`;

const StyledSingBodyContainer = styled.div`
  border: 1px solid yellow;
  padding: 1rem;
`;

const StyledSingCategory = styled.div`
  border-bottom: 3px solid black;
  width: 40vw;
  font-size: 24px;
`;

const StyledSingContentBox = styled.div`
  border: 1px solid red;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const StyledSingBox = styled.div`
  border: 1px solid gray;
  width: 180px;
  height: 160px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const StyledSingImg = styled.div`
  background-color: aliceblue;
  width: 180px;
  height: 120px;
  border-radius: 10px;
`;

const StyledSingTitle = styled.div`
  border: 1px solid black;
  height: 40px;
`;

const StyledSingArtistContentBox = styled.div`
  border: 1px solid red;
  display: flex;
  justify-content: space-between;
  overflow-x: scroll;
`;

const StyledSingArtistBox = styled.div`
  border: 1px solid gray;
  width: 130px;
  height: 160px;
  padding: 0.5rem;
  margin: 1rem;
`;

const StyledSingArtistImg = styled.div`
  background-color: aliceblue;
  width: 120px;
  height: 120px;
  border-radius: 100%;
`;

const StyledSingArtitstTitle = styled.div`
  border: 1px solid black;
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

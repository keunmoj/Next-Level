import styled from "styled-components";

const StyledEntertainment = styled.div`
  margin: 0px 10px;
`;

const StyledEntertainmentNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0px 15px;
  border-bottom: 3px solid black;
  padding: 25px 0px 5px;
`;

const StyledEntertainmentBackButton = styled.img.attrs({
  src: "/sing/back.png",
  alt: "뒤로",
})`
  width: 30px;
`;

const StyledEntertainmentTitle = styled.h1`
  font-family: ${(props) => props.theme.fonts.boldfont};
`;

const StyledEntertainmentList = styled.div`
  margin-bottom: 5px;
  padding-bottom: 5px;
  display: flex;
  overflow-x: scroll;
  gap: 10px;
  border-bottom: 1px solid gray;
`;

const StyledEntertainmentImage = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "isSelected",
})<{ isSelected: boolean; cover: string }>`
  margin: 10px 5px 5px;
  position: relative;
  width: 75px;
  height: 75px;
  border-radius: 50%;
  &::before {
    content: "";
    position: absolute;
    top: -5px;
    bottom: -5px;
    left: -5px;
    right: -5px;
    background: ${(props) =>
      props.isSelected
        ? `linear-gradient(180deg, #F7BBB2 0%, rgba(247, 187, 178, 0.49) 22.92%, rgba(247, 187, 178, 0.00) 50.52%, rgba(247, 187, 178, 0.35) 75%, #F7BBB2 99.99%, rgba(247, 187, 178, 0.00) 100%)`
        : "#D9D9D9"};
    border-radius: 50%;
    z-index: 1;
  }
  img {
    position: relative;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
    z-index: 2;
  }
`;

const StyledEntertainmentName = styled.div`
  margin: 3px 0px 1px;
  text-align: center;
  font-size: ${(props) => props.theme.fontsize.small};
  font-family: ${(props) => props.theme.fonts.semiboldfont};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 20vw;
`;

const StyledEntertainmentItemContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledEntertainmentItemBox = styled.div`
  width: 100vw;
  height: 73vh;
  overflow: scroll;
`;

const StyledEntertainmentItem = styled.div`
  text-align: center;
  width: 100%;
`;

const StyledEntertainmentItemImage = styled.img`
  width: 100vw;
  height: auto;
`;

const StyledEntertainmentItemContnentContianer = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 4%;
  height: 5vh;
  padding: 4% 1%;
`;
const StyledEntertainmentItemContnentImg = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
`;
const StyledEntertainmentItemTitle = styled.div`
  margin: 5px 0px 15px;
  font-size: ${(props) => props.theme.fontsize.large};
  font-family: ${(props) => props.theme.fonts.boldfont};
  word-wrap: break-word;
  text-align: left;
`;

export {
  StyledEntertainment,
  StyledEntertainmentNav,
  StyledEntertainmentBackButton,
  StyledEntertainmentTitle,
  StyledEntertainmentList,
  StyledEntertainmentImage,
  StyledEntertainmentName,
  StyledEntertainmentItemContainer,
  StyledEntertainmentItemBox,
  StyledEntertainmentItem,
  StyledEntertainmentItemImage,
  StyledEntertainmentItemContnentContianer,
  StyledEntertainmentItemContnentImg,
  StyledEntertainmentItemTitle,
};

import styled from "styled-components";

const StyledChatbotModalPage = styled.div`
  width: 100%;
  height: 100%;
  background-color: #00000066;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
`;

const StyledChatbotModalWindow = styled.div`
  background-color: white;
  border-radius: 5px;
  width: 70%;
  /* height: 30%; */
  /* height: 30%; */
  /* padding: 1rem; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  /* align-items: center; */
  position: relative;
`;

const StyledChatbotModalTop = styled.div`
  border: 1px solid red;
`;

const StyledChatbotModalbody = styled.div`
  /* border: 1px solid red; */
  margin: 5vh 2vh 3vh 2vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* height: 15vh; */
`;

const StyledChatbotModalImage = styled.img`
  /* border: 1px solid blue; */
  height: 7vh;
  width: 15vw;
`;

const StyledChatbotModalTitle = styled.div`
  /* border: 1px solid black; */
  font-size: ${(props) => props.theme.fontsize.large};
  font-family: ${(props) => props.theme.fonts.semiboldfont};
  /* text-align: center; */
  margin-bottom: 1rem;
`;

const StyledChatbotModalContent = styled.div`
  /* border: 1px solid blue; */
  font-family: ${(props) => props.theme.fonts.regularfont};
  text-align: center;
`;

const StyledChatbotModalBottom = styled.div`
  /* border: 1px solid pink; */
  display: flex;
  justify-content: center;
  margin-bottom: 2vh;
`;

const StyledChatbotModalInputContainer = styled.div`
  border: 1px solid black;
  border-radius: 5px;
  height: 30px;
  margin-bottom: 1rem;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const StyledChatbotModalImg = styled.img`
  width: 25px;
  height: 25px;
`;

const StyledChatbotModalInput = styled.input`
  border: none;
  outline: none;
  height: 25px;
`;

const StyledChatbotModalButton = styled.div`
  border: 1px solid red;
`;

const StyledChatbotModalX = styled.div`
  font-size: 20px;
  position: absolute;
  top: 5%;
  right: 8%;
`;

export {
  StyledChatbotModalPage,
  StyledChatbotModalWindow,
  StyledChatbotModalbody,
  StyledChatbotModalImage,
  StyledChatbotModalTitle,
  StyledChatbotModalContent,
  StyledChatbotModalInputContainer,
  StyledChatbotModalInput,
  StyledChatbotModalImg,
  StyledChatbotModalX,
  StyledChatbotModalTop,
  StyledChatbotModalBottom,
  StyledChatbotModalButton,
};

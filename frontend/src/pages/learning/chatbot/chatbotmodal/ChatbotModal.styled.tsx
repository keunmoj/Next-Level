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
  border-radius: 20px;
  width: 70%;
  /* height: 30%; */
  /* padding: 1rem; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  align-items: center;
  position: relative;
`;

const StyledChatbotModalbody = styled.div`
  /* border: 1px solid red; */
  margin: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* height: 15vh; */
`;

const StyledChatbotModalImage = styled.img`
  /* border: 1px solid blue; */
  height: 10vh;
  width: 25vw;
`;

const StyledChatbotModalTitle = styled.div`
  /* border: 1px solid black; */
  font-size: 20px;
  font-family: ${(props) => props.theme.fonts.semiboldfont};
  text-align: center;
  margin-bottom: 1rem;
`;

const StyledChatbotModalContent = styled.div`
  /* border: 1px solid blue; */
  font-size: 18px;
  font-family: ${(props) => props.theme.fonts.regularfont};
  text-align: center;
`;

const StyledChatbotModalInputContainer = styled.div`
  border: 1px solid black;
  border-radius: 20px;
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

const StyledChatbotModalX = styled.div`
  font-size: 30px;
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
};

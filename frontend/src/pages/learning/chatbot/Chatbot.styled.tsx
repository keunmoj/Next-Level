import styled from "styled-components";

const StyledDirect = styled.div`
  font-family: ${(props) => props.theme.fonts.semiboldfont};
  font-size: ${(props) => props.theme.fontsize.regular};
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
`;

const StyledDirectTop = styled.div`
  /* border: 1px solid red; */
  height: 6.5vh;
  display: flex;
  align-items: center;
  padding: 0.5rem;
`;

const StyledDirectBack = styled.div`
  /* border: 1px solid blue; */
  display: flex;
  align-items: center;
  font-size: 30px;
`;

const StyledDirectAiImg = styled.img`
  height: 5vh;
  display: flex;
  align-items: center;
`;

const StyledDirectChat = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  height: 100%;
  padding: 2rem 1rem 0.5rem 1rem;
`;

const StyledDirectAiChatContainer = styled.div`
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
`;

const StyledDirectAiChatImg = styled.img`
  height: 5vh;
  display: flex;
  align-items: center;
  border: 2px solid black;
  border-radius: 100%;
  background-color: white;
  margin-right: 1rem;
`;

const StyledDirectAiChat = styled.div`
  border: 2px solid black;
  border-radius: 10px;
  padding: 10px;
  text-align: left;
  max-width: 50vw;
  background-color: #ffffff;
`;

const StyledDirectUserChatContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
`;

const StyledDirectUserChat = styled.div`
  background-color: ${(props) => props.theme.colors.main};
  border: 2px solid black;
  border-radius: 10px;
  padding: 10px;
  text-align: left;
  max-width: 50vw;
  margin-right: 1rem;
  color: ${(props) => props.theme.colors.black};
`;

const StyledDireactBottom = styled.div`
  height: 10vh;
  background-color: ${(props) => props.theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledDirectInputContainer = styled.div`
  border: 1px solid black;
  border-radius: 30px;
  width: 90%;
  height: 4vh;
  display: flex;
  padding-right: 1rem;
  align-items: center;
  background-color: #ffffff;
`;

const StyledDirectInput = styled.input`
  border: none;
  margin: 0.1rem 0rem 0.1rem 1rem;
  width: 100%;
  height: 85%;
`;

const StyledDirectButton = styled.img`
  height: 3vh;
  background-color: #ffffff;
`;

export {
  StyledDirect,
  StyledDirectTop,
  StyledDirectBack,
  StyledDirectAiImg,
  StyledDirectChat,
  StyledDirectAiChatContainer,
  StyledDirectAiChatImg,
  StyledDirectAiChat,
  StyledDirectUserChatContainer,
  StyledDirectUserChat,
  StyledDirectInputContainer,
  StyledDirectInput,
  StyledDireactBottom,
  StyledDirectButton,
};

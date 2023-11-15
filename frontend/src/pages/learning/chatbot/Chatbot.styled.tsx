import styled from "styled-components";

const StyledDirect = styled.div`
  font-family: ${(props) => props.theme.fonts.semiboldfont};
  font-size: ${(props) => props.theme.fontsize.regular};
  display: flex;
  flex-direction: column;
  height: 100vh;
  min-height: ${window.innerHeight}px;
  overflow: scroll;
  justify-content: space-between;
`;

const StyledDirectTop = styled.div`
  height: 6vh;
  display: flex;
  align-items: center;
  padding: 0.5rem;
  background-color: ${(props) => props.theme.colors.main};
`;

const StyledDirectBack = styled.img`
  display: flex;
  align-items: center;
  width: 30px;
  height: 30px;
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
  overflow: scroll;
`;

const StyledDirectAiChatContainer = styled.div`
  display: flex;
  margin-bottom: 1rem;
  align-items: flex-start;
`;

const StyledDirectAiChatImg = styled.img`
  height: 45px;
  display: flex;
  align-items: center;
  border: 2px solid black;
  border-radius: 100%;
  background-color: white;
  margin-right: 1rem;
  margin-top: 0.7rem;
`;

const StyledDirectAiChat = styled.div`
  border: 2px solid black;
  border-radius: 5px;
  padding: 10px;
  text-align: left;
  max-width: 200px;
  background-color: #ffffff;
`;

const StyledDirectUserChatContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  margin-bottom: 1rem;
`;

const StyledDirectUserChat = styled.div`
  background-color: ${(props) => props.theme.colors.main};
  border: 2px solid black;
  border-radius: 5px;
  padding: 10px;
  text-align: left;
  max-width: 200px;
  margin-right: 1rem;
  color: ${(props) => props.theme.colors.black};
`;

const StyledDirectBottom = styled.div`
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 100%;
  height: 90px;
  background-color: ${(props) => props.theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 10px;
`;

const StyledDirectInputContainer = styled.div`
  border: 1px solid black;
  border-radius: 30px;
  width: 90%;
  height: 45px;
  display: flex;
  padding-right: 1rem;
  align-items: center;
  background-color: #ffffff;
`;

const StyledDirectInput = styled.input`
  border: none;
  outline: none;
  margin: 0.1rem 0rem 0.1rem 1rem;
  width: 100%;
  height: 85%;
  font-size: ${(props) => props.theme.fontsize.semilarge};
`;

const StyledDirectButton = styled.img`
  height: 30px;
  background-color: #ffffff;
  margin-right: 5px;
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
  StyledDirectBottom,
  StyledDirectButton,
};

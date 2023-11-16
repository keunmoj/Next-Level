import styled from "styled-components";

const StyledLifeChat = styled.div`
  font-family: ${(props) => props.theme.fonts.semiboldfont};
  font-size: ${(props) => props.theme.fontsize.regular};
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
`;

const StyledLifeChatTop = styled.div`
  background-color: ${(props) => props.theme.colors.main};
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0.5rem;
`;

const StyledLifeChatBack = styled.img`
  /* border: 1px solid blue; */
  display: flex;
  align-items: center;
  width: 30px;
  height: 30px;
`;

const StyledLifeChatAiImg = styled.img`
  height: 45px;
  display: flex;
  align-items: center;
`;

const StyledLifeChatChat = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  height: 100%;
  overflow: scroll;
  padding: 2rem 1rem 0.5rem 1rem;
`;

const StyledLifeChatAiChatContainer = styled.div`
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
`;

const StyledLifeChatAiChatImg = styled.img`
  height: 45px;
  display: flex;
  align-items: center;
  border: 2px solid black;
  border-radius: 100%;
  background-color: white;
  margin-right: 1rem;
`;

const StyledLifeChatAiChat = styled.div`
  border: 2px solid black;
  border-radius: 5px;
  padding: 10px;
  text-align: left;
  max-width: 200px;
  background-color: #ffffff;
`;

const StyledLifeChatUserChatContainer = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 1rem;
  flex-direction: row-reverse;
`;

const StyledLifeChatUserChat = styled.div`
  background-color: ${(props) => props.theme.colors.main};
  border: 2px solid black;
  border-radius: 5px;
  padding: 10px 10px 3px 10px;
  text-align: left;
  max-width: 50vw;
  margin-right: 1rem;
  color: black;
`;

const StyledDireactBottom = styled.div`
  height: 65px;
  background-color: ${(props) => props.theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledLifeChatInputContainer = styled.div`
  border: 2px solid black;
  border-radius: 5px;
  width: 90%;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  margin-bottom: 10px;
`;

const StyledLifeChatButton = styled.div`
  font-family: ${(props) => props.theme.fonts.boldfont};
  font-size: ${(props) => props.theme.fontsize.semilarge};
  height: 30px;
  background-color: #ffffff;
  margin-right: 5px;
  display: flex;
  align-items: center;
`;

export {
  StyledLifeChat,
  StyledLifeChatTop,
  StyledLifeChatBack,
  StyledLifeChatAiImg,
  StyledLifeChatChat,
  StyledLifeChatAiChatContainer,
  StyledLifeChatAiChatImg,
  StyledLifeChatAiChat,
  StyledLifeChatUserChatContainer,
  StyledLifeChatUserChat,
  StyledLifeChatInputContainer,
  StyledDireactBottom,
  StyledLifeChatButton,
};

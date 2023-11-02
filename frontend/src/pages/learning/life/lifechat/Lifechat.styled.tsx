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

const StyledLifeChatBack = styled.div`
  /* border: 1px solid blue; */
  display: flex;
  align-items: center;
  font-size: 30px;
`;

const StyledLifeChatAiImg = styled.img`
  height: 45px;
  display: flex;
  align-items: center;
`;

const StyledLifeChatChat = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  height: 100%;
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
  border-radius: 10px;
  padding: 10px;
  text-align: left;
  max-width: 200px;
  background-color: #ffffff;
`;

const StyledLifeChatUserChatContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
`;

const StyledLifeChatUserChat = styled.div`
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
  height: 90px;
  background-color: ${(props) => props.theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledLifeChatInputContainer = styled.div`
  border: 1px solid black;
  border-radius: 30px;
  width: 90%;
  height: 45px;
  display: flex;
  padding-right: 1rem;
  align-items: center;
  background-color: #ffffff;
`;

const StyledLifeChatInput = styled.input`
  border: none;
  margin: 0.1rem 0rem 0.1rem 1rem;
  width: 100%;
  height: 85%;
  font-size: ${(props) => props.theme.fontsize.semilarge};
`;

const StyledLifeChatButton = styled.img`
  height: 30px;
  background-color: #ffffff;
  margin-right: 5px;
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
  StyledLifeChatInput,
  StyledDireactBottom,
  StyledLifeChatButton,
};

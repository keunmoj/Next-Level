import styled from "styled-components";

const StyledDetailResultChat = styled.div`
  font-family: ${(props) => props.theme.fonts.semiboldfont};
  font-size: ${(props) => props.theme.fontsize.regular};
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
`;

const StyledDetailResultChatTop = styled.div`
  background-color: ${(props) => props.theme.colors.main};
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0.5rem;
`;

const StyledDetailResultChatBack = styled.div`
  /* border: 1px solid blue; */
  display: flex;
  align-items: center;
  font-size: 30px;
`;

const StyledDetailResultDate = styled.div`
  text-align: center;
  font-size: ${(props) => props.theme.fontsize.xlarge};
  margin-bottom: 1rem;
`;

const StyledDetailResultChatAiImg = styled.img`
  height: 45px;
  display: flex;
  align-items: center;
`;

const StyledDetailResultChatChat = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  height: 100%;
  padding: 2rem 1rem 0.5rem 1rem;
  overflow: scroll;
`;

const StyledDetailResultChatAiChatContainer = styled.div`
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
`;

const StyledDetailResultChatAiChatImg = styled.img`
  height: 45px;
  display: flex;
  align-items: center;
  border: 2px solid black;
  border-radius: 100%;
  background-color: white;
  margin-right: 1rem;
`;

const StyledDetailResultChatAiChat = styled.div`
  border: 2px solid black;
  border-radius: 10px;
  padding: 10px;
  text-align: left;
  max-width: 200px;
  background-color: #ffffff;
`;

const StyledDetailResultChatUserChatContainer = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 1rem;
  flex-direction: row-reverse;
`;

const StyledDetailResultChatUserChat = styled.div`
  background-color: ${(props) => props.theme.colors.main};
  border: 2px solid black;
  border-radius: 10px;
  padding: 10px;
  text-align: left;
  max-width: 200px;
  margin-right: 1rem;
  color: ${(props) => props.theme.colors.black};
`;

const StyledDetailResultChatScore = styled.div`
  /* border: 1px solid red; */
  margin-right: 1rem;
  display: flex;
  align-items: center;
  font-size: ${(props) => props.theme.fontsize.semilarge};
`;

const StyledDetailResultScore = styled.div`
  padding-left: 1rem;
  display: flex;
  align-items: center;
  font-size: ${(props) => props.theme.fontsize.xlarge};
  background-color: ${(props) => props.theme.colors.white};
`;

const StyledDireactBottom = styled.div`
  height: 90px;
  background-color: ${(props) => props.theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledDetailResultChatInputContainer = styled.div`
  border: 1px solid black;
  border-radius: 30px;
  width: 90%;
  height: 45px;
  background-color: white;
  display: flex;
  padding-right: 1rem;
  align-items: center;
`;

const StyledDetailResultChatInput = styled.input`
  border: none;
  margin: 0.1rem 0rem 0.1rem 1rem;
  width: 100%;
  height: 85%;
  font-size: ${(props) => props.theme.fontsize.semilarge};
`;

const StyledDetailResultChatButton = styled.img`
  height: 3vh;
  background-color: #ffffff;
  margin-right: 5px;
`;

export {
  StyledDetailResultChat,
  StyledDetailResultChatTop,
  StyledDetailResultChatBack,
  StyledDetailResultChatAiImg,
  StyledDetailResultChatChat,
  StyledDetailResultChatAiChatContainer,
  StyledDetailResultChatAiChatImg,
  StyledDetailResultChatAiChat,
  StyledDetailResultChatUserChatContainer,
  StyledDetailResultChatUserChat,
  StyledDetailResultChatInputContainer,
  StyledDetailResultChatInput,
  StyledDireactBottom,
  StyledDetailResultChatButton,
  StyledDetailResultChatScore,
  StyledDetailResultScore,
  StyledDetailResultDate,
};

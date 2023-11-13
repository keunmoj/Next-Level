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

const StyledDetailResultDateContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledDetailResultDate = styled.div`
  text-align: center;
  font-size: ${(props) => props.theme.fontsize.large};
  margin-bottom: 1rem;
  border: 2px solid ${(props) => props.theme.colors.black};
  color: ${(props) => props.theme.colors.black};
  border-radius: 30px;
  width: fit-content;
  padding: 5px 40px 5px 40px;
`;

const StyledDetailResultChatAiImg = styled.img`
  height: 45px;
  display: flex;
  align-items: center;
`;

const StyledDetailResultChatChat = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  height: 100%;
  padding: 1rem 1rem 0.5rem 1rem;
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
  margin-right: 2vw;
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
  height: 65px;
  background-color: ${(props) => props.theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledDetailResultChatInputContainer = styled.div`
  border: 2px solid black;
  border-radius: 5px;
  width: 90%;
  height: 45px;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  background-color: #ffffff;
  margin-bottom: 10px;
`;

const StyledDetailResultChatInput = styled.input`
  border: none;
  margin: 0.1rem 0rem 0.1rem 1rem;
  width: 100%;
  height: 85%;
  font-size: ${(props) => props.theme.fontsize.semilarge};
`;

const StyledDetailResultChatButton = styled.div`
  font-family: ${(props) => props.theme.fonts.boldfont};
  font-size: ${(props) => props.theme.fontsize.semilarge};
  height: 30px;
  background-color: #ffffff;
  margin-right: 5px;
  display: flex;
  align-items: center;
  margin-left: 20px;
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
  StyledDetailResultDateContainer,
};

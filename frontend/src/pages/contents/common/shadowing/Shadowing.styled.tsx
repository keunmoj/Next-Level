import styled from "styled-components";

const AudioWrapper = styled.div`
  width: 300px;
  background-color: #f0f0f0;
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 5px;
`;

const AudioPlayer = styled.audio`
  width: 100%;
`;

const Test = styled.div`
  font-family: ${(props) => props.theme.fonts.boldfont};
  font-size: 50px;
`;

export { AudioWrapper, AudioPlayer, Test };

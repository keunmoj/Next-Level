import { useParams } from "react-router-dom";
import Youtube from "./youtube";
import {
  StyledContentPage,
  StyledButtonContainer,
  StyledButton,
} from "./Shadowing.styled";
import { useEffect } from "react";
import { useDramaResultHook } from "@/hooks/drama/useDramaResultHook";

const Shadowing = () => {
  const { id } = useParams();
  const { postDramaResult } = useDramaResultHook();
  useEffect(() => {
    console.log("입장");
  }, []);
  return (
    <StyledContentPage>
      <Youtube id={id} />
      <StyledButtonContainer>
        <StyledButton use="close" onClick={postDramaResult}>
          나가기
        </StyledButton>
        <StyledButton use="submit" onClick={postDramaResult}>
          학습하기
        </StyledButton>
      </StyledButtonContainer>
    </StyledContentPage>
  );
};

export default Shadowing;

import { useParams } from "react-router-dom";
import Youtube from "./youtube";
import { StyledContentPage } from "./Shadowing.styled";

const Shadowing = () => {
  const { id } = useParams();
  return (
    <StyledContentPage>
      <Youtube id={id} />
    </StyledContentPage>
  );
};

export default Shadowing;

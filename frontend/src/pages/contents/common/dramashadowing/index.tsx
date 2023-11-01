import { useParams } from "react-router-dom";
import Youtube from "./youtube";

const Shadowing = () => {
  const { id } = useParams();
  return (
    <div>
      <Youtube />
    </div>
  );
};

export default Shadowing;

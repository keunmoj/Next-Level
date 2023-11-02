import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { StyledButton } from "./DramaList.styled";
import { useDramaClipListHook } from "@/hooks/drama/useDramaClipListHook";

const DramaList = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { clipList, getDramaClipList } = useDramaClipListHook();
  useEffect(() => {
    getDramaClipList(id);
  }, []);
  return (
    <div>
      {clipList?.map((clip: any) => {
        return (
          <StyledButton
            key={clip.id}
            onClick={() => navigate(`/drama/shadowing/${clip.id}`)}
          >
            {clip.id}
          </StyledButton>
        );
      })}
    </div>
  );
};

export default DramaList;

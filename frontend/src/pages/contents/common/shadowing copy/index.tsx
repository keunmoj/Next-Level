import { useLocation, useParams } from "react-router-dom";
import Youtube from "./youtube";
import { useEntertainmentGet } from "@/hooks/entertainment/useEntertainmentGet";
import { useEffect, useState } from "react";

const Shadowing = () => {
  const pathname = useLocation().pathname;
  const { id } = useParams();
  const { entertainment, getEntertainment } = useEntertainmentGet();
  const [videoInfo, setVideoInfo] = useState<any>();
  useEffect(() => {
    if (pathname.includes("entertainment")) {
      getEntertainment(id);
    } else if (pathname.includes("entertainment")) {
      console.log(123);
    }
  }, []);
  useEffect(() => {
    if (pathname.includes("entertainment")) {
      setVideoInfo(entertainment);
    } else if (pathname.includes("entertainment")) {
      console.log(123);
    }
  }, [entertainment]);

  useEffect(() => {
    console.log(videoInfo);
  }, [videoInfo]);
  return (
    <div>
      <Youtube />
    </div>
  );
};

export default Shadowing;

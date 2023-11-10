import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  StyledLanding,
  StyledLandingBox,
  StyledLandingIcon,
} from "./Landing.styled";
import { useAutoLoginHook } from "@/hooks/sign/useAutoLoginHook";

function Landing() {
  const { autoLogin } = useAutoLoginHook();
  const navigate = useNavigate();
  const [isRendered, setIsRendered] = useState(false);

  useEffect(() => {
    if (isRendered) {
      const timer = setTimeout(() => {
        console.log(autoLogin);
        if (autoLogin) {
          navigate("/contents");
        } else {
          navigate("/login");
        }
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [navigate, isRendered, autoLogin]);

  useEffect(() => {
    setIsRendered(true);
  }, []);

  return (
    <StyledLanding>
      <StyledLandingBox>
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{
            duration: 2.5,
            times: [0, 0.5, 1],
            ease: "easeInOut",
          }}
        >
          <StyledLandingIcon src="/logo.svg" alt="" />
        </motion.div>
      </StyledLandingBox>
    </StyledLanding>
  );
}

export default Landing;

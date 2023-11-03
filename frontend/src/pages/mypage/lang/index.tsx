import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, Variants } from "framer-motion";
import {
  StyledLang,
  StyledLangButton,
  StyledLangDropdown,
  StyledLangIcon,
  StyledLangTitle,
  StyledMotionNav,
  StyledMotionButton,
  StyledMotiondiv,
  StyledMotionUl,
  StyledMotionli,
} from "./Lang.styled";
const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
};

const Lang = () => {
  const { t, i18n } = useTranslation();

  // const changeLanguage = (e: any) => {
  //   i18n.changeLanguage(`${e.target.id}`);
  // };

  // const [openLangList, setOpenLangList] = useState(false);
  // const openList = () => {
  //   setOpenLangList(!openLangList);
  // };
  const [isOpen, setIsOpen] = useState(false);
  return (
    <StyledMotionNav initial={false} animate={isOpen ? "open" : "closed"}>
      <StyledMotionButton
        whileTap={{ scale: 0.97 }}
        onClick={() => setIsOpen(!isOpen)}
      >
        Menu
        <motion.div
          variants={{
            open: { rotate: 180 },
            closed: { rotate: 0 },
          }}
          transition={{ duration: 0.2 }}
          style={{ originY: 0.55 }}
        >
          <svg width="15" height="15" viewBox="0 0 20 20">
            <path d="M0 7 L 20 7 L 10 16" />
          </svg>
        </motion.div>
      </StyledMotionButton>
      <StyledMotionUl
        variants={{
          open: {
            clipPath: "inset(0% 0% 0% 0% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.7,
              delayChildren: 0.3,
              staggerChildren: 0.05,
            },
          },
          closed: {
            clipPath: "inset(10% 50% 90% 50% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.3,
            },
          },
        }}
        style={{ pointerEvents: isOpen ? "auto" : "none" }}
      >
        <StyledMotionli variants={itemVariants}>Item 1 </StyledMotionli>
        <StyledMotionli variants={itemVariants}>Item 2 </StyledMotionli>
        <StyledMotionli variants={itemVariants}>Item 3 </StyledMotionli>
        <StyledMotionli variants={itemVariants}>Item 4 </StyledMotionli>
        <StyledMotionli variants={itemVariants}>Item 5 </StyledMotionli>
      </StyledMotionUl>
    </StyledMotionNav>
    // <StyledLang onClick={openList}>
    //   <StyledLangTitle>
    //     <StyledLangIcon src="/mypage/lang.png" alt="langicon" />
    //     {t("current")}
    //   </StyledLangTitle>
    //   {openLangList && (
    //     <StyledLangDropdown>
    //       <StyledLangButton onClick={changeLanguage} id="ko-KR">
    //         한국어
    //       </StyledLangButton>
    //       <StyledLangButton onClick={changeLanguage} id="en-US">
    //         English
    //       </StyledLangButton>
    //       <StyledLangButton onClick={changeLanguage} id="zh-CN">
    //         中國語
    //       </StyledLangButton>
    //       <StyledLangButton onClick={changeLanguage} id="id-ID">
    //         bahasa Indonesia
    //       </StyledLangButton>
    //       <StyledLangButton onClick={changeLanguage} id="ja-JP">
    //         日本語
    //       </StyledLangButton>
    //       <StyledLangButton onClick={changeLanguage} id="th-TH">
    //         แบบไทย
    //       </StyledLangButton>
    //       <StyledLangButton onClick={changeLanguage} id="vi-VN">
    //         Tiếng Việt
    //       </StyledLangButton>
    //     </StyledLangDropdown>
    //   )}
    // </StyledLang>
  );
};

export default Lang;

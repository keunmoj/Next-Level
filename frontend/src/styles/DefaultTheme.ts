import { DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
  colors: {
    main: "#4A90E2",
    light: "#9ECDF2",
    dark: "#2D51A0",
    white: "#F1F7FD",
    black: "#1D2C4E",
    lightgray: "#323248",
    gray: "rgba(0, 0, 0, 0.50)",
    night: "#000020",
    menu: "#E0ECED",
  },
  fonts: {
    lightfont: "lightfont",
    regularfont: "regularfont",
    semiboldfont: "semiboldfont",
    boldfont: "boldfont",
    handfont: "handfont",
  },
  fontsize: {
    xsmall: "10px",
    small: "12px",
    regular: "14px", // 기본 본문 폰트 (음악 타이틀 등 포함)
    semilarge: "16px",
    large: "18px", // 탑탭바
    xlarge: "22px",
    xxlarge: "32px", // ### 크기
  },
};
export default theme;

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "./en/translation.json";
import translationKO from "./ko/translation.json";
import translationCN from "./cn/translation.json";
import translationTH from "./th/translation.json";
import translationID from "./id/translation.json";
import translationVI from "./vi/translation.json";
import translationJP from "./jp/translation.json";

const resources = {
  "en-US": {
    translation: translationEN,
  },
  "ko-KR": {
    translation: translationKO,
  },
};

i18n.use(initReactI18next).init({
  resources: resources,
  lng: "ko", // 기본설정언어
  fallbackLng: {
    "en-US": ["en-US"],
    default: ["ko-KR"],
  }, // 번역파일에서 찾을 수 없는 경우 기본 언어
  debug: true, //console
  defaultNS: "translation",
  ns: "translations",
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
});

export default i18n;

import React from "react";
import { useTranslation } from "react-i18next";

const Test = () => {
  const { t } = useTranslation();

  return <div>{t("test")}</div>;
};

export default Test;

import React from "react";
import s from "./BtnMain.module.scss";
const BtnMain = () => {
  return (
    <a href="/" className={`${s.root} ${s.p_small}`}>
      Найти тур
    </a>
  );
};

export default BtnMain;

import React from "react";
import s from "./SectionTitle.module.scss";
const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className={s.root}>
      <h2 className={s.stories__title}>{title}</h2>
      <p className={s.stories__subtitle}>{subtitle}</p>
    </div>
  );
};

export default SectionTitle;

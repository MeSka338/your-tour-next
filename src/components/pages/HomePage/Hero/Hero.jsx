import React from "react";
import s from "./Hero.module.scss";
import Header from "@/src/components/common/Header";
import BtnMain from "@/src/components/common/BtnMain";
const Hero = () => {
  return (
    <div className={s.root}>
      <Header />
      <div className={s.hero}>
        <h1 className={s.hero__title}>Идеальные путешествия существуют</h1>
        <p className={s.hero__subtitle}>
          Идейные соображения высшего порядка, a также рамки и место обучения
          кадров
        </p>
        <BtnMain />
      </div>
    </div>
  );
};

export default Hero;

import React from "react";
import Arr from "@/utils/array";
import s from "./TravelPhoto.module.scss";
import SectionTitle from "@/src/components/common/SectionTitle";
const TravelPhoto = () => {
  return (
    <section className={s.root}>
      <SectionTitle
        title={"Фотографии путешествий"}
        subtitle={
          "Идейные соображения высшего порядка, а также рамки и место обучения кадров"
        }
      />
      <div className={s.gallery}>
        {Arr(4, 1).map((item, key) => {
          return (
            <img
              src={`/travel-photo/travel photo-${item}.jpg`}
              alt={item}
              key={key}
              className={s.photo}
            />
          );
        })}
      </div>
      <div className={`${s.gallery} ${s.grid_big} `}>
        {Arr(5, 5).map((item, key) => {
          return (
            <img
              src={`/travel-photo/travel photo-${item}.jpg`}
              alt={item}
              key={key}
              className={s.photo}
            />
          );
        })}
      </div>
      <div className={s.gallery}>
        {Arr(4, 9).map((item, key) => {
          return (
            <img
              src={`/travel-photo/travel photo-${item}.jpg`}
              alt={item}
              key={key}
              className={s.photo}
            />
          );
        })}
      </div>
    </section>
  );
};

export default TravelPhoto;

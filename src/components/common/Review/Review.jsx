import React from "react";
import s from "./Review.module.scss";

const Review = ({ text, name, tourType, profileImg }) => {
  return (
    <div className={s.review}>
      <p className={`${s.review__textblock} `}>{text}</p>

      <div className={s.profile}>
        <div className={s.profile__title}>
          <h3 className={`${s.profile__name}`}>{name}</h3>
          <div className={`${s.profile__tour}`}>Тур: {tourType}</div>
        </div>
        <img src={profileImg} alt={name} className={s.profile__img} />
      </div>
    </div>
  );
};

export default Review;

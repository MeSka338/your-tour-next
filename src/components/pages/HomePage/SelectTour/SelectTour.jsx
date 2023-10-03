import React, { useRef, useEffect, useState } from "react";
import s from "./SelectTour.module.scss";
import Arr from "@/utils/array";
import Card from "@/src/components/common/Card";

const menuArr = [
  { title: "Популярные", isSelect: true },
  { title: "Авторские", isSelect: false },
  { title: "Походы", isSelect: false },
  { title: "Сплавы", isSelect: false },
  { title: "Велопрогулки", isSelect: false },
];

const SelectTour = () => {
  return (
    <section className={s.root}>
      <h2 className={s.select_tour__title}>Выбери свой тур</h2>
      <ul className={s.select_tour__menu}>
        {menuArr.map((item, key) => {
          return (
            <li className={s.select_tour_menu__item} key={key}>
              <a
                href={"/"}
                className={
                  item.isSelect
                    ? `${s.select_tour_menu__link} ${s.active}`
                    : `${s.select_tour_menu__link}`
                }
              >
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
      <div className={s.select_tour__options}>
        {Arr(6, 1).map((item, key) => {
          return (
            <Card
              key={key}
              img={`select-tour/cardTourPhoto-${item}.jpg`}
              title={"Путешествие в горах"}
              subtitle={"от 80 000 руб"}
            />
          );
        })}
      </div>
    </section>
  );
};

export default SelectTour;

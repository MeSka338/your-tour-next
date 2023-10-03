import React, { useState, useEffect } from "react";
import s from "./HomePage.module.scss";
import Hero from "./Hero";
import Header from "../../common/Header";
import Footer from "../../common/Footer";
import SelectTour from "./SelectTour/SelectTour";
import TourForm from "./TourForm";
import Reviews from "./Reviews/Reviews";
import TravelPhoto from "./TravelPhoto";
import Stories from "./Stories";

const HomePage = () => {
  return (
    <div className={s.root}>
      <Hero />
      <SelectTour />
      <TourForm />
      <Reviews />
      <TravelPhoto />
      <Stories />

      <Footer />
    </div>
  );
};

export default HomePage;

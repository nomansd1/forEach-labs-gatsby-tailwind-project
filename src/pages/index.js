import React, { useState } from "react";

import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import "../styles/index.css";

import Header from "../components/Header";
import Footer from "../components/Footer";
import {Banner, Services, Work, BottomHero, Portfolio, Reviews, Contact} from '../components/home/index'

function Index() {
  return (
      <div>
        <Header />
        <Banner />
        <Services />
        <Work />
        <BottomHero />
        <Portfolio />
        <Reviews />
        <Contact />
        <Footer />
      </div>
  );
}

export default Index;

import React, { useState } from "react";

import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import "../styles/index.css";

import Header from "../components/Header";
import Banner from "../components/home/Banner";
import Services from "../components/home/Services";
import Work from "../components/home/Work";
import BottomHero from "../components/home/BottomHero";
import Portfolio from "../components/home/Portfolio";
import Reviews from "../components/home/Reviews";
import Contact from "../components/home/Contact";
import Footer from "../components/Footer";

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

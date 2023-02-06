import React from 'react'

import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import "../styles/index.css";

import Header from '../components/Header'
import Footer from '../components/Footer'
import Banner from '../components/help/Banner'
import WhyUs from '../components/services/WhyUs'
import WorkGrid from '../components/home/WorkGrid'
import {Contact} from '../components/home/index'
import WorkCase from '../components/help/WorkCase'
import Stories from '../components/help/Stories';

function who() {
  return (
    <div>
      <Header/>
      <Banner/>
      <WhyUs/>
      <WorkGrid/>
      <WorkGrid order="order-last" />
      <WorkCase/>
      <Stories/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default who
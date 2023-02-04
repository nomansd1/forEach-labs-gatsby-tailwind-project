import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Banner from '../components/help/Banner'
import WhyUs from '../components/services/WhyUs'
import {Reviews, Contact} from '../components/home/index'
import Clients from '../components/help/Clients'

function help() {
  return (
    <div>
      <Header/>
      <Banner/>
      <WhyUs/>
      <Reviews/>
      <Clients/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default help

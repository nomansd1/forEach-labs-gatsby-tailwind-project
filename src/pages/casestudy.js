import React from 'react'
import '../styles/index.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import {Reviews, Contact} from '../components/home/index'
import Stories from '../components/help/Stories'
import Banner from '../components/cases/Banner'
import Stepper from '../components/cases/Stepper'


function casestudy() {
  return (
    <div>
      <Header/>
      <Banner/>
      <Stepper/>
      <Reviews/>
      <Stories/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default casestudy

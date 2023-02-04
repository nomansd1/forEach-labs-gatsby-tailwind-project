import React from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer'
import {Contact} from '../components/home/index'
import WorkGrid from '../components/home/WorkGrid'
import Hero from '../components/story/Hero'


function story() {
  return (
    <div>
      <Header/>
      <Hero/>
      <WorkGrid/>
      <WorkGrid order="order-last"/>
      <WorkGrid/>
      <WorkGrid order="order-last"/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default story

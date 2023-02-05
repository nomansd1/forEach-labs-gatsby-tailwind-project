import React from 'react'
import '../styles/index.css'

import Header from '../components/Header'
import Hero from '../components/services/Hero'
import WorkGrid from '../components/home/WorkGrid'
import Help from '../components/services/Help'
import {Portfolio, Contact} from '../components/home/index'
import Footer from '../components/Footer'
import WhyUs from '../components/services/WhyUs'

function services() {
  return (
    <div>
      <Header />
      <Hero/>
      <WorkGrid 
        order="order-last"
        // darkmodeToggler={darkmodeToggler}
      />
      <WorkGrid />
      <Help />
      <WhyUs/>
      <Portfolio />
      <Contact/>
      <Footer/>
    </div>
  )
}

export default services

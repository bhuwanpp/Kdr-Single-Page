import React from 'react'
import Main from '../components/Main'
import Footer from '../components/Footer'

import BackToTop from '../components/BackToTop'
import About from './About'
import Career from './Career'
import OurTeam from './OurTeam'
import QuickLinks from './QuickLinks'
import Services from './Services'
import ContactUs from './Contact'

export default function Home() {
  return (
    <>
    <div className="main-home pt-20 grid" id='home'>
        <Main/>
         <About/>
        <Career/>
        <OurTeam/>
        <QuickLinks/>
        <Services/>
        <ContactUs/>
        <Footer /> 
       
    </div>
    <BackToTop/>
       
    </>
  )
}

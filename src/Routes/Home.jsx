import React from 'react'
import Main from '../components/Main'
import Footer from '../components/Footer'

import BackToTop from '../components/BackToTop'

export default function Home() {
  return (
    <>
    <div className="home grid gap-10">
        <Main/>
       
    </div>
    <BackToTop/>
        <Footer />
    </>
  )
}

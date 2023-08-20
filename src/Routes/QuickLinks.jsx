import React from 'react'

export default function QuickLinks() {
  return (
    <>
    <div className="quick-links pt-52 text-xl text-center" id='quick-links'>
      <h2 className='text-2xl'>This is the quick Link For Everything you need in CA </h2>     

    <div className="links mt-8   text-3xl transition-all  font-semibold">
        <div className="ocr   mb-5 ">
        <a href="https://application.ocr.gov.np/faces/OnlineUserLogin.jsp" className='p-2  hover:underline  underline-offset-4 hover:drop-shadow-md ' target='_blank'>OCR Website</a>
          </div>

        <div className="ocr mb-5 ">
        <a href="https://taxpayerportal.ird.gov.np/taxpayer/app.html" className='p-2 hover:underline  underline-offset-4 hover:drop-shadow-md   ' target='_blank'>Tax Portal</a>
          </div>

        <div className="ocr mb-5 ">
        <a href="https://ird.gov.np/" className='p-2 hover:underline underline-offset-4 hover:drop-shadow-md' target='_blank'>IRD</a>
          </div>

      </div>
    </div>
    </>

  )
}

import { useState } from "react";

const Main = () => {
    const slideData = [
     'https://live.staticflickr.com/65535/53106493639_033a56d5e9_b.jpg',
      'https://live.staticflickr.com/65535/53105782717_a2bd1657dd_b.jpg',
        'https://live.staticflickr.com/65535/53106856603_09925ef488_b.jpg'
      ];
    
      const [activeSlide, setActiveSlide] = useState(0);
    
      const handleRightClick = () => {
        setActiveSlide((prevSlide) => (prevSlide + 1) % slideData.length);
      };
    
      const handleLeftClick = () => {
        setActiveSlide((prevSlide) => (prevSlide - 1 + slideData.length) % slideData.length);
      };
    
    return ( 
        <main className=" main pt-20 relative mt-10 md:mt-0   grid gap-5  grid-cols-1 md:grid-cols-2 ml-14 mr-14 justify-center items-center" id="main">
            <div className="m-left mr-10 ">
                <h1 className="full  text-3xl sm:text-2xl lg:text-3xl  font-semibold mb-5 ">
                Full Services of Accountancy, Business Consultancy, Internal Audit & Tax Consultancy.
                </h1>
                <h2 className="it text-2xl sm:text-xl lg:text-2xl  font-semibold mb-5 ">
                Full Services of IT related services, Digital Marketing and Outsourcing Related Services. 
                </h2>
                <p className="our  text-xl sm:text-lg lg:text-xl">Our team is dedicated to  coordinate, co-operate and  provide all qualitative services as demanded  within time.</p>


            </div>
            <div className="m-right relative" >
            <i className="fa-solid fa-chevron-left  text-xl absolute -left-10 top-1/2 cursor-pointer hover:scale-125 duration-500 bg-blue-100 p-1 rounded-full" onClick={handleLeftClick}></i>
                {/* <img src="./Images/Card Front.jpg" alt="img" className="img mr-20 rounded-3xl" /> */}
               
                <img src={slideData[activeSlide]} alt="Slide" className="  rounded-3xl" />

                <i className="fa-solid fa-chevron-right text-xl absolute -right-9 top-1/2 cursor-pointer hover:scale-125 duration-500 bg-blue-100 p-1 rounded-full" onClick={handleRightClick}></i>
            </div>
        </main>
     );
}
 
export default Main;
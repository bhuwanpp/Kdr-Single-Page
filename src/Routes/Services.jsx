// import React, { useState } from 'react';

import Services1 from "../services/Services1";
import Services2 from "../services/Services2";
import Services3 from "../services/Services3";

// // js
// const ServicesGrid = () => {
//   const [isLegalVisible, setLegalVisible] = useState(false);
//   const [isFirstVisible, setFirstVisible] = useState(false);
//   const [isSecondVisible, setSecondVisible] = useState(false);

//   const legalFun = () => {
//     setLegalVisible(!isLegalVisible);
//     setFirstVisible(false); 
//     setSecondVisible(false); 
//   };

//   const firstLists = () => {
//     setFirstVisible(!isFirstVisible); 
//   };
//   const secondLists = () => {
//     setSecondVisible(!isSecondVisible); 
//   };
//   //end js

//   // coponents 
  
// const DownList = ({ buttonLabel }) => {
//   return (
//     <div className="downList">
//       <div className="one flex ml-24 mb-3 mt-3">
//         <i className="fa-solid fa-arrow-turn-up rotate-90 mr-2"></i>
//         <button>{buttonLabel}</button>
//       </div>
//       {/* Add more content as needed */}
//     </div>
//   );
// };
//   return (
//     <>
//       {/* services */}
//       <div className="services flex justify-center  mr-5 mb-20 text-black">
//     {/* legal work for business */}

//         <div className="services-1  w-96 p-3 text-center ml-10 rounded-xl bg-gray-100 cursor-pointer hover:bg-white duration-500 hover:shadow-lg">
//           <div className="up  w-12 mb-2 px-2 py-3 border border-gray-800  rounded-full  hover:shadow-lg ml-32">
//           <i className="fa-solid fa-business-time"></i>     
//                </div>
//           <button onClick={legalFun}>
//             <h2 className="text-xl font-semibold">Legal work for Business</h2>
//           </button>
//           {isLegalVisible && ( // Only show the content if isLegalVisible is true
//             <div className="lists">
//               {/* one  */}
//               <div className="one flex ml-20 mb-3 mt-3">
//                 <i className="fa-solid fa-arrow-turn-up rotate-90 mr-2"></i>
//                 <button onClick={firstLists}>Co.Registration</button>
//               </div>
//               {isFirstVisible && <DownList buttonLabel="OCR"/>}
//               {isFirstVisible && <DownList buttonLabel="Ward"/>}
//               {isFirstVisible && <DownList buttonLabel="IRD"/>}
             
//               {/* two  */}
//               <div className="one flex ml-20 mb-3 mt-3">
//                 <i className="fa-solid fa-arrow-turn-up rotate-90 mr-2"></i>
//                 <button onClick={secondLists}>Co.Renewal</button>
//               </div>
//               {isSecondVisible && <DownList buttonLabel="OCR"/>}
//               {isSecondVisible && <DownList buttonLabel="Ward"/>}
//               {isSecondVisible && <DownList buttonLabel="IRD"/>}
             
             
//             </div>
//           )}
//         </div>    
//       </div>
//     </>
//   );
// };

const Services = () => {
  return (
    <div className="main-services grid items-center justify-center pt-32  pb-20" id="services">
      <div className="here mb-5">
        <h2 className="text-3xl text-center mb-5 font-bold">Here's what we are good at.</h2>
        <p className="text-lg text-center ml-5">We mainly specialize in creating beautiful and functional websites, web-apps, and mobile apps as well.</p>
      </div>
      <div className="service-components grid gap-6 ">

      <Services1/>
      <Services2/>
      <Services3/>
      </div>
    </div>
  );
};

export default Services;

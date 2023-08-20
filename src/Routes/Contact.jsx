
export default function ContactUs() {
  // for phone Number
  const handleNumberClick = (phoneNumber) => {
    // with the clicked number and potentially initiate a call.
    window.location.href = `tel:${phoneNumber}`;
    window.open(url, '_blank');
  };
  //for whatsapp number
  const handleWhatsAppClick = (phoneNumber) => {
    const message = encodeURIComponent('Hi');
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;
    window.open(url, '_blank');
  };
  // //for viber number
  // const handleViberClick = (phoneNumber) => {
  //   const message = encodeURIComponent('Hi');
  //   const url = `viber://forward?text=${message}&phone=${phoneNumber}`;
  //   window.open(url, '_blank');
  // };
  
    
  return( 
<div className="contact-us grid gap-5  text-2xl  justify-center pt-10 ml-20">
<h5 className="text-center  text-3xl font-bold underline">Contact Information</h5>
  <div className="phone flex items-center gap-10">
  <i className="fa-solid fa-phone text-5xl mr-5"></i>  
  <p className="hover:scale-105 duration-1000 cursor-pointer  underline underline-offset-2 text-blue-600 " onClick={() => handleNumberClick('9847508342')}>+977 9847508342 </p>
  <p>[H.O.]</p>

  <p className="hover:scale-105 duration-1000 cursor-pointer  underline underline-offset-2 text-blue-600 " onClick={() => handleNumberClick('98036108050')}>+977 9803610850 </p>
  <p>[B.O.]</p>
  </div>
  {/* whatsapp */}
  <div className="whatsapp flex">
  <i className="fa-brands fa-whatsapp text-5xl mr-16"></i>
<p className="underline text-blue-600 cursor-pointer hover:scale-105 duration-1000 "  onClick={() => handleWhatsAppClick('+977 9803610850')}> +977 9803610850</p>
  </div>
{/* viber  */}
  <div className="viber flex">
  <i className="fa-brands fa-viber text-5xl mr-16"></i>
<p className="underline text-blue-600 cursor-pointer hover:scale-105 duration-1000" >+977 9847508342 </p>
  </div>
  {/* gmail */}
  <div className="gmail flex">
    <p>Gmail : </p>
    <p className="underline ml-9 underline-offset-2 text-blue-600 cursor-pointer hover:scale-105 duration-1000" onClick={() => window.location.href = 'mailto: kdrconsultancy2078@gmail.com'}>kdrconsultancy2078@gmail.com</p>
  </div>

{/* address  */}
<h5 className="text-center  text-3xl mt-10 font-bold underline">Address</h5>
{/* head office  */}

<div className="head-office flex relative">
<p className="mr-5">[Head Office]:</p>
<a href="https://www.google.com/maps?output=search&q=kdr+consultancy&source=lnms&entry=mc&sa=X&ved=2ahUKEwii-I65x8yAAxXAyqACHUDSBZEQ0pQJegQICxAB" target="_blank">
<p className="underline cursor-pointer">Putalisadak-28, Kathmandu (Near Shankardev Campus)  
<p className=" add-absolute absolute   pointer-events-none right-36 bg-blue-50 text-base border opacity-0">Click address to go to location </p>
</p>
</a>
</div>
{/* Branch office */}


<div className="branch-office flex">
<p className="mr-5">[Branch Office]:</p>
<a href="#" target='_blank'>
<p className="underline cursor-pointer">
Sita RiceMill-02, Tilottama, Butwal
</p>
</a>
</div>
<div className="icon flex ml-80  w-20 mt-5 justify-between items-center">
  <a href="https://www.facebook.com/KDRconsultacypvtltd" target="_blank">
<i className="fa-brands fa-square-facebook text-3xl hover:scale-110 duration-500 "></i>
  </a>
  <a href="https://www.instagram.com/kdr_consultancy_pvt_ltd/" target="_blank">
<i className="fa-brands fa-square-instagram text-3xl  hover:scale-110 duration-500"></i>

  </a>
</div>
</div>
  )
}

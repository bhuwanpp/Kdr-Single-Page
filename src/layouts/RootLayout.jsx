
import { useEffect, useState } from "react";
import BackToTop from "../components/BackToTop";
import Header from "../components/Header";

import { Outlet } from "react-router-dom";
import { Link } from 'react-scroll';


export default function RootLayout() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  // toogle nav 
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  // close nav auto
  const closeNav = () => {
    if (window.innerWidth < 1024) {
      setIsNavOpen(false);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        // Close the navigation menu when screen size is larger than or equal to 1024px
        setIsNavOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="root-layout ">
      <div className="header flex items-center justify-between  fixed top-0  h-20 z-30 bg-gray-50 ">
        <Header/>
        <nav
          className={`nav items-center absolute right-1 top-20 z-10 w-44 h-96  justify-between mt-4 text-lg ${
            isNavOpen ? "grid " : "hidden"
          } lg:flex lg:justify-between lg:text-xl  lg:relative lg:nav-width  lg:w-full lg:h-full lg:top-0    p-1 pl-5 pr-2 rounded-2xl`} id="nav"
        >
          <Link  to="about"
            spy={true}
            smooth={true}
            duration={500}
            onClick={closeNav} className="hover:underline  underline-offset-8  hover:scale-105 duration-1000  " >About Us</Link>
          <Link  to="career"
            spy={true}
            smooth={true}
            duration={500}
            onClick={closeNav} className="hover:underline  underline-offset-8  hover:scale-105 duration-1000  " >Career</Link>
          <Link  to="ourTeam"
            spy={true}
            smooth={true}
            duration={500}
            onClick={closeNav} className="hover:underline  underline-offset-8  hover:scale-105 duration-1000  " >OurTeam</Link>
          <Link  to="quick-links"
            spy={true}
            smooth={true}
            duration={500}
            onClick={closeNav} className="hover:underline  underline-offset-8  hover:scale-105 duration-1000  " >Quick Links</Link>
          <Link  to="services"
            spy={true}
            smooth={true}
            duration={500}
            onClick={closeNav} className="hover:underline  underline-offset-8  hover:scale-105 duration-1000  " >Services</Link>
         
          
          <Link to ="contact"  spy={true}
            smooth={true}
            duration={500} onClick={closeNav} className="Contact bg-black  text-white   rounded-xl p-2 hover:opacity-90 hover:scale-105 duration-1000 cursor-pointer " >
            Contact Us
      </Link>
        </nav>
        <button onClick={toggleNav}>
          <i className="fas fa-bars text-3xl mr-10 cursor-pointer p-2"></i>
        </button>
      </div>
      
      <main>
        <Outlet />

      </main>
      <BackToTop/>
     
    </div>
  )
}
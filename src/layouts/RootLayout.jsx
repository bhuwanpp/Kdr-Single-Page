
import { useEffect, useState } from "react";
import BackToTop from "../components/BackToTop";
import Footer from "../components/Footer";
import Header from "../components/Header";

import { Outlet, NavLink } from "react-router-dom";

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
      <div className="header flex items-center justify-between  ">
        <Header/>
        <nav
          className={`nav items-center absolute right-1 top-20 z-10 w-44 h-96  justify-between mt-4 text-lg ${
            isNavOpen ? "grid " : "hidden"
          } lg:flex lg:justify-between lg:text-xl  lg:relative lg:nav-width  lg:w-full lg:h-full lg:top-0 bg-blue-100 text-black  p-1 pl-5 pr-2 rounded-2xl`} id="nav"
        >
          <NavLink to="/about" className="hover:underline  underline-offset-8  hover:scale-105 duration-1000  " onClick={closeNav}>About Us</NavLink>
          <NavLink to="/services" className="hover:underline   underline-offset-8  hover:scale-105 duration-1000" onClick={closeNav}>Services</NavLink>
          <NavLink to="/ourTeam" className="hover:underline underline-offset-8  hover:scale-105 duration-1000" onClick={closeNav}>Our Team</NavLink>
          <NavLink to="/quickLinks" className="hover:underline underline-offset-8   hover:scale-105 duration-1000" onClick={closeNav}>Quick Links</NavLink>
          <NavLink to="/career" className="hover:underline underline-offset-8   hover:scale-105 text-xl duration-1000" onClick={closeNav}>Career</NavLink>
          <NavLink to ="/contact" className="Contact bg-black  text-white   rounded-xl p-2 hover:opacity-90 hover:scale-105 duration-1000 cursor-pointer " onClick={closeNav}>
            Contact Us
      </NavLink>
        </nav>
        <button onClick={toggleNav}>
          <i className="fas fa-bars text-3xl mr-10 cursor-pointer p-2"></i>
        </button>
      </div>
      
      <main>
        <Outlet />

      </main>
      <BackToTop/>
      <Footer/>
    </div>
  )
}
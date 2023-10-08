import React, {useState} from "react";
import "./navbar.css";
import { MdOutlineTravelExplore } from "react-icons/md";
//ai atau md dilihat dari 2 kata pertama 
import { AiFillCloseCircle } from "react-icons/ai";
import { PiDotsNineBold } from "react-icons/pi";
import { act } from "react-dom/test-utils";
// import { useState } from "react";
const Navbar = () => {
  const [active,setActive] = useState('navBar')
  // function to toggle navbar
  const showNav =()=>{
    setActive('navBar activeNavbar')
  }

  // function to remove navBar
  const removeNavbar =()=>{
    setActive('navBar')
  }
  return (
    <section className="navBarSection">
      <header className="header flex">
        <div className="logoDiv">
          <a href="www.google.com" className="logo flex">
            <h1>
              <MdOutlineTravelExplore className="icon" /> Travel.
            </h1>
          </a>
        </div>

        <div className={active}>
          <ul className="navLists flex">
            <li className="navItem">
              <a href="www.google.com" className="navLink">
                Home
              </a>
            </li>
            <li className="navItem">
              <a href="www.google.com" className="navLink">
                Packages
              </a>
            </li>
            <li className="navItem">
              <a href="www.google.com" className="navLink">
                Shop
              </a>
            </li>
            <li className="navItem">
              <a href="www.google.com" className="navLink">
                About
              </a>
            </li>
            <li className="navItem">
              <a href="www.google.com" className="navLink">
                Pages
              </a>
            </li>
            <li className="navItem">
              <a href="www.google.com" className="navLink">
                News
              </a>
            </li>
            <li className="navItem">
              <a href="www.google.com" className="navLink">
                Contact
              </a>
            </li>
            <button className="btn">
              <a href="www.google.com">BOOK NOW</a>
            </button>
          </ul>

          <div onClick={removeNavbar} className="closeNavbar">
            <AiFillCloseCircle className="icon"/>
          </div>
        </div>

        <div onClick={showNav} className="toogleNavbar">
          <PiDotsNineBold className="icon" />
        </div>
      </header>
    </section>
  );
};

export default Navbar;

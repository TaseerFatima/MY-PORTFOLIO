import React from 'react';
import Intro from "../Intro";
import AboutMe from '../AboutMe';
import Skills from '../Skills';
import Education from '../Education';
import Footer from '../Footer';
import MyPortfolio from '../MyPortfolio';
import NavBar from './NavBar';

const Layout = () => {
  return (
    <>
    <div className='bg-[#0D0D0D] w-full h-full'> 
      <NavBar/> 
      <Intro/>
      <AboutMe/>
      <hr className="border-t-2 border-[#959494] md:w-96 w-40 mx-auto" />
      <Skills/>
      <hr className="border-t-2 border-[#959494] md:w-96 w-40 mx-auto" />
      <Education/>
      <MyPortfolio/>
      <Footer/>
    </div>
    </>
  )
}

export default Layout

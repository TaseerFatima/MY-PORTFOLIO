import React from 'react';
import Intro from "../Intro";
import AboutMe from '../AboutMe';
import Skills from '../Skills';
import Education from '../Education';
import Footer from '../Footer';
import MyPortfolio from '../MyPortfolio';

const Layout = () => {
  return (
    <>
    <div className='bg-[#0D0D0D] w-full h-full'>   
      <Intro/>
      <AboutMe/>
      <hr className="border-t-2 border-[#959494] w-96 mx-auto" />
      <Skills/>
      <hr className="border-t-2 border-[#959494] w-96 mx-auto" />
      <Education/>
      <MyPortfolio/>
      <Footer/>
    </div>
    </>
  )
}

export default Layout

import React from "react";
import img from "../assets/img.jpg";
import hello from "../assets/hello.png";

const Intro = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center md:items-start">
      
      {/* Image */}
      <div className="h-80 w-60 md:h-96 md:w-64 m-5 md:m-9">
        <img src={img} className="w-full h-full object-cover" />
      </div>

      {/* Intro */}
      <div className="md:ml-32 my-auto text-center md:text-left">
        <h1 className="text-[#F1A500] text-4xl md:text-5xl flex justify-center md:justify-start">
          - Hello <img src={hello} className="w-10 md:w-14 mx-2" /> I am
        </h1>

        <div className="w-[220px] md:w-[250px] h-[30px] bg-[#ef3939] mt-3 flex justify-center items-center mx-auto md:mx-0">
          <h1 className="text-white">Web-Development Intern</h1>
        </div>

        <div className="text-white max-w-[500px] mt-3 px-4 md:px-0">
          <p className="leading-relaxed text-justify">
            Hi there! I am Taseer! I’m a CS student from Faisalabad, Pakistan,
            currently working as a Web Development Intern at a software house.
            My focus is on both frontend and backend development, where I’m gaining
            hands-on experience in real projects using modern web technologies.
          </p>
        </div>

        <button className="mt-6 border border-[#FFB400] text-[#FFB400] px-7 py-2 rounded-full font-semibold hover:bg-[#FFB400] hover:text-black transition">
          MORE ABOUT ME
        </button>
      </div>
    </div>
  );
};

export default Intro;

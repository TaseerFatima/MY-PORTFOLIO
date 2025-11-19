import React, { useEffect } from "react";
import "react-circular-progressbar/dist/styles.css";
import SkillCircle from "./SkillCircle";
import AOS from "aos";
import "aos/dist/aos.css";

const Skills = () => {

  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  return (
    <section id="about" className="w-full text-white py-16 px-6 md:px-20">
      <h2 className="text-center text-4xl font-bold pb-7 pt-6 text-white" data-aos="fade-down" data-aos-duration="1000">
        My Skills
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 justify-center gap-x-2 gap-y-4">
        <div data-aos="fade-up" data-aos-duration="800" >
          <SkillCircle percentage={85} label="HTML" />
        </div>
        <div data-aos="fade-up" data-aos-duration="800">
          <SkillCircle percentage={75} label="CSS" />
        </div>
        <div data-aos="fade-up" data-aos-duration="800" >
          <SkillCircle percentage={65} label="JavaScript" />
        </div>
        <div data-aos="fade-up" data-aos-duration="800">
          <SkillCircle percentage={70} label="React" />
        </div>
        <div data-aos="fade-up" data-aos-duration="800" >
          <SkillCircle percentage={80} label="Git/Github" />
        </div>
        <div data-aos="fade-up" data-aos-duration="800" >
          <SkillCircle percentage={85} label="Tailwind" />
        </div>
        <div data-aos="fade-up" data-aos-duration="800" >
          <SkillCircle percentage={68} label="C++" />
        </div>
        <div data-aos="fade-up" data-aos-duration="800">
          <SkillCircle percentage={90} label="Vercel" />
        </div>
      </div>
    </section>
  );
};

export default Skills;

import React from "react";
import "react-circular-progressbar/dist/styles.css";
import SkillCircle from "./SkillCircle";

const Skills = () => {
  return (
    <div className=" mb-4">
      <h2 className="text-center text-4xl font-bold pb-7 pt-6 text-white">
        My Skills
      </h2>
<div className="grid grid-cols-2 md:grid-cols-4 justify-center gap-x-2 gap-y-4">

        <SkillCircle percentage={85}  label="HTML" />
        <SkillCircle percentage={75} label="CSS" />
        <SkillCircle percentage={65} label="JavaScript" />
        <SkillCircle percentage={70}  label="React" />
        <SkillCircle percentage={80}  label="Git/Github" />
        <SkillCircle percentage={85}  label="Tailwind" />
        <SkillCircle percentage={68}  label="C++" />
        <SkillCircle percentage={90} label="Vercel" />
        
      </div>
    </div>
  );
};

export default Skills;

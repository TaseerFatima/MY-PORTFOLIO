import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";

const SkillCircle = ({ percentage, label, size = 100 }) => {
  return (
    <div className="flex flex-col items-center">
      <div style={{ width: size, height: size }}>
        <CircularProgressbar
          value={percentage}
          strokeWidth={4}
          text={`${percentage}%`}
          styles={{
            path: { stroke: "#FFB400", },
            trail: { stroke: "#b3abab" },
            text: { fill: "#FFFFFF", fontWeight: "bold" },
          }}
        />
      </div>
      <p className="text-white mt-2">{label}</p>
    </div>
  );
};

export default SkillCircle;


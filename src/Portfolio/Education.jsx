import React from "react";
import { Briefcase } from "lucide-react";

const Education = () => {
  const experiences = [
    {
      date: " 2022 - Present",
      title: "BACHELOR OF SCIENCE IN COMPUTER SCIENCE",
      desc: "Govt. College Women University Faisalabad",
    },
    {
      date: "2022",
      title: "INTERMEDIATE-PRE-MEDICAL",
      desc: "Student's Inn College, Faisalabaad",
    },
    {
      date: "2022",
      title: "MATRICULATION",
      desc: "Govt, Girls High School Faisalabad",
    },
  ];
  return (
    <section id="Experience" className="w-full text-white py-16 px-6 md:px-20">
      <h2
        data-aos="fade-down"
        data-aos-duration="800"
        className="text-center text-4xl font-semibold pb-14 pt-6 text-white"
      >
        Experience <span className="text-[#F1A500]">&</span> Education
      </h2>
      {/* Education */}
      <div
        data-aos="fade-up"
        className="grid grid-cols-1 md:grid-cols-2 gap-14 max-w-5xl mx-auto pb-10"
      >
        {experiences.map((exp, index) => (
          <div key={index} className="flex gap-4 items-start">
            <div className="bg-[#F1A500] rounded-full p-3 flex items-center justify-center">
              <Briefcase size={24} className="text-white" />
            </div>
            <div>
              <p className="text-sm text-gray-300">{exp.date}</p>
              <h3 className="font-semibold text-lg mt-1 text-white">
                {exp.title}
              </h3>
              <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                {exp.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;

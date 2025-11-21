import React from "react";

const AboutMe = () => {
  return (
    <section id="about" className="w-full text-white py-16 px-6 md:px-28">
      <h2
        className="text-center text-4xl font-extrabold tracking-wider mb-10"
        data-aos="fade-down"
        data-aos-duration="800"
      >
        ABOUT<span className="text-[#FFB400]">ME</span>
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div data-aos="fade-right" data-aos-duration="1000">
          <h3 className="text-xl font-semibold mb-6">personal info</h3>

          <div className="space-y-2 text-[16px] grid grid-cols-1 md:grid-cols-2 gap-2">
            <p>
              <span className="font-semibold text-[#B3B3B3]">Name :</span>{" "}
              Taseer Fatima
            </p>
            <p>
              <span className="font-semibold text-[#B3B3B3]">Age :</span> 21
              years
            </p>
            <p>
              <span className="font-semibold text-[#B3B3B3]">Profession :</span>{" "}
              Web Developer
            </p>
            <p>
              <span className="font-semibold text-[#B3B3B3]">Phone :</span>{" "}
              +923470869147
            </p>
            <p>
              <span className="font-semibold text-[#B3B3B3]">Email :</span>{" "}
              fatimataseer123@gmail.com
            </p>
            <p>
              <span className="font-semibold text-[#B3B3B3]">Address :</span>{" "}
              Faisalabad
            </p>
            <p>
              <span className="font-semibold text-[#B3B3B3]">Languages :</span>{" "}
              English, Urdu
            </p>
            <p>
              <span className="font-semibold text-[#B3B3B3]">Hobbies :</span>{" "}
              Wake Up, Code, Learn, Eat & Sleep!
            </p>
          </div>
          <div className="mt-6">
            <a
              href="#Skills"
              className=" border border-[#FFB400] text-[#FFB400] px-7 py-2 rounded-full font-semibold hover:bg-[#FFB400] hover:text-black transition"
            >
              MORE ABOUT ME
            </a>
          </div>
        </div>

        <div
          className="grid grid-cols-2 gap-4"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          {[
            { number: "01", label: "YEARS OF EXPERIENCE" },
            { number: "10+", label: "PROJECTS COMPLETED" },
            { number: "5+", label: "COURSES COMPLETED" },
            { number: "2+", label: "INTERNSHIPS" },
          ].map((item, index) => (
            <div
              key={index}
              className="border border-gray-700 p-4 rounded-lg flex flex-col items-center justify-center"
              data-aos="zoom-in"
              data-aos-duration="800"
            >
              <h1 className="text-4xl font-extrabold text-[#FFB400]">
                {item.number}
              </h1>
              <p className="text-sm mt-1 text-center text-gray-300">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

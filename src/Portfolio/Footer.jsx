import React from "react";
import { HomeIcon, Mail, Phone,Twitter,Github,Instagram,Linkedin } from "lucide-react";

const Footer = () => {
  const CONTACT = [
    {
      icon: <HomeIcon size={24} className="text-white" />,
      title: "ADDRESS POINT",
      desc: "Faisalabad, Pakistan",
    },
    {
      icon: <Mail size={24} className="text-white" />,
      title: "EMAIL",
      desc: "fatimataseer123@gmail.com",
    },
    {
      icon: <Phone size={24} className="text-white" />,
      title: "CALL ME",
      desc: "+92 3024433195",
    },
  ];

  return (
    <>
      <section id="Contact" className="w-full text-white py-16 px-6 md:px-20">

        <h2
          className="text-center text-4xl font-extrabold tracking-wider mb-10"
          data-aos="fade-down"
          data-aos-duration="800"
        >
          GET<span className="text-[#FFB400]">IN TOUCH</span>
        </h2>

        <h2
          className="text-3xl font-bold text-white"
          data-aos="fade-right"
          data-aos-duration="900"
        >
          DON'T BE SHY!
        </h2>

        <p
          className="text-gray-400 font-semibold text-lg mt-2 leading-relaxed"
          data-aos="fade-up"
          data-aos-duration="900"
          data-aos-delay="150"
        >
          Thanks for visiting my portfolio! If you’d like to work together, ask
          a question, or just connect, I’m only a message away. I’m always happy
          to talk about web development, new ideas, or anything you’re curious
          about. Don’t hesitate—reach out and let’s start a conversation.
        </p>

        {/* CONTACT CARDS */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-14 max-w-5xl mx-auto pb-5 pt-10"
        >
          {CONTACT.map((cont, index) => (
            <div
              key={index}
              className="flex gap-4 items-start"
              data-aos="zoom-in"
              data-aos-duration="800"
            >
              <div className="bg-[#F1A500] rounded-full p-3 flex items-center justify-center">
                {cont.icon}
              </div>

              <div>
                <h3 className="font-semibold text-lg mt-1 text-white">
                  {cont.title}
                </h3>
                <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                  {cont.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
         <div className="items-center justify-center flex flex-row gap-4 pt-4 mx-auto" data-aos="zoom-in">
            <a href="#" className="p-3 rounded-full bg-[#1e1e1e] ">
               <Twitter className="text-white" />
            </a>
            <a href="#" className="p-3 rounded-full bg-[#1e1e1e] ">
               <Linkedin className="text-white" />
            </a>
            <a href="https://github.com/TaseerFatima" target="_blank" className="p-3 rounded-full bg-[#1e1e1e] ">
               <Github className="text-white" />
            </a>
            <a href="https://www.instagram.com/taseerfatimaaa.19/" target="_blank" className="p-3 rounded-full bg-[#1e1e1e] ">
               <Instagram className="text-white" />
            </a>
          </div>

      </section>
    </>
  );
};

export default Footer;

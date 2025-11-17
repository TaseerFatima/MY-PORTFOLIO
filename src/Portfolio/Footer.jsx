import React from "react";
import { HomeIcon, Mail, Phone } from "lucide-react";

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
      <section id="about" className="w-full text-white py-16 px-6 md:px-20">
        <h2 className="text-center text-4xl font-extrabold tracking-wider mb-10">
          GET <span className="text-[#FFB400]">IN TOUCH</span>
        </h2>

        <h2 className="text-start text-3xl font-bold text-white">
          DON'T BE SHY!
        </h2>

        <p className="text-start text-gray-400 font-semibold text-lg mt-2 leading-relaxed">
          Thanks for visiting my portfolio! If you’d like to work together, ask
          a question, or just connect, I’m only a message away. I’m always happy
          to talk about web development, new ideas, or anything you’re curious
          about. Don’t hesitate—reach out and let’s start a conversation.
        </p>

        {/* CONTACT CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14 max-w-5xl mx-auto pb-10 pt-10">
          {CONTACT.map((cont, index) => (
            <div key={index} className="flex gap-4 items-start">
              <div className="bg-yellow-500 rounded-full p-3 flex items-center justify-center">
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

      </section>
    </>
  );
};

export default Footer;

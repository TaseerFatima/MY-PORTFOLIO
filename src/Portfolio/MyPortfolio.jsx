import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Stopwatch from "../assets/Stopwatch.jpg";
import Textutils from "../assets/Textutils.jpg";
import tictactoe from "../assets/tictactoe.jpg";
import vintageonline from "../assets/vintageonline.jpg";

const MyPortfolio = () => {
  useEffect(() => {
      AOS.init({
        duration: 1000, 
        once: true,  
      });
    }, []);
  const Portfolio = [
    {
      img: Stopwatch,
      title: "STOPWATCH & TIMER",
      desc: "A simple yet efficient stopwatch and timer application built with clean UI and smooth functionality. It allows users to start, pause, reset, and track time with accuracy. This project helped me understand state management and user interaction handling in JavaScript/React.",
    },
    {
      img: Textutils,
      title: "TEXTUTILS",
      desc: "TextUtils is a powerful text manipulation tool where users can format, analyze, and transform text with ease. It includes features like uppercase/lowercase conversion, text counting, space removal, and preview mode. This project strengthened my understanding of reusable components and real-time UI updates.",
    },
    {
      img: tictactoe,
      title: "TIC-TAC-TOE GAME",
      desc: "A classic tic-tac-toe game developed with interactive gameplay and clean design. The game detects winners, prevents repeated moves, and allows users to reset the board. This project improved my logic-building skills and taught me how to manage game states effectively.",
    },
    {
      img: vintageonline,
      title: "ONLINE SHOPPING APP",
      desc:"A beautifully designed online shopping UI where users can explore products in a vintage-style interface. This project focuses on layout design, responsive UI, product cards, and modern front-end styling. It enhanced my UI/UX design skills and component structuring in React.",
    },
  ];

  return (
    <div>
      <section id="portfolio" className="w-full text-white py-16 px-6 md:px-20">
        <h2 data-aos="fade-down"
        data-aos-duration="800" className="text-center text-4xl font-extrabold tracking-wider mb-10">
          MY <span className="text-[#FFB400]">PORTFOLIO</span>
        </h2>

        {/* PORTFOLIO CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 max-w-5xl mx-auto pb-10 pt-10">
          {Portfolio.map((PORT, index) => (
            <div
              key={index}
              className="flex gap-4 items-start bg-[#1e1e1e] p-4 rounded-2xl w-full"
            >
              <img
                src={PORT.img}
                alt={PORT.title}  data-aos="zoom-out"
                className="h-36 w-40 rounded-lg object-cover "
              />

              <div>
                <h3 className="font-semibold text-lg mt-1 text-white">
                  {PORT.title}
                </h3>
                <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                  {PORT.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MyPortfolio;

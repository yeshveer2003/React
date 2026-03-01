import React from "react";
import { AiFillCaretRight } from "react-icons/ai";
import { FaPen, FaLaptop, FaFlag } from "react-icons/fa";
import { CgCodeSlash } from "react-icons/cg";
import { IoBagCheckSharp } from "react-icons/io5";
import { FaCircleRadiation } from "react-icons/fa6";


function Els1({ icons, head, text }) {
  return (
    <div className="flex flex-col items-center justify-start bg-gray-800/30 rounded-3xl p-6 m-4 w-full sm:w-72 md:w-80 text-center hover:scale-105 transform transition-transform">
      <div className="h-20 w-20 flex items-center justify-center text-4xl mb-4">
        {icons}
      </div>
      <div className="text-lg font-semibold mb-2">{head}</div>
      <div className="text-gray-200 text-sm">{text}</div>
    </div>
  );
}


function Endhero() {
  return (
    <section className="mt-16 px-6 md:px-16 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white py-12 rounded-2xl">

      <div className="mb-10 text-center md:text-left">
        <div className="flex items-center justify-center md:justify-start text-2xl mb-2 gap-2">
          <AiFillCaretRight className="text-[#c22d2ddd]" />
          <h1>My Services</h1>
        </div>
        <h2 className="text-5xl md:text-6xl font-bold">What Can I Do</h2>
      </div>

   
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 justify-center">
        <Els1
          icons={<FaPen style={{ color: "#c22d2ddd" }} />}
          head="Creative Design"
          text="Leveraging artistic and aesthetic principles to craft visually appealing and engaging user experiences."
        />
        <Els1
          icons={<CgCodeSlash style={{ color: "#c22d2ddd" }} />}
          head="Clean Code"
          text="Writing efficient, scalable, and maintainable code for robust web applications."
        />
        <Els1
          icons={<FaLaptop style={{ color: "#c22d2ddd" }} />}
          head="User Interface"
          text="Designing intuitive and responsive interfaces to improve user engagement."
        />
        <Els1
          icons={<IoBagCheckSharp style={{ color: "#c22d2ddd" }} />}
          head="User Experience"
          text="Optimizing interactions and usability for smooth user journeys."
        />
        <Els1
          icons={<FaCircleRadiation style={{ color: "#c22d2ddd" }} />}
          head="Fast Support"
          text="Providing prompt and reliable support to solve issues quickly."
        />
        <Els1
          icons={<FaFlag style={{ color: "#c22d2ddd" }} />}
          head="Branding"
          text="Creating strong brand identity through design and strategy."
        />
      </div>
    </section>
  );
}

export default Endhero;
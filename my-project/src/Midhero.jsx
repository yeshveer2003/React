import React from "react";
import { AiFillCaretRight } from "react-icons/ai";
import { FaHtml5, FaJava, FaReact } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { Link } from "react-router-dom";

function Els({ text, icons }) {
  return (
    <div className="flex flex-col items-center justify-center p-4 bg-[#56535322] rounded-xl m-2 text-center w-32">
      <div className="text-[#b62323] text-3xl">{icons}</div>
      <div className="mt-2 font-medium">{text}</div>
    </div>
  );
}


function Midhero() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-10 mt-20  bg-gray-900 rounded-2xl gap-10">
     
      <div className="rounded-2xl overflow-hidden flex-shrink-0">
        <img src="yas.jpg" alt="Profile" className="w-64 md:w-80 lg:w-96 object-cover" />
      </div>

    
      <div className="flex-1 pt-6 md:pt-0">
       
        <div className="flex items-center text-2xl font-bold mb-2 gap-2">
          <AiFillCaretRight className="text-[#df4242]" />
          <h2>About Me</h2>
        </div>

        <div className="text-lg font-semibold mb-4">Who am I</div>

  
        <p className="mb-6 text-gray-200 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta,
          eum blanditiis error eos quisquam laboriosam! Assumenda similique
          omnis exercitationem dolores veritatis quae ipsum accusamus,
          consequatur ad distinctio? Reprehenderit, dolorum architecto!
        </p>

       
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-6">
          <Els text="HTML" icons={<FaHtml5 style={{ color: "#c22d2ddd" }} />} />
          <Els text="CSS" icons={<FaCss3Alt style={{ color: "skyblue" }} />} />
          <Els text="JAVA" icons={<FaJava style={{ color: "yellow" }} />} />
          <Els text="REACT" icons={<FaReact style={{ color: "purple" }} />} />
          <Els text="TAILWIND" icons={<RiTailwindCssFill style={{ color: "skyblue" }} />} />
        </div>

        
        <Link
    to="/resume"
    className="border-2 border-black rounded-lg px-6 py-2 w-40 bg-[#df4242] hover:bg-[#b62323] transition-colors inline-block text-center"
  >
    View Resume
  </Link>
      </div>
    </div>
  );
}

export default Midhero;
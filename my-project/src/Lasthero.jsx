import React from "react";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

function Lasthero() {
  return (
    <footer className="bg-gray-800/60 py-6 px-6 md:px-16 mt-16 rounded-t-2xl">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Logo */}
        <div>
          <img
            src="https://cdn3.iconfinder.com/data/icons/logos-3/250/angular-1024.png"
            alt="Logo"
            width={40}
            className="object-contain"
          />
        </div>

        {/* Social Icons */}
        <div className="flex space-x-6 text-2xl text-white">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#df4242] transition-colors"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#df4242] transition-colors"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#df4242] transition-colors"
          >
            <CiLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Lasthero;
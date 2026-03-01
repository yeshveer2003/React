import React from 'react';
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white p-6 md:p-16 flex flex-col items-center">
      
      <h1 className="text-5xl font-bold mb-12 text-red-600">Contact Me</h1>

      <div className="w-full max-w-6xl flex flex-col md:flex-row gap-12">
        
        {/* Contact Info */}
        <div className="flex-1 bg-[#2c2b2b] rounded-xl p-8 flex flex-col gap-8">
          <h2 className="text-3xl font-semibold mb-4">Get in touch</h2>

          <div className="flex items-start gap-4">
            <IoIosMail className="text-3xl text-red-600 mt-1" />
            <div>
              <div className="font-bold">Email</div>
              <div>yeshveerrao4@gmail.com</div>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FaPhoneAlt className="text-3xl text-red-600 mt-1" />
            <div>
              <div className="font-bold">Phone</div>
              <div>+91 9999666624</div>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FaLocationDot className="text-3xl text-red-600 mt-1" />
            <div>
              <div className="font-bold">Location</div>
              <div>Rewari, Haryana, India</div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="flex-1 bg-[#2c2b2b] rounded-xl p-8">
          <h2 className="text-3xl font-semibold mb-4">Send me a message</h2>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 rounded-md bg-gray-700 text-white focus:outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 rounded-md bg-gray-700 text-white focus:outline-none"
            />
            <textarea
              rows="6"
              placeholder="Your Message"
              className="p-3 rounded-md bg-gray-700 text-white focus:outline-none"
            />
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 transition-colors rounded-md py-3 font-semibold mt-2"
            >
              Send Message
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}
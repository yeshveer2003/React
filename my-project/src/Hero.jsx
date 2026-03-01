import React from "react";

export default function Hero() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 py-12 mt-10 bg-gray-900 text-white gap-10 rounded-2xl">
      
      {/* Text Section */}
      <div className="flex-1 flex flex-col gap-4">
        <h2 className="text-3xl text-[#fe2c2c] font-semibold">Hello, My Name is</h2>
        <h1 className="text-6xl md:text-7xl font-bold">Yeshveer</h1>
        <p className="text-gray-200 leading-relaxed">
          I am a BCA graduate passionate about coding and technology. I enjoy
          learning and working on projects related to web development and
          programming. I am looking for an opportunity where I can apply my
          knowledge, improve my skills, and contribute to the growth of the
          organization.
        </p>

        {/* Download CV Button */}
        <a
          href="/resume.pdf"
          download
          className="border-2 border-black rounded-lg px-6 py-2 w-40 bg-[#ea4646] hover:bg-[#df4242] transition-colors inline-block text-center"
        >
          Download CV
        </a>
      </div>

      {/* Image Section */}
      <div className="flex-shrink-0 rounded-2xl overflow-hidden">
        <img
          src="yas.jpg"
          alt="Yeshveer"
          className="w-64 md:w-80 lg:w-96 object-cover"
        />
      </div>
    </section>
  );
}
import React from "react";

function Bottomhero() {
  return (
    <section className="bg-gradient-to-b from-gray-800 to-gray-900 py-12 px-6 md:px-16 rounded-2xl text-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        
        {/* Text */}
        <div className="text-3xl md:text-5xl font-bold leading-snug">
          Let&apos;s work together on your <br /> next project
        </div>

        {/* Button */}
        <div>
          <button className="bg-[#df4242] hover:bg-[#b62323] transition-colors border-black rounded-lg px-6 py-3 text-sm md:text-base">
            Contact
          </button>
        </div>
      </div>

      {/* Description */}
      <div className="text-gray-300 text-sm mt-6 md:mt-9 max-w-3xl">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quibusdam dolore,
        <br /> rerum cum at neque fuga, vero eaque ut?
      </div>
    </section>
  );
}

export default Bottomhero;
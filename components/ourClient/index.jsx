import Image from "next/image";
import React from "react";
import logo1 from "../../assests/featured_bloomberg.png";
import logo2 from "../../assests/featured_cnbc.png";
import logo3 from "../../assests/featured_forbes.png";
import logo4 from "../../assests/featured_guardian.png";
import logo5 from "../../assests/featured_times.png";

const OurClient = () => {
  return (
    <section className="bg-gradient-to-r from-[#ead2d24a] to-[#ead2d229]">
      <div className="max-w-screen-xl mx-auto  p-2">
        <p className="text-2xl md:text-3xl lg:text-5xl font-bold text-center py-20">Our clients are featured on</p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5  mb-20">
          <Image className="w-full" src={logo2} alt="Company-logo" />
          <Image className="w-full" src={logo1} alt="Company-logo" />
          <Image className="w-full" src={logo3} alt="Company-logo" />
          <Image className="w-full" src={logo4} alt="Company-logo" />
          <Image className="w-full" src={logo5} alt="Company-logo" />
        </div>
      </div>
    </section>
  );
};

export default OurClient;

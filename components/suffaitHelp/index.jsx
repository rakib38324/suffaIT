import Image from "next/image";
import React from "react";
import icon1 from "../../assests/ic_help_1.svg";
import icon2 from "../../assests/ic_help_2.svg";
import icon3 from "../../assests/ic_help_3.svg";

const SuffaItHelp = () => {
  const cards = [
    {
      bg: "bg-violet-600",
      img: icon1,
      title: "Clear Communication",
      description:
        "We build relationships based on integrity and trust, deliver on our promises, and always maintain clear communication.",
    },
    {
      bg: "bg-blue-600",
      img: icon1,
      title: "Customer-Centric Approach",
      description:
        "We prioritize our client’s success, understand your unique needs, and deliver tailored solutions that drive your business growth.",
    },
    {
      bg: "bg-blue-500",
      img: icon3,
      title: "Innovation and Excellence",
      description:
        "We consistently deliver innovative, high-quality solutions as a team on the cutting edge of technology trends.",
    },
  ];
  return (
    <section className="bg-slate-100">
      <div className="max-w-screen-xl mx-auto p-2">
        <h1 className="w-1/2 mx-auto text-2xl md:text-3xl lg:text-5xl font-bold text-center py-20">
          How SuffaIT helps you deliver the best results
        </h1>

        <div className="grid md:grid-cols-3 md:gap-1 lg:gap-0 p-5 mb-10">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`${card.bg}
              ${index === 0 && "lg:rotate-6"}
              ${index === 1 && "lg:-rotate-3 "}
              ${index === 2 && "lg:rotate-6 "}
               p-10 rounded-3xl text-white transform transition-transform duration-300  hover:z-10 hover:rotate-0 my-1 md:my-0`}
            >
              <Image src={card.img} alt="help-icon" />
              <p className="text-2xl font-bold my-5">
                {card.title.split(" ").map((word, i) => (
                  <span key={i}>
                    {word} <br />
                  </span>
                ))}
              </p>
              <p className="text-base">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuffaItHelp;

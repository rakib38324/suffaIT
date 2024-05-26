import React from "react";
import image1 from "../../assests/s-1.svg";
import image2 from "../../assests/s-2.svg";
import image3 from "../../assests/s-3.svg";
import image4 from "../../assests/s-4.svg";
import image5 from "../../assests/s-5.png";
import image6 from "../../assests/s-6.svg";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
const Services = () => {
  const data = [
    {
      id: 1,
      title: "Team Argumentation",
      details:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      technology: ["React", "Angular", "Electron", "Next.js"],
      image: image1,
    },
    {
      id: 2,
      title: "Mobile Development",
      details:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      technology: ["React", "Angular", "Electron", "Next.js"],
      image: image2,
    },
    {
      id: 3,
      title: "Back-end Development",
      details:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      technology: ["React", "Angular", "Electron", "Next.js"],
      image: image3,
    },
    {
      id: 4,
      title: "AI Development",
      details:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      technology: ["React", "Angular", "Electron", "Next.js"],
      image: image4,
    },
    {
      id: 5,
      title: "Front-end Development",
      details:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      technology: ["React", "Angular", "Electron", "Next.js"],
      image: image5,
    },
    {
      id: 6,
      title: "Web Development",
      details:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      technology: ["React", "Angular", "Electron", "Next.js"],
      image: image6,
    },
  ];
  return (
    <section className="bg-slate-100">
      <div className="max-w-screen-xl mx-auto p-2">
        <p className="text-2xl md:text-3xl lg:text-5xl font-bold text-center py-20">
          Services we provide
        </p>

        <div className="lg:grid lg:grid-cols-2 gap-2 my-10">
          {data?.map((data, i) => (
            <div
              key={i}
              className="relative cursor-pointer bg-white md:grid md:grid-cols-3 group overflow-hidden rounded-3xl m-1"
            >
              <div className="md:hidden my-auto">
                <Image className="mx-auto" src={data?.image} alt="logo" />
              </div>
              <div className="md:col-span-2 px-5 py-7 md:px-10 md:py-14 group-hover:px-10 group-hover:py-5 duration-200">
                <p className="text-2xl font-bold">{data?.title}</p>
                <p className="text-sm my-5">
                  {data?.details?.length > 150
                    ? data?.details?.substring(0, 150) + "..."
                    : data?.details}
                </p>
                <div className="grid grid-cols-4 lg:grid-cols-5 gap-2">
                  {data?.technology?.map((tech, i) => (
                    <p
                      key={i}
                      className="text-xs text-center font-semibold text-gray-800 px-4 py-1 bg-gray-50 rounded-lg"
                    >
                      {tech}
                    </p>
                  ))}
                </div>

                <button className="hidden absolute bottom-0 left-24 transform -translate-x-1/2 translate-y-full group-hover:-translate-y-5 transition-all duration-500 bg-blue-900 text-white px-4 py-2 rounded-lg lg:flex gap-2 text-sm hover:bg-blue-600">
                  {`let's chat`}
                  <FaArrowRight className="my-auto" />
                </button>

                <button className="lg:hidden mt-5 bg-blue-900 text-white px-4 py-2 rounded-lg flex gap-2 text-sm hover:bg-blue-600">
                  {`let's chat`}
                  <FaArrowRight className="my-auto" />
                </button>
              </div>
              <div className="hidden md:block md:col-span-1 relative my-auto">
                <Image
                  className="transform transition-transform duration-400 group-hover:scale-150"
                  src={data?.image}
                  alt="logo"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

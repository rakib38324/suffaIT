import React from "react";
import { FaAccusoft, FaArrowRight, FaCodeBranch } from "react-icons/fa";
// import video from "../../assests/video.mp4";
import { GiTeamIdea } from "react-icons/gi";
const Banner = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        className="absolute top-1/2 left-1/2 w-full h-full object-cover transform -translate-x-1/2 -translate-y-1/2 z-[-1]"
        autoPlay
        loop
        muted
      >
        <source
          src="https://storage.googleapis.com/madebygoog.appspot.com/grow-ext-cloud-images-uploads/home_desktop5_9DCE7153.mp4"
          type="video/mp4"
        />
      </video>
      <div className="relative z-10  h-full text-white  bg-black opacity-85 p-2">
        <div className="max-w-screen-xl mx-auto ">
          <p className="lg:w-2/3 pt-10 lg:pt-20 font-bold text-3xl md:text-6xl lg:text-6xl ">
            Empower your business with
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-red-600 to-pink-700">
              {" "}
              top-class software
            </span>{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-600 via-red-500 to-pink-500">
              {" "}
              development
            </span>
          </p>

          <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-10 my-10">
            <div className="bg-gray-900  p-5 rounded-2xl my-1">
              <p className="text-2xl font-bold">
                Team <br />
                Augmentation
              </p>
              <p className="mt-4">Enabling your team to reach project goals.</p>

              <div className="flex justify-between mt-5 md:mt-20">
                <div className="">
                  <GiTeamIdea className="text-4xl" />
                </div>
                <p className="border rounded-full p-3 cursor-pointer">
                  <FaArrowRight />
                </p>
              </div>
            </div>
            <div className="bg-gray-900  p-5 rounded-2xl my-1">
              <p className="text-2xl font-bold">
                Custom software <br />
                development
              </p>
              <p className="mt-4">Build software tailored to your business</p>

              <div className="flex justify-between mt-5 md:mt-20">
                <div className="">
                  <FaAccusoft className="text-4xl" />
                </div>
                <p className="border rounded-full p-3 cursor-pointer">
                  <FaArrowRight />
                </p>
              </div>
            </div>
            <div className="bg-gray-900  p-5 rounded-2xl my-1">
              <p className="text-2xl font-bold">
                AI <br />
                development
              </p>
              <p className="mt-4">Enabling your team to reach project goals.</p>

              <div className="flex justify-between mt-5 md:mt-20">
                <div className="">
                  <FaCodeBranch className="text-4xl" />
                </div>
                <p className="border rounded-full p-3 cursor-pointer">
                  <FaArrowRight />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

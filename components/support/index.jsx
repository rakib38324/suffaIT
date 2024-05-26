import Image from "next/image";
import React from "react";
import logo1 from "../../assests/ic-ch-1.svg";
import logo2 from "../../assests/ic-ch-2.svg";
import logo3 from "../../assests/ic-ch-3.svg";
import logo4 from "../../assests/ic-ch-4.svg";
import logo5 from "../../assests/ic-ch-5.svg";
import logo6 from "../../assests/ic-ch-6.svg";
import logo7 from "../../assests/ic-ch-7.svg";
import logo8 from "../../assests/ic-ch-8.svg";

const Support = () => {
  const data = [
    {
      id: 1,
      image: logo1,
      title: "althcare",
    },
    {
      id: 2,
      image: logo2,
      title: "Finance",
    },
    {
      id: 3,
      image: logo3,
      title: "Technology",
    },
    {
      id: 4,
      image: logo4,
      title: "Retail and E-commerce",
    },
    {
      id: 5,
      image: logo5,
      title: "SaaS",
    },
    {
      id: 6,
      image: logo6,
      title: "Business services",
    },
    {
      id: 7,
      image: logo7,
      title: "Media and entertainment",
    },
    {
      id: 8,
      image: logo8,
      title: "AI",
    },
  ];

  return (
    <div className="max-w-screen-xl mx-auto bg-slate-100 p-2">
      <h1 className="text-5xl font-bold text-center pt-20">
        How we can help you
      </h1>
      <p className="text-center my-5">
        Using powerful, industry-specific software solutions, our team can help
        you achieve your business goals.
      </p>

      <div className="my-20">
        <div className="snap-x overflow-x-scroll flex gap-2 hide-scrollbar">
          {data?.map((item, i) => (
            <div key={i} className="w-48 bg-gradient-to-b from-slate-50 via-slate-50 to-slate-100 p-8 rounded-3xl snap-center flex-shrink-0">
              <Image className="mx-auto" src={item?.image} alt="logo" />
              <p className="text-center text-xs pt-5 font-bold">{item?.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Support;

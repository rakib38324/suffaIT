import Link from "next/link";
import Image from "next/image";
import { FaBars } from "react-icons/fa";
import logo from "../../../assests/logo.png";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Header({ setOpen }) {
  const [drawer, setDrawer] = useState(false);
  const [drawerName, setDrawerName] = useState("");

  // Function to handle mouse enter and leave events
  const handleMouseEnter = (name) => {
    setDrawer(true);
    setDrawerName(name);
  };

  const handleMouseLeave = (name) => {
    setDrawer(false);
    setDrawerName(name);
  };

  const router = useRouter();
  const navigation = [
    { label: "About us", url: "/about-us" },
    { label: "Cases", url: "/about-us" },
    {
      label: "Services",
      url: "/services",
    },
    { label: "Solution", url: "/solution" },
    { label: "Clients", url: "/solution" },
    { label: "Blogs", url: "/blogs" },
    { label: "Career", url: "/career" },
  ];

  return (
    <div className=" bg-blue-950  w-full z-30 ">
      <div className=" container mx-auto flex items-center justify-between px-2">
        <Link href="/">
          <Image className="size-24" src={logo} alt="Logo" />
        </Link>

        <nav className="hidden lg:flex items-center">
          <ul className="flex gap-[24px] text-white ">
            {navigation?.map((item) => (
              <li key={item.label} className="relative group">
                <Link
                  href={item.url}
                  className={`hover:font-bold hover:border-b-2 hover:border-white py-9 ${
                    router.pathname === item.url ? "font-bold border-b-2 border-white" : ""
                  }`}
                  onMouseEnter={() => handleMouseEnter(item?.label)}
                  onMouseLeave={() => handleMouseLeave(item?.label)}
                >
                  {item?.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link
          href="/contact-us"
          className="font-bold text-white py-[13px] px-[24px] border border-white rounded-full ml-[1.5rem] hover:bg-white hover:text-black"
        >
          {`Let's Chat`}
        </Link>

        <button className="lg:hidden" onClick={() => setOpen(true)}>
          <FaBars className="text-white " />
        </button>
      </div>

      {drawer && drawerName === "Services" && (
        <div
          className="absolute z-50 h-[200px] w-full bg-blue-200"
          onMouseEnter={() => handleMouseEnter("Services")}
          onMouseLeave={() => handleMouseLeave("Services")}
        >
          <div className="grid grid-cols-2 gap-10 p-5">
            <div>
              <p className="text-2xl font-bold">Our Services</p>
              <p className="my-5">
                We provide a comprehensive range of services, from mobile apps
                to AI-driven solutions - all supplemented by agile management
                and product consulting expertise.
              </p>
            </div>
            <div className="grid grid-cols-2 mt-5">
              <p className="cursor-pointer hover:font-semibold">
                Mobile Development
              </p>
              <p className="cursor-pointer hover:font-semibold">
                Frontend Development
              </p>
              <p className="cursor-pointer hover:font-semibold">
                Backend Development
              </p>
              <p className="cursor-pointer hover:font-semibold">
                Web Development
              </p>
              <p className="cursor-pointer hover:font-semibold">
                Team Augmentation
              </p>
            </div>
          </div>
        </div>
      )}

      {drawer && drawerName === "Solution" && (
        <div
          className="absolute z-50 h-[200px] w-full bg-blue-200"
          onMouseEnter={() => handleMouseEnter("Solution")}
          onMouseLeave={() => handleMouseLeave("Solution")}
        >
          <div className="grid grid-cols-2 gap-10 p-5">
            <div>
              <p className="text-2xl font-bold">Our Solutions</p>
              <p className="my-5">
                In Diffco we turn your business needs and product ideas into
                digital solutions, starting from mobile applications to
                sophisticated AI-driven solutions. All of our services are
                accompanied by well-organized management and product consulting
                expertise.
              </p>
            </div>
            <div className="grid grid-cols-2 mt-5">
              <p className="cursor-pointer hover:font-semibold">
                AI-Driven software
              </p>
              <p className="cursor-pointer hover:font-semibold">
                Enterprise Development
              </p>
              <p className="cursor-pointer hover:font-semibold">
                Custom Development
              </p>
              <p className="cursor-pointer hover:font-semibold">
                Healthcare Development
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

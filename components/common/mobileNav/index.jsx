import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from "../../../assests/logo.png";
import { FaWindowClose } from "react-icons/fa";
export default function MobileNav({ setOpen }) {
  const [subNavDrawer, setSubNavDrawer] = useState(false);
  const [subNavName, setSubNavName] = useState("");
  // console.log(subNavDrawer)
  const navigation = [
    { label: "Home", url: "/" },
    { label: "About us", url: "/about-us" },
    { label: "Cases", url: "/" },
    {
      label: "Services",
      url: "/",
      subNav: [
        { label: "All Services", url: "/services" },
        { label: "Web Development", url: "/" },
        { label: "Mobile Development", url: "/" },
        { label: "Frontend Development", url: "/" },
        { label: "Backend Development", url: "/" },
        { label: "Team Augmentation", url: "/" },
      ],
    },
    {
      label: "Solutions",
      url: "/",
      subNav: [
        { label: "AI-Driven software", url: "/" },
        { label: "Custom Development", url: "/" },
        { label: "Enterprise Development", url: "/" },
        { label: "Healthcare Development", url: "/" },
      ],
    },
    { label: "Clients", url: "/" },
    { label: "Blogs", url: "/" },
    { label: "Career", url: "/" },
  ];

  return (
    <aside className="fixed top-0 left-0 w-[300px] h-full bg-blue-900 z-[100]">
      <nav className="px-[1.25rem]">
        <div className="flex items-center justify-between py-[1.5rem]">
          <Link href="/">
            <Image className="size-20" src={logo} alt="Logo" />
          </Link>
          <button onClick={() => setOpen(false)}>
            <FaWindowClose className=" text-white" />
          </button>
        </div>
        <ul className="flex flex-col gap-[12px]">
          {navigation?.map((item) => (
            <li key={item.label} className="text-white relative group">
              {item?.label === "Services" || "Solutions" ? (
                <p
                  onClick={() => {
                    setSubNavDrawer(true);
                    setSubNavName(item?.label);
                  }}
                >
                  {item.label}
                </p>
              ) : (
                <Link href={item?.url}>{item.label}</Link>
              )}

              {item?.subNav && (
                <ul
                  className={`z-50 p-5 absolute space-y-2 rounded bg-blue-800 text-white  border border-gray-200 left-0 top-full ${
                    subNavDrawer === true && item?.label === subNavName
                      ? "block"
                      : "hidden"
                  }`}
                >
                  {item.subNav.map((subNavItem) => (
                    <li className="hover:font-semibold" key={subNavItem.label}>
                      <Link href={subNavItem.url}>{subNavItem.label}</Link>
                    </li>
                  ))}

                  <li
                    onClick={() => {
                      setSubNavDrawer(false);
                      setSubNavName("");
                    }}
                    className="absolute top-0 right-3 font-bold"
                  >
                    <FaWindowClose className=" text-white" />
                  </li>
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

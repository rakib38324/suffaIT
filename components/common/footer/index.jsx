import Image from "next/image";
import React from "react";
import { CiMail } from "react-icons/ci";
import logo from '../../../assests/logo.png'
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="lg:h-[540px] bg-blue-950">
      <div className="max-w-screen-xl mx-auto py-10 md:py-[100px] text-white p-1">
        <div className="md:grid md:grid-cols-5  md:gap-10 lg:gap-[130px] mb-10 md:mt-0">
          <div className="col-span-2">
            <Image className="size-32" src={logo} alt="logo" />
            

            <div className="lg:grid lg:grid-cols-2 mt-5 text-white">
              <div className="">
                <p className="text-xl font-medium font-[#BarlowCondensed]">
                  Give us a call
                </p>
                <p className="text-base font-normal font-[#Roboto]">
                01620925353
                </p>

                <p className="text-xl font-medium font-[#BarlowCondensed] mt-4">
                  Email us on
                </p>
                <p className="text-base font-normal font-[#Roboto]">
                suffaitcontact@gmail.com 
                </p>
              </div>
              <div className="mt-5 lg:mt-0">
                <p className="text-xl font-medium font-[#BarlowCondensed]">
                  Be the first to know
                </p>

                <div className="flex justify-between mt-2 p-2 border rounded-lg">
                  <input
                    className="bg-blue-950 w-3/4 "
                    type="text"
                    placeholder="Enter your email"
                  />
                  <CiMail className="text-2xl" />
                </div>

                <div className="flex justify-around text-blue-100 mt-5">
                  <FaFacebookF  className="cursor-pointer" />
                  <FaTwitter  className="cursor-pointer" />
                  <FaYoutube  className="cursor-pointer" />
                  <FaInstagram  className="cursor-pointer" />
                  <FaLinkedinIn  className="cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-3 mt-10 md:mt-0">
            <div className="grid grid-cols-3 gap-10">
              <div>
                <p className="text-xl font-[#BarlowCondensed] pb-5 border-b ">
                  Features
                </p>
                <p className="text-base text-[#FFFFFFBF] pt-5">Invoicing</p>
                <p className="text-base text-[#FFFFFFBF] pt-3">
                  Customer Portal
                </p>
                <p className="text-base text-[#FFFFFFBF] pt-3">Vendor Portal</p>
                <p className="text-base text-[#FFFFFFBF] pt-3">Estimates</p>
                <p className="text-base text-[#FFFFFFBF] pt-3">Expense</p>
                <p className="text-base text-[#FFFFFFBF] pt-3">
                  Bill management
                </p>
              </div>
              <div>
                <p className="text-xl font-[#BarlowCondensed] pb-5 border-b ">
                  Solutions
                </p>
                <p className="text-base text-[#FFFFFFBF] pt-5">Bookkeeping </p>
                <p className="text-base text-[#FFFFFFBF] pt-3">Accounting </p>
                <p className="text-base text-[#FFFFFFBF] pt-3">
                  Startup accounting{" "}
                </p>
                <p className="text-base text-[#FFFFFFBF] pt-3">CRM system </p>
                <p className="text-base text-[#FFFFFFBF] pt-3">
                  Customer management
                </p>
                <p className="text-base text-[#FFFFFFBF] pt-3">
                  Banking solutions
                </p>
              </div>
              <div>
                <p className="text-xl font-[#BarlowCondensed] pb-5 border-b ">
                  Quick links
                </p>
                <p className="text-base text-[#FFFFFFBF] pt-5">Why us</p>
                <p className="text-base text-[#FFFFFFBF] pt-3">pricing </p>
                <p className="text-base text-[#FFFFFFBF] pt-3">plan compare </p>
                <p className="text-base text-[#FFFFFFBF] pt-3">
                  Customer reviews
                </p>
                <p className="text-base text-[#FFFFFFBF] pt-3">Expense</p>
                <p className="text-base text-[#FFFFFFBF] pt-3">Support</p>
              </div>
            </div>
          </div>
        </div>

        <hr />

        <div className="md:flex justify-between mt-5 text-[#FFFFFFBF] font-[#Roboto]">
          <p>© SuffaIT All Rights Reserved</p>
          <div className="md:flex justify-around gap-10 mt-5 md:mt-0">
            <p>Our Services</p>
            <p>Careers</p>
            <p>FAQs</p>
            <p>Privacy policy</p>
            <p>Terms and conditions</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
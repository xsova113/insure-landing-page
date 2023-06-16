"use client";

import Image from "next/image";
import { footerItems } from "@/libs/constants";
import { SocialButtons, FooterImages } from "./";
import { Karla } from "next/font/google";
import { Link } from "react-scroll";

const karla = Karla({ subsets: ["latin"] });

const Footer = () => {
  return (
    <footer
      id="footer"
      className="mt-32 flex flex-col relative md:px-24 md:py-16 py-24 bg-[#FAFAFA]"
    >
      <FooterImages />
      <div className="z-10 flex flex-col md:flex-row justify-between max-md:items-center">
        <div className="relative w-28 h-5 mb-10 flex">
          <Image src={"/images/logo.svg"} fill alt="logo" />
        </div>
        <SocialButtons />
      </div>
      <hr className="mb-12" />
      <div
        className={`grid md:grid-cols-4 max-md:mx-auto max-md:text-center z-10 font-bold tracking-wider ${karla.className}`}
      >
        {footerItems.map((item) => (
          <div key={item.title}>
            <h1 className="pb-8 max-md:mt-8 text-[#837D87]">{item.title}</h1>
            <div className="flex flex-col leading-8">
              {item.links.map((link) => (
                <Link
                  key={link}
                  className="cursor-pointer text-[#2B272F] hover:underline transition"
                  to={"footer"}
                  smooth
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;

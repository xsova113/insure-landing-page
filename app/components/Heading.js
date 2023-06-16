"use client";

import { navItems } from "@/libs/constants";
import { Karla } from "next/font/google";
import Image from "next/image";
import { useState } from "react";
import { Transition } from "@headlessui/react";

const karla = Karla({ subsets: ["latin"] });

const Heading = () => {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <Transition
        show={open}
        enter="transition duration-200"
        enterFrom="-translate-y-full opacity-0"
        enterTo="translate-y-0 opacity-100"
        leave="transition duration-200"
        leaveFrom="translate-y-0 opacity-100"
        leaveTo="-translate-y-full opacity-0"
        className="
         absolute duration-300 z-20 bg-no-repeat bg-[#2B272F] w-full h-[630px] top-[65px]"
        onClick={() => setOpen(false)}
      >
        <Image
          src={"images/bg-pattern-mobile-nav.svg"}
          alt="background patter"
          width={600}
          height={600}
          className="absolute bottom-0"
        />
      </Transition>

      <nav
        className={`${karla.className} flex flex-col md:flex-row justify-between bg-[#FAFAFA] px-8 md:px-24 py-5`}
      >
        <div className="flex justify-between w-full items-center">
          <div className="relative w-28 h-5">
            <Image
              src={"/images/logo.svg"}
              fill
              alt="logo"
              className="cursor-pointer"
            />
          </div>

          {/* nav bar items DESKTOP view */}
          <div className="md:flex hidden gap-8 items-center uppercase">
            {navItems.map((item) => (
              <span
                key={item}
                className="text-[#2D2640]/80 hover:text-[#2B272F] cursor-pointer"
              >
                {item}
              </span>
            ))}
            <button className="border border-black px-5 py-1 hover:bg-black hover:text-white cursor-pointer transition">
              VIEW PLANS
            </button>
          </div>
          <div className="md:hidden block">
            <Image
              src={"/images/icon-hamburger.svg"}
              alt="burger-icon"
              width={25}
              height={25}
              hidden={open}
              onClick={() => setOpen(true)}
            />
            <Image
              src={"/images/icon-close.svg"}
              alt="burger-icon"
              width={25}
              height={25}
              hidden={!open}
              onClick={() => setOpen(false)}
            />
          </div>
        </div>

        {/* nav bar items MOBILE view */}
        <Transition
          show={open}
          enter="transition delay-300 duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          className="md:hidden min-w-full flex justify-center z-30"
        >
          <Transition.Child
            enter="transition duration-500"
            enterFrom="-translate-y-full"
            enterTo="translate-y-0"
            leave="transition duration-500"
            leaveFrom="translate-y-0"
            leaveTo="-translate-y-full"
            className="absolute top-24 text-center gap-8 flex flex-col text-xl tracking-wider"
          >
            {navItems.map((item) => (
              <span
                key={item}
                className="text-white hover:text-[#aeaeaf] cursor-pointer"
              >
                {item}
              </span>
            ))}
            <button className="border border-white px-20 py-2 hover:bg-white text-white hover:text-black cursor-pointer transition">
              VIEW PLANS
            </button>
          </Transition.Child>
        </Transition>
      </nav>
    </header>
  );
};

export default Heading;

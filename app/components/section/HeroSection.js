"use client";

import Image from "next/image";
import HeroText from "./components/HeroText";

const HeroSection = () => {
  return (
    <section className="min-h-[850px]">
      <div className="flex flex-col-reverse md:flex-row bg-[#2D2640] w-full  md:px-24 gap-4">
        <HeroText />

        <div className="md:flex-1 md:-mb-40 md:mt-20">
          <div className="md:w-[500px] md:h-[620px] h-[500px] w-full relative">
            <Image
              priority
              src={"/images/image-intro-desktop.jpg"}
              fill
              alt="intro image"
              className="object-cover"
            />
          </div>

          <Image
            src={"/images/bg-pattern-intro-left-mobile.svg"}
            alt="bg-pattern"
            width={150}
            height={150}
            className="block md:hidden absolute z-10"
          />
        </div>
        {/* background MOBILE pattern image */}
        <Image
          src={"/images/bg-pattern-intro-right-mobile.svg"}
          alt="bg-pattern"
          width={150}
          height={150}
          className="block md:hidden top-[930px] absolute right-0 z-10"
        />
        {/* background DESKTOP patter image */}
        <Image
          src={"/images/bg-pattern-intro-right-desktop.svg"}
          alt="bg-pattern"
          width={350}
          height={350}
          className="hidden md:block absolute right-0 z-10"
        />
        <Image
          src={"/images/bg-pattern-intro-left-desktop.svg"}
          alt="bg-pattern"
          width={150}
          height={150}
          className="hidden md:block absolute left-0 -bottom-24 z-10"
        />
      </div>
    </section>
  );
};

export default HeroSection;

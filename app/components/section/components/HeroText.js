import { Karla } from "next/font/google";
import React from "react";

const karla = Karla({ subsets: ["latin"] });

const HeroText = () => {
  return (
    <div className="flex flex-1 flex-col py-20 max-md:text-center text-white gap-8 max-md:items-center">
      <hr className="max-md:hidden w-[200px] border-t-2 border-white pb-10" />
      <h1 className="text-5xl lg:text-6xl md:text-5xl leading-[50px]">
        Humanizing <br /> your insurance.
      </h1>
      <p>
        Get your life insurance coverage easier and faster. We blend our
        expertise and technology to help you find the plan that&apos;s right for
        you. Ensure you and your loved ones are protected.
      </p>
      <button
        className={`border border-white w-[150px] mt-4 px-5 py-2 text-white hover:bg-white hover:text-black cursor-pointer transition ${karla.className}`}
      >
        VIEW PLANS
      </button>
    </div>
  );
};

export default HeroText;

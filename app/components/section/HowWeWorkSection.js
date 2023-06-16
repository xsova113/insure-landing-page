import { Karla } from "next/font/google";
import Image from "next/image";

const karla = Karla({ subsets: ["latin"] });

const HowWeWorkSection = () => {
  return (
    <section className="bg-[#2D2640] mb-32 relative mx-8 md:mx-24 items-center max-md:text-center flex flex-col md:flex-row mt-32 py-16 px-10 md:px-24 md:py-20 justify-between gap-8 overflow-hidden">
      <h1 className="text-white text-4xl lg:text-5xl">
        Find out more
        <br /> about how we work
      </h1>
      <button
        className={`z-10 uppercase ${karla.className} text-white border border-white py-2 px-5 hover:text-[#2B272F] hover:bg-white transition tracking-widest`}
      >
        How we work
      </button>

      <Image
        src={"/images/bg-pattern-how-we-work-desktop.svg"}
        alt="bg-pattern-mobile"
        width={480}
        height={450}
        className="hidden md:block absolute right-0 top-0"
      />
      <Image
        src={"/images/bg-pattern-how-we-work-mobile.svg"}
        alt="bg-pattern-mobile"
        width={200}
        height={200}
        className="md:hidden block absolute right-0 top-0"
      />
    </section>
  );
};

export default HowWeWorkSection;

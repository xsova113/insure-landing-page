import { featuresItems } from "@/libs/constants";
import Image from "next/image";
import { Karla } from "next/font/google";

const karla = Karla({ subsets: ["latin"] });

const FeaturesSection = () => {
  return (
    <section className="flex flex-col px-8 md:px-24 max-md:items-center max-md:text-center gap-20">
      <hr className="border-t border-[#837D87] w-[150px] max-md:mt-44" />
      <h1 className="text-6xl text-[#2B272F]">We&apos;re different</h1>
      <div className="flex flex-col md:flex-row justify-between gap-12 mt-8">
        {featuresItems.map((item) => (
          <div key={item.title} className="flex flex-col gap-6">
            <Image
              src={item.image}
              alt="image"
              width={80}
              height={50}
              className="pb-4 max-md:self-center"
            />
            <h1 className="text-3xl text-[#2B272F]">{item.title}</h1>
            <p className={`text-[#837D87] ${karla.className}`}>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;

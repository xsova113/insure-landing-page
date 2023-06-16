import Image from "next/image";

const FooterImages = () => {
  return (
    <>
      <Image
        src={"/images/bg-pattern-footer-desktop.svg"}
        alt="footer-image"
        width={500}
        height={500}
        className="hidden md:block absolute top-0 left-0"
      />
      <Image
        src={"/images/bg-pattern-footer-mobile.svg"}
        alt="footer-image"
        width={450}
        height={450}
        className="md:hidden block absolute top-0 left-0"
      />
    </>
  );
};

export default FooterImages;

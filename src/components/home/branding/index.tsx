"use client";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const brand_logo = [
  "/assets/brand-logo/brand-a.svg",
  "/assets/brand-logo/brand-b.svg",
  "/assets/brand-logo/brand-c.svg",
  "/assets/brand-logo/brand-d.svg",
  "/assets/brand-logo/brand-e.svg",
  "/assets/brand-logo/brand-f.svg",
  "/assets/brand-logo/brand-g.svg",
];

const Branding = () => {
  return (
    <section className="py-5">
      <Marquee
        speed={40}
        pauseOnHover
        gradient={false}
        className="[&>div]:flex [&>div]:items-center"
        autoFill
      >
        {brand_logo.map((logo, index) => (
          <div key={index} className="shrink-0 w-35 h-10 mx-10 relative">
            <Image
              src={logo}
              alt={`Brand ${index + 1}`}
              fill
              className="object-contain"
            />
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default Branding;

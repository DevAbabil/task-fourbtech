"use client";
import { brand_logo } from "@/data";
import Image from "next/image";
import Marquee from "react-fast-marquee";

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

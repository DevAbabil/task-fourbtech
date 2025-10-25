"use client";

import { Button, Logo, Navbar } from "@/components";
import Image from "next/image";
import ActiveUsers from "./ActiveUsers";
import PaymentReceived from "./PaymentReceived";

const Hero = () => {
  return (
    <section className="m-4 md:m-6 bg-[url('/assets/hero-bg.png')] bg-cover bg-center rounded-3xl">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4 md:py-6 flex-wrap gap-4">
          <Logo />
          <Navbar />
          <Button variant="fill" className="w-full sm:w-auto">
            Contact Us
          </Button>
        </div>

        <div className="flex flex-col-reverse md:flex-row justify-between">
          <div className="text-center md:text-left py-26">
            <p className="text-sm md:text-base text-muted-foreground font-semibold tracking-wide">
              EASY PAYMENT
            </p>

            <h1 className="text-3xl sm:text-5xl md:text-7xl font-extrabold leading-tight text-primary">
              Pay{" "}
              <span className="relative inline-block text-primary">
                fast and smarter
                <span className="absolute -bottom-2 left-0 w-full h-2.5 bg-[url('/assets/hero-heading-vector.png')] bg-no-repeat bg-size-[100%_8px] sm:h-3.5 md:h-[18px]"></span>
              </span>
              <br className="hidden sm:block" />
              from anywhere
            </h1>

            <p className="text-sm md:text-base text-muted-foreground font-medium py-6">
              Experience the future of payments — fast, secure, and tailored for
              the next generation&apos;s convenience and trust.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3 pt-8">
              <button className="px-8 bg-foreground text-primary-foreground flex items-center gap-x-2 rounded-md p-2">
                <Image
                  src={"/assets/apple.svg"}
                  width={25}
                  height={25}
                  alt="app store"
                />
                <div>
                  <p className="text-[9px]">Download on the</p>
                  <h3 className="font-bold">App Store</h3>
                </div>
              </button>
              <button className="px-8 bg-foreground text-primary-foreground flex items-center gap-x-2 rounded-md p-2">
                <Image
                  src={"/assets/playstore.svg"}
                  width={25}
                  height={25}
                  alt="google play store"
                />
                <div>
                  <p className="text-[9px] text-start">GET IT ON</p>
                  <h3 className="font-bold">Google Play</h3>
                </div>
              </button>
            </div>
          </div>

          <div className="px-[300px] py-[295px] relative z-1">
            <PaymentReceived className="absolute bottom-24 left-40" />
            <ActiveUsers className="relative top-10 -right-69" />
            <div className="bg-[url('/assets/hero-man.png')] bg-no-repeat transform scale-x-[-1]  bg-cover w-[620px] h-[600px]  absolute bottom-0 right-0 -z-1"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import Image from "next/image";
import Button from "@/components/shared/Button";
import GuideCards from "./GuideCards";

const Guide = () => {
  return (
    <section className="px-5 mt-10 pt-20 pb-20 bg-[#F6F6F6]">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-5">
          <div>
            <h3 className="text-[#932EFA] font-semibold text-sm md:text-base">
              HOW IT WORKS
            </h3>
            <h2 className="text-3xl md:text-[40px] font-bold max-w-3xl mt-3 leading-tight">
              Make payments, transfers, and more in 3 simple steps
            </h2>
          </div>
          <Button variant="fill" className="w-full md:w-auto">
            Get Started Now
          </Button>
        </div>

        <GuideCards />

        <div className="mt-5 md:mt-10 rounded-xl overflow-hidden w-full h-[250px] sm:h-[400px] md:h-[800px] relative">
          <Image
            src="/assets/guide-large-image.jpg"
            alt="guide large image"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Guide;

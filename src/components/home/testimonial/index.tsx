"use client";
import Image from "next/image";
import { Star } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { testimonials_data } from "@/data";

const Testimonial = () => {
  return (
    <section className="w-full py-12 bg-[#F6F6F6]">
      <div className="mx-auto container px-4">
        <Carousel
          opts={{ loop: true, align: "start" }}
          plugins={[Autoplay({ delay: 3000 })]}
        >
          <div className="flex flex-col lg:flex-row gap-12">
            <motion.div
              className="lg:w-1/3 flex flex-col gap-4 text-center lg:text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-[#932EFA] font-semibold">TESTIMONIAL</h3>
              <h2 className="text-3xl lg:text-[40px] font-bold mt-2">
                We’ve built trust with reviews from real users
              </h2>
              <p className="text-gray-600">
                Boost your credibility by featuring genuine testimonials from
                real users, showcasing their positive experiences and
                satisfaction with Monks Pay services.
              </p>

              <div className="relative justify-center md:justify-start flex items-center gap-3 mt-4">
                <CarouselPrevious className="relative hover:text-primary-foreground hover:bg-foreground size-[45px]" />
                <CarouselNext className="relative hover:bg-transparent text-primary-foreground bg-foreground size-[45px]" />
              </div>
            </motion.div>

            <div className="relative lg:w-2/3">
              <CarouselContent className="flex gap-6">
                {testimonials_data.map((testimonial, index) => (
                  <CarouselItem
                    key={index}
                    className="w-full sm:basis-2/3 lg:basis-1/2 shrink-0 p-4"
                  >
                    <motion.div
                      className="flex flex-col bg-white rounded-2xl p-8 shadow-lg h-full"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                    >
                      <div className="flex mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-6 h-6 ${
                              i < testimonial.rating
                                ? "fill-yellow-400 text-yellow-400"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>

                      <q className="flex-1 text-gray-600 text-lg leading-relaxed">
                        {testimonial.quote}
                      </q>

                      <div className="mt-6 flex items-center gap-4">
                        <Image
                          className="rounded-full object-cover aspect-square w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16"
                          height={64}
                          width={64}
                          alt={testimonial.name}
                          src={testimonial.imgSrc}
                          loading="lazy"
                        />
                        <div>
                          <p className="text-base font-semibold text-gray-900">
                            {testimonial.name}
                          </p>
                          <p className="text-sm text-gray-500">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonial;

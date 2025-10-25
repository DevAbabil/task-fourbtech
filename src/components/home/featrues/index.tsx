"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { features_data } from "@/data";

const Features = () => {
  return (
    <section className="container mx-auto px-5 mt-40 mb-15" id="features">
      <motion.h3
        className="text-center text-[#932EFA] font-semibold"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        FEATURES
      </motion.h3>

      <motion.h2
        className="text-[30px] md:text-[40px] text-center font-bold max-w-3xl mx-auto mt-3"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Why choose Easy Pay for effortless payments?
      </motion.h2>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features_data.map((feature, index) => (
          <motion.div
            key={index}
            className="rounded-xl p-6 flex flex-col items-center gap-4"
            style={{ background: feature.bgColor }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.4 + index * 0.2,
              duration: 0.6,
              ease: "easeOut",
            }}
          >
            <div className="w-12 h-12 flex items-center justify-center">
              <Image
                src={feature.icon}
                alt={feature.heading}
                width={54}
                height={54}
              />
            </div>
            <h4 className="text-lg font-semibold text-foreground">
              {feature.heading}
            </h4>
            <p className="text-sm text-muted-foreground text-center">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;

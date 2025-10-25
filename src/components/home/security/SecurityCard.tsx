"use client";

import { CSSProperties } from "react";
import { motion } from "framer-motion";
import { security_data } from "@/data";

const SecurityCard = () => {
  return (
    <motion.div
      className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8 text-left bg-[url('/assets/security-banner.png')] bg-cover bg-center p-1 md:p-15 rounded-2xl"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.2,
          },
        },
      }}
    >
      {security_data.map((item, index) => {
        const isMiddleColumn = index % 3 === 1;

        return (
          <motion.div
            key={index}
            className={`relative p-6 rounded ${
              isMiddleColumn ? "lg:border-l lg:border-r lg:border-gray-200" : ""
            }`}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6 }}
          >
            <div
              style={{ "--bg-color": item.color } as CSSProperties}
              className="size-7 bg-(--bg-color)/20 flex justify-center items-center rounded-full"
            >
              <div
                className="size-2.5 rounded-full inline-block"
                style={{ backgroundColor: item.color }}
              ></div>
            </div>

            <div className="pt-4">
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default SecurityCard;

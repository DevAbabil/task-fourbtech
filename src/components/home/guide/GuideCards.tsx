"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { guide_data } from "@/data";

const GuideCards = () => {
  return (
    <motion.div
      className="mt-14 bg-white rounded-2xl p-6 md:p-10 flex flex-col md:flex-row justify-between"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        visible: {
          transition: { staggerChildren: 0.3 },
        },
      }}
    >
      {guide_data.map((item, index) => (
        <motion.div
          key={item.id}
          className={`relative flex-1 px-5 md:px-8 py-8 md:py-10 ${
            index === 1 ? "md:border-x border-gray-200" : ""
          }`}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6 }}
        >
          <span className="absolute text-6xl md:text-8xl font-extrabold text-gray-100 -top-3 md:-top-5 left-4 md:left-5 z-0 select-none">
            {item.id}
          </span>

          <div className="relative w-14 h-14 md:w-16 md:h-16 mb-6 z-10">
            <Image
              src={item.icon}
              alt={item.title}
              fill
              className="object-contain"
            />
          </div>

          <h3 className="text-lg md:text-xl font-semibold mb-2 relative z-10">
            {item.title}
          </h3>
          <p className="text-gray-600 text-sm md:text-base relative z-10 max-w-sm">
            {item.description}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default GuideCards;

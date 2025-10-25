"use client";

import Image from "next/image";
import Button from "@/components/shared/Button";
import GuideCards from "./GuideCards";
import { motion } from "framer-motion";

const Guide = () => {
  return (
    <section className="px-5 mt-10 pt-20 pb-20 bg-[#F6F6F6]" id="benefits">
      <div className="container mx-auto">
        <motion.div
          className="flex flex-col md:flex-row justify-between items-start md:items-end gap-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <motion.h3
              className="text-[#932EFA] font-semibold text-sm md:text-base"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              HOW IT WORKS
            </motion.h3>
            <motion.h2
              className="text-3xl md:text-[40px] font-bold max-w-3xl mt-3 leading-tight"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Make payments, transfers, and more in 3 simple steps
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <Button variant="fill" className="w-full md:w-auto">
              Get Started Now
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          <GuideCards />
        </motion.div>

        <motion.div
          className="mt-5 md:mt-10 rounded-xl overflow-hidden w-full h-[250px] sm:h-[400px] md:h-[800px] relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <Image
            src="/assets/guide-large-image.jpg"
            alt="guide large image"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Guide;

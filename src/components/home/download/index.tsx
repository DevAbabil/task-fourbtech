"use client";
import Button from "@/components/shared/Button";
import { motion } from "framer-motion";

const Download = () => {
  return (
    <section className="container mx-auto py-16 px-4">
      <div
        className="relative bg-[url('/assets/download-banner-bg.png')]
                   bg-cover bg-center bg-no-repeat
                   rounded-2xl overflow-hidden 
                   flex flex-col items-center justify-center 
                   text-center text-white p-8 lg:p-16"
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <motion.div
          className="relative z-10 max-w-2xl flex flex-col items-center gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-3xl lg:text-5xl font-bold leading-snug"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Ready to experience seamless, secure payments globally
          </motion.h2>

          <motion.p
            className="text-gray-200 text-base lg:text-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Ready for hassle-free, secure payments anywhere in the world? Start
            using Monks Pay today — it&apos;s fast, free, and built to keep your
            transactions safe.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 mt-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button variant="fill" className="text-base font-semibold">
              Download the App
            </Button>
            <Button
              variant="bordered"
              className="text-base font-semibold border-white text-white hover:bg-white hover:text-black transition"
            >
              Get Started Now
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Download;

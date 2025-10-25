"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const data: Array<{
  icon: string;
  heading: string;
  description: string;
  bgColor: string;
}> = [
  {
    icon: "/assets/icon/payment.svg",
    heading: "Instant payments",
    description: "Send money to friends or family in real-time, for free.",
    bgColor: "#F3F7FF",
  },
  {
    icon: "/assets/icon/no-fee.svg",
    heading: "No hidden fees",
    description: "Clear and simple pricing. Always be aware of your costs.",
    bgColor: "#FBF6EF",
  },
  {
    icon: "/assets/icon/wallet.svg",
    heading: "Digital wallet",
    description: "Store money securely and make fast transfers or purchases.",
    bgColor: "#EEF9FE",
  },
  {
    icon: "/assets/icon/secure.svg",
    heading: "Secure transactions",
    description: "End-to-end encryption for all transactions.",
    bgColor: "#F4EDFC",
  },
];

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

      {/* Main Heading */}
      <motion.h2
        className="text-[30px] md:text-[40px] text-center font-bold max-w-3xl mx-auto mt-3"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Why choose Easy Pay for effortless payments?
      </motion.h2>

      {/* Feature Cards */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {data.map((feature, index) => (
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

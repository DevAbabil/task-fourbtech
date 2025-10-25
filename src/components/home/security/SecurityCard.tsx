"use client";

import { CSSProperties } from "react";
import { motion } from "framer-motion";

const security_data: Array<{
  color: string;
  title: string;
  description: string;
}> = [
  {
    color: "#2E68FD",
    title: "Two-factor authentication",
    description:
      "Two-factor authentication ensures added protection by using verification steps.",
  },
  {
    color: "#FC4343",
    title: "Fraud detection and alerts",
    description:
      "Fraud detection safeguards your money, sending instant alerts for any activity.",
  },
  {
    color: "#08A965",
    title: "Transaction notifications",
    description:
      "Instant notifications for transactions keep you informed to manage your finances.",
  },
  {
    color: "#3B7793",
    title: "Biometric access",
    description:
      "Easily and securely log in with biometric features, and facial recognition.",
  },
  {
    color: "#D77E1B",
    title: "End-to-end encryption",
    description:
      "By encryption, protecting your data from unauthorized access.",
  },
  {
    color: "#932EFA",
    title: "24/7 Protection support",
    description:
      "Our dedicated team is available around the clock to help you.",
  },
];

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

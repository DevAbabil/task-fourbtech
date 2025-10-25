"use client";

import SecurityCard from "./SecurityCard";
import { motion } from "framer-motion";

const Security = () => {
  return (
    <section className="px-5 mt-10 pt-20 pb-20" id="security">
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
              SECURITY
            </motion.h3>
            <motion.h2
              className="text-3xl md:text-[40px] font-bold max-w-3xl mt-3 leading-tight md:w-lg"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              We protect your money at every step with Easy Pay
            </motion.h2>
          </div>

          <motion.p
            className="md:w-md"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Easy Pay ensures your money is protected at every step with advanced
            encryption, real-time monitoring, and multi-factor authentication.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.3 } },
          }}
          className="mt-10"
        >
          <SecurityCard />
        </motion.div>
      </div>
    </section>
  );
};

export default Security;

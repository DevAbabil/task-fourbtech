"use client";
import Image from "next/image";
import Link from "next/link";
import Logo from "./Logo";
import { motion } from "framer-motion";

interface Ilinks {
  sort: Array<{ label: string; path: string }>;
  others: Array<{ label: string; path: string }>;
}

const links: Ilinks = {
  sort: [
    { label: "Features", path: "#" },
    { label: "How it works", path: "#" },
    { label: "Security", path: "#" },
    { label: "Testimonial", path: "#" },
  ],
  others: [
    { label: "Privacy policy", path: "#" },
    { label: "Terms & Conditions", path: "#" },
    { label: "404", path: "#" },
  ],
};

const Footer = () => {
  return (
    <footer className="bg-background text-foreground relative overflow-hidden">
      <div className="absolute inset-0 z-10">
        <Image
          src="/assets/footer-elips.svg"
          alt="Footer Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="container mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-12 gap-8 relative z-10">
        <motion.div
          className="md:col-span-8 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block">
            <Logo />
          </div>
          <p className="text-muted-foreground max-w-md">
            Easy Pay offers secure, seamless, and fee-free payments for
            effortless global transactions.
          </p>
        </motion.div>

        <motion.div
          className="md:col-span-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h3 className="font-semibold mb-3 text-foreground">Short links</h3>
          <ul className="space-y-2 text-muted-foreground">
            {links.sort.map((link, index) => (
              <motion.li
                key={link.label}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
              >
                <Link
                  href={link.path}
                  className="hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          className="md:col-span-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="font-semibold mb-3 text-foreground">Other Pages</h3>
          <ul className="space-y-2 text-muted-foreground">
            {links.others.map((link, index) => (
              <motion.li
                key={link.label}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              >
                <Link
                  href={link.path}
                  className="hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>

      <motion.div
        className="container mx-auto border-t border-muted-foreground/20 text-center py-4 text-sm relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        2024 © Easy Pay. All rights reserved. Fintech Landing Page by MUHIB
      </motion.div>
    </footer>
  );
};

export default Footer;

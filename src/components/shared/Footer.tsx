import Image from "next/image";
import Link from "next/link";
import Logo from "./Logo";

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
        <div className="md:col-span-8 space-y-4">
          <div className="inline-block">
            <Logo />
          </div>
          <p className="text-muted-foreground max-w-md">
            Easy Pay offers secure, seamless, and fee-free payments for
            effortless global transactions.
          </p>
        </div>

        <div className="md:col-span-2">
          <h3 className="font-semibold mb-3 text-foreground">Short links</h3>
          <ul className="space-y-2 text-muted-foreground">
            {links.sort.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.path}
                  className="hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2">
          <h3 className="font-semibold mb-3 text-foreground">Other Pages</h3>
          <ul className="space-y-2 text-muted-foreground">
            {links.others.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.path}
                  className="hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container mx-auto border-t border-muted-foreground/20 text-center py-4 text-sm relative z-10">
        2024 © Easy Pay. All rights reserved. Fintech Landing Page by MUHIB
      </div>
    </footer>
  );
};

export default Footer;

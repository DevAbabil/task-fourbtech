import Link from "next/link";

const NavItem: Array<{ label: string; path: string }> = [
  {
    label: "Features",
    path: "#features",
  },
  {
    label: "Pricing",
    path: "#pricing",
  },
  {
    label: "Security",
    path: "#security",
  },
  {
    label: "Benefits",
    path: "#benefits",
  },
];

const Navbar = () => {
  return (
    <nav className="flex justify-center items-center flex-wrap gap-8">
      {NavItem.map(({ label, path }) => (
        <Link
          href={path}
          key={path}
          className="text-muted-foreground font-semibold"
        >
          {label}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;

import { Button, Logo, Navbar } from "@/components";

const Hero = () => {
  return (
    <section className="m-6 bg-[url('/assets/hero-bg.png')] bg-cover bg-center rounded-3xl">
      <div className="container mx-auto">
        <div className="flex justify-between items-center py-6">
          <Logo />
          <Navbar />
          <Button variant="fill">Contact Us</Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

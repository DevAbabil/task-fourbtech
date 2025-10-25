import Button from "@/components/shared/Button";

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

        <div className="relative z-10 max-w-2xl flex flex-col items-center gap-6">
          <h2 className="text-3xl lg:text-5xl font-bold leading-snug">
            Ready to experience seamless, secure payments globally
          </h2>

          <p className="text-gray-200 text-base lg:text-lg leading-relaxed">
            Ready for hassle-free, secure payments anywhere in the world? Start
            using Monks Pay today — it&apos;s fast, free, and built to keep your
            transactions safe.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Button variant="fill" className="text-base font-semibold">
              Download the App
            </Button>
            <Button
              variant="bordered"
              className="text-base font-semibold border-white text-white hover:bg-white hover:text-black transition"
            >
              Get Started Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;

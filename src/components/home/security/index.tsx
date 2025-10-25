import SecurityCard from "./SecurityCard";

const Security = () => {
  return (
    <section className="px-5 mt-10 pt-20 pb-20">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-5">
          <div>
            <h3 className="text-[#932EFA] font-semibold text-sm md:text-base">
              SECURITY
            </h3>
            <h2 className="text-3xl md:text-[40px] font-bold max-w-3xl mt-3 leading-tight w-lg">
              We protect your money at every step with Easy Pay
            </h2>
          </div>

          <p className="w-md">
            Easy Pay ensures your money is protected at every step with advanced
            encryption, real-time monitoring, and multi-factor authentication.
          </p>
        </div>

        <SecurityCard />
      </div>
    </section>
  );
};

export default Security;

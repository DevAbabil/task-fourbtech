import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex justify-center items-center gap-2">
      <Image src={"/assets/logo.png"} alt="logo" height={40} width={40} />
      <span className="font-bold text-[28px]">Easy Pay</span>
    </div>
  );
};

export default Logo;

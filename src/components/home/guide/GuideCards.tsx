import Image from "next/image";

const guide_data = [
  {
    id: "01",
    icon: "/assets/icon/download.svg",
    title: "Download Easy Pay",
    description:
      "Get the Easy Pay app today from the App Store or Google Play hassle free.",
  },
  {
    id: "02",
    icon: "/assets/icon/bank-card.png",
    title: "Link your bank or card",
    description:
      "Easily connect your account in seconds with advanced security for peace of mind.",
  },
  {
    id: "03",
    icon: "/assets/icon/card-paying.png",
    title: "Start paying",
    description:
      "Easily split bills, send money to friends, and make smooth online payments instantly.",
  },
];

const GuideCards = () => {
  return (
    <div className="mt-14 bg-white rounded-2xl p-6 md:p-10 flex flex-col md:flex-row justify-between">
      {guide_data.map((item, index) => (
        <div
          key={item.id}
          className={`relative flex-1 px-5 md:px-8 py-8 md:py-10 ${
            index === 1 ? "md:border-x border-gray-200" : ""
          }`}
        >
          <span className="absolute text-6xl md:text-8xl font-extrabold text-gray-100 -top-3 md:-top-5 left-4 md:left-5 z-0 select-none">
            {item.id}
          </span>

          <div className="relative w-14 h-14 md:w-16 md:h-16 mb-6 z-10">
            <Image
              src={item.icon}
              alt={item.title}
              fill
              className="object-contain"
            />
          </div>

          <h3 className="text-lg md:text-xl font-semibold mb-2 relative z-10">
            {item.title}
          </h3>
          <p className="text-gray-600 text-sm md:text-base relative z-10 max-w-sm">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default GuideCards;

import Button from "@/components/shared/Button";
import { cn } from "@/lib/utils";
import Image from "next/image";

const pricing_data: Array<{
  label: string;
  description: string;
  price: number;
  features: Array<string>;
}> = [
  {
    label: "Free Plan",
    description: "Free for personal payments.",
    price: 0,
    features: [
      "Up to 100 transactions per month",
      "Basic proud protection",
      "Email support",
    ],
  },
  {
    label: "Advanced",
    description: "Minimal fees for advanced transactions",
    price: 19,
    features: [
      "Up to 1000 transactions per month",
      "Advanced proud protection",
      "Detailed transaction reports",
      "Priority email & chat support",
    ],
  },
  {
    label: "Business",
    description: "Premium business transactions",
    price: 29,
    features: [
      "Unlimited transactions per month",
      "Premium proud protection",
      "Detailed transaction reports",
      "Priority email & chat support",
    ],
  },
];

const Pricing = () => {
  return (
    <section className="px-5 py-20 container mx-auto">
      <h3 className="text-[#932EFA] text-center font-semibold">PRICING</h3>
      <h2 className="text-[40px] text-center font-bold max-w-2xl mx-auto mt-3">
        Simple transparent pricing, no hidden fees
      </h2>

      <div className="mt-12 grid gap-30 sm:grid-cols-2 lg:grid-cols-3">
        {pricing_data.map((plan, index) => (
          <div
            key={index}
            className={cn(
              "rounded-2xl shadow-md p-8 flex flex-col justify-between transition-shadow duration-300",
              plan.label === "Advanced"
                ? "bg-primary text-primary-foreground shadow-lg"
                : "bg-card text-foreground hover:shadow-xl"
            )}
          >
            <h3
              className={cn(
                "text-2xl font-bold mb-2",
                plan.label === "Advanced"
                  ? "text-primary-foreground"
                  : "text-foreground"
              )}
            >
              {plan.label}
            </h3>
            <p
              className={cn(
                "mb-6",
                plan.label === "Advanced"
                  ? "text-primary-foreground/80"
                  : "text-muted-foreground"
              )}
            >
              {plan.description}
            </p>

            <div className="flex items-end gap-1 mb-6">
              <span
                className={cn(
                  "text-6xl font-bold",
                  plan.label === "Advanced"
                    ? "text-primary-foreground"
                    : "text-foreground"
                )}
              >
                ${plan.price}
              </span>
              <span
                className={cn(
                  "text-sm",
                  plan.label === "Advanced"
                    ? "text-primary-foreground/80"
                    : "text-muted-foreground"
                )}
              >
                /month
              </span>
            </div>

            <div className="w-[80%] my-2 mx-auto h-[3px] bg-gray-700/20 rounded-[100%]"></div>

            <ul className="mb-6 space-y-5">
              {plan.features.map((feature, idx) => (
                <li
                  key={idx}
                  className={cn(
                    plan.label === "Advanced"
                      ? "text-sm flex items-center gap-2 text-primary-foreground"
                      : "",
                    "flex"
                  )}
                >
                  <Image
                    src={
                      plan.label === "Advanced"
                        ? "/assets/icon/check-mark-black.svg"
                        : "/assets/icon/check-mark-white.svg"
                    }
                    width={30}
                    height={30}
                    alt="check-mark"
                  />
                  <div>{feature}</div>
                </li>
              ))}
            </ul>

            <Button variant={plan.label === "Advanced" ? "fill" : "bordered"}>
              Choose Plan
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;

import { cn } from "@/lib/utils";
import Image from "next/image";

const PaymentReceived = ({ className }: { className?: string }) => {
  return (
    <div className={cn("w-50 bg-card shadow-sm rounded-md p-3", className)}>
      <div className="mb-1">
        <p className="text-sm font-semibold text-foreground leading-snug">
          Payment Received
        </p>
        <p className="text-md font-bold text-accent mt-0.5 leading-tight">
          +5,890.00
        </p>
      </div>
      <div className="flex items-center justify-between text-sm text-muted-foreground">
        <span>1st Jan, 2024</span>
        <span className="flex items-center gap-1 text-chart-2">
          3.09%
          <Image
            src="/assets/tendup.svg"
            alt="trend up"
            width={20}
            height={20}
          />
        </span>
      </div>
    </div>
  );
};

export default PaymentReceived;

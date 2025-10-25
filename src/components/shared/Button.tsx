import { cn } from "@/lib/utils";
import { FC, ReactNode, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant: "bordered" | "fill";
}

const Button: FC<ButtonProps> = ({
  children,
  className,
  variant,
  ...props
}) => {
  return (
    <button
      {...props}
      className={cn(
        "py-2 px-6 rounded-[100px] font-semibold",
        variant === "bordered" && "border-2 border-border/60 text-primary",
        variant === "fill" && "bg-accent text-primary-foreground",
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;

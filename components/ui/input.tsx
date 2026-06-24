import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.ComponentProps<"input"> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-11 w-full rounded-[var(--radius-input,12px)] border border-[var(--outline-variant,#c6c8bb)] bg-[var(--surface-container-low,#f8f3ea)] px-4 py-2.5 text-sm text-[var(--on-surface,#1c1c16)] outline-none transition-all placeholder:text-[var(--on-surface-variant,#45483f)]/40 focus:border-[var(--primary,#273316)] focus:ring-2 focus:ring-[var(--primary,#273316)]/20 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };

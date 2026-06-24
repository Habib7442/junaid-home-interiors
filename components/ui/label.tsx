import * as React from "react";
import { cn } from "@/lib/utils";

export interface LabelProps extends React.ComponentPropsWithoutRef<"label"> {}

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, ...props }, ref) => (
    <label
      ref={ref}
      className={cn(
        "text-xs font-bold uppercase tracking-wider text-secondary select-none",
        className
      )}
      {...props}
    />
  )
);
Label.displayName = "Label";

export { Label };

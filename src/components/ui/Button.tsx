import React from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "font-archivo font-bold inline-flex items-center justify-center rounded-full transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 transform active:scale-95 cursor-pointer",
  {
    variants: {
      variant: {
        primary: "bg-(--cleyfi-blue) text-(--cleyfi-white) hover:bg-[color:var(--cleyfi-blue-darker)] focus:ring-(--cleyfi-blue)",
        secondary: "bg-(--cleyfi-yellow) text-(--cleyfi-deepPurple) hover:bg-[color:var(--cleyfi-white)] focus:ring-(--cleyfi-yellow)",
        outline: "bg-transparent border border-(--cleyfi-blue) text-(--cleyfi-blue) hover:bg-(--cleyfi-blue) hover:text-(--cleyfi-white) focus:ring-(--cleyfi-blue)",
        ghost: "bg-transparent text-(--cleyfi-blue) hover:bg-(--cleyfi-blue)/10 focus:ring-(--cleyfi-blue)",
        white: "bg-(--cleyfi-white) text-(--cleyfi-deepPurple) hover:bg-gray-100 focus:ring-(--cleyfi-white)",
        dark: "bg-(--cleyfi-deepPurple) text-(--cleyfi-white) hover:bg-opacity-80 focus:ring-(--cleyfi-deepPurple)",
      },
      size: {
        sm: "text-sm px-4 py-1.5",
        md: "text-base px-5 py-2",
        lg: "text-lg px-8 py-3",
      },
      fullWidth: {
        true: "w-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      fullWidth: false,
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, fullWidth, children, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, fullWidth, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants }; 
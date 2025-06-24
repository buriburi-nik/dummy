import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: "default" | "subtle" | "strong";
  hover?: boolean;
  glow?: boolean;
  animated?: boolean;
}

const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  (
    {
      children,
      className,
      variant = "default",
      hover = true,
      glow = false,
      animated = true,
      ...props
    },
    ref,
  ) => {
    const variants = {
      default: "glass shadow-glass",
      subtle: "backdrop-blur-sm bg-white/5 border border-white/10 shadow-soft",
      strong:
        "backdrop-blur-xl bg-white/20 border border-white/30 shadow-glass",
    };

    const Component = animated ? motion.div : "div";
    const motionProps = animated
      ? {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5, ease: "easeOut" },
          whileHover: hover
            ? {
                scale: 1.02,
                y: -4,
                transition: { duration: 0.2 },
              }
            : undefined,
        }
      : {};

    return (
      <Component
        ref={ref}
        className={cn(
          "rounded-xl transition-all duration-300",
          variants[variant],
          hover && "hover:shadow-floating cursor-pointer",
          glow && "hover:shadow-neon",
          "dark:glass-dark dark:shadow-glass-dark",
          className,
        )}
        {...motionProps}
        {...props}
      >
        {children}
      </Component>
    );
  },
);

GlassCard.displayName = "GlassCard";

export { GlassCard };

import Link from "next/link";
import { clsx } from "clsx";
import type { ComponentProps } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

const variantClasses: Record<ButtonVariant, string> = {
  primary: "gradient-liquid-glass text-white",
  secondary:
    "bg-transparent text-foreground border border-border hover:border-violet hover:text-violet",
  ghost: "bg-transparent text-foreground-muted hover:text-foreground",
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium font-body transition-all duration-200 whitespace-nowrap";

type ButtonAsLink = ComponentProps<typeof Link> & {
  variant?: ButtonVariant;
};

export function ButtonLink({
  variant = "primary",
  className,
  ...props
}: ButtonAsLink) {
  return (
    <Link
      className={clsx(baseClasses, variantClasses[variant], className)}
      {...props}
    />
  );
}

type ButtonAsButton = ComponentProps<"button"> & {
  variant?: ButtonVariant;
};

export function Button({
  variant = "primary",
  className,
  ...props
}: ButtonAsButton) {
  return (
    <button
      className={clsx(baseClasses, variantClasses[variant], className)}
      {...props}
    />
  );
}

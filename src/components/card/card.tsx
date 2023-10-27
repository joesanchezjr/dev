import clsx from "clsx";
import React from "react";

export function CardSection({
  children,
  className,
  variant = "solid",
  as: Component = "section",
  noPadding,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  variant?: "solid" | "outline";
  as?: React.ElementType;
  noPadding?: boolean;
}) {
  const innerClasses = clsx(noPadding ? "max-width-no-padding" : "max-width", className);
  const outerClasses = clsx(
    "rounded-md shadow-sm p-4",
    variant === "solid"
      ? "bg-slate-100 dark:bg-slate-900"
      : "border border-slate-200 dark:border-slate-800"
  );

  return (
    <Component className={innerClasses} {...props}>
      <div className={outerClasses}>{children}</div>
    </Component>
  );
}

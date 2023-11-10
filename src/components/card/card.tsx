import clsx from "clsx";
import React from "react";

export function Card({
  children,
  className,
  variant = "solid",
  as: Component = "div",
  withPadding,
  title,
  titleElement: TitleElement = "h2",
  dotColor = "rose",
  dotHue = 600,
  rightHeaderElement: RightHeaderElement,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  variant?: "solid" | "outline";
  as?: React.ElementType;
  withPadding?: boolean;
  title?: string;
  titleElement?: React.ElementType;
  dotColor?: string;
  dotHue?: number;
  rightHeaderElement?: React.ElementType;
}) {
  const outerClasses = clsx(
    withPadding ? "max-width" : "max-width-no-padding",
    "w-full md:w-auto",
    className,
  );
  const innerClasses = clsx(
    "rounded-md p-4 shadow-sm",
    variant === "solid"
      ? "bg-slate-100 dark:bg-slate-900"
      : "border border-slate-200 dark:border-slate-800",
  );

  const dotColorClasses = clsx(
    dotColor === "blue" && "bg-blue-600/60 dark:bg-blue-600",
    dotColor === "green" && "bg-green-600/60 dark:bg-green-600",
    dotColor === "slate" && "bg-slate-600/60 dark:bg-slate-600",
    dotColor === "yellow" && "bg-yellow-600/60 dark:bg-yellow-600",
    dotColor === "rose" && "bg-rose-600/60 dark:bg-rose-600",
    dotColor === "purple" && "bg-purple-600/60 dark:bg-purple-600",
    dotColor === "yellow" &&
      dotHue === 400 &&
      "bg-yellow-400/60 dark:bg-yellow-400",
  );

  return (
    <Component className={outerClasses} {...props}>
      <div className={innerClasses}>
        <div
          className={
            RightHeaderElement
              ? "mb-4 flex items-center justify-between "
              : "mb-4"
          }
        >
          {title && (
            <TitleElement className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide">
              <span className={`h-2 w-2 rounded-full ${dotColorClasses}`} />
              {title}
            </TitleElement>
          )}
          {RightHeaderElement && <RightHeaderElement />}
        </div>

        {children}
      </div>
    </Component>
  );
}

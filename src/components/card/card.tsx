import clsx from "clsx";

export function CardSection({
  children,
  className,
  variant = "solid",
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  variant?: "solid" | "outline";
}) {
  const innerClasses = clsx("mx-auto max-w-screen-xl px-4", className);
  const outerClasses = clsx(
    "rounded-md p-4 shadow-sm",
    variant === "solid" ? "bg-slate-100" : "border border-slate-200"
  );
  return (
    <section className={innerClasses} {...props}>
      <div className={outerClasses}>{children}</div>
    </section>
  );
}

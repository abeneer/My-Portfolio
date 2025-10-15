const cn = (...parts: Array<string | number | false | null | undefined>) =>
  parts.filter(Boolean).join(" ");

export default function EduCard({
  className,
  children,
}: React.PropsWithChildren<{ className?: string }>) {
  return (
    <article
      className={cn(
        "relative overflow-hidden rounded-2xl border border-white/10",
        "bg-[rgba[16,18,21,0.80)] backdrop-blur-xl",
        "shadow-[0_10px_40px_-10px_rgba(0,0,0,0.6)]",
        className
      )}
    >
      {/* glow */}
      <div className="pointer-events-none absolute -top-20 -left-16 h-56 w-56 rounded-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.45), transparent_60% " />
      <div className="pointer-events-none absolute -bottom-16 -right-14 h-52 w-52 rounded-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.40),transparent_60%)]" />
      {/* inner ring */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl [box-shadow:inset_0_0_0_1px_rgba(255,255,255,.05)]" />
      {/* content layer */}
      <div className="relative z-10 p-5 sm:p-6">{children}</div> 
    </article>
  );
}

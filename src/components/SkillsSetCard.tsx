// src/components/SkillsCard.tsx
export default function SkillsCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={
        "relative overflow-hidden rounded-3xl p-6 sm:p-8 border border-white/10 " +
        "bg-gradient-to-br from-slate-900/70 via-slate-900/40 to-slate-900/70 " +
        "shadow-[0_10px_40px_-10px_rgba(0,0,0,0.6)] backdrop-blur-xl h-full " + // 👈 h-full here
        className
      }
    >
      {/* soft glow */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.5),transparent_60%)]" />
      <div className="pointer-events-none absolute -bottom-20 -right-16 h-64 w-64 rounded-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.45),transparent_60%)]" />

      {/* subtle vignette */}
      <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(70%_70%_at_50%_40%,black,transparent)]" />

      {/* optional grain */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] bg-[url('data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'120\\' height=\\'120\\' fill=\\'none\\'><filter id=\\'n\\'><feTurbulence type=\\'fractalNoise\\' baseFrequency=\\'0.8\\' numOctaves=\\'2\\'/></filter><rect width=\\'100%\\' height=\\'100%\\' filter=\\'url(%23n)\\' opacity=\\'0.9\\'/></svg>')]" />

      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}

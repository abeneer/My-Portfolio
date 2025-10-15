// src/components/ui/Pill.tsx
type PillProps = {
    children: React.ReactNode;
    color?:
      | "sky" | "slate" | "amber" | "emerald" | "violet" | "blue" | "cyan";
    icon?: React.ReactNode;
  };
  
  const colorMap: Record<NonNullable<PillProps["color"]>, string> = {
    sky:     "bg-sky-600/90 hover:bg-sky-500",
    slate:   "bg-slate-600/90 hover:bg-slate-500",
    amber:   "bg-amber-500/90 hover:bg-amber-400 text-black",
    emerald: "bg-emerald-600/90 hover:bg-emerald-500",
    violet:  "bg-violet-600/90 hover:bg-violet-500",
    blue:    "bg-blue-600/90 hover:bg-blue-500",
    cyan:    "bg-cyan-600/90 hover:bg-cyan-500",
  };
  
  export default function Pill({ children, color = "sky", icon }: PillProps) {
    return (
      <span
        className={[
          "inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm",
          "text-white shadow/50 shadow-black/20 transition-colors",
          colorMap[color],
        ].join(" ")}
      >
        {icon ? <span className="opacity-90">{icon}</span> : null}
        <span className="font-semibold tracking-wide">{children}</span>
      </span>
    );
  }
  
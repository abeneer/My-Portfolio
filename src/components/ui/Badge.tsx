type BadgeProps = {
    children: React.ReactNode;
    color?: "slate" | "blue" | "green" | "orange" | "violet" | "pink" | "yellow";
  };
  
  const COLORS: Record<NonNullable<BadgeProps["color"]>, string> = {
    slate:  "bg-white/6 text-white/90 border-white/10",
    blue:   "bg-blue-600/20 text-blue-300 border-blue-400/25",
    green:  "bg-green-600/20 text-green-300 border-green-400/25",
    orange: "bg-orange-600/20 text-orange-300 border-orange-400/25",
    violet: "bg-violet-600/20 text-violet-300 border-violet-400/25",
    pink:   "bg-pink-600/20 text-pink-300 border-pink-400/25",
    yellow: "bg-yellow-600/25 text-yellow-200 border-yellow-300/25",
  };
  
  export default function Badge({ children, color = "slate" }: BadgeProps) {
    return (
      <span className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-xs ${COLORS[color]}`}>
        {children}
      </span>
    );
  }
  
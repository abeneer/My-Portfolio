// src/components/SkillCard.tsx
import React from "react";
import SkillsCard from "./SkillsCard";

type Item = { label: string; color?: "blue" | "green" | "slate" | "orange" | "yellow" | "pink" | "violet" };
type Props = {
  title: string;
  icon?: React.ReactNode;
  items: Item[];
  className?: string;
};

// tiny color map for chips
const colorClass: Record<NonNullable<Item["color"]>, string> = {
  blue:   "bg-sky-500 text-white",
  green:  "bg-emerald-600 text-white",
  slate:  "bg-slate-600 text-white",
  orange: "bg-orange-500 text-white",
  yellow: "bg-amber-400 text-zinc-900",
  pink:   "bg-pink-500 text-white",
  violet: "bg-violet-500 text-white",
};

export default function SkillCard({ title, icon, items, className = "" }: Props) {
  return (
    <SkillsCard className={`h-full ${className}`}>
      {/* header */}
      <header className="mb-4 flex items-center gap-3">
        {icon && <span className="text-sky-400/90 text-2xl">{icon}</span>}
        <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white">
          {title}
        </h3>
      </header>

      {/* chips */}
      <ul className="flex flex-wrap gap-2">
        {items.map((it) => (
          <li key={it.label}>
            <span
              className={[
                "inline-flex items-center rounded-md px-3 py-1 text-sm font-medium",
                "border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,.06),0_6px_16px_rgba(0,0,0,.25)]",
                "backdrop-blur-sm whitespace-nowrap transition-transform hover:-translate-y-0.5",
                it.color ? colorClass[it.color] : "bg-white/10 text-white/90",
              ].join(" ")}
            >
              {it.label}
            </span>
          </li>
        ))}
      </ul>
    </SkillsCard>
  );
}

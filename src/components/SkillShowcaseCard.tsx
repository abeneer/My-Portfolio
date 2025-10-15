// src/components/SkillShowcaseCard.tsx
import Pill from "./ui/Pill";

type Item = { label: string; color?: React.ComponentProps<typeof Pill>["color"]; icon?: React.ReactNode };

type Props = {
  title: string;
  titleIcon?: React.ReactNode;
  items: Item[];
};

export default function SkillShowcaseCard({ title, titleIcon, items }: Props) {
  return (
    <section className="card-neo p-6 sm:p-7">
      {/* curved highlights + inner bezel */}
      <div className="overlay" aria-hidden />
      <div className="inner-ring" aria-hidden />

      {/* header */}
      <header className="mb-5 flex items-center gap-3">
        {titleIcon ? (
          <span className="text-sky-400/90 text-2xl">{titleIcon}</span>
        ) : null}
        <h3 className="text-white text-2xl font-extrabold tracking-tight">
          {title}
        </h3>
      </header>

      {/* chip grid */}
      <div className="flex flex-wrap gap-3">
        {items.map((it) => (
          <Pill key={it.label} color={it.color} icon={it.icon}>
            {it.label}
          </Pill>
        ))}
      </div>
    </section>
  );
}

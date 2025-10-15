// src/components/ui/SvgSkillChip.tsx
type Props = { label: string; src: string };

export default function SvgSkillChip({ label, src }: Props) {
  return (
    <div
      className="
    chip
    w-[6.5rem] h-[6.5rem]
    rounded-[1.25rem] border border-white/10
    bg-[rgba(190,195,205,.12)] backdrop-blur  /* ← soft light gray glass */
    shadow-[inset_0_0_0_1px_rgba(255,255,255,.06),0_10px_25px_rgba(2,8,23,.22)]
    flex flex-col items-center justify-center gap-3
    transition will-change-transform hover:scale-[1.02]
    hover:shadow-[0_12px_28px_rgba(56,89,200,.20)]
  "
    >
      <img
        src={src}
        alt={label}
        className="h-9 w-9 md:h-10 md:w-10 object-contain"
        loading="lazy"
        style={{ filter: "drop-shadow(0 0 4px rgba(0,0,0,.25))" }}
      />

      <span className="text-[11px] tracking-[.18em] text-white/85">
        {label.toUpperCase()}
      </span>
    </div>
  );
}

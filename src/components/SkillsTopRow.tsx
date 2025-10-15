import SvgSkillChip from "./ui/SvgSkillChip";

const SKILLS = [
  { label: "Tailwind CSS", file: "tailwind.svg" },
  { label: "Bootstrap",    file: "bootstrap.svg" },
  { label: "NumPy",        file: "numpy.svg" },
  { label: "Pandas",       file: "pandas.svg" },
  { label: "SQL",          file: "sql.svg" },
  { label: "React",        file: "react.svg" },
  { label: "JavaScript",   file: "javascript.svg" },
  { label: "TypeScript",   file: "typescript.svg" },
  { label: "Python",       file: "python.svg" },
  { label: "Node.js",      file: "node.svg" },
  { label: "Express",      file: "express.svg" },
  { label: "MongoDB",      file: "mongodb.svg" },
  { label: "PostgreSQL",   file: "postgresql.svg" },
];

const LOOP = [...SKILLS, ...SKILLS];

export default function SkillsTopRow() {
  return (
    <div className="w-full rounded-2xl border border-white/10 bg-black/60 p-4 backdrop-blur-md">
      <div className="marquee">
        <div
          className="marquee-track"
          style={{ ["--marquee-duration" as any]: "16s" }}
        >
          {LOOP.map((s, i) => (
            <div key={`${s.label}-${i}`} className="shrink-0">
              <SvgSkillChip label={s.label} src={`/skills/${s.file}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

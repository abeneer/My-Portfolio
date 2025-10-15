import {
  FaReact,
  FaDatabase,
  FaAward,
  FaChartBar,
  FaCode,
} from "react-icons/fa";
import { SiGit } from "react-icons/si";

import Aurora from "./Aurora";
import SkillsTopRow from "./SkillsTopRow";
import SkillCard from "./SkillCard";

type PillColor = "blue" | "slate" | "yellow" | "violet" | "green";
type SkillItem = { label: string; color: PillColor };
type SkillGroup = { title: string; icon: React.ReactNode; items: SkillItem[] };

const groups: readonly SkillGroup[] = [
  // 1) Languages first
  {
    title: "Programming Languages",
    icon: <FaCode />,
    items: [
      { label: "Python", color: "green" },
      { label: "Java", color: "slate" },
      { label: "TypeScript", color: "violet" },
      { label: "JavaScript", color: "yellow" },
      { label: "SQL", color: "blue" },
      { label: "Bash/Zsh", color: "slate" },
    ],
  },

  // 2) Web stack
  {
    title: "Web Development",
    icon: <FaReact />,
    items: [
      // Frontend core
      { label: "React", color: "blue" },
      { label: "Next.js", color: "slate" },
      { label: "TypeScript", color: "violet" },
      { label: "JavaScript", color: "yellow" },
      { label: "Vite", color: "violet" },
      { label: "Tailwind CSS", color: "blue" },
      { label: "React Router", color: "slate" },
      { label: "React Hook Form", color: "green" },

      // Backend & APIs
      { label: "Node.js", color: "green" },
      { label: "Express.js", color: "green" },
      { label: "Django + DRF", color: "slate" },
      { label: "FastAPI", color: "green" },
      { label: "GraphQL", color: "violet" },
      { label: "WebSockets (Socket.IO)", color: "yellow" },
      { label: "Web Scraping", color: "violet" },
    ],
  },

  // 3) AI/ML
  {
    title: "AI & Machine Learning",
    icon: <FaAward />,
    items: [
      { label: "TensorFlow", color: "yellow" },
      { label: "scikit-learn", color: "yellow" },
      { label: "OpenAI", color: "violet" },
      { label: "Stable Diffusion", color: "violet" },
      { label: "CodeBERT", color: "violet" },
      { label: "Hugging Face Transformers", color: "blue" },
      { label: "Diffusers", color: "blue" },
      { label: "LoRA Fine-Tuning", color: "green" },
    ],
  },

  // 4) Databases
  {
    title: "Databases",
    icon: <FaDatabase />,
    items: [
      { label: "PostgreSQL", color: "blue" },
      { label: "MongoDB", color: "green" },
      { label: "SQLite", color: "slate" },
  
    ],
  },

  // 5) Data Viz
  {
    title: "Data Visualization",
    icon: <FaChartBar />,
    items: [
      { label: "Power BI", color: "yellow" },
      { label: "Matplotlib", color: "blue" },
      { label: "Seaborn", color: "blue" },
      { label: "Tableau", color: "blue" },
    ],
  },

  // 6) Tools
  {
    title: "Version Control & Tools",
    icon: <SiGit />,
    items: [
      { label: "Git", color: "yellow" }, // was orange
      { label: "GitHub", color: "slate" },
      { label: "GitHub Actions", color: "slate" },
      { label: "VS Code", color: "blue" },
      { label: "Docker", color: "blue" },
      { label: "CI/CD", color: "violet" },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative container scroll-mb-[var(--dock-h)] py-20"
    >
      <Aurora className="absolute inset-0 -z-10" />

      <header className="mb-10 text-center">
        <div className="relative inline-block group">
          <h2 className="heading-neo btn-shine relative z-10">Skills</h2>
          <span
            aria-hidden
            className="heading-neo-overlay absolute inset-0
                       bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600
                       bg-clip-text text-transparent opacity-0 group-hover:opacity-50
                       transition-opacity duration-300 blur-sm"
          >
            Skills
          </span>
          <span aria-hidden className="dot-left" />
          <span aria-hidden className="dot-right" />
        </div>
        <div className="neon-underline mx-auto mt-3" />
        <p className="mt-4 text-xs md:text-sm tracking-[0.35em] text-white/65">
          TECHNICAL EXPERTISE
        </p>
      </header>

      <SkillsTopRow />

      {/* uniform grid: 1 / 2 / 3 columns */}
      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {groups.map((g) => (
          <SkillCard
            key={g.title}
            title={g.title}
            icon={g.icon}
            items={g.items}
          />
        ))}
      </div>
    </section>
  );
}

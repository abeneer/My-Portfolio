import { useState } from "react";
import { experience } from "../content/experience";

export default function Experience() {
  const [activeId, setActiveId] = useState<number>(experience[0].id);
  const activeJob = experience.find((job) => job.id === activeId)!;

  return (
    <section
      id="experience"
      className="relative container scroll-mb-[var(--dock-h)] py-20"
      aria-labelledby="experience-heading"
    >
      {/* ==== HEADING ==== */}
      <header className="mb-12 text-center">
        <div className="relative inline-block group">
          <h2
            id="experience-heading"
            className="heading-neo btn-shine relative z-10"
          >
            Experience
          </h2>
          <span
            aria-hidden
            className="heading-neo-overlay absolute inset-0
              bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600
              bg-clip-text text-transparent opacity-0 group-hover:opacity-50
              transition-opacity duration-300 blur-sm"
          >
            Experience
          </span>
          <span aria-hidden className="dot-left" />
          <span aria-hidden className="dot-right" />
        </div>
        <div className="neon-underline mx-auto mt-3" />
        <p className="mt-4 text-xs md:text-sm tracking-[0.35em] text-white/65">
          PROFESSIONAL EXPERIENCE
        </p>
      </header>

      {/* ==== LAYOUT ==== */}
      <div className="grid md:grid-cols-[1fr_2fr] gap-8">
        {/* ==== LEFT TAB LIST ==== */}
        <div className="space-y-4">
          {experience.map((job) => (
            <button
              key={job.id}
              onClick={() => setActiveId(job.id)}
              className={`w-full text-left px-6 py-4 rounded-2xl transition-all duration-300 
                ${
                  activeId === job.id
                    ? "bg-gradient-to-r from-indigo-700/60 to-purple-800/50 border border-white/20 shadow-[0_0_20px_rgba(99,102,241,0.5)] text-white"
                    : "bg-white/5 border border-white/10 hover:bg-white/10 text-white/70"
                }
              `}
            >
              <h3 className="font-semibold text-lg">{job.role}</h3>
              <p className="text-sm text-white/60">{job.company}</p>
            </button>
          ))}
        </div>

        {/* ==== RIGHT CONTENT ==== */}
        <div
          key={activeJob.id}
          className="relative p-8 rounded-3xl border border-white/10 
                     bg-gradient-to-br from-slate-900/70 via-slate-900/40 to-slate-900/70 
                     shadow-[0_10px_40px_-10px_rgba(0,0,0,0.6)] 
                     backdrop-blur-xl text-white animate-fadeIn"
        >
          <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-300">
            {activeJob.role}
          </h3>

          <p className="mt-1 text-lg text-blue-300 font-medium">
            {activeJob.company}
          </p>

          <p className="mt-1 text-sm text-white/60">{activeJob.period}</p>

          {/* Description List */}
          <div className="mt-6 space-y-3 text-white/85 leading-relaxed">
            {activeJob.description.map((line, i) => (
              <p
                key={i}
                className="before:content-['•'] before:mr-2 before:text-blue-400 block"
              >
                {line}
              </p>
            ))}
          </div>

          {/* Skills */}
          <div className="mt-6 flex flex-wrap gap-2">
            {activeJob.skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-sm text-white/85"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

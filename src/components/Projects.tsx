import { projects } from "../data/projects";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export default function Projects() {
  return (
    <section
      id="projects"
      className="container py-20 scroll-mb-[var(--dock-h)]"
      aria-labelledby="projects-heading"
    >
      {/* ==== HEADING ==== */}
      <header className="mb-12 text-center">
        <div className="relative inline-block group">
          <h2 id="projects-heading" className="heading-neo btn-shine relative z-10">
            Projects
          </h2>
          <span
            aria-hidden
            className="heading-neo-overlay absolute inset-0
                 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600
                 bg-clip-text text-transparent opacity-0 group-hover:opacity-50
                 transition-opacity duration-300 blur-sm"
          >
            Projects
          </span>
          <span aria-hidden className="dot-left" />
          <span aria-hidden className="dot-right" />
        </div>

        <div className="neon-underline mx-auto mt-3" />
        <p className="mt-4 text-xs md:text-sm tracking-[0.35em] text-white/65">
          FEATURED WORKS
        </p>
      </header>

      {/* ==== PROJECT GRID ==== */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <article
            key={p.slug || p.id}
            className="group relative rounded-2xl border border-white/10 bg-white/5
                       hover:bg-white/10 transition-all duration-300 shadow-md hover:shadow-blue-600/30
                       overflow-hidden backdrop-blur-sm"
          >
            {/* Thumbnail */}
            {p.thumb && (
              <div className="overflow-hidden">
                <img
                  src={p.thumb}
                  alt={`${p.title} thumbnail`}
                  className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            )}

            {/* Content */}
            <div className="p-6">
              <h3 className="text-lg font-semibold text-white">{p.title}</h3>
              <p className="mt-2 text-sm text-white/80 leading-relaxed">
                {p.summary || p.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags?.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-xs text-white/80"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex gap-3">
                {p.demo && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-green-500/40 bg-green-500/10
                               hover:bg-green-500/20 px-3 py-2 text-sm text-green-400 transition-all"
                  >
                    <FaExternalLinkAlt className="text-xs opacity-75" /> Live
                  </a>
                )}
                {p.repo && (
                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-blue-400/40 bg-blue-400/10
                               hover:bg-blue-400/20 px-3 py-2 text-sm text-blue-400 transition-all"
                  >
                    <FaGithub className="text-base opacity-75" /> Code
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* ==== 3D GLASS FLIP BUTTON ==== */}
      <div className="mt-16 text-center [perspective:1000px]">
        <a
          href="https://github.com/abeneer?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="
            relative inline-block w-[260px] h-[70px]
            [transform-style:preserve-3d] transition-transform duration-[1.5s] ease-[cubic-bezier(0.4,0.2,0.2,1)]
            hover:[transform:rotateY(180deg)]
          "
        >
          {/* Front side */}
          <div
            className="absolute inset-0 flex items-center justify-center gap-3 rounded-2xl 
                       border border-white/15 backdrop-blur-md bg-[rgba(255,255,255,0.08)]
                       shadow-[inset_0_0_12px_rgba(255,255,255,0.2),0_8px_25px_rgba(99,102,241,0.25)]
                       text-white text-lg font-bold
                       [backface-visibility:hidden]"
          >
            🚀 View More Projects
          </div>

          {/* Back side */}
          <div
            className="absolute inset-0 flex items-center justify-center rounded-2xl
                       bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-400
                       shadow-[0_0_25px_rgba(99,102,241,0.45)]
                       [transform:rotateY(180deg)] [backface-visibility:hidden]"
          >
            <FaGithub className="text-4xl text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.7)]" />
          </div>

          {/* Outer Glow */}
          <span
            aria-hidden
            className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 opacity-40 blur-md"
          ></span>
        </a>
      </div>
    </section>
  );
}

// src/components/Education.tsx
import { FaGraduationCap } from "react-icons/fa";
import EduCard from "./EduCard";
import { education } from "../content/education";

export default function Education() {
  return (
    <section
      id="education"
      className="relative container scroll-mb-[var(--dock-h)] py-20"
      aria-labelledby="education-heading"
    >
      {/* Heading */}
      <header className="mb-12 text-center">
        <div className="relative inline-block group">
          <h2
            id="education-heading"
            className="heading-neo btn-shine relative z-10"
          >
            Education
          </h2>
          <span
            aria-hidden
            className="heading-neo-overlay absolute inset-0
                       bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600
                       bg-clip-text text-transparent opacity-0 group-hover:opacity-50
                       transition-opacity duration-300 blur-sm"
          >
            Education
          </span>
          <span aria-hidden className="dot-left" />
          <span aria-hidden className="dot-right" />
        </div>
        <div className="neon-underline mx-auto mt-3" />
        <p className="mt-4 text-xs md:text-sm tracking-[0.35em] text-white/65">
          ACADEMIC JOURNEY
        </p>
      </header>

      {/* Timeline rail */}
      <div
        className="
        relative 
        before:content-[''] before:absolute before:top-0 before:bottom-0
            before:left-5 md:before:left-1/2 md:before:-translate-x-1/2 before:transform
 before:w-[7px] before:rounded-full
    before:bg-blue-600/90
    before:shadow-[0_0_18px_rgba(37,99,235,.45)]

        "
        aria-label="Education timeline"
      >
        {education.map((ed, idx) => (
          <TimelineItem key={`${ed.school}-${ed.title}`} index={idx} {...ed} />
        ))}
      </div>
    </section>
  );
}

type ItemProps = {
  index: number;
  school: string;
  title: string;
  period: string;
  location?: string;
  details?: string;
  logo?: string;
};

function TimelineItem({
  index,
  period,
  title,
  school,
  location,
  details,
  logo,
}: ItemProps) {
  const isLeft = index % 2 === 0;

  return (
    <div className="relative mb-12 md:mb-16">
      <div
        className="
          absolute left-5 md:left-1/2
          -translate-x-1/2 md:-translate-x-1/2
          top-2 z-10
          flex items-center justify-center
          h-10 w-10 rounded-full
          bg-[rgb(255,255,255)] border border-white/15 backdrop-blur
          shadow-[0_6px_18px_rgba(0,0,0,0.45)]
        "
        aria-hidden
      >
        <FaGraduationCap className="text-sky-400/90" />
        <span className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-white/15" />
      </div>

      {/* Period pill anchored to rail, offset to the card side */}
      <span
        className={[
          "absolute top-2 z-10",
          "left-[4.5rem]",
          "md:left-1/2",
          isLeft ? "md:translate-x-6" : "md:-translate-x-[calc(100%+1.5rem)]",
          "inline-flex items-center gap-2 rounded-full border border-white/10",
          "bg-blue-600/90 px-3 py-1 text-x font-medium text-white/85 tracking-wide",
          "backdrop-blur",
        ].join(" ")}
      >
        {/* tiny calendar glyph via CSS or just text is fine; keeping simple */}
        {period}
      </span>

      {/* Card column (alternating left/right on md+) */}
      <div
        className={[
          "md:w-[calc(50%-3rem)]",
          isLeft
            ? "md:pr-10 md:ml-0 md:mr-auto"
            : "md:pl-10 md:ml-auto md:mr-0",
          "pt-1",
        ].join(" ")}
      >
        <EduCard>
          {/* Degree (main heading) */}
          <h3
            className="text-2xl md:text-3xl font-extrabold tracking-tight bg-clip-text text-transparent
               bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-300 leading-tight"
          >
            {title}
          </h3>

          {/* School row: logo + name (+ location) */}
          <div className="mt-2 flex items-center gap-3">
            {logo ? (
              <img
                src={logo}
                alt={`${school} logo`}
                width={40}
                height={40}
                loading="lazy"
                className="h-15 w-15 rounded-md object-contain bg-white/5 p-1 border border-white/10"
              />
            ) : (
              <div
                className="h-9 w-8 rounded-md border border-white/10 bg-blue-200"
                aria-hidden
                title={school}
              />
            )}

            <div className="flex flex-wrap items-center gap-x-2  text-white/85">
              <span className="text-lg font-semibold text-blue-300">{school}</span>
              {location && (
                <>
                  <span aria-hidden className="opacity-40">
                    •
                  </span>
                  <span className="text-blue-300/79">{location}</span>
                </>
              )}
            </div>
          </div>

          {details && <p className="mt-3 text-sm text-blue-200/85">{details}</p>}
        </EduCard>
      </div>
    </div>
  );
}

import { projects } from "../data/projects";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

/* =========================
   SWIPER IMPORTS
========================= */
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
} from "swiper/modules";

/* =========================
   SWIPER CSS
========================= */
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Projects() {
  return (
    <section
      id="projects"
      className="container py-20 scroll-mb-[var(--dock-h)]"
      aria-labelledby="projects-heading"
    >
      {/* =========================
          SECTION HEADING
      ========================== */}
      <header className="mb-12 text-center">
        <div className="relative inline-block group">
          <h2
            id="projects-heading"
            className="heading-neo btn-shine relative z-10"
          >
            Projects
          </h2>

          {/* Glow overlay */}
          <span
            aria-hidden
            className="
              heading-neo-overlay absolute inset-0
              bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600
              bg-clip-text text-transparent opacity-0
              group-hover:opacity-50
              transition-opacity duration-300 blur-sm
            "
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

      {/* =========================
          SWIPER WRAPPER
      ========================== */}
      <div className="relative">
        {/* LEFT ARROW */}
        <button
          className="
            custom-prev
            absolute left-[-60px] top-1/2
            -translate-y-1/2
            z-20

            h-12 w-12
            rounded-full

            border border-blue-500/30
            bg-black/40
            backdrop-blur-md

            text-white text-xl

            hover:bg-blue-500/20
            transition
          "
        >
          ←
        </button>

        {/* RIGHT ARROW */}
        <button
          className="
            custom-next
            absolute right-[-60px] top-1/2
            -translate-y-1/2
            z-20

            h-12 w-12
            rounded-full

            border border-blue-500/30
            bg-black/40
            backdrop-blur-md

            text-white text-xl

            hover:bg-blue-500/20
            transition
          "
        >
          →
        </button>

        {/* =========================
            SWIPER CAROUSEL
        ========================== */}
        <Swiper
          modules={[
            Navigation,
            Pagination,
          ]}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },

            768: {
              slidesPerView: 2,
            },

            1024: {
              slidesPerView: 3,
            },
          }}
          className="pb-14"
        >
          {projects.map((p, index) => (
            <SwiperSlide
              key={p.slug || p.id}
              className="h-auto"
            >
              <motion.article
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                className="
                  group relative flex flex-col h-full
                  overflow-hidden rounded-2xl

                  border border-white/10
                  bg-white/5
                  backdrop-blur-sm

                  shadow-md
                  hover:shadow-blue-600/30

                  transition-all duration-500
                  hover:bg-white/10
                  hover:-translate-y-2
                  hover:scale-[1.02]
                "
              >
                {/* =========================
                    THUMBNAIL
                ========================== */}
                {p.thumb && (
                  <div className="overflow-hidden">
                    <img
                      src={p.thumb}
                      alt={`${p.title} thumbnail`}
                      className="
                        h-44 w-full object-cover
                        transition-transform duration-500
                        group-hover:scale-105
                      "
                      loading="lazy"
                    />
                  </div>
                )}

                {/* =========================
                    CONTENT
                ========================== */}
                <div className="p-6 flex flex-col flex-1">
                  {/* title */}
                  <h3 className="text-lg font-semibold text-white">
                    {p.title}
                  </h3>

                  {/* description */}
                  <p
                    className="
                      mt-2 text-sm leading-relaxed text-white/80
                      line-clamp-4 min-h-[96px]
                    "
                  >
                    {p.summary || p.description}
                  </p>

                  {/* =========================
                      TECH TAGS
                  ========================== */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags?.map((t) => (
                      <span
                        key={t}
                        className="
                          rounded-full
                          border border-white/10
                          bg-white/5
                          px-2 py-1
                          text-xs text-white/80
                        "
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* =========================
                      BUTTONS
                  ========================== */}
                  <div className="mt-auto pt-5 flex gap-3">
                    {/* live demo */}
                    {p.demo && (
                      <a
                        href={p.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          inline-flex items-center gap-2
                          rounded-lg

                          border border-green-500/40
                          bg-green-500/10
                          hover:bg-green-500/20

                          px-3 py-2

                          text-sm text-green-400

                          transition-all
                        "
                      >
                        <FaExternalLinkAlt className="text-xs opacity-75" />
                        Live
                      </a>
                    )}

                    {/* github repo */}
                    {p.repo && (
                      <a
                        href={p.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          inline-flex items-center gap-2
                          rounded-lg

                          border border-blue-400/40
                          bg-blue-400/10
                          hover:bg-blue-400/20

                          px-3 py-2

                          text-sm text-blue-400

                          transition-all
                        "
                      >
                        <FaGithub className="text-base opacity-75" />
                        Code
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* =========================
          VIEW MORE BUTTON
      ========================== */}
      <div className="mt-16 text-center [perspective:1000px]">
        <a
          href="https://github.com/abeneer?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="
            relative inline-block
            w-[260px] h-[70px]

            [transform-style:preserve-3d]

            transition-transform
            duration-[1.5s]

            ease-[cubic-bezier(0.4,0.2,0.2,1)]

            hover:[transform:rotateY(180deg)]
          "
        >
          {/* front */}
          <div
            className="
              absolute inset-0

              flex items-center justify-center gap-3

              rounded-2xl

              border border-white/15
              backdrop-blur-md

              bg-[rgba(255,255,255,0.08)]

              shadow-[inset_0_0_12px_rgba(255,255,255,0.2),0_8px_25px_rgba(99,102,241,0.25)]

              text-white text-lg font-bold

              [backface-visibility:hidden]
            "
          >
            🚀 View More Projects
          </div>

          {/* back */}
          <div
            className="
              absolute inset-0

              flex items-center justify-center

              rounded-2xl

              bg-gradient-to-r
              from-blue-600
              via-purple-600
              to-cyan-400

              shadow-[0_0_25px_rgba(99,102,241,0.45)]

              [transform:rotateY(180deg)]
              [backface-visibility:hidden]
            "
          >
            <FaGithub
              className="
                text-4xl text-white
                drop-shadow-[0_0_10px_rgba(255,255,255,0.7)]
              "
            />
          </div>

          {/* outer glow */}
          <span
            aria-hidden
            className="
              absolute inset-0 rounded-2xl

              bg-gradient-to-r
              from-blue-500
              via-purple-500
              to-cyan-400

              opacity-40 blur-md
            "
          />
        </a>
      </div>
    </section>
  );
}
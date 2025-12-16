import { motion, useReducedMotion } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiDownload,
} from "react-icons/fi";
import { profile } from "../content/profile";
import avatar from "../assets/Profile_pic.png";
import RoleTypewriter from "./RoleTypewriter";
import Aurora from "./Aurora";


export default function Hero() {
  const prefersReduced = useReducedMotion();

  return (
    <section id="home" className="container relative pt-28 pb-24">
     
      <Aurora />  

      {/* Extra decorative dots (optional) */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="dot"
          style={{
            width: 400,
            height: 400,
            right: "-18rem",
            top: "-8rem",
            background: "rgb(30 58 138 / 0.20)",
            border: "1px solid rgb(30 58 138 / 0.30)",
          }}
        />
        <div
          className="dot"
          style={{
            width: 85,
            height: 85,
            right: "36.6%",
            top: "30%",
            background: "rgb(59 130 246 / 0.18)", 
          }}
        />
        <div
          className="dot"
          style={{
            width: 86,
            height: 86,
            left: "83%",
            top: "66%",
            background: "rgb(59 130 246 / 0.18)", 
          }}
        />
        <div
          className="dot"
          style={{
            width: 400,
            height: 400,
            left: "-20rem",
            bottom: "-19rem",
            background: "rgb(30 58 138 / 0.20)",
            border: "1px solid rgb(30 58 138 / 0.30)",
          }}
        />
      </div>

      <div className="relative z-10 grid items-center gap-10 md:grid-cols-2">
        {/* LEFT: intro */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="mb-2 text-xl font-medium text-blue-500 sm:text-2xl md:text-3xl lg:text-4xl"
          >
            Hello, I’m
          </motion.p>

          <motion.h1
            id="home-heading"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="whitespace-nowrap text-[clamp(2.25rem,4.5vw,4rem)] font-extrabold leading-tight tracking-tight"
          >
            <span className="inline bg-gradient-to-r from-violet-500 to-indigo-500 bg-clip-text text-transparent">
              {profile.first}
            </span>
            <span className="ml-2 inline bg-gradient-to-r from-indigo-400 to-sky-400 bg-clip-text text-transparent">
              {profile.last}
            </span>
          </motion.h1>

          {/* roles (typewriter) */}
          <RoleTypewriter
            roles={profile.roles}
            className="relative z-10 mt-3 h-[1.75rem] text-lg font-semibold opacity-95 md:h-[2rem] md:text-xl"
          />

          {/* blurb */}
          <p className="mt-4 max-w-xl text-zinc-300">{profile.blurb}</p>

          {/* socials */}
          <div className="mt-6 flex items-center gap-4">
            <a
              href={profile.github}
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-[#24292e] text-white transition hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white/80 md:h-14 md:w-14"
            >
              <FiGithub className="text-xl md:text-2xl" />
            </a>

            <a
              href={profile.linkedin}
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0A66C2] text-white transition hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white/80 md:h-14 md:w-14"
            >
              <FiLinkedin className="text-xl md:text-2xl" />
            </a>

            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              title="Email"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-[#EA4335] text-white transition hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white/80 md:h-14 md:w-14"
            >
              <FiMail className="text-xl md:text-2xl" />
            </a>

            <a
              href={profile.resumeUrl}
              download
              aria-label="Download resume"
              title="Download résumé"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-[#22C55E] text-white transition hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white/80 md:h-14 md:w-14"
            >
              <FiDownload className="text-xl md:text-2xl" />
            </a>
          </div>
        </div>

        {/* RIGHT: avatar with pure blue ring */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={
            prefersReduced
              ? { opacity: 1, scale: 1 }
              : { opacity: 1, scale: 1, y: [0, -10, 0] }
          }
          transition={
            prefersReduced
              ? { duration: 0.45, delay: 0.1 }
              : { duration: 0.45, delay: 0.1, y: { duration: 4, repeat: Infinity, ease: "easeInOut" } }
          }
          className="relative mx-auto aspect-square w-[240px] md:w-[320px]"
          aria-labelledby="home-heading"
        >
          <div
            className="relative overflow-hidden rounded-full border-[6px]"
            style={{
              borderColor: "#3b82f6",                 
              boxShadow: "0 0 30px rgba(59,130,246,.35)", // soft blue glow
            }}
          >
            <img
              src={avatar}
              alt={`${profile.first} ${profile.last}`}
              className="block size-full rounded-full object-cover"
              draggable={false}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

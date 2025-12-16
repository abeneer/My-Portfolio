import { useState } from "react";
import {
  FiMail, FiSend, FiLinkedin, FiGithub, FiMapPin,
} from "react-icons/fi";
import { motion } from "framer-motion";

function ContactRow({
  icon, title, subtitle, href,
}: { icon: React.ReactNode; title: string; subtitle?: string; href?: string }) {
  const content = (
    <div className="flex items-center gap-4">
      <div className="grid place-items-center h-11 w-11 rounded-xl bg-white/5 ring-1 ring-white/10">
        {icon}
      </div>
      <div>
        <p className="font-semibold text-white/90">{title}</p>
        {subtitle && <p className="text-sm text-white/60">{subtitle}</p>}
      </div>
    </div>
  );
  return href ? (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className="block rounded-2xl border border-white/10 bg-white/5 p-4 hover:bg-white/10 transition"
    >
      {content}
    </a>
  ) : (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">{content}</div>
  );
}

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/mnnekbol", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else setStatus("error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="relative container py-20">
      {/* Heading */}
      <header className="mb-12 text-center">
        <div className="relative inline-block group">
          <h2 className="heading-neo btn-shine relative z-10">Get in touch</h2>
          <span
            aria-hidden
            className="heading-neo-overlay absolute inset-0
                       bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600
                       bg-clip-text text-transparent opacity-0 group-hover:opacity-50
                       transition-opacity duration-300 blur-sm"
          >
            Get in touch
          </span>
          <span aria-hidden className="dot-left" />
          <span aria-hidden className="dot-right" />
        </div>
        <div className="neon-underline mx-auto mt-3" />
        <p className="mt-4 text-xs md:text-sm tracking-[0.35em] text-white/65">LET’S CONNECT</p>
      </header>

      {/* two columns */}
      <div className="grid gap-8 lg:grid-cols-2">
        {/* left panel */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="rounded-[22px] border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6 md:p-8"
        >
          <h3 className="text-xl font-semibold text-white">Let’s Connect</h3>
          <p className="text-white/70 mt-1 mb-6">Feel free to reach out through any of these channels</p>

          <div className="space-y-4">
            <ContactRow
              icon={<FiMail className="text-blue-400" />}
              title="Email"
              subtitle="absaipogu@gmail.com"
              href="mailto:absaipogu@gmail.com"
            />
            <ContactRow
              icon={<FiLinkedin className="text-blue-400" />}
              title="LinkedIn"
              subtitle="Connect with me professionally"
              href="https://www.linkedin.com/in/abeneer-saipogu/"
            />
            <ContactRow
              icon={<FiGithub className="text-blue-400" />}
              title="GitHub"
              subtitle="Check out my code repositories"
              href="https://github.com/abeneer"
            />
            <ContactRow
              icon={<FiMapPin className="text-blue-400" />}
              title="Location"
              subtitle="United Kingdom, London"
            />
          </div>
        </motion.div>

        {/* right panel: form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, ease: "easeOut", delay: 0.05 }}
          className="rounded-[22px] border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6 md:p-8 space-y-5"
        >
          {/* honeypot */}
          <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

          <div>
            <label htmlFor="name" className="text-sm text-white/70">Name <span className="text-red-400">*</span></label>
            <input
              id="name" name="name" required autoComplete="name" placeholder="Your full name"
              className="mt-2 w-full rounded-xl bg-black/40 border border-white/10 p-3 text-white placeholder-white/40
                         focus:outline-none focus:ring-2 focus:ring-purple-500/60 focus:border-purple-500/40 transition"
            />
          </div>

          <div>
            <label htmlFor="email" className="text-sm text-white/70">Email <span className="text-red-400">*</span></label>
            <input
              id="email" type="email" name="email" required autoComplete="email" placeholder="your.email@example.com"
              className="mt-2 w-full rounded-xl bg-black/40 border border-white/10 p-3 text-white placeholder-white/40
                         focus:outline-none focus:ring-2 focus:ring-purple-500/60 focus:border-purple-500/40 transition"
            />
          </div>

          <div>
            <label htmlFor="message" className="text-sm text-white/70">Message <span className="text-red-400">*</span></label>
            <textarea
              id="message" name="message" required rows={5} placeholder="Tell me about your project or just say hello..."
              className="mt-2 w-full rounded-xl bg-black/40 border border-white/10 p-3 text-white placeholder-white/40
                         focus:outline-none focus:ring-2 focus:ring-purple-500/60 focus:border-purple-500/40 transition"
            />
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="group relative w-full rounded-2xl py-3.5 font-semibold
                       bg-gradient-to-r from-blue-500 to-purple-600
                       shadow-[0_10px_30px_rgba(79,70,229,.35)] ring-1 ring-white/10
                       disabled:opacity-60 disabled:cursor-not-allowed"
          >
            <span className="inline-flex items-center justify-center gap-2">
              <FiSend className="translate-y-[1px]" />
              {status === "loading" ? "Sending..." : "Send Message"}
            </span>
          </button>

          <p role="status" aria-live="polite" className="min-h-[1.25rem] text-sm">
            {status === "success" && <span className="text-green-400">Message sent successfully ✅</span>}
            {status === "error" && <span className="text-red-400">Something went wrong ❌</span>}
          </p>
        </motion.form>
      </div>
    </section>
  );
}

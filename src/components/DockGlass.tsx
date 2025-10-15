import React, { useEffect, useState } from "react";
import {
  FiHome, FiTool, FiBook, FiFolder, FiAward, FiStar,
  FiMail, FiDownload, FiSun, FiMaximize
} from "react-icons/fi";

// ✅ Fix: Explicitly import React and use React.ReactNode instead of JSX.Element
type DockItem = {
  href?: string;
  label: string;
  icon: React.ReactNode;
  download?: boolean;
  action?: "theme" | "fullscreen"; // only these two actions exist
};

/** Menu config */
const ITEMS: DockItem[] = [
  { href: "#home", label: "Home", icon: <FiHome /> },
  { href: "#skills", label: "Skills", icon: <FiTool /> },
  { href: "#education", label: "Education", icon: <FiBook /> },
  { href: "#projects", label: "Projects", icon: <FiFolder /> },
  { href: "#awards", label: "Awards", icon: <FiAward /> },
  { href: "#featured", label: "Featured", icon: <FiStar /> },
  { href: "#contact", label: "Contact", icon: <FiMail /> },
  { href: "/resume.pdf", label: "Download CV", icon: <FiDownload />, download: true },
  { label: "Theme", icon: <FiSun />, action: "theme" },
  { label: "Fullscreen", icon: <FiMaximize />, action: "fullscreen" },
];

/** Circle styles */
const itemClasses = (active: boolean) =>
  [
    "group relative flex h-11 w-11 md:h-12 md:w-12 items-center justify-center rounded-full",
    "border border-white/12 bg-[rgba(16,22,35,.55)] text-white/85",
    "transition duration-200 ease-out will-change-transform hover:-translate-y-0.5",
    "hover:ring hover:ring-[rgba(99,102,241,.45)] hover:bg-[rgba(40,48,75,.65)]",
    active
      ? "text-white ring-2 ring-[rgba(99,102,241,.65)] bg-gradient-to-b from-indigo-500/75 to-violet-500/75"
      : "",
    "after:pointer-events-none after:absolute after:inset-0 after:rounded-full after:transition",
    active
      ? "after:shadow-[0_0_26px_rgba(99,102,241,.45)]"
      : "after:shadow-[0_0_18px_rgba(99,102,241,.28)] hover:after:opacity-100 after:opacity-0",
    "before:absolute before:inset-[2px] before:rounded-full before:bg-black/10 before:opacity-0 group-hover:before:opacity-100 before:transition",
  ]
    .filter(Boolean)
    .join(" ");

export default function DockGlass() {
  const [active, setActive] = useState<string>("#home");

  // Scroll spy
  useEffect(() => {
    const ids = ITEMS.map(i => i.href)
      .filter((h): h is string => Boolean(h && h.startsWith("#")))
      .map(h => h.slice(1));

    const els = ids
      .map(id => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    const obs = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && setActive(`#${e.target.id}`)),
      { rootMargin: "-40% 0px -55% 0px", threshold: 0.01 }
    );

    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  // Actions
  const onAction = (key?: "theme" | "fullscreen") => {
    if (key === "theme") {
      const root = document.documentElement;
      const cur = root.getAttribute("data-theme") === "light" ? "dark" : "light";
      root.setAttribute("data-theme", cur);
      localStorage.setItem("theme", cur);
    }
    if (key === "fullscreen") {
      if (!document.fullscreenElement)
        document.documentElement.requestFullscreen().catch(() => {});
      else document.exitFullscreen().catch(() => {});
    }
  };

  return (
    <>
      <div aria-hidden style={{ height: "var(--dock-h, 7rem)" }} />

      <div className="fixed inset-x-0 bottom-6 z-[60] px-4">
        <nav aria-label="Dock" className="mx-auto w-full max-w-2xl">
          <div
            className="relative rounded-[2rem] border border-white/10 bg-[rgba(10,12,20,0.55)] backdrop-blur-md"
            style={{
              boxShadow:
                "inset 0 0 0 1px rgba(99,102,241,.15), 0 15px 45px rgba(2,8,23,.35), 0 0 40px rgba(56,89,200,.25)",
            }}
          >
            {/* glossy streak */}
            <div className="pointer-events-none absolute inset-0 rounded-[2rem] overflow-hidden">
              <div
                className="absolute -inset-16 opacity-[0.14]"
                style={{
                  background:
                    "radial-gradient(1200px 200px at 20% 0%, rgba(255,255,255,.6), transparent 60%), radial-gradient(1200px 200px at 80% 100%, rgba(255,255,255,.3), transparent 60%)",
                  filter: "blur(6px)",
                }}
              />
            </div>

            {/* icons */}
            <ul className="relative flex items-center justify-between gap-1 px-5 py-3">
              {ITEMS.map((it, idx) => {
                const isActive = active === it.href;
                return (
                  <li key={it.label} className="relative flex items-center">
                    {/* divider before last 2 */}
                    {idx === ITEMS.length - 2 && (
                      <span className="mx-2 hidden h-6 w-px bg-white/10 md:block" aria-hidden />
                    )}

                    {it.action ? (
                      <button
                        onClick={() => onAction(it.action)}
                        title={it.label}
                        className={itemClasses(isActive)}
                      >
                        <span
                          className={
                            (isActive ? "text-white " : "text-white/80 ") +
                            "text-xl md:text-2xl transition-colors group-hover:text-white"
                          }
                        >
                          {it.icon}
                        </span>
                        <span
                          className="pointer-events-none absolute bottom-full mb-2 left-1/2 -translate-x-1/2 rounded-md border border-white/10 bg-black/75 backdrop-blur px-2 py-1 text-[11px] leading-none text-white/90 opacity-0 translate-y-1 transition group-hover:opacity-100 group-hover:translate-y-0 whitespace-nowrap"
                          role="tooltip"
                        >
                          {it.label}
                        </span>
                      </button>
                    ) : (
                      <a
                        href={it.href}
                        download={it.download}
                        title={it.label}
                        className={itemClasses(isActive)}
                      >
                        <span
                          className={
                            (isActive ? "text-white " : "text-white/80 ") +
                            "text-xl md:text-2xl transition-colors group-hover:text-white"
                          }
                        >
                          {it.icon}
                        </span>
                        <span
                          className="pointer-events-none absolute bottom-full mb-2 left-1/2 -translate-x-1/2 rounded-md border border-white/10 bg-black/75 backdrop-blur px-2 py-1 text-[11px] leading-none text-white/90 opacity-0 translate-y-1 transition group-hover:opacity-100 group-hover:translate-y-0 whitespace-nowrap"
                          role="tooltip"
                        >
                          {it.label}
                        </span>
                      </a>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}

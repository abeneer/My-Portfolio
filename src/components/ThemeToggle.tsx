import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";


export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  // Resolve initial theme (localStorage -> system)
  useEffect(() => {
    const stored = localStorage.getItem("theme") as "light" | "dark" | null;
    if (stored) {
      setTheme(stored);
      document.documentElement.setAttribute("data-theme", stored);
      return;
    }
    const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
    const initial = prefersLight ? "light" : "dark";
    setTheme(initial);
    document.documentElement.setAttribute("data-theme", initial);
  }, []);

  const toggle = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  };

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="rounded-xl border border-white/15 px-3 py-2 transition hover:bg-white/5"
      title={theme === "light" ? "Switch to dark" : "Switch to light"}
    >
      {theme === "light" ? <FiMoon /> : <FiSun />}
    </button>
  );
}

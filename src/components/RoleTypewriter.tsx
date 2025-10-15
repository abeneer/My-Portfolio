import { useEffect, useState } from "react";

type Props = {
  roles: string[];
  className?: string;          // let you reuse your existing classes
  typingMsPerChar?: number;    // speed while typing
  eraseMsPerChar?: number;     // speed while erasing
  holdMs?: number;             // pause when fully typed
};

export default function RoleTypewriter({
  roles,
  className = "",
  typingMsPerChar = 55,
  eraseMsPerChar = 35,
  holdMs = 900,
}: Props) {
  // a11y: respect reduced-motion
  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

  const [i, setI] = useState(0);                   // which role
  const [text, setText] = useState("");            // visible substring
  const [phase, setPhase] = useState<"typing"|"holding"|"erasing">("typing");

  const full = roles[i] ?? "";

  useEffect(() => {
    if (prefersReduced) return; // no animation, we'll render static below

    let id: number | undefined;

    if (phase === "typing") {
      if (text.length < full.length) {
        id = window.setTimeout(
          () => setText(full.slice(0, text.length + 1)),
          typingMsPerChar
        );
      } else {
        id = window.setTimeout(() => setPhase("erasing"), holdMs);
      }
    } else if (phase === "erasing") {
      if (text.length > 0) {
        id = window.setTimeout(
          () => setText(full.slice(0, text.length - 1)),
          eraseMsPerChar
        );
      } else {
        setI((prev) => (prev + 1) % roles.length);
        setPhase("typing");
      }
    }

    return () => clearTimeout(id);
  }, [text, phase, full, roles.length, typingMsPerChar, eraseMsPerChar, holdMs, prefersReduced]);

  if (prefersReduced) {
    // show the first role without animation
    return <div className={className}>{roles[0] ?? ""}</div>;
  }

  return (
    <div className={className}>
      <span className="align-baseline">{text}</span>
      {/* blinking caret */}
      <span className="ml-[2px] inline-block h-[1em] w-[2px] bg-current animate-pulse align-baseline" />
    </div>
  );
}

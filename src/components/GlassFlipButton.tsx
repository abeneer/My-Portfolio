// src/components/GlassFlipButton.tsx
import { FiGithub } from "react-icons/fi"; // you can change icon if needed

export default function GlassFlipButton() {
  return (
    <div className="perspective w-52 h-16">
      <a
        href="https://github.com/abeneer" 
        target="_blank"
        rel="noopener noreferrer"
        className="relative block w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group hover:[transform:rotateY(180deg)]"
      >
        {/* Front side */}
        <div
          className="absolute inset-0 flex items-center justify-center 
          rounded-2xl border border-white/10 backdrop-blur-lg 
          bg-[rgba(255,255,255,0.05)] text-white font-semibold
          shadow-[0_4px_25px_rgba(0,0,0,0.3)] 
          [backface-visibility:hidden]"
        >
          View More Projects
        </div>

        {/* Back side */}
        <div
          className="absolute inset-0 flex items-center justify-center 
          rounded-2xl border border-white/10 backdrop-blur-lg 
          bg-gradient-to-r from-indigo-500/60 to-blue-500/60 text-white 
          text-2xl shadow-[0_4px_25px_rgba(99,102,241,0.4)] 
          [transform:rotateY(180deg)] [backface-visibility:hidden]"
        >
          <FiGithub className="text-3xl" />
        </div>
      </a>
    </div>
  );
}

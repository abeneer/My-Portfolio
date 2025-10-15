import { useCallback, useEffect, useRef } from "react";

export default function ParallaxScene() {
  const ref = useRef<HTMLDivElement>(null);

  const update = useCallback((x: number, y: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    // normalize to -1..1
    const nx = ((x - rect.left) / rect.width) * 2 - 1;
    const ny = ((y - rect.top) / rect.height) * 2 - 1;
    el.style.setProperty("--px", nx.toFixed(3));
    el.style.setProperty("--py", ny.toFixed(3));
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => update(e.clientX, e.clientY);
    const onTouch = (e: TouchEvent) => {
      const t = e.touches[0];
      if (t) update(t.clientX, t.clientY);
    };

    const rect = el.getBoundingClientRect();
    update(rect.left + rect.width / 2, rect.top + rect.height / 2);

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("touchmove", onTouch, { passive: true });

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("touchmove", onTouch);
    };
  }, [update]);

  return (
    <div ref={ref} className="scene absolute inset-0 -z-10">
      <div className="layer layer-3 bg-blobs" />
      <div className="layer layer-2 bg-dots" />
      <div className="layer layer-1 bg-auras" />
    </div>
  );
}

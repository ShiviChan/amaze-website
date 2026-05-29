"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, motion } from "framer-motion";

export default function AnimatedCounter({ to = 100, duration = 2, suffix = "", prefix = "", format = (v) => v.toLocaleString() }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(to * eased));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, to, duration]);

  return <motion.span ref={ref}>{prefix}{format(val)}{suffix}</motion.span>;
}

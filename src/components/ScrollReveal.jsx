import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollReveal({
  children,
  baseOpacity = 0,
  baseBlur = 10,
  baseY = 40,
  duration = 1.2,
  ease = "power3.out",
  className = "",
}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    gsap.fromTo(
      el,
      { opacity: baseOpacity, y: baseY, filter: `blur(${baseBlur}px)` },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration,
        ease,
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          end: "top 40%",
          scrub: false,
        },
      }
    );
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

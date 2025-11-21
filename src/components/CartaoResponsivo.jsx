import { useRef, useState, useEffect } from 'react';

const CartaoResponsivo = ({ children, className = '', spotlightColor = 'rgba(175, 199, 255, 0.35)' }) => {
  const divRef = useRef(null);
  const spotlightRef = useRef(null);

  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = e => {
    if (!divRef.current || isFocused) return;

    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(0.6);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(0.6);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  useEffect(() => {
    const card = divRef.current;
    const spotlight = spotlightRef.current;
    if (!card || !spotlight) return;

    const handleMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      spotlight.style.background = `radial-gradient(circle at ${x}px ${y}px, ${spotlightColor}, transparent 80%)`;
    };

    card.addEventListener("mousemove", handleMove);
    card.addEventListener("mouseleave", () => spotlight.style.opacity = 0);

    return () => card.removeEventListener("mousemove", handleMove);
  }, [spotlightColor]);

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`
        relative z-10 rounded-3xl 
        border border-neutral-800 
        bg-neutral-900 
        overflow-hidden p-8 
        transition-all duration-500
        hover:border-[#AFC7FF]
        hover:shadow-[0_0_15px_#AFC7FF55]
        cursor-pointer
        ${className}
      `}
    >
      <div
        ref={spotlightRef}
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 ease-in-out"
        style={{
          opacity
        }}
      />

      {children}
    </div>
  );
};

export default CartaoResponsivo;

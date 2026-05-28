"use client";

import {
  useEffect,
  useRef,
  useState,
  type ElementType,
  type ReactNode,
} from "react";

type RevealVariant = "fade-up" | "fade-in" | "zoom-in";

const variantHidden: Record<RevealVariant, string> = {
  "fade-up": "translate-y-7 opacity-0",
  "fade-in": "opacity-0",
  "zoom-in": "scale-[0.97] opacity-0",
};

const variantVisible: Record<RevealVariant, string> = {
  "fade-up": "translate-y-0 opacity-100",
  "fade-in": "opacity-100",
  "zoom-in": "scale-100 opacity-100",
};

type MobileRevealProps = {
  children: ReactNode;
  className?: string;
  delayMs?: number;
  variant?: RevealVariant;
  as?: ElementType;
};

export function MobileReveal({
  children,
  className = "",
  delayMs = 0,
  variant = "fade-up",
  as: Component = "div",
}: MobileRevealProps) {
  const [visible, setVisible] = useState(false);
  const elementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const node = elementRef.current;
    if (!node) return;

    const isDesktop = window.matchMedia("(min-width: 768px)").matches;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (isDesktop || prefersReducedMotion) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -6% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Component
      ref={elementRef}
      style={{ transitionDelay: `${delayMs}ms` }}
      className={`transform-gpu transition-all duration-700 ease-out will-change-transform motion-reduce:translate-y-0 motion-reduce:scale-100 motion-reduce:opacity-100 md:translate-y-0 md:scale-100 md:opacity-100 ${
        visible ? variantVisible[variant] : variantHidden[variant]
      } ${className}`}
    >
      {children}
    </Component>
  );
}

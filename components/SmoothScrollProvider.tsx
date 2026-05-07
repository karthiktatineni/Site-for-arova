"use client";

import { useEffect, useRef, ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScrollProvider({
  children,
}: {
  children: ReactNode;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initialize ScrollTrigger for scroll-driven animations
      ScrollTrigger.defaults({
        toggleActions: "play none none reverse",
        markers: false,
      });

      // Animate all elements with data-animate attribute
      const animateElements = document.querySelectorAll("[data-animate]");
      animateElements.forEach((el) => {
        const animation = (el as HTMLElement).dataset.animate;
        const delay = parseFloat((el as HTMLElement).dataset.delay || "0");

        gsap.set(el, {
          opacity: 0,
          y: animation === "fade-up" ? 40 : 0,
          x: animation === "slide-left" ? -60 : animation === "slide-right" ? 60 : 0,
          scale: animation === "scale" ? 0.9 : 1,
        });

        gsap.to(el, {
          opacity: 1,
          y: 0,
          x: 0,
          scale: 1,
          duration: 1,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            end: "bottom 15%",
          },
        });
      });

      // Parallax elements
      const parallaxElements = document.querySelectorAll("[data-parallax]");
      parallaxElements.forEach((el) => {
        const speed = parseFloat((el as HTMLElement).dataset.parallax || "0.2");
        gsap.to(el, {
          yPercent: speed * 100,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return <div ref={containerRef}>{children}</div>;
}

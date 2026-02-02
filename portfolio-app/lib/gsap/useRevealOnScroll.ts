"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

interface UseRevealOnScrollProps<T extends HTMLElement> {
  container: React.RefObject<T | null>;
  selector?: string;
  stagger?: number;
  start?: string;
  end?: string;
}

export function useRevealOnScroll<T extends HTMLElement>({
  container,
  selector = ".reveal",
  stagger = 0.05,
  start = "top 85%",
  end = "top 50%",
}: UseRevealOnScrollProps<T>) {
  useGSAP(
    () => {
      if (!container.current) return;

      gsap.fromTo(
        selector,
        { y: "100%", opacity: 0 },
        {
          y: "0%",
          opacity: 1,
          ease: "power4.out",
          stagger,
          scrollTrigger: {
            trigger: container.current,
            start,
            end,
            scrub: true,
          },
        },
      );
    },
    { scope: container },
  );
}


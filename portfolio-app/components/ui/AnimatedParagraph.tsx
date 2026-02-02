"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

interface AnimatedParagraphProps {
  text: string;
  className?: string;
}

export default function AnimatedParagraph({
  text,
  className = "",
}: AnimatedParagraphProps) {
  const container = useRef<HTMLParagraphElement | null>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".word",
        { y: "100%", opacity: 0 },
        {
          y: "0%",
          opacity: 1,
          ease: "power4.out",
          stagger: 0.03,
          scrollTrigger: {
            trigger: container.current,
            start: "top 85%",
            end: "top 50%",
            scrub: true,
          },
        },
      );
    },
    { scope: container },
  );

  return (
    <p
      ref={container}
      className={`
        text-lg text-foreground leading-relaxed
        ${className}
      `}
    >
      {text.split(" ").map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-1">
          <span className="word inline-block">{word}</span>
        </span>
      ))}
    </p>
  );
}

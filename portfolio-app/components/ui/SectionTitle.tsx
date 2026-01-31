"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

interface SectionTitleProps {
  text: string;
  highlight?: string;
  center?: boolean;
  className?: string;
  mb?: string;
}

export default function SectionTitle({
  text,
  highlight,
  center = false,
  className = "",
  mb = "16",
}: SectionTitleProps) {
  const container = useRef<HTMLHeadingElement | null>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".word",
        { y: "100%", opacity: 0 },
        {
          y: "0%",
          opacity: 1,
          ease: "power4.out",
          stagger: 0.08,
          scrollTrigger: {
            trigger: container.current,
            start: "top 80%",
            end: "top 40%",
            scrub: true,
          },
        },
      );
    },
    { scope: container },
  );

  return (
    <h2
      ref={container}
      className={`
        text-3xl md:text-[40px] font-semibold pt-25
         text-foreground text-shadow-md mb-${mb}
        ${center ? "text-center" : "text-left"}
        ${className}
      `}
    >
      {text.split(" ").map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-2">
          <span
            className={`word inline-block ${
              highlight?.includes(word) ? "text-action-primary" : ""
            }`}
          >
            {word}
          </span>
        </span>
      ))}
    </h2>
  );
}

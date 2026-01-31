"use client";
import ReviewCard from "@/components/ui/ReviewCard";
import SectionTitle from "@/components//ui/SectionTitle";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ReviewContent } from "./review.content";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const shuffle = (array: any[]) => [...array].sort(() => Math.random() - 0.5);

export default function Reviews() {
  const containerRef = useRef<HTMLDivElement>(null);

  const [columns] = useState(() => {

    return {
      col1: [
        ...shuffle(ReviewContent.reviews),
        ...shuffle(ReviewContent.reviews),
      ],
      col2: [
        ...shuffle(ReviewContent.reviews),
        ...shuffle(ReviewContent.reviews),
      ],
      col3: [
        ...shuffle(ReviewContent.reviews),
        ...shuffle(ReviewContent.reviews),
      ],
    };
  });

  useGSAP(
    () => {
      gsap.fromTo(
        ".col-side",
        { yPercent: -50 },
        {
          yPercent: 0,
          duration: 30,
          repeat: -1,
          ease: "none",
        },
      );

      gsap.fromTo(
        ".col-center",
        { yPercent: 0 },
        {
          yPercent: -50,
          duration: 30,
          repeat: -1,
          ease: "none",
        },
      );
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="relative flex flex-col isolate items-center justify-start overflow-hidden bg-background pt-8 pb-40 lg:pt-2"
    >
      <div className="relative z-10 container mx-auto px-6 flex flex-col items-center">
        <SectionTitle text="Avaliações de Pacientes" highlight="Pacientes" />

        {/* Reviews Grid */}
        <div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12 md:mt-20 w-full h-150 overflow-hidden"
          // Mask to fade out top and bottom
          style={{
            maskImage:
              "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
          }}
        >
          {/* Left Column */}
          <div className="col-side flex flex-col gap-6">
            {columns.col1.map((rev, index) => (
              <ReviewCard key={`left-${index}`} {...rev} />
            ))}
          </div>

          {/* Center Column */}
          <div className="col-center flex flex-col gap-6">
            {columns.col2.map((rev, index) => (
              <ReviewCard key={`center-${index}`} {...rev} />
            ))}
          </div>

          {/* Right Column */}
          <div className="col-side flex flex-col gap-6">
            {columns.col3.map((rev, index) => (
              <ReviewCard key={`right-${index}`} {...rev} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
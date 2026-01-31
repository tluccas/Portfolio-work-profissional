'use client';

import Blob from "@/components/ui/Blob";
import Card from "@/components/ui/Card";
import SectionTitle from "@/components/ui/SectionTitle";
import { Ear, ClipboardPenLine, Puzzle, ChartNoAxesCombined } from "lucide-react";
import { RoadmapContent as content } from "./roadmap.content";
import Line from "@/components/ui/Line";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export default function Roadmap() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      // Agora o seletor é específico: apenas elementos com a classe .line-to-animate
      const lines = containerRef.current?.querySelectorAll(".line-to-animate");

      if (lines && lines.length > 0) {
        // Definimos o estado inicial (escondido)
        gsap.set(lines, { strokeDasharray: 1500, strokeDashoffset: 1500 });

        // Animamos para o estado visível
        gsap.to(lines, {
          strokeDashoffset: 0,
          duration: 2,
          ease: "power2.inOut",
          stagger: 0.3,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 30%",
            end: "bottom 70%",
            scrub: true,
          },
        });
      }

      gsap.from(".roadmap-card", {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 20%",
          end: "bottom 10%",
          toggleActions: "play reverse play reverse",
        },
      });
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="relative flex flex-col isolate items-center justify-start overflow-hidden bg-background pt-8 pb-30 lg:pt-12"
    >
      {/* Background */}
      <Blob className="absolute top-[-10%] left-[-20%] w-125 h-125 opacity-40 rotate-12" />
      <Blob className="absolute bottom-[-10%] left-[80%] w-125 h-125 opacity-40 rotate-12" />
      <Line />
      {/* Container */}
      <div className="relative z-10 container mx-auto px-6 flex flex-col items-center">
        <SectionTitle
          text="Processo de Desenvolvimento"
          highlight="Desenvolvimento"
          center={true}
        />

        {/* Grid de Itens do Processo */}
        <div className="grid grid-cols-1 lg:flex gap-12 items-center mt-12 md:mt-20 w-full">
          <Card
            className="roadmap-card"
            Icon={Ear}
            title={content.items[0].title}
            description={content.items[0].description}
            number={content.items[0].number}
          />
          <Card
            className="roadmap-card"
            Icon={ClipboardPenLine}
            title={content.items[1].title}
            description={content.items[1].description}
            number={content.items[1].number}
          />
          <Card
            className="roadmap-card"
            Icon={Puzzle}
            title={content.items[2].title}
            description={content.items[2].description}
            number={content.items[2].number}
          />
          <Card
            className="roadmap-card"
            Icon={ChartNoAxesCombined}
            title={content.items[3].title}
            description={content.items[3].description}
            number={content.items[3].number}
          />
        </div>
      </div>
    </section>
  );
}

"use client";

import {
  countUp,
  fadeInFromLeft,
  fadeInFromRight,
  fadeInUp,
} from "@/lib/gsapPresets";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { gsap } from "gsap";
import { HeroContent as content } from "./hero.content";

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Seleciona todos os elementos de número para animação CountUp
      const numbers = statsRef.current?.querySelectorAll("p[data-value]");
      gsap.set(
        [
          titleRef.current,
          descriptionRef.current,
          statsRef.current,
          ctaRef.current,
          imageRef.current,
        ],
        { opacity: 0 },
      );

      const tl = gsap.timeline();

      tl.add(fadeInFromLeft(titleRef.current))
        .add(fadeInFromRight(imageRef.current), 0)
        .add(fadeInFromLeft(descriptionRef.current), "-=0.2")
        .add(fadeInUp(statsRef.current), "-=0.2")

        // ContUp
        .add(() => {
          numbers?.forEach((element) => {
            const end = parseInt(element.getAttribute("data-value") || "0");

            countUp(element as HTMLElement, end, {
              duration: 1.5,
              suffix: "+",
            });
          });
        }, "-=0.3")
        .add(fadeInUp(ctaRef.current, { duration: 0.3}), "-=0.1");
    },
    { scope: containerRef },
  );

  return (
    <section
      id="hero"
      className="relative flex items-center justify-center min-h-screen overflow-hidden bg-background py-16 mt-15 lg:py-0"
    >
      {/* Círculo de Fundo */}
      <div className="absolute inset-0 flex items-center justify-start">
        <div
          className="w-[80vw] h-[80vw] md:w-[60vw] md:h-[60vw] lg:w-[45vw] lg:h-[45vw] 
                        rounded-full bg-brand-body opacity-20 transform scale-150 
                        filter blur-3xl lg:blur-none lg:opacity-10 
                        top-[-95%] left-[-30%]
                        xl:w-[40vw] xl:h-[25vw] xl:translate-x-1/4 xl:translate-y-1/3 
                        relative z-0"
        >
          <div className="absolute inset-1/4 w-1/2 h-1/2 rounded-full bg-primary opacity-20 filter blur-2xl"></div>
        </div>
      </div>

      <div
        ref={containerRef}
        className="relative z-10 container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center"
      >
        {/* Esquerda */}
        <div className="text-foreground text-center lg:text-left animate-fade-in-left">
          <h1
            ref={titleRef}
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-medium leading-tight mb-4"
          >
            {content.title}
          </h1>
          <p
            ref={descriptionRef}
            className="text-lg lg:text-xl mb-8 max-w-xl mx-auto lg:mx-0"
          >
            {content.description}
          </p>

          {/* Estatísticas */}
          <div
            ref={statsRef}
            className="flex justify-center lg:justify-start gap-8 mb-10"
          >
            {content.stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p
                  className="text-4xl font-bold text-action-primary"
                  data-value={stat.value.replace("+", "")}
                >
                  0+
                </p>
                <p className="text-sm uppercase tracking-wider text-foreground/80">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Botão de Contato */}
          <Link href="#contact" className="inline-block">
            <button
              ref={ctaRef}
              className="bg-action-primary text-white font-bold py-3 px-8 rounded-full 
                               transition-all duration-300 ease-in-out 
                               hover:bg-action-secondary hover:scale-105 active:scale-95 shadow-lg"
            >
              Agende sua Consulta
            </button>
          </Link>
        </div>

        {/* Lado Direito: Imagem do Profissional */}
        <div
          ref={imageRef}
          className="flex justify-center lg:justify-end animate-fade-in-right"
        >
          <Image
            src={content.imageDesktopSrc}
            alt="/assets/hero-desk2.png"
            width={400}
            height={400}
            priority // Imagem LCP, deve carregar imediatamente
            // className="rounded-full w-64 h-64 md:w-80 md:h-80 lg:w-100 lg:h-100
            //            object-cover object-top border-4 border-action-primary shadow-2xl"
            className="object-cover
      mask-[linear-gradient(to_right,black_80%,transparent),linear-gradient(to_bottom,black_80%,transparent)]
      mask-intersect
      [--webkit-mask-composite:source-in]
          "
          />
        </div>
      </div>
    </section>
  );
}

"use client";

import { countUp } from "@/lib/gsapPresets";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { gsap } from "gsap";
import { HeroContent as content } from "./hero.content";

export default function Hero() {
  const titleRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (prefersReducedMotion) {
        gsap.set(
          [
            titleRef.current,
            descriptionRef.current,
            statsRef.current,
            ctaRef.current,
            imageRef.current,
          ],
          { opacity: 1 },
        );
        return;
      }

      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
      });
      // Initial States
      gsap.set(
        [
          titleRef.current,
          descriptionRef.current,
          statsRef.current,
          ctaRef.current,
        ],
        { opacity: 0, y: 30, filter: "blur(8px)" },
      );

      gsap.set(titleRef.current, { scale: 0.95 });

      // Image: Hidden, slight offset (subtle slide from right + blur)
      gsap.set(imageRef.current, { opacity: 0, x: 40, filter: "blur(10px)" });

      // Animation
      tl
        // 1. Title
        .to(titleRef.current, {
          duration: 1,
          y: 0,
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
        })
        // 2. Description
        .to(
          descriptionRef.current,
          {
            duration: 0.8,
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
          },
          "-=0.6",
        )
        // 3. Stats
        .to(
          statsRef.current,
          {
            duration: 0.8,
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            onStart: () => {
              // Trigger CountUp animation
              const numbers =
                statsRef.current?.querySelectorAll("p[data-value]");
              numbers?.forEach((element) => {
                const end = parseInt(element.getAttribute("data-value") || "0");
                countUp(element as HTMLElement, end, {
                  duration: 2,
                  suffix: "+",
                });
              });
            },
          },
          "-=0.6",
        )
        // 4. CTA Button
        .to(
          ctaRef.current,
          {
            duration: 0.6,
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
          },
          "-=0.6",
        )
        // 5. Image
        .to(
          imageRef.current,
          {
            duration: 1.2,
            x: 0,
            opacity: 1,
            filter: "blur(0px)",
            ease: "power2.out",
          },
          0,
        );
    },
    { scope: containerRef },
  );

  return (
    <section
      id="hero"
      className="relative flex items-center justify-center min-h-screen overflow-hidden bg-background py-16 mt-15 lg:py-0"
    >
      {/* Background Circle */}
      <div className="absolute inset-0 flex items-center justify-start">
        <div
          className="w-[80vw] h-[80vw] md:w-[60vw] md:h-[60vw] lg:w-[45vw] lg:h-[45vw] 
                        rounded-full bg-brand-body opacity-20 transform scale-150 
                        filter blur-3xl lg:blur-none lg:opacity-10 
                        top-[-98%] left-[-30%]
                        xl:w-[40vw] xl:h-[25vw] xl:translate-x-1/4 xl:translate-y-1/3 
                        relative z-0"
        >
          <div className="absolute inset-1/4 w-1/2 h-1/2 rounded-full bg-primary opacity-20 filter blur-2xl"></div>
        </div>
      </div>

      {/* Container */}
      <div
        ref={containerRef}
        className="relative z-10 container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center"
      >
        {/* Left: Texts and CTA Button */}
        <div className="text-foreground text-center lg:text-left animate-fade-in-left">
          {/* Enhanced Title Block */}
          <div
            ref={titleRef}
            className="mb-6 flex flex-col items-center lg:items-start"
          >
            {/* Badge */}
            <span className="inline-block py-1 px-3 rounded-full bg-action-primary/10 border border-action-primary/20 text-action-primary text-xs font-bold tracking-widest uppercase mb-1 shadow-sm">
              Especialista em Desenvolvimento 
            </span>

            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.15] tracking-tight">
              {/* Main Title Part */}
              <span className="block text-foreground drop-shadow-sm">
                {content.title}
              </span>

              {/* Highlight Part with Gradient and Decor */}
              <span className="relative inline-block mt-1 lg:mt-2">
                <span className="relative z-10 text-transparent bg-clip-text bg-linear-to-r from-action-primary via-action-primary to-action-secondary">
                  {content.titleHighlight}
                </span>

                {/* Decorative SVG Underline */}
                <svg
                  className="absolute w-[110%] h-[0.4em] -bottom-2 -left-[5%] z-0 text-action-secondary/30 pointer-events-none"
                  viewBox="0 0 100 20"
                  preserveAspectRatio="none"
                  fill="none"
                >
                  <path
                    d="M5 10c20 5 40 2 90 -5"
                    stroke="currentColor"
                    strokeWidth="8"
                    strokeLinecap="round"
                    className="opacity-60"
                  />
                </svg>
              </span>
            </h1>
          </div>

          {/* Description */}
          <p
            ref={descriptionRef}
            className="text-lg lg:text-xl mb-8 max-w-xl mx-auto lg:mx-0"
          >
            {content.description}
          </p>

          {/* Statistics */}
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

          {/* CTA Button */}
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

        {/* Right: Image */}
        <div
          ref={imageRef}
          className="relative flex justify-center lg:justify-end md:mt-2"
        >
          {/* Blob */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:left-auto lg:right-[-10%] lg:translate-x-0 w-[120%] h-[120%] -z-10 pointer-events-none ">
            <svg
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full text-primary filter drop-shadow-xl"
            >
              {/* Camada de sombra do blob */}
              <path
                fill="currentColor"
                className="text-blue-400"
                opacity="0.2"
                d="M49.7,-75.7C63.8,-68.4,74.2,-53.5,79.3,-37.6C84.4,-21.7,84.3,-4.8,78.1,8.5C71.9,21.8,59.7,31.4,49.6,43.1C39.6,54.7,31.8,68.2,20.8,71.9C9.9,75.5,-4.3,69.2,-16.9,63.1C-29.6,56.9,-40.6,50.9,-52.8,42.6C-65,34.3,-78.2,23.7,-80.5,11.2C-82.9,-1.3,-74.4,-15.7,-66.8,-29.7C-59.2,-43.7,-52.4,-57.3,-41.4,-66.1C-30.4,-74.9,-15.2,-78.8,1.3,-80.8C17.8,-82.9,35.7,-83.1,49.7,-75.7Z"
                transform="translate(104 104)" /* Deslocado levemente para baixo/direita */
              />

              {/* Blob Principal */}
              <path
                fill="currentColor"
                className="text-brand-body opacity-20"
                d="M49.7,-75.7C63.8,-68.4,74.2,-53.5,79.3,-37.6C84.4,-21.7,84.3,-4.8,78.1,8.5C71.9,21.8,59.7,31.4,49.6,43.1C39.6,54.7,31.8,68.2,20.8,71.9C9.9,75.5,-4.3,69.2,-16.9,63.1C-29.6,56.9,-40.6,50.9,-52.8,42.6C-65,34.3,-78.2,23.7,-80.5,11.2C-82.9,-1.3,-74.4,-15.7,-66.8,-29.7C-59.2,-43.7,-52.4,-57.3,-41.4,-66.1C-30.4,-74.9,-15.2,-78.8,1.3,-80.8C17.8,-82.9,35.7,-83.1,49.7,-75.7Z"
                transform="translate(100 100)"
              />
            </svg>
          </div>

          {/* Foto com mask */}
          <div className="relative z-10">
            <Image
              src={content.imageDesktopSrc}
              alt="Psicopedagoga Lourdes"
              width={450}
              height={450}
              priority
              className="object-cover"
              style={{
                maskImage:
                  "linear-gradient(to bottom, black 85%, transparent 100%)",
                WebkitMaskImage:
                  "linear-gradient(to bottom, black 85%, transparent 100%)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

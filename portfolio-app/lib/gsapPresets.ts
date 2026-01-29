import { gsap } from "gsap";

type FadeSlideProps = {
  x?: number;
  y?: number;
  duration?: number;
  delay?: number;
};

export const fadeInFromLeft = (
  target: gsap.TweenTarget,
  props?: FadeSlideProps,
) => {
  return gsap.fromTo(
    target,
    { opacity: 0, x: props?.x ?? -60 },
    {
      opacity: 1,
      x: 0,
      duration: props?.duration ?? 0.8,
      delay: props?.delay ?? 0,
      ease: "power3.out",
    },
  );
};

export const fadeInFromRight = (
  target: gsap.TweenTarget,
  props?: FadeSlideProps,
) => {
  return gsap.fromTo(
    target,
    { opacity: 0, x: props?.x ?? 60 },
    {
      opacity: 1,
      x: 0,
      duration: props?.duration ?? 0.8,
      delay: props?.delay ?? 0,
      ease: "power3.out",
    },
  );
};

export const fadeInUp = (target: gsap.TweenTarget, props?: FadeSlideProps) => {
  return gsap.fromTo(
    target,
    { opacity: 0, y: props?.y ?? 40 },
    {
      opacity: 1,
      y: 0,
      duration: props?.duration ?? 0.8,
      delay: props?.delay ?? 0,
      ease: "power3.out",
    },
  );
};

// CountUp
type CountUpOptions = {
  duration?: number;
  ease?: string;
  suffix?: string; // "+", "%", etc
};

export const countUp = (
  element: HTMLElement,
  endValue: number,
  options?: CountUpOptions,
) => {
  const obj = { value: 0 };

  gsap.to(obj, {
    value: endValue,
    duration: options?.duration ?? 1.5,
    ease: options?.ease ?? "power1.out",
    onUpdate: () => {
      element.innerText = Math.floor(obj.value) + (options?.suffix ?? "");
    },
  });
};

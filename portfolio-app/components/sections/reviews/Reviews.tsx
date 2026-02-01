"use client";
import SectionTitle from "@/components/ui/SectionTitle";
import dynamic from "next/dynamic";

const ReviewsGrid = dynamic(() => import("./ReviewsGrid"), {
  ssr: false,
  loading: () => <div className="mt-12 md:mt-20 w-full h-150" />,
});

export default function Reviews() {
  return (
    <section className="relative flex flex-col isolate items-center justify-start overflow-hidden bg-background pt-8 pb-40 lg:pt-2">
      <div className="relative z-10 container mx-auto px-6 flex flex-col items-center">
        <SectionTitle text="Avaliações de Pacientes" highlight="Pacientes" />
        <ReviewsGrid />
      </div>
    </section>
  );
}

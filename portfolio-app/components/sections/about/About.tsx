import SectionTitle from "@/components/ui/SectionTitle";
import Image from "next/image";
import { aboutContent as content } from "./about.content";
import AnimatedParagraph from "@/components/ui/AnimatedParagraph";
import Link from "next/link";
import { MoveRight } from "lucide-react";


export default function About() {
  return (
    <section
      id="sobre"
      className="relative flex flex-col isolate items-center justify-start overflow-hidden bg-brand-body/20 pt-8 pb-40 lg:pt-0 lg:pb-0 min-h-screen inset-shadow-sm mt-12"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full min-h-screen">
        {/* Left: Image Bg */}
        <div className="relative min-h-full">
          <Image
            src="/assets/about-bg.png"
            alt="Atendimento Imagem"
            fill
            className="object-cover scale-x-[-1] object-[0%_50%]"
            priority
          />
        </div>

        {/* Right: Text Content */}
        <div className="flex flex-col justify-center items-start gap-6 px-6 lg:px-16 py-12 lg:py-0 min-h-full">
          <div>
            <span className="inline-block py-1 px-3 rounded-full bg-brand-body/80 border border-action-primary/20 text-white text-xs font-bold tracking-widest uppercase mb-1 shadow-sm">
              Saúde Psicológica
            </span>
            <SectionTitle text="Conheça Meu Trabalho" highlight="Trabalho" className="pt-1!"/>
          </div>
          <AnimatedParagraph text={content.description} />
          <Link href="#location" className="flex gap-2 px-4 py-2 rounded-sm bg-action-primary text-white hover:scale-102 hover:shadow-lg hover:shadow-blue-500/50 transition " >Me encontre <MoveRight width={15}/></Link>
        </div>
      </div>
    </section>
  );
}

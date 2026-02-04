import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import Blob from "../../ui/Blob";
import ContactForm from "../../ui/ContactForm";
import SectionTitle from "../../ui/SectionTitle";
import { BadgeCheck } from "lucide-react";
import Link from "next/link";
import { contactContent as content } from "./contact.content";
import AnimatedParagraph from "@/components/ui/AnimatedParagraph";

export default function Contact() {
  const instagramUrl = process.env.NEXT_PUBLIC_INSTAGRAM_URL || "#";
  const whatsappUrl = process.env.NEXT_PUBLIC_WHATSAPP_URL || "#";
  return (
    <section
      id="contact"
      className="relative flex flex-col isolate items-center justify-start overflow-hidden bg-background pt-8 pb-20 lg:pt-20"
    >
      <Blob className="absolute bottom-[-40%] left-[70%] w-125 h-125 opacity-40 rotate-12" />
      <div className="relative z-10 container mx-auto px-6 flex flex-col">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full items-start">
          {/* Left: Form and contact details */}
          <div className="flex flex-col gap-6 order-2 md:order-1">
            <ContactForm />
          </div>
          {/* Right: Description and benefits */}
          <div className="flex flex-col justify-center text-center items-center gap-6 order-1 md:order-2">
            <SectionTitle
              text="Vamos Conversar"
              highlight="Conversar"
              center={true}
              className="pt-0!"
            />
            <AnimatedParagraph text=' Se você deseja agendar uma consulta ou tirar dúvidas sobre o
              atendimento psicológico, fique à vontade para entrar em contato. O
              primeiro passo nem sempre é fácil, mas buscar informação já é um
              começo importante. Estou à disposição para te orientar.' />

            <div className="w-full max-w-lg text-lg text-foreground/90 font-medium">
              <ul className="mt-4 space-y-4 text-right">
                <li className="flex items-center justify-end gap-2">
                  <span>Atendimento personalizado</span>
                  <BadgeCheck className="w-6 h-6 text-action-primary" />
                </li>

                <li className="flex items-center justify-end gap-2">
                  <span>Ambiente seguro e acolhedor</span>
                  <BadgeCheck className="w-6 h-6 text-action-primary" />
                </li>

                <li className="flex items-center justify-end gap-2">
                  <span>Profissional qualificado</span>
                  <BadgeCheck className="w-6 h-6 text-action-primary" />
                </li>

                <li className="hidden md:flex items-center justify-end gap-2">
                  <span>Acompanhamento focado no desenvolvimento</span>
                  <BadgeCheck className="w-6 h-6 text-action-primary" />
                </li>
              </ul>
            </div>
          </div>
          <div className="order-3 md:col-span-2 grid grid-cols-1 md:grid-cols-2 w-full gap-6 lg:gap-0">
            <Link
              href={whatsappUrl}
              className="w-full max-w-xl space-y-4 p-6 border border-action-primary/50 bg-brand-body/5 rounded-3xl shadow-lg mx-auto hover:shadow-lg hover:shadow-accent/70 transition"
            >
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-13 h-13 rounded-xl bg-linear-to-br from-action-primary to-blue-400 text-white shadow-md">
                  <BsWhatsapp size={22} />
                </div>

                <div className="flex-1">
                  <h3 className="font-bold">Whatsapp</h3>
                  <p>{content.phoneNumber}</p>
                </div>
              </div>
            </Link>

            <Link
              href={instagramUrl}
              className="w-full max-w-xl space-y-4 p-6 border border-action-primary/50 bg-brand-body/5 rounded-3xl shadow-lg mx-auto hover:shadow-lg hover:shadow-accent/70 transition"
            >
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-13 h-13 rounded-xl bg-linear-to-br from-action-primary to-blue-400 text-white shadow-md">
                  <BsInstagram size={22} />
                </div>

                <div className="flex-1">
                  <h3 className="font-bold">Instagram</h3>
                  <p>@{content.instagramUsername}</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

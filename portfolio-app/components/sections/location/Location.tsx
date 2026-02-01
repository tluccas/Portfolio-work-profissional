'use client';

import SectionTitle from "@/components/ui/SectionTitle";
import { Clock, MapPin } from "lucide-react";
import dynamic from "next/dynamic";
import { useMemo } from "react";
import { LocationContent } from "@/components/sections/location/location.content";

export default function Location() {

    const Map = useMemo(
      () =>
        dynamic(
          () => import("./MapView"),
          {
            loading: () => (
              <div className="w-full h-full bg-slate-100 animate-pulse" />
            ),
            ssr: false,
          },
        ),
      [],
    );
    
  return (
    <section id="location" className="relative flex flex-col isolate items-center justify-start overflow-hidden bg-background pt-8 pb-40 lg:pt-20">
      <div className="relative z-10 container mx-auto px-6 flex flex-col">
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full items-start">
          {/* Text Content */}
          <div className="flex flex-col gap-8">
            <SectionTitle
              text="Onde Me Encontrar"
              highlight="Encontrar"
              center={false}
              className="pt-0!"
            />
            
            {/* 2. Description Line */}
            <p className="text-lg text-gray-700">
              {LocationContent.description}
            </p>

            {/* 3. Adress Line */}
            <address className="not-italic flex font-medium items-start gap-3 text-lg text-foreground">
              <MapPin className="text-primary-color shrink-0 mt-1" size={24} />
              <span>
                Av. Teste, 1234, Sala 501
                <br />
                Bairro Teste, Cidade Teste - BR, xxxxx-000
              </span>
            </address>

            {/* 4. Working Hours */}
            <div className="flex flex-col gap-3">
              <p className="font-semibold">
                <Clock className="inline-block mr-2" />
                Horário de Atendimento:
              </p>
              <ul className="px-8 font-semibold list-disc list-inside text-action-secondary">
                <li>Segunda a Sexta: 9h às 19h</li>
                <li>Sábado: 9h às 13h</li>
              </ul>
            </div>
          </div>

          {/* Map */}
          <div className="w-full h-80 md:h-112.5 border-4 overflow-hidden rounded-lg border-double border-action-primary shadow-2xl shadow-accent" >
            <Map />
          </div>
        </div>
      </div>
    </section>
  );
}

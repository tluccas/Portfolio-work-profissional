import { HeroContent } from "@/components/sections/hero/hero.content";
import Link from "next/link";
import { SiInstagram } from "react-icons/si";
import { BsWhatsapp } from "react-icons/bs";

export default function Footer() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "#";
  const whatsappUrl = process.env.NEXT_PUBLIC_WHATSAPP_URL || "";
  const instagramUrl = process.env.NEXT_PUBLIC_INSTAGRAM_URL || "#";
  return (
    <footer className="bg-background border-y border-action-secondary/50">
      <div className="mx-auto w-full max-w-7xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0 items-center flex justify-center md:justify-start md:items-start">
            <a href={siteUrl} className="flex items-center">
              <span className="text-heading self-center text-2xl font-semibold whitespace-nowrap">
                {HeroContent.titleHighlight}
              </span>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-2">
            <div className="text-center">
              <h2 className="mb-6 text-sm font-semibold text-heading uppercase">
                Social
              </h2>
              <ul className="text-body font-medium">
                <li className="mb-4">
                  <a href={instagramUrl} className="hover:underline">
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href={whatsappUrl}
                    className="hover:underline"
                  >
                    WhatsApp
                  </a>
                </li>
              </ul>
            </div>
            <div className="text-center">
              <h2 className="mb-6 text-sm font-semibold text-heading uppercase">
                Developers
              </h2>
              <ul className="text-body font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Lucas Alves Dev
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-action-secondary/50 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-body sm:text-center">
            © {new Date().getFullYear()}{" "}
            <a href={siteUrl} className="hover:underline">
              {HeroContent.titleHighlight}
            </a>
            . Todos os direitos reservados.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <Link href={instagramUrl} className="mr-6 text-body hover:text-primary">
              <SiInstagram size={20} />
            </Link>
            <Link href={whatsappUrl} className="text-body hover:text-primary">
              <BsWhatsapp size={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

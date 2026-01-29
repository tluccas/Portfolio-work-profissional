"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { name: "Início", href: "#hero" },
    { name: "Sobre", href: "#sobre" },
    { name: "Avaliações", href: "#avaliacoes" },
    { name: "Localização", href: "#contato" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${isScrolled ? "shadow-lg border-b border-accent/20" : "border-b border-transparent"}
        backdrop-blur-md
        bg-background/80
        shadow-md
      `}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* ESQUERDA */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="
                text-foreground 
                font-heading 
                font-medium 
                text-base
                hover:text-action-secondary 
                transition-colors 
                duration-200
              "
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* DIREITA*/}
        <div className="flex items-center gap-4">
          {/* CTA BTN */}
          <Link
            href="#contato"
            className="
              hidden md:inline-flex items-center justify-center
              px-6 py-2.5
              text-brand-body
              font-sans
              font-semibold
              underline
              hover:text-action-secondary
              transition-all duration-300
              active:scale-95
            "
          >
            Entre em Contato
            <i className="bi bi-box-arrow-up-right text-brand-body mx-1"></i>
          </Link>

          {/* Botão Hambúrguer */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-md text-foreground hover:bg-accent/20 transition-colors"
            aria-label="Alternar menu"
            aria-expanded={isMobileMenuOpen}
          >
            {/* Ícone SVG simples para evitar dependências externas */}
            {!isMobileMenuOpen ? (
              <i className="bi bi-list"></i>
            ) : (
              <i className="bi bi-x-lg"></i>
            )}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`
          md:hidden 
          absolute top-full left-0 w-full 
          bg-background 
          border-b border-accent/20
          backdrop-blur-xl
          overflow-hidden transition-all duration-300 ease-in-out
          ${isMobileMenuOpen ? "max-h-screen opacity-100 py-6" : "max-h-0 opacity-0 py-0"}
        `}
      >
        <div className="flex flex-col items-center gap-6 px-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="
                text-foreground
                font-heading
                font-medium
                text-lg
                hover:text-primary
              "
            >
              {link.name}
            </Link>
          ))}

          <hr className="w-full border-accent/30" />

          <Link
            href="#contato"
            onClick={() => setIsMobileMenuOpen(false)}
            className="
              w-full text-center
              px-6 py-3 rounded-lg
              bg-action-primary
              text-brand-body
              font-sans
              font-bold
              active:bg-action-secondary
            "
          >
            Entrar em Contato
          </Link>
        </div>
      </div>
    </header>
  );
}

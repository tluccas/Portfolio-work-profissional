import type { Metadata } from "next";
import { Inter, Figtree } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { layoutContent as content } from "./layout.content";
import ToastProvider from "@/components/ui/ToastProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
})

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: content.title,
  description: content.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={` ${inter.variable} ${figtree.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <ToastProvider />
        <Footer />
      </body>
    </html>
  );
}

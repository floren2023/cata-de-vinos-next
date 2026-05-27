import type { Metadata } from "next";
import { Bitter,  Merienda } from "next/font/google";
import "./globals.css";
import { HeroNavigation } from "./components/hero";
import Footer from "./components/footer";

export const metadata: Metadata = {
  title: "Cata de Vinos",
  description: "Pagina de cata de vinos",
};

 const bitter = Bitter({variable: "--font-bitter-serif", subsets: ['latin'] })
const merienda = Merienda({variable: "--font-merienda-serif", subsets: ['latin'] }) 





export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bitter.variable} ${merienda.variable} h-full antialiased`}
    >
      <body className=" flex flex-col bg-white text-neutral-900 min-h-screen font-sans">
        
      {/* 1. BARRA DE NAVEGACIÓN */}
    <HeroNavigation/>

        {children}
         {/* 5. FOOTER */}
        <Footer/>

        </body>
    </html>
  );
}
